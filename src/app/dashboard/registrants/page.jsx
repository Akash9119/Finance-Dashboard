import RegistrantsList from '../../components/RegistrantsList';
import Sidebar from '../../components/Sidebar';

const RegistrantsPage = () => {

  return (
    <div className="flex bg-sky-50">
      <Sidebar />
      <div className="flex-1 p-8 pt-24">
        <div className="dashboard">
          <RegistrantsList />
        </div>
      </div>
    </div>
  );
};

export default RegistrantsPage;
