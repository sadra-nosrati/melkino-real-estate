import { createRoot } from "react-dom/client";
import { MdOutlineLogout } from "react-icons/md";
import Swal from "sweetalert2";

export const showLogoutModal = (onConfirm) => {
  Swal.fire({
    html: `
      <div id="logout-icon"></div>

      <h2 class="text-white text-lg font-medium mt-4">
        خروج از حساب کاربری
      </h2>

      <p class="mt-2 text-sm text-white/40">
        آیا مطمئن هستید که می‌خواهید خارج شوید؟
      </p>
    `,
    showCancelButton: true,
    confirmButtonText: "بله، خروج",
    cancelButtonText: "خیر",
    background: "#1B1B1B",
    color: "#fff",
    customClass: {
      popup: "!rounded-2xl !p-6",
      confirmButton:
        "!bg-dark-primary !text-background-secondary !rounded-xl !px-6",
      cancelButton: "!bg-white/5 !text-white/60 !rounded-xl !px-6",
    },
    didOpen: () => {
      const iconContainer = document.getElementById("logout-icon");

      if (iconContainer) {
        const root = createRoot(iconContainer);

        root.render(
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-dark-primary/10 text-dark-primary">
            <MdOutlineLogout className="text-xl" />
          </div>,
        );
      }
    },
  }).then(async (result) => {
    if (!result.isConfirmed) return;

    try {
      await onConfirm();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "خروج از حساب با مشکل مواجه شد",
        background: "#1B1B1B",
        color: "#fff",
      });
    }
  });
};
