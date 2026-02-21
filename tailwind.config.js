/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                kaki: {
                    50: '#f8faf9',
                    100: '#eff2f1',
                    200: '#e1e7e6',
                    300: '#ccd6d5',
                    400: '#a3b5b4',
                    500: '#849a99',
                    600: '#6a7e7d',
                    700: '#586766',
                    800: '#4a5655',
                    900: '#3f4948',
                },
                ios: {
                    bg: '#ffffff',
                    text: '#1a1a1c',
                    gray: '#86868b',
                    blue: '#0071e3'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                'ios': '14px',
                'ios-lg': '24px',
            }
        },
    },
    plugins: [],
}
