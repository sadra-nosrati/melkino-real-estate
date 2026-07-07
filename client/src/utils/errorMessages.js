const errorMessages = {
  "Invalid credentials": "ایمیل یا رمز عبور اشتباه است.",
  "Email already exists": "این ایمیل قبلاً ثبت شده است.",
  "User not found": "کاربری با این ایمیل یافت نشد.",
  Unauthorized: "ابتدا وارد حساب کاربری شوید.",
  Forbidden: "شما مجوز انجام این عملیات را ندارید.",
  "Validation failed": "اطلاعات وارد شده معتبر نیست.",
  "Internal server error": "خطایی در سرور رخ داد.",
};

export const getErrorMessage = (error) => {
  const message = error?.response?.data?.message || error?.message || error;

  return errorMessages[message] || "خطایی رخ داد. لطفاً دوباره تلاش کنید.";
};
