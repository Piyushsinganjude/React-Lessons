import React from 'react';
import Products from './Products';

function App() {
    return (
        <div>
            <h1> Hello World</h1>
            <Products
            name="Google home" 
            description="Your AI assistant"
            price={59.99} 
            />
            <Products
            name="amazon" 
            description="Your AI"
            price={39.99} 
            />
            <Products
            name="apple" 
            description="phone"
            price={119.99} 
            />
          

        </div>
    )
}

export default App;