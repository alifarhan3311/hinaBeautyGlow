import React from 'react';
import AdminPageShell from './AdminPageShell';

export default function Dashboard() {
  return (
    <AdminPageShell
      title="Dashboard"
      description="Salon performance, booking activity, service demand, and operational alerts."
      metrics={['Revenue', 'Bookings', 'Clients', 'Alerts']}
    />
  );
}
