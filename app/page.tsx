import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-4 text-4xl font-bold">Sportuno API Documentation</h1>
      <p className="mb-8 text-lg text-fd-muted-foreground">
        Everything you need to integrate the Sportuno tournament platform into
        your operator site.
      </p>
      <Link
        href="/docs"
        className="rounded-lg bg-fd-primary px-6 py-3 text-fd-primary-foreground font-medium"
      >
        Get Started
      </Link>
    </main>
  );
}
