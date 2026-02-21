'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: '#0A0A0A',
          color: '#F5F5F5',
          fontFamily: 'sans-serif',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          margin: 0,
        }}
      >
        <h1 style={{ fontSize: '2rem', fontWeight: 300 }}>
          An Unexpected Error Occurred
        </h1>
        <p>Something went wrong at the application level.</p>
        <button
          onClick={() => reset()}
          style={{
            color: '#0A0A0A',
            backgroundColor: '#FFFFFF',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '20px',
            fontSize: '1rem',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
