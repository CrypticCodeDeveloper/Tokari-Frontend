import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";


import BaseLayout from "./layouts/baseLayout";
import DashboardLayout from "./layouts/dashboardLayout";
import AuthPage from "./pages/auth-page";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/projects";

import AuthProvider from "./contexts/auth-provider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/landing-page";
import RippleWaveLoader from "./components/mvpblocks/loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/projects" element={<Projects />} />
      </Route>

      <Route path="/login" element={<AuthPage />} />
      <Route path="/signup" element={<AuthPage type="signup" />} />
    </Route>
  )
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Suspense fallback={<RippleWaveLoader />}>
          <RouterProvider router={router} />
          <Toaster />
        </Suspense>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
