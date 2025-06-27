import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import { plants, categories } from '../data/plants';
import './ProductsPage.css';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);
  const [addedItems, setAddedItems] = useState(new Set());

  const handleAddToCart = (plant: any) => {
    dispatch(addItem(plant));
    setAddedItems(prev => new Set(prev).add(plant.id));
  };

  const isInCart = (plantId: number) => {
    return cartItems.some((item: any) => item.id === plantId) || addedItems.has(plantId);
  };

  const groupedPlants = categories.map(category => ({
    ...category,
    plants: plants.filter(plant => plant.category === category.name)
  }));

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="page-title">Nossas Plantas</h1>
        <p className="page-subtitle">Descubra nossa seleção especial de plantas de interior</p>
        
        {groupedPlants.map(category => (
          <div key={category.name} className="category-section">
            <div className="category-header">
              <h2 className="category-title" style={{ color: category.color }}>
                {category.name}
              </h2>
              <div className="category-line" style={{ backgroundColor: category.color }}></div>
            </div>
            
            <div className="plants-grid">
              {category.plants.map(plant => (
                <div key={plant.id} className="plant-card">
                  <div className="plant-image-container">
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      className="plant-image"
                    />
                    <div className="plant-category-badge" style={{ backgroundColor: category.color }}>
                      {plant.category}
                    </div>
                  </div>
                  
                  <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <div className="plant-footer">
                      <span className="plant-price">R$ {plant.price.toFixed(2)}</span>
                      <button 
                        className={`add-to-cart-btn ${isInCart(plant.id) ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id) ? 'Adicionado ✓' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage; 