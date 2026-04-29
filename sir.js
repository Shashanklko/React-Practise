import React from 'react';
import Car from './example1.js';

function App() {
  return (
    <div>
      <Car 
        brand="Mercedes" 
        models={["GLC", "EQA", "Maybach"]} 
        colors={["White", "Black", "Silver"]}  
        year="2026" 
      />

      <Car 
        brand="BMW" 
        models={["X1", "X5", "i4", "i5", "i7"]} 
        colors={["Red", "Blue", "Yellow"]} 
        year="2025" 
      />

      <Car 
        brand="Hyundai" 
        models={["Santro", "Nios", "Aura", "Creta"]} 
        colors={["Red", "White", "Yellow", "Silver", "Black"]} 
        year="2026" 
      />
    </div>
  );
}

export default App;