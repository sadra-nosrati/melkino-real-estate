import SideBarContent from "./SideBarContent";

function SideBar() {
  return (
    <aside className="hidden tablet-landscape:flex sticky top-0 right-0 h-screen w-72 flex-col border-r border-dark-primary/10 bg-dark-background px-6 py-8">
      <SideBarContent />
    </aside>
  );
}

export default SideBar;
