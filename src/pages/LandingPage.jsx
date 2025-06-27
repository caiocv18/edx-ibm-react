import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="company-name">PlantShop</h1>
          <p className="company-description">
            Bem-vindo ao PlantShop, sua loja especializada em plantas de interior! 
            Transformamos ambientes com a beleza natural das plantas, oferecendo 
            uma seleção cuidadosa de espécies que trazem vida, purificam o ar e 
            criam um ambiente mais acolhedor em sua casa ou escritório. 
            Descubra nossa coleção exclusiva de plantas de interior e encontre 
            a companheira verde perfeita para o seu espaço.
          </p>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 