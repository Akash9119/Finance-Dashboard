import Layout from '../components/Layout';
import Stats from '../components/Stats';
import RegistrantsList from '../components/RegistrantsList';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="dashboard">
            <div className="stats-section">
              <Stats />
            </div>
            <div className="registrants-list">
              <RegistrantsList />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
