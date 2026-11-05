import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  // 1. State for dark mode (defaults to false / light mode)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // 2. State for cart items array
  const [cartItems, setCartItems] = useState([])

  // 3. State for category filter (defaults to "all")
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Handler functions
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  const handleAddToCart = (productName) => {
    setCartItems((prevItems) => [...prevItems, productName])
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div
      className={`${styles.app} ${
        isDarkMode ? styles.darkMode : styles.lightMode
      }`}
    >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark Mode Toggle Component */}
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

      {/* Category Filter Dropdown */}
      <label htmlFor="category-select">Filter by Category: </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product List Component with Filtering & Add to Cart callback */}
      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Component displaying added items */}
      <Cart items={cartItems} />
    </div>
  )
}

export default App