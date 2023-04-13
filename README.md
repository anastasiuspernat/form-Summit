# Summit Form

This project features:
1) React Form built with Next.js
2) Responsive design (works on mobile)
3) TailwindCSS integration (in globals.css)
4) PostCSS for .css file transform preprocessing together with TailwindCSS
5) Formik/Yup integration for form validation
6) Unit tests
7) Github workflow for commit validation

Structure of the project with description of essential files
<pre>
.vscode - VS Code workspace config including tasks
__tests__/Form.test.tsx - Jest unit tests for the form intergrated with Gitghub workflow
components/Form.tsx - main form component with Formik/Yup validation
pages/_app.tsx - any page initialization
pages/index.tsx - index page that uses form as a component
styles/globals.css - CSS classes that use Tailwind CSS
package.json - Node package config
postcss.config.js - PostCSS CSS files processing for Tailwind
tailwind.config.js - Tailwind CSS processing configs
.jestrc.js - Jest config to parse tsx with tsconfig
tsconfig.jest.json - custom Typescript config for Jest tests
next.config.js - Next.js config
</pre>

# Installation
To install the project dependencies, run the following command:
```
npm install
```
# Usage
To start the API server, run the following command:

```
npm start
```
This will start the server on port 3000 by default. 

# Testing
To run the Jest test suite, run the following command:

```
npm test
```
This will run the tests and output the results to the console.
