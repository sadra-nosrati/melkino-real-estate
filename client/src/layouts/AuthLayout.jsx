import { Outlet, ScrollRestoration } from "react-router";

function AuthLayout() {
  return (
    <>
      <ScrollRestoration />

      <div className="flex min-h-screen items-center justify-center">
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
