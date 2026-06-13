import { useEffect, useState } from 'react'
import { getImageUrl } from '../lib/storage';

export default function StorageImage({ filePath }) {
  if (!filePath) {
    return <div>Not available</div>;
  }

  const url = getImageUrl(filePath);

  return <img src={url} alt="title" />;
}