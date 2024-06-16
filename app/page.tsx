// "use client";
import React, { useEffect, useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import { currentUser } from '@clerk/nextjs/server';
import Images from '@/components/images';
export default async function Home() {
  const user = await currentUser();
  const userId = user?.id;
   
  return (
   <>
    {userId ? (
    
     
        <div className="container mx-auto p-4  ">
          
     <ImageUploader />
  
      </div>
    ) : (
      <div
      className="flex flex-col items-center justify-center min-h-screen"
      >
       <Images />
      </div>
    )
    }
   </>
  );
};


