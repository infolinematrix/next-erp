import { NodePlopAPI } from 'plop'

export default function (plop: NodePlopAPI) {
  // 1. Full module generator
  plop.setGenerator('module', {
    description: 'Generate a full module (page + service + types + zod + components)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name (e.g., users)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/{{name}}/page/page.tsx',
        template: `export default function {{pascalCase name}}Page() {
  return <div>{{pascalCase name}} page</div>;
}`,
      },
      {
        type: 'add',
        path: 'app/{{name}}/page/{{name}}.service.ts',
        template: `// Service for {{name}} module`,
      },
      {
        type: 'add',
        path: 'app/{{name}}/page/{{name}}.validation.ts',
        template: `import { z } from 'zod';

export const {{camelCase name}}Schema = z.object({
  // Add validation rules
});`,
      },
      {
        type: 'add',
        path: 'app/{{name}}/page/{{name}}.types.ts',
        template: `export type {{pascalCase name}} = {
  // Define your types here
};`,
      },
      {
        type: 'add',
        path: 'app/{{name}}/page/components/index.tsx',
        template: `// Root component for {{pascalCase name}} module`,
      },
    ],
  });

  // 2. Standalone page generator (with dynamic route support)
  plop.setGenerator('page', {
    description: 'Generate a standalone page with components (static or dynamic route)',
    prompts: [
      {
        type: 'input',
        name: 'folder',
        message: 'Parent folder (e.g., products)',
      },
      {
        type: 'input',
        name: 'subfolder',
        message: 'Page folder (e.g., page or [id])',
        default: 'page',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/{{folder}}/{{subfolder}}/page.tsx',
        template: `export default function {{pascalCase folder}}{{pascalCase subfolder}}Page({ params }: { params: { id?: string } }) {
  return <div>{{pascalCase folder}} {{pascalCase subfolder}} page</div>;
}`,
      },
      {
        type: 'add',
        path: 'app/{{folder}}/{{subfolder}}/components/index.tsx',
        template: `// Components for {{pascalCase folder}}/{{subfolder}}`,
      },
    ],
  });
}
