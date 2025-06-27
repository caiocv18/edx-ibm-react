import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';
import './CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleIncrement = (id) => {
    dispatch(updateQuantity({ id, type: 'increment' }));
  };

  const handleDecrement = (id) => {
    dispatch(updateQuantity({ id, type: 'decrement' }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Seu carrinho está vazio</h2>
            <p>Adicione algumas plantas lindas ao seu carrinho!</p>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continuar Comprando
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Carrinho de Compras</h1>
        
        <div className="cart-summary">
          <div className="summary-item">
            <span className="summary-label">Total de Itens:</span>
            <span className="summary-value">{totalQuantity}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Custo Total:</span>
            <span className="summary-value total-price">R$ {totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">R$ {item.price.toFixed(2)} / unidade</p>
                <p className="item-category">{item.category}</p>
              </div>
              
              <div className="item-quantity">
                <button 
                  className="quantity-btn" 
                  onClick={() => handleDecrement(item.id)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
              </div>
              
              <div className="item-total">
                <span className="subtotal">R$ {item.totalPrice.toFixed(2)}</span>
              </div>
              
              <button 
                className="delete-btn"
                onClick={() => handleRemove(item.id)}
                title="Remover item"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continuar Comprando
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 