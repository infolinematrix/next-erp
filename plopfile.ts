import { NodePlopAPI } from 'plop';
import path from 'path';
import process from 'process';

export default function (plop: NodePlopAPI) {
  plop.setGenerator('module', {
    description: 'Generate a full module in the current directory',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name (e.g., users, dashboard)',
      },
    ],
    actions: function (data) {
      const cwd = process.cwd(); // current working dir
      const name = data?.name;
      const base = path.join(cwd, name); // e.g. /src/app/dashboard/users

      return [
        {
          type: 'add',
          path: path.join(base, 'page.tsx'),
          template: `export default function {{pascalCase name}}Page() {
  return <div>{{pascalCase name}} page</div>;
}`,
        },
        {
          type: 'add',
          path: path.join(base, '{{camelCase name}}.service.ts'),
          template: `// Service for {{camelCase name}} module`,
        },
        {
          type: 'add',
          path: path.join(base, '{{camelCase name}}.validation.ts'),
          template: `import { z } from 'zod';

export const {{camelCase name}}Schema = z.object({
  // validation rules
});`,
        },
        {
          type: 'add',
          path: path.join(base, '{{camelCase name}}.types.ts'),
          template: `export type {{pascalCase name}} = {
  // Define your types here
};`,
        },
        {
          type: 'add',
          path: path.join(base, '{{camelCase name}}.hooks.ts'),
          template: `// Custom hooks for {{camelCase name}}`,
        },
        {
          type: 'add',
          path: path.join(base, 'layout.tsx'),
          template: `import React from 'react';

export default function {{pascalCase name}}Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-4">
      <h1 className="text-xl font-bold">{{pascalCase name}} Module</h1>
      {children}
    </section>
  );
}`,
        },
        {
          type: 'add',
          path: path.join(base, 'components/index.tsx'),
          template: `// Root component for {{pascalCase name}} module`,
        },
      ];
    },
  });
}
