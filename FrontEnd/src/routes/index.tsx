import { createBrowserRouter } from 'react-router-dom'
import LandingLayout from '../layouts/LandingLayout'
import AuthLayout from '../layouts/AuthLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
  },
  {
    path: '/login',
    element: <AuthLayout />,
  },
  {
    path: '/signup',
    element: <AuthLayout />,
  },
])
