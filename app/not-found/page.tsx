// pages/404.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NotFoundLayout from './layout';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return <NotFoundLayout>
    <h1>404 - Page Not Found</h1>
  </NotFoundLayout>
};

export default NotFound;