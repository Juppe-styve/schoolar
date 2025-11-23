import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import HeroBanner from "../components/dashboard/HeroBanner";
import DemandesDocumentsSection from "../components/dashboard/DemandesDocumentsSection";
import RecentRequestsTable from "../components/dashboard/RecentRequestsTable";
import ProfileSidebar from "../components/dashboard/ProfileSidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex space-x-6">
            <div className="flex-1">
              <HeroBanner />

              <DemandesDocumentsSection />

              <RecentRequestsTable />
            </div>

            <ProfileSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
