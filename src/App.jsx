import { useState } from 'react'
import './App.css'

function App() {
  const [cart, setCart] = useState(0);

  return (
    <>
      <div>
        <h1>Product Name</h1>
        <p>Price : $50</p>
        <button onClick={() => setCart(cart + 1)}>Add To Cart</button>
        <p>Items In Cart : {cart}</p>
      </div>
    </>
  )
}

export default App
