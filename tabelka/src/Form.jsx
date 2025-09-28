import React, { useState } from 'react';

const Form = ({ onAddPerson }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Surname: '',
    Age: '',
    Gender: true
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value === 'true' : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPerson = {
      ...formData,
      Age: parseInt(formData.Age)
    };
    
    setSubmittedData(newPerson);
    onAddPerson(newPerson);
    
    // Reset form
    setFormData({
      Name: '',
      Surname: '',
      Age: '',
      Gender: true
    });
  };

  return (
    <div className="form-container">
      <h2>Formularz dodawania osoby</h2>
      <form onSubmit={handleSubmit} className="person-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="Surname"
            value={formData.Surname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
            min="18"
            max="100"
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="Gender"
                value="true"
                checked={formData.Gender === true}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="Gender"
                value="false"
                checked={formData.Gender === false}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Dodaj osobę
        </button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Ostatnio dodana osoba:</h3>
          <p><strong>Name:</strong> {submittedData.Name}</p>
          <p><strong>Surname:</strong> {submittedData.Surname}</p>
          <p><strong>Age:</strong> {submittedData.Age}</p>
          <p><strong>Gender:</strong> {submittedData.Gender ? 'Male' : 'Female'}</p>
        </div>
      )}
    </div>
  );
};

export default Form;