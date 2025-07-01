/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{ts,tsx,js,jsx}",       // For shadcn and Next.js App Router
        "./components/**/*.{ts,tsx,js,jsx}", // For components
        "./src/**/*.{ts,tsx,js,jsx}",        // For your old files
    ],
    theme: {
        extend: {
            colors: {
                primary: '#fe5452', // Example primary color
                secondary: '#FBBF24', // Example secondary color
                accent: '#EF4444', // Example accent color
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            screens: {
                'sm': '576px',
                'md': '768px',
                'lg': '992px',
                'xl': '1024px',
                '1xl': '1225px',
                '2xl': '1300px',
                '3xl': '1600px',
                '4xl': '2500px',
            }
        },
    },
    plugins: [],
}
