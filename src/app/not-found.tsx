import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50">
      <h1 className="text-3xl font-bold">404 — Page not found</h1>
      <Link href="/" className="text-blue-600 underline">
        Go home
      </Link>
    </div>
  );
}
