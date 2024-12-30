const RegistrantsList = () => {
    const registrants = [
      { id: 1, name: 'John Doe', amount: '$1000' },
      { id: 2, name: 'Jane Smith', amount: '$2000' },
    ];
  
    return (
      <div className="registrants-list">
        <h2>All Registrants</h2>
        <ul>
          {registrants.map((registrant) => (
            <li key={registrant.id}>
              {registrant.name} - {registrant.amount}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RegistrantsList;
  