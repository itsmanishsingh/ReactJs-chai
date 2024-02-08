## IntelliSense for CSS suggestion 

## Props 


## Ways to Add Tailwind CSS  || framework only
- Go to tailwind site [here](https://tailwindcss.com/docs/installation "TailwindCSS")
- Framework Guidance
- Select Vite framework

    Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p       

    Add the paths to all of your template files in your tailwind.config.js file.
    - 
        export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }

    In index.css (./src/index.css) add the below code on the top line
    - 
        @tailwind base;
        @tailwind components;
        @tailwind utilities;