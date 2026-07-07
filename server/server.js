const express = require("express");
const cors = require("cors");
const fs = require("fs");
const crypto = require("crypto");

const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = "./db.json";

// =====================
// DB helpers
// =====================
const readDB = () => {
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
  } catch (err) {
    return { properties: [], users: [] };
  }
};

const writeDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// =====================
// Auth Middleware
// =====================
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  const db = readDB();

  const user = db.users.find((u) => u.token === token);

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = user;
  req.userId = user.id;

  next();
};

// =====================
// AUTH ROUTES
// =====================

// Register
app.post("/auth/register", (req, res) => {
  const db = readDB();
  const { email, password, fullName } = req.body;

  const exists = db.users.find((u) => u.email === email);
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const token = crypto.randomBytes(32).toString("hex");

  const newUser = {
    id: Date.now().toString(),
    fullName,
    email,
    password,
    favorites: [],
    token, // ⭐ مهم
    createdAt: new Date(),
  };

  db.users.push(newUser);
  writeDB(db);

  res.status(201).json({
    message: "User registered successfully",
    token,
  });
});

// Login
app.post("/auth/login", (req, res) => {
  const db = readDB();
  const { email, password } = req.body;

  const user = db.users.find(
    (u) => u.email === email && u.password === password,
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = crypto.randomBytes(32).toString("hex");

  // ⭐ آپدیت token داخل دیتابیس
  user.token = token;
  writeDB(db);

  res.json({
    message: "Login successful",
    token,
  });
});

// Logout
app.post("/auth/logout", (req, res) => {
  const token = req.headers.authorization;

  const db = readDB();

  const user = db.users.find((u) => u.token === token);

  if (!user) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // حذف token از user
  user.token = null;
  writeDB(db);

  res.json({ message: "Logged out successfully" });
});

// =====================
// Favorite ROUTES
// =====================

// Get favorites
app.get("/favorites", authMiddleware, (req, res) => {
  res.json(req.user.favorites || []);
});

// Toggle favorite
app.post("/favorites/:propertyId", authMiddleware, (req, res) => {
  const db = readDB();

  const user = db.users.find((u) => u.id === req.userId);

  const { propertyId } = req.params;

  if (!user.favorites) {
    user.favorites = [];
  }

  const id = String(propertyId);

  if (user.favorites.includes(id)) {
    user.favorites = user.favorites.filter((f) => f !== id);
  } else {
    user.favorites.push(id);
  }

  writeDB(db);

  res.json(user.favorites);
});
// =====================
// PROPERTIES ROUTES
// =====================

// GET all properties
app.get("/properties", (req, res) => {
  const db = readDB();
  res.json(db.properties || []);
});

// GET single property
app.get("/properties/:id", (req, res) => {
  const db = readDB();

  const property = db.properties.find((p) => p.id === req.params.id);

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  res.json(property);
});

// CREATE property (protected)
app.post("/properties", authMiddleware, (req, res) => {
  const db = readDB();

  const newProperty = {
    id: Date.now().toString(),
    title: req.body.title,
    price: req.body.price,
    city: req.body.city,
    rooms: req.body.rooms,
    area: req.body.area,
    type: req.body.type,
    images: req.body.images || [],
    description: req.body.description || "",
    ownerId: req.userId,
    createdAt: new Date(),
  };

  db.properties.push(newProperty);
  writeDB(db);

  res.status(201).json(newProperty);
});

// UPDATE property (protected)
app.put("/properties/:id", authMiddleware, (req, res) => {
  const db = readDB();

  const index = db.properties.findIndex((p) => p.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Property not found" });
  }

  // optional: check ownership
  if (db.properties[index].ownerId !== req.userId) {
    return res.status(403).json({ message: "Forbidden" });
  }

  db.properties[index] = {
    ...db.properties[index],
    ...req.body,
    updatedAt: new Date(),
  };

  writeDB(db);

  res.json(db.properties[index]);
});

// DELETE property (protected)
app.delete("/properties/:id", authMiddleware, (req, res) => {
  const db = readDB();

  const property = db.properties.find((p) => p.id === req.params.id);

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  if (property.ownerId !== req.userId) {
    return res.status(403).json({ message: "Forbidden" });
  }

  db.properties = db.properties.filter((p) => p.id !== req.params.id);

  writeDB(db);

  res.json({ message: "Deleted successfully" });
});

// =====================
// Fetch User
// =====================

app.get("/auth/me", authMiddleware, (req, res) => {
  res.json({
    id: req.user.id,
    fullName: req.user.fullName,
    email: req.user.email,
    favorites: req.user.favorites,
    createdAt: req.user.createdAt,
  });
});

// =====================
// Server start
// =====================

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
