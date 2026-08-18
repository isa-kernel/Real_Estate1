import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

import ManageProperties from "./pages/ManageProperties";
import ManageLands from "./pages/ManageLands";
import ManageInquiries from "./pages/ManageInquiries";
import ManageBookings from "./pages/ManageBookings";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ========= PUBLIC ROUTES ========= */}

        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />

        <Route
          path="/properties"
          element={
            <MainLayout>
              <Properties />
            </MainLayout>
          }
        />

        <Route
          path="/property/:id"
          element={
            <MainLayout>
              <PropertyDetails />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        {/* ========= AUTH ========= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* ========= ADMIN ========= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-properties"
          element={
            <ProtectedRoute>
              <ManageProperties />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-lands"
          element={
            <ProtectedRoute>
              <ManageLands />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-inquiries"
          element={
            <ProtectedRoute>
              <ManageInquiries />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-bookings"
          element={
            <ProtectedRoute>
              <ManageBookings />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;