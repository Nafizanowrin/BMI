import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import BmiForm from './Components/BmiForm'

function App() {
  const [bmi, setBMI] = useState(null);

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);
  };

  return (
    <div>
      <Header />
      {!bmi ? (
        <BmiForm onCalculate={calculateBMI} />
      ) : (
        <div>
          <h2>Your BMI is: {bmi}</h2>
          <p>&hearts;&hearts;Thank you&hearts; &hearts;</p>
        </div>
      )}
    </div>
  );
}

export default App;