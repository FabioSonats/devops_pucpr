import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);

  const calculateIMC = () => {
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100; // Convertendo altura de cm para metros

    if (!isNaN(weightInKg) && !isNaN(heightInMeters) && heightInMeters > 0) {
      const imcValue = weightInKg / (heightInMeters * heightInMeters);
      setImc(imcValue.toFixed(2)); // Limitando o resultado a duas casas decimais
    } else {
      setImc(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Trabalho para a matéria DevOps
          <br />
          Pipeline de teste
        </p>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button onClick={calculateIMC}>Calcular IMC</button>
        {imc !== null && (
          <p>
            Seu IMC é: <strong>{imc}</strong>
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
