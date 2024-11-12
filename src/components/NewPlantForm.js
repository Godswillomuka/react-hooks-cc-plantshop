import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [plantName, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);

  
  function handleSubmit(e) {
    e.preventDefault();
    setError(null); 

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      setError('Please enter a valid price.');
      return;
    }

    const plantObject = {
      name: plantName,
      image: image,
      price: parsedPrice,
    };


    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plantObject),
    })
    .then((r) => r.json())
    .then((data) => {
      console.log("New plant added:", data);

      onAddPlant(data);

      setName('');
      setImage('');
      setPrice('');
    })
    .catch((error) => {
      console.error('Error adding plant:', error);
      setError('Failed to add plant. Please try again.');
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required
          placeholder="Plant name"
          value={plantName}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          required
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          required
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
