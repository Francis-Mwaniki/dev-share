// components/ImageUploader.tsx

'use client';
import { ArrowRight, ImagePlus } from 'lucide-react';
import React, { useState, ChangeEvent } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const ImageUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setUploadProgress(0);
      simulateUpload()
      setUploadSuccess(false);
    }
  };

  const simulateUpload = () => {
    if (!selectedFile) return;

    setUploadProgress(0);
    setUploadSuccess(false);

    const uploadInterval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(uploadInterval);
          setUploadSuccess(true);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200); // Simulates upload progress every 200ms
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4 bg-gray-100 p-2 rounded  text-black border-none">
      <p className="text-xs text-gray-500 p-4">Select an image to upload</p>
      <div className="flex items-center gap-x-2">
        <Input type="file" className='  text-black border-none' 
        style={{ 
          backgroundColor: 'transparent',
          border: 'none',
          padding: '0.5rem',
          borderRadius: '0.5rem',
          width: '100%',
          cursor: 'pointer',
          textAlign: 'center',
          outline: 'none',
          
         }}
         placeholder="Select an image"
        onChange={handleFileChange} />
        </div>
      </div>
      <Button
        onClick={simulateUpload}
        className=""
      >
        <div className="flex items-center gap-x-2">
        <span>Upload Image</span> <ImagePlus size={24} />
        </div>
      </Button>
      {selectedFile && (
        <>
          <div className="w-full bg-gray-200 rounded-full mt-4 max-w-lg">
            <div
              className="bg-gray-900 text-xs font-medium text-gray-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: `${uploadProgress}%` }}
            >
              {uploadProgress}%
            </div>
          </div>
          {previewUrl && (
            <div className="mt-4">
              <img src={previewUrl} alt="Preview" className="max-w-full h-40 rounded" />
            </div>
          )}
        </>
      )}
      {uploadSuccess && (
        <>
        <p className="text-green-500 mt-4 bg-green-100 p-2">File uploaded successfully!</p>
       <a className=' text-green-500 underline underline-offset-1' href="/Dashboard">Go Dashboard</a>
        </>
        
      )}
    </div>
  );
};

export default ImageUploader;
