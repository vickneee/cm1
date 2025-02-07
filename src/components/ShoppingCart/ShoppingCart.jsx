import React, { useState } from "react";
import "./ShoppingCart.css"; // Import the CSS file

function ShoppingCart() {
  // State for managing cart items
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Function to add an item to the cart
  const addItem = () => {
    if (itemName && quantity > 0) {
      setCart([...cart, { id: Date.now(), name: itemName, quantity: parseInt(quantity) }]);
      setItemName("");
      setQuantity(1);
    }
  };

  // Function to update item quantity
  const updateQuantity = (id, newQuantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  // Function to delete an item from the cart
  const deleteItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="shopping-cart-container">
      <div className="cart-header">
        <h2>🛒 Your Shopping Cart</h2>
        <div className="cart-badge">{cart.length}</div>
      </div>

      <div className="cart-form">
        <input
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button className="add-btn" onClick={addItem}>➕ Add Item</button>
      </div>

      {cart.length > 0 ? (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </div>
              <button className="delete-btn" onClick={() => deleteItem(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-cart">🛍️ Your cart is empty</p>
      )}
    </div>
  );
}

export default ShoppingCart;