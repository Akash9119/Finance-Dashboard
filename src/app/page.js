"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    router.push('/signup');
  }, [router]);

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}