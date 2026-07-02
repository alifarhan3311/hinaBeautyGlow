import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import LoadingPage from '@/pages/public/Loading';

// ─── Lazy Public Pages ─────────────────────────────────────────────────────────
const Home           = lazy(() => import('@/pages/public/Home'));
const About          = lazy(() => import('@/pages/public/About'));
const Services       = lazy(() => import('@/pages/public/Services'));
const ServiceDetails = lazy(() => import('@/pages/public/ServiceDetails'));
const Gallery        = lazy(() => import('@/pages/public/Gallery'));
const BeforeAfter    = lazy(() => import('@/pages/public/BeforeAfter'));
const Packages       = lazy(() => import('@/pages/public/Packages'));
const Contact        = lazy(() => import('@/pages/public/Contact'));
const FAQ            = lazy(() => import('@/pages/public/FAQ'));
const Testimonials   = lazy(() => import('@/pages/public/Testimonials'));
const Privacy        = lazy(() => import('@/pages/public/Privacy'));
const Terms          = lazy(() => import('@/pages/public/Terms'));
const Cancellation   = lazy(() => import('@/pages/public/Cancellation'));

// ─── Lazy Booking Pages ────────────────────────────────────────────────────────
const BookAppointment = lazy(() => import('@/pages/booking/BookAppointment'));

// ─── Lazy Admin Pages ─────────────────────────────────────────────────────────
const AdminLogin        = lazy(() => import('@/pages/admin/AdminLogin'));
const Dashboard         = lazy(() => import('@/pages/admin/Dashboard'));
const ManageBookings    = lazy(() => import('@/pages/admin/ManageBookings'));
const ManageServices    = lazy(() => import('@/pages/admin/ManageServices'));
const ManageGallery     = lazy(() => import('@/pages/admin/ManageGallery'));
const ManagePackages    = lazy(() => import('@/pages/admin/ManagePackages'));
const ManageTestimonials= lazy(() => import('@/pages/admin/ManageTestimonials'));
const ManageFAQs        = lazy(() => import('@/pages/admin/ManageFAQs'));
const ManageContent     = lazy(() => import('@/pages/admin/ManageContent'));
const ManageContacts    = lazy(() => import('@/pages/admin/ManageContacts'));

// ─── Lazy Layout Pages ────────────────────────────────────────────────────────
const MainLayout  = lazy(() => import('@/layouts/MainLayout'));
const AdminLayout = lazy(() => import('@/layouts/AdminLayout'));

// ─── 404 Page ────────────────────────────────────────────────────────────────
const NotFound = lazy(() => import('@/pages/NotFound'));

// ─── Suspense Wrapper ────────────────────────────────────────────────────────
const Wrap = ({ children }) => (
  <Suspense fallback={<LoadingPage />}>{children}</Suspense>
);

// ─── Router Definition ───────────────────────────────────────────────────────
const router = createBrowserRouter([
  // ── Public Routes ────────────────────────────────────────────────────────
  {
    path: '/',
    element: (
      <Wrap>
        <App />
      </Wrap>
    ),
    children: [
      {
        element: (
          <Wrap>
            <MainLayout />
          </Wrap>
        ),
        children: [
          { index: true,                  element: <Wrap><Home /></Wrap> },
          { path: 'about',                element: <Wrap><About /></Wrap> },
          { path: 'services',             element: <Wrap><Services /></Wrap> },
          { path: 'services/:slug',       element: <Wrap><ServiceDetails /></Wrap> },
          { path: 'gallery',              element: <Wrap><Gallery /></Wrap> },
          { path: 'before-after',         element: <Wrap><BeforeAfter /></Wrap> },
          { path: 'packages',             element: <Wrap><Packages /></Wrap> },
          { path: 'book-appointment',     element: <Wrap><BookAppointment /></Wrap> },
          { path: 'contact',              element: <Wrap><Contact /></Wrap> },
          { path: 'faq',                  element: <Wrap><FAQ /></Wrap> },
          { path: 'testimonials',         element: <Wrap><Testimonials /></Wrap> },
          { path: 'privacy-policy',       element: <Wrap><Privacy /></Wrap> },
          { path: 'terms',                element: <Wrap><Terms /></Wrap> },
          { path: 'cancellation-policy',  element: <Wrap><Cancellation /></Wrap> },
        ],
      },

      // ── Admin Login (no layout wrapper) ─────────────────────────────────
      {
        path: 'admin/login',
        element: (
          <Wrap>
            <AdminLogin />
          </Wrap>
        ),
      },

      // ── Admin Routes ────────────────────────────────────────────────────
      {
        path: 'admin',
        element: (
          <Wrap>
            <AdminLayout />
          </Wrap>
        ),
        children: [
          { index: true,            element: <Navigate to="/admin/dashboard" replace /> },
          { path: 'dashboard',      element: <Wrap><Dashboard /></Wrap> },
          { path: 'bookings',       element: <Wrap><ManageBookings /></Wrap> },
          { path: 'services',       element: <Wrap><ManageServices /></Wrap> },
          { path: 'gallery',        element: <Wrap><ManageGallery /></Wrap> },
          { path: 'packages',       element: <Wrap><ManagePackages /></Wrap> },
          { path: 'testimonials',   element: <Wrap><ManageTestimonials /></Wrap> },
          { path: 'faqs',           element: <Wrap><ManageFAQs /></Wrap> },
          { path: 'content',        element: <Wrap><ManageContent /></Wrap> },
          { path: 'contacts',       element: <Wrap><ManageContacts /></Wrap> },
        ],
      },

      // ── 404 Catch-All ───────────────────────────────────────────────────
      {
        path: '*',
        element: (
          <Wrap>
            <NotFound />
          </Wrap>
        ),
      },
    ],
  },
]);

export default router;
