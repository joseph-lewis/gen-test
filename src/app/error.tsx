'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-light text-genesis-white">
        Something went wrong!
      </h1>
      <p className="mt-4 text-lg text-genesis-text">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-8 rounded-md bg-genesis-white px-8 py-3 text-lg font-medium text-genesis-black transition-transform hover:scale-105"
      >
        Try again
      </button>
    </main>
  );
}
