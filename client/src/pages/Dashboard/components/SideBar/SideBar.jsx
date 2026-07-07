import SideBarContent from "./SideBarContent";

function SideBar() {
  return (
    <aside className="hidden tablet-landscape:flex sticky top-0 right-0 h-screen w-72 flex-col border-r border-[#F2CA50]/10 bg-[#0E0E0E] px-6 py-8">
      <SideBarContent />
    </aside>
  );
}

export default SideBar;
