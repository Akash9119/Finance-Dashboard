import { useRouter } from 'next/router';
import Sidebar from '../../../components/Sidebar';

const RegistrantData = () => {
  const router = useRouter();
  const { registrantdata } = router.query;

  const registrants = [
    { id: 1, name: 'Registrant 1', amount: 100, startDate: '2023-01-01', endDate: '2024-01-01', scheme: 'Scheme 1' },
    { id: 2, name: 'Registrant 2', amount: 200, startDate: '2023-02-01', endDate: '2024-02-01', scheme: 'Scheme 2' },
    { id: 3, name: 'Registrant 3', amount: 300, startDate: '2023-03-01', endDate: '2024-03-01', scheme: 'Scheme 3' },
    { id: 4, name: 'Registrant 4', amount: 400, startDate: '2023-04-01', endDate: '2024-04-01', scheme: 'Scheme 1' },
    { id: 5, name: 'Registrant 5', amount: 500, startDate: '2023-05-01', endDate: '2024-05-01', scheme: 'Scheme 2' },
    { id: 6, name: 'Registrant 6', amount: 600, startDate: '2023-06-01', endDate: '2024-06-01', scheme: 'Scheme 3' },
    { id: 7, name: 'Registrant 7', amount: 700, startDate: '2023-07-01', endDate: '2024-07-01', scheme: 'Scheme 1' },
    { id: 8, name: 'Registrant 8', amount: 800, startDate: '2023-08-01', endDate: '2024-08-01', scheme: 'Scheme 2' },
    { id: 9, name: 'Registrant 9', amount: 900, startDate: '2023-09-01', endDate: '2024-09-01', scheme: 'Scheme 3' },
    { id: 10, name: 'Registrant 10', amount: 1000, startDate: '2023-10-01', endDate: '2024-10-01', scheme: 'Scheme 1' },
    { id: 11, name: 'Registrant 11', amount: 1100, startDate: '2023-11-01', endDate: '2024-11-01', scheme: 'Scheme 2' },
    { id: 12, name: 'Registrant 12', amount: 1200, startDate: '2023-12-01', endDate: '2024-12-01', scheme: 'Scheme 3' },
    { id: 13, name: 'Registrant 13', amount: 1300, startDate: '2024-01-01', endDate: '2025-01-01', scheme: 'Scheme 1' },
    { id: 14, name: 'Registrant 14', amount: 1400, startDate: '2024-02-01', endDate: '2025-02-01', scheme: 'Scheme 2' },
    { id: 15, name: 'Registrant 15', amount: 1500, startDate: '2024-03-01', endDate: '2025-03-01', scheme: 'Scheme 3' },
    { id: 16, name: 'Registrant 16', amount: 1600, startDate: '2024-04-01', endDate: '2025-04-01', scheme: 'Scheme 1' },
    { id: 17, name: 'Registrant 17', amount: 1700, startDate: '2024-05-01', endDate: '2025-05-01', scheme: 'Scheme 2' },
    { id: 18, name: 'Registrant 18', amount: 1800, startDate: '2024-06-01', endDate: '2025-06-01', scheme: 'Scheme 3' },
    { id: 19, name: 'Registrant 19', amount: 1900, startDate: '2024-07-01', endDate: '2025-07-01', scheme: 'Scheme 1' },
    { id: 20, name: 'Registrant 20', amount: 2000, startDate: '2024-08-01', endDate: '2025-08-01', scheme: 'Scheme 2' },
    { id: 21, name: 'Registrant 21', amount: 2100, startDate: '2024-09-01', endDate: '2025-09-01', scheme: 'Scheme 3' },
    { id: 22, name: 'Registrant 22', amount: 2200, startDate: '2024-10-01', endDate: '2025-10-01', scheme: 'Scheme 1' },
    { id: 23, name: 'Registrant 23', amount: 2300, startDate: '2024-11-01', endDate: '2025-11-01', scheme: 'Scheme 2' },
    { id: 24, name: 'Registrant 24', amount: 2400, startDate: '2024-12-01', endDate: '2025-12-01', scheme: 'Scheme 3' },
    { id: 25, name: 'Registrant 25', amount: 2500, startDate: '2023-01-15', endDate: '2024-01-15', scheme: 'Scheme 1' },
    { id: 26, name: 'Registrant 26', amount: 2600, startDate: '2023-02-15', endDate: '2024-02-15', scheme: 'Scheme 2' },
    { id: 27, name: 'Registrant 27', amount: 2700, startDate: '2023-03-15', endDate: '2024-03-15', scheme: 'Scheme 3' },
    { id: 28, name: 'Registrant 28', amount: 2800, startDate: '2023-04-15', endDate: '2024-04-15', scheme: 'Scheme 1' },
    { id: 29, name: 'Registrant 29', amount: 2900, startDate: '2023-05-15', endDate: '2024-05-15', scheme: 'Scheme 2' },
    { id: 30, name: 'Registrant 30', amount: 3000, startDate: '2023-06-15', endDate: '2024-06-15', scheme: 'Scheme 3' },
  ];

  const registrant = registrants.find((r) => r.id === parseInt(registrantdata));

  if (!registrant) {
    return <div>Registrant not found</div>;
  }

  return (
    <div className="flex bg-sky-50">
      <Sidebar />
      <div className="flex-1 p-8 pt-24">
        <h1 className="text-3xl font-bold mb-4">Registrant Details</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p><strong>Name:</strong> {registrant.name}</p>
          <p><strong>Invested Amount:</strong> ${registrant.amount}</p>
          <p><strong>Start Date:</strong> {registrant.startDate}</p>
          <p><strong>End Date:</strong> {registrant.endDate}</p>
          <p><strong>Scheme Name:</strong> {registrant.scheme}</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrantData;
