import { Link, useParams } from "react-router";

import TopBar from "./components/TopBar";
import Form from "./components/Form/Form";
import Footer from "./components/Footer";

function AuthPage() {
  const { mode } = useParams();

  const isLogin = mode === "login";

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-[#0F0F0F] px-4 tablet-portrait:px-6 w-full py-8 tablet-landscape:py-0">
      <Link
        to="/"
        className="mb-8 tablet-landscape:mb-10 text-center text-3xl mobile-landscape:text-4xl tablet-landscape:text-5xl font-black pl-3 tablet-landscape:pl-5 tracking-[0.25em] tablet-landscape:tracking-[0.4em] text-[#F2CA50] drop-shadow-[0_0_25px_rgba(242,202,80,0.35)] animate-glow transition-all duration-500 hover:scale-105 select-none"
      >
        MELKINO
      </Link>

      <section className="relative w-full max-w-md rounded-2xl tablet-landscape:rounded-3xl bg-[#131313]/40 p-5 mobile-landscape:p-6 tablet-landscape:p-8 backdrop-blur-xl border border-[#F2CA50]/15">
        <TopBar mode={isLogin ? "login" : "register"} />

        <Form mode={isLogin ? "login" : "register"} />

        <Footer />
      </section>
    </div>
  );
}

export default AuthPage;
