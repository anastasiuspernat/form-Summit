This project features:
1) React with Next.js
2) Responsive design (works on mobile)
3) TailwindCSS integration (in globals.css)
4) Formik/Yup integration for form validation
5) Unit tests
5) Github workflow for commit validation

Structure of the project with description of essential files
<pre>
├── .vscode - VS Code stuff including tasks
├── _tests
│   └── Form.test.tsx - Jest unit tests for the form intergrated with Gitghub workflow
├── components
│   └── Form.tsx - main form with Formik/Yup validation
├── pages
│   ├── _app.tsx - any page initialization
│   └── index.tsx - index page
├── styles
│   └── globals.css - CSS classes that use Tailwind CSS
├── package.json - Node package config
├── postcss.config.js - Tailwind CSS processing
├── tailwind.config.js - Tailwind CSS processing
└── next.config.js - Next.js config
</pre>