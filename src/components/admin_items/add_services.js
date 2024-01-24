// ProductForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './productSlice';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    minCost: 0,
    userId: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
    // You can also dispatch an action to clear the form if needed
    setFormData({
      name: '',
      description: '',
      image: '',
      minCost: 0,
      userId: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
      </label>
      <label>
        Min Cost:
        <input type="number" name="minCost" value={formData.minCost} onChange={handleChange} />
      </label>
      <label>
        User ID:
        <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
