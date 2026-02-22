import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-6xl font-light tracking-tight text-genesis-white">
        404
      </h1>
      <p className="mb-8 text-lg font-light text-genesis-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-genesis-white px-8 py-4 text-sm font-medium text-genesis-black transition-colors hover:bg-genesis-text"
      >
        Back to Home
      </Link>
    </main>
  );
}
