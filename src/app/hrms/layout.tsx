import React from 'react';

export default function HrmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-4">
      <h1 className="text-xl font-bold">Hrms Module</h1>
      {children}
    </section>
  );
}