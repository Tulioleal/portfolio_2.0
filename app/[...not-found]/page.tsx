// pages/404.tsx
"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return <>Redirecting...</>;
};

export default NotFound;