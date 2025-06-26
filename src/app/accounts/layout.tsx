import DashboardLayout from '@/components/layout/dashboard.layout';
import React from 'react';

export default function AccountsLayout({ children }: { children: React.ReactNode }) {
  return (

    <DashboardLayout>
      <section className="p-4">
        <h1 className="text-xl font-bold">Accounts Module</h1>
        {children}
      </section>
    </DashboardLayout>
  );
}