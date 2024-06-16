"use client";
import Image from 'next/image';
import { Copy, Share } from 'lucide-react';
import { useState } from 'react';

const Images = () => {
  const [copiedUrl, setCopiedUrl] = useState('');

  const images = [
    {
      id: 1,
      src: 'https://cdn.pixabay.com/photo/2024/05/27/13/34/door-8791308_640.jpg',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'https://cdn.pixabay.com/photo/2024/03/08/17/13/passport-8621284_640.png',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: 'https://cdn.pixabay.com/photo/2014/09/25/10/09/full-moon-460314_640.jpg',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: 'https://cdn.pixabay.com/photo/2023/08/01/08/21/waterfall-8162449_640.jpg',
      alt: 'Image 4',
    },
    {
      id: 5,
      src: 'https://cdn.pixabay.com/photo/2024/01/20/12/59/blue-tit-8521052_640.jpg',
      alt: 'Image 5',
    },
    {
      id: 6,
      src: 'https://cdn.pixabay.com/photo/2017/10/28/07/43/lake-2896379_640.jpg',
      alt: 'Image 6',
    },
  ];

const handleCopy = (url: string): void => {
    navigator.clipboard.writeText(url)
        .then(() => {
            setCopiedUrl(url);
            setTimeout(() => setCopiedUrl(''), 2000);
        })
        .catch((err: Error) => {
            console.error('Failed to copy text: ', err);
        });
};

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative rounded-lg shadow-md overflow-hidden
            "
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 py-2 px-4 flex justify-between items-center">
              <div className="text-white font-semibold">{image.alt}</div>
              <div className="flex items-center">
                <button
                  className="text-white hover:text-gray-300 focus:outline-none mr-2"
                  onClick={() => handleCopy(image.src)}
                >
                  <Copy
                    className={`transition-colors duration-300 ${
                      copiedUrl === image.src ? 'text-green-500' : 'text-white'
                    }`}
                  />
                </button>
                
                <a
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-gray-300 focus:outline-none"
                >
                  <Share />
                </a>
              </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Images;