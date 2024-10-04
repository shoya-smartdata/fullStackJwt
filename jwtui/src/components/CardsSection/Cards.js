import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cards() {
  const [productsdata, setProductsdata] = useState([]);

  // Function to fetch product data
  const getproductdata = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products/getAllproducts');
      setProductsdata(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getproductdata(); // Automatically fetch data when component mounts
  }, []);

  return (
    <>
    <section>
      <h2 className='  text-center my-5 font-bold'>
        CATEOGARY SPECIAL!
      </h2>
    <div className="container mt-5">
        <div className="row card-group my-2">
          {productsdata.map((items, index) => (
            <div key={index} className="card mx-2 shadow " style={{ width: '18rem' }}>
              <img src={items.imageUrl} className="card-img-top " alt={items.name} />
              <div className="card-body">
                <h5 className="card-title">{items.name}</h5>
                <p className="card-text">{items.description}</p>
                <p className="card-text"><strong>Price:</strong> ${items.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     
    </>
  );
}

export default Cards;
