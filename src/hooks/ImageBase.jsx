import { useEffect, useState } from 'react'
import { getImageUrl } from '../lib/storage';

export default function StorageImage({ filePath }) {
  console.log(filePath);
  if (!filePath) {
    
    return <div>Not</div>;
    
  }

  const url = getImageUrl(filePath);

  return <img src={url} alt="title" />;
}