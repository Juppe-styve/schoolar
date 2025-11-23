import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import HeroBanner from "../components/dashboard/HeroBanner";
import DemandesDocumentsSection from "../components/dashboard/DemandesDocumentsSection";
import RecentRequestsTable from "../components/dashboard/RecentRequestsTable";
import ProfileSidebar from "../components/dashboard/ProfileSidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* 1. Sidebar (Navigation Gauche) */}
      <Sidebar />

      {/* Contenu principal (Header + Main) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 2. Header (Barre supérieure) */}
        <Header />

        {/* Contenu Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex space-x-6">
            {/* Contenu Central */}
            <div className="flex-1">
              {/* 3. HeroBanner */}
              <HeroBanner />

              {/* 4. Demandes/Documents Section */}
              <DemandesDocumentsSection />

              {/* 5. Recent Requests Table */}
              <RecentRequestsTable />
            </div>

            {/* 6. Profile Sidebar */}
            <ProfileSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
