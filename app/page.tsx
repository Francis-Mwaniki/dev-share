// pages/index.tsx

import React from 'react';
import ImageUploader from '../components/ImageUploader';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4  ">
     
      <ImageUploader />
    </div>
  );
};

export default Home;
