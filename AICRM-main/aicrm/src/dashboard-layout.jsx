import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

export default function DashboardLayout() {
  const { isSignedIn, userId } = useAuth();

  if (!isSignedIn || !userId) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}