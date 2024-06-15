import React, { useState } from 'react';

const FarmerForm = () => {
  const [formData, setFormData] = useState({
    soilType: '',
    temperature: '',
    latitude: '',
    longitude: '',
    state: '',
    district: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(formData);
  };

  return (
    <div className='hmm'>
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="label">Soil Type:</label>
          <select name="soilType" onChange={handleChange} value={formData.soilType} className="select">
            <option value="">Select Soil Type</option>
            <option value="Alluvial">Alluvial</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Laterite">Laterite</option>
            <option value="Desert">Desert</option>
            <option value="Mountain">Mountain</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">Average Temperature (°C):</label>
          <input type="text" name="temperature" onChange={handleChange} value={formData.temperature} className="input" />
        </div>
        <div className="form-group">
          <label className="label">Geographical Location (State):</label>
          <input type="text" name="state" onChange={handleChange} value={formData.state} className="input" />
        </div>
        <div className="form-group">
          <label className="label">Geographical Location (District):</label>
          <input type="text" name="district" onChange={handleChange} value={formData.district} className="input" />
        </div>
       
        <div className="form-group">
          <label className="label">Additional Information:</label>
          <textarea name="additionalInfo" onChange={handleChange} value={formData.additionalInfo} className="textarea"></textarea>
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default FarmerForm;
