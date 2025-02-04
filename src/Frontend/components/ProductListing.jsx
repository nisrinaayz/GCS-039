import React, { useState } from 'react';
import ContactUsForm from './ContactUsForm'; // Importing the ContactUsForm component

const ProductListing = () => {
  const [products] = useState([
    { id: 1, name: 'Ayam', description: 'Sambal Ijo', price: 10000, stock: 12, image: './assets/ayam.jpg' },
    { id: 2, name: 'Soto', description: 'Khas Betawi', price: 20000, stock: 100, image: './assets/soto.jpg' },
    { id: 3, name: 'Kopi', description: 'Americano', price: 10000, stock: 123, image: './assets/kopi.jpg' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchedProduct, setSearchedProduct] = useState(null);

  const handleSearch = () => {
    const foundProduct = products.find(product => product.name.toLowerCase() === searchTerm.toLowerCase());
    setSearchedProduct(foundProduct || { message: 'Menu yang dicari tidak ada' });
  };

  return (
    <div>
      <h2 style={{ color: 'black' }}>Kantin's Menu</h2>
      <input 
        type="text" 
        placeholder="Cari Menu..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      <div className="product-grid">
        {searchedProduct ? (
          searchedProduct.message ? (
            <p>{searchedProduct.message}</p>
          ) : (
            <div className="product-card" style={{ textAlign: 'center' }}>
              <img src={searchedProduct.image} alt={searchedProduct.name} />
              <h3>{searchedProduct.name}</h3>
              <p>Keterangan: {searchedProduct.description}</p>
              <p>Harga: {searchedProduct.price}</p>
              <p>Stok: {searchedProduct.stock}</p>
            </div>
          )
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card" style={{ textAlign: 'center' }}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <button onClick={() => setSearchedProduct(product)}>Detail</button>
            </div>
          ))
        )}
      </div>
      <ContactUsForm /> {/* Adding the ContactUsForm component here */}
    </div>
  );
};

export default ProductListing;
