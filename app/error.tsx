/*
 * :file description: 
 * :name: /kaola/app/error.tsx
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-01-23 19:30:47
 * :last editor: 张德志
 * :date last edited: 2024-01-23 19:41:15
 */
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
