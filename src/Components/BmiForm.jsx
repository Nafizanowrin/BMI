import React, { useState } from 'react';
import './BmiForm.css';

function BmiForm({ onCalculate }) {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onCalculate(weight, height);
    };
  
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Weight (kg):</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cm):</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <button type="submit">Calculate BMI</button>
        </form>
      </div>
    );
  }
  
  export default BmiForm;