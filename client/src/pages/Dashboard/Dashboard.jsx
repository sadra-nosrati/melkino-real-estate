import DashboardHeader from "./components/MainContent/DashboardHeader";
import DashboardStatCard from "./components/MainContent/DashboardStatCard";
import SavedHome from "./components/MainContent/SavedHome";
import Support from "./components/MainContent/Support";
import RecentViews from "./components/MainContent/RecentView/RecentViews";
import ChartPage from "./components/MainContent/Chart/ChartPage";
import Footer from "./components/DashboardFooter";

function Dashboard() {
  return (
    <section className="space-y-8 p-4 tablet-portrait:p-6 laptop:p-8 w-full mx-auto">
      <header>
        <DashboardHeader />
      </header>

      <section className="grid grid-cols-1 mobile-landscape:grid-cols-2 laptop:grid-cols-3 gap-5">
        <DashboardStatCard />
      </section>

      <section className="flex flex-col laptop:flex-row gap-6 laptop:gap-10 mt-10 laptop:mt-20">
        <SavedHome />
        <RecentViews />
      </section>

      <Support />

      <section className="p-4 tablet-portrait:p-6 laptop:p-10 bg-[#201F1F]/60 rounded-2xl mt-10 laptop:mt-30 overflow-x-auto">
        <ChartPage />
      </section>

      <Footer />
    </section>
  );
}

export default Dashboard;
