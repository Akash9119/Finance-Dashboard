"use client";


import RegistrantsList from '../components/RegistrantsList';
import Sidebar from '../components/Sidebar';
import Stats from '../components/Stats';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();
  const registrants = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Registrant ${i + 1}`,
    amount: (i + 1) * 100,
    startDate: `2023-01-${String(i + 1).padStart(2, '0')}`,
    endDate: `2024-01-${String(i + 1).padStart(2, '0')}`,
    scheme: `Scheme ${((i % 3) + 1)}`,
  }));

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="flex bg-sky-50">
      <Sidebar />
      <div className="flex-1 p-8 pt-24">
        <button onClick={handleLogout} className="logout-button">Logout</button>
        <Stats registrants={registrants} />
        <div className="dashboard">
          <RegistrantsList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
