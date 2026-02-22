"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-6xl font-light tracking-tight text-genesis-white">
        500
      </h1>
      <p className="mb-8 text-lg font-light text-genesis-muted">
        Something went wrong on our end.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center justify-center rounded-full bg-genesis-white px-8 py-4 text-sm font-medium text-genesis-black transition-colors hover:bg-genesis-text"
      >
        Try Again
      </button>
    </main>
  );
}
