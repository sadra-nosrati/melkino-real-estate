import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <footer
      id="next-section"
      className="bg-[#0E0E0E] border-t border-white/5 py-12 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col tablet-landscape:flex-row items-center justify-between gap-8 tablet-landscape:gap-0 px-6">
        <FooterBrand />
        <FooterNav />
        <FooterSocial />
      </div>
    </footer>
  );
}

export default Footer;
