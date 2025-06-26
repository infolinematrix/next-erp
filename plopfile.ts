import { NodePlopAPI } from 'plop';
import path from 'path';
import process from 'process';

/** Use */
// npx plop module
// npx plop page

export default function (plop: NodePlopAPI) {
  plop.setGenerator('module', {
    description: 'Generate a full module in the current directory',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name (e.g., users, dashboard)'
      }
    ],
    actions: function (data) {
      const cwd = process.cwd(); // current working dir
      const name = data?.name;
      const base = path.join(cwd, name); // e.g. /src/app/dashboard/users

      return [
        {
          type: 'add',
          path: path.join(base, 'page.tsx'),
          template: `import { NextPage } from 'next'
          
interface Props {}
          
const Page: NextPage<Props> = ({}) => {
  return <div></div>
}
          
export default Page`
        },
        {
          type: 'add',
          path: path.join(base, '{{camelCase name}}.service.ts'),
          template: `// Service for {{camelCase name}} module

export class {{pascalCase name}}Service {
  // Add methods for {{camelCase name}} management here
  // For example, create{{pascalCase name}}, get{{pascalCase name}}, update{{pascalCase name}}, delete{{pascalCase name}}, etc.

  create{{pascalCase name}}(data: any): Promise<any> {
    // Logic to create a {{camelCase name}}
    return Promise.resolve({ success: true, data });
  }

  get{{pascalCase name}}(id: string): Promise<any> {
    // Logic to fetch a {{camelCase name}} by ID
    return Promise.resolve({ success: true, id });
  }

  update{{pascalCase name}}(id: string, updates: any): Promise<any> {
    // Logic to update a {{camelCase name}}
    return Promise.resolve({ success: true, id, updates });
  }

  delete{{pascalCase name}}(id: string): Promise<any> {
    // Logic to delete a {{camelCase name}}
    return Promise.resolve({ success: true, id });
  }
}
`
        },
        {
          type: 'add',
          path: path.join(base, '{{camelCase name}}.validation.ts'),
          template: `import { z } from 'zod'

export const {{camelCase name}}TypeEnum = z.enum(['savings', 'current', 'credit', 'loan'])

export const create{{pascalCase name}}Schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  type: {{camelCase name}}TypeEnum,
  balance: z.number().nonnegative({ message: 'Balance must be a non-negative number' }),
})

export const update{{pascalCase name}}Schema = z.object({
  name: z.string().min(3).optional(),
  balance: z.number().nonnegative().optional(),
  isActive: z.boolean().optional(),
})

export const {{camelCase name}}Schemas = {
  create: create{{pascalCase name}}Schema,
  update: update{{pascalCase name}}Schema,
}
`
        },
        {
          type: 'add',
          path: path.join(base, '{{camelCase name}}.types.ts'),
          template: `// Types for {{pascalCase name}} module

export interface {{pascalCase name}} {
  id: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type {{pascalCase name}}Type = 'type1' | 'type2';

export type {{pascalCase name}}Types = {
  {{pascalCase name}}: {{pascalCase name}};
  {{pascalCase name}}Type: {{pascalCase name}}Type;
};`
        },
        {
          type: 'add',
          path: path.join(base, '{{camelCase name}}.hooks.ts'),
          template: `// Hooks for {{camelCase name}} module
import { useCallback } from 'react';
import { {{pascalCase name}}Service } from './{{camelCase name}}.service';

export function use{{pascalCase name}}Hooks() {
  const service = new {{pascalCase name}}Service();

  const create = useCallback((data: any) => {
    return service.create{{pascalCase name}}(data);
  }, []);

  const get = useCallback((id: string) => {
    return service.get{{pascalCase name}}(id);
  }, []);

  const update = useCallback((id: string, updates: any) => {
    return service.update{{pascalCase name}}(id, updates);
  }, []);

  const remove = useCallback((id: string) => {
    return service.delete{{pascalCase name}}(id);
  }, []);

  return {
    create,
    get,
    update,
    remove,
  };
}
`
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
}`
        },
        {
          type: 'add',
          path: path.join(base, 'components/index.tsx'),
          template: `// Root component for {{pascalCase name}} module`
        }
      ];
    }
  });

  //--Page Generator
  // This generator creates a standalone page with components, suitable for both static and dynamic routes.
  plop.setGenerator('page', {
    description: 'Generate a page + components folder in current path',
    prompts: [
      {
        type: 'input',
        name: 'subfolder',
        message: 'Page folder (e.g., overview, [id])',
        default: 'page'
      }
    ],
    actions: function (data) {
      const cwd = process.cwd(); // e.g., /src/app/dashboard
      const subfolder = data?.subfolder;
      const base = path.join(cwd, subfolder);

      return [
        {
          type: 'add',
          path: path.join(base, 'page.tsx'),
          template: `import { NextPage } from 'next'
          
interface Props {}
          
const Page: NextPage<Props> = ({}) => {
  return <div></div>
}
          
export default Page`
        },
        {
          type: 'add',
          path: path.join(base, 'components/index.tsx'),
          template: `// Components for {{pascalCase subfolder}}`
        }
      ];
    }
  });
}
