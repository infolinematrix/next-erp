import DashboardLayout from '@/components/layout/dashboard.layout';
import { Heading } from '@/components/ui/heading';
import React from 'react';

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
   <DashboardLayout>
     <section className="p-4">
      {children}
    </section>
   </DashboardLayout>
  );
}