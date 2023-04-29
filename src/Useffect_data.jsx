import React, { useState, useEffect } from 'react';

function Useffect_data() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // fetch product data from API
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
    return () => {
      setSearchTerm("unmounted ");
      // cleanup code here
    };

  }, [searchTerm]);

  return (
    <div style={{width:"100%",display:"flex",flexWrap:"wrap"}}>
        {products.map(product => (
            <div style={{width:"33%"}}>
 <h5>{product.title}</h5>
 <img src={product.image} height="100px" width="100px"/>
 {/* <h6>{product.desc}</h6> */}
            </div>
        ))}
      <h2>{searchTerm}</h2>
      {console.log(products)}
    </div>
  );
}

export default Useffect_data;
