import React from 'react';

const Tab = ({ data }) => {
  return (
    <div className="tab-container">
      <h2>Tabela danych</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr
              key={index}
              className={person.Gender ? 'male-row' : 'female-row'}
            >
              <td>{index + 1}</td>
              <td>{person.Name}</td>
              <td>{person.Surname}</td>
              <td>{person.Age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tab;