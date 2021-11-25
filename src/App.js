import React from 'react';
import NameCard from './Component/NameCard';
import './App.css';

function App() {
  return (
    <div className="background">
     

        <NameCard
            name="SYAVIRA CAHYANINGSIH"
            position="FullStack Developer"
            email="viracahya91@gmail.com"
            phone="082298080366"
            home="Jl. Kelapa 3 Bekasi"
            website="www.prosigma.com"
        
        ></NameCard>
    </div>
  );
}

export default App;
