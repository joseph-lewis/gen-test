import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-light text-genesis-white">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-genesis-text">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-genesis-white px-8 py-3 text-lg font-medium text-genesis-black transition-transform hover:scale-105"
      >
        Return to Homepage
      </Link>
    </main>
  );
}
