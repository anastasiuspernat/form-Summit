# Summit Form
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

This project features:
1) React Form built with Next.js and uses SSR
2) Responsive design (uses CSS flexbox, works on mobile)
3) TailwindCSS integration (in globals.css)
4) PostCSS for .css file transform preprocessing together with TailwindCSS
5) Formik/Yup integration for form validation
6) Unit tests
7) Github workflow for commit validation

Structure of the project with description of essential files
<pre>
Main code & components
components/Form.tsx - main form component with Formik/Yup validation
pages/_app.tsx - any page initialization
pages/index.tsx - index page that uses form as a component
styles/globals.css - CSS classes that use Tailwind CSS

Unit Tests
__tests__/Form.test.tsx - Jest unit tests for the form intergrated with Gitghub workflow
.jestrc.js - Jest config to parse tsx with tsconfig
tsconfig.jest.json - custom Typescript config for Jest tests
.git/workflows/ci.yml - Github workflow that performs those tests on every commit

Configs
.vscode - VS Code workspace config including tasks
package.json - Node package config
postcss.config.js - PostCSS CSS files processing for Tailwind
tailwind.config.js - Tailwind CSS processing configs
next.config.js - Next.js config
</pre>

# Installation
To install the project dependencies, run the following command:
```
npm install
```
Then use
```
npm build
```
To build the project

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
