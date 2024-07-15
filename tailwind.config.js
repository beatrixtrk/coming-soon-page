/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            'white': '#FFFFFF',
            'softRed': '#F96464',
            'salmonRed': '#EE8B8B',
            'desaturatedRed': '#CE9898',
            'grayishRed': '#423A3A',
            'gradient-1': '#F8BFBF',
            'gradient-2': '#EE8B8B',
            'gradient-1-hover': '#fcdddd',
            'gradient-2-hover': '#f7c9c9',

        },
        extend: {
            boxShadow: {
                'buttonShadow': '0px 15px 20px 0px rgba(198, 110, 110, 0.25)',
            }
        }
    },
    plugins: [],
};
