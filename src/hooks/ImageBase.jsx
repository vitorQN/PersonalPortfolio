import { useEffect, useState } from 'react'
import { getImageUrl } from '../lib/storage';

export default function StorageImage({ filePath , nameClass}) {
  console.log(filePath);
  if (!filePath) {
    
    return <span className='erro-img'>🚧</span>;

  }

  const url = getImageUrl(filePath);

  return <img className={nameClass} src={url} alt="title" />;
}