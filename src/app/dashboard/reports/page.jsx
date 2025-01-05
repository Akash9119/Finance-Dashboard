import Sidebar from "@/app/components/Sidebar";
import Stats from "@/app/components/Stats";

const Dashboard = () => {
  const registrants = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Registrant ${i + 1}`,
    amount: (i + 1) * 100,
    startDate: `2023-01-${String(i + 1).padStart(2, '0')}`,
    endDate: `2024-01-${String(i + 1).padStart(2, '0')}`,
    scheme: `Scheme ${((i % 3) + 1)}`,
  }));

  return (
    <div className="flex bg-sky-50">
      <Sidebar />
      <div className="flex-1 p-8 pt-24">
        <Stats registrants={registrants} />
      </div>
    </div>
  );
};

export default Dashboard;
