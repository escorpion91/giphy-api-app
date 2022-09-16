import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Cowboy Bebop']);

  return (
    <div>
      <h3>search for any gif :) (not that one)</h3>
      <AddCategory setCategories={setCategories} />
      <hr></hr>
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
