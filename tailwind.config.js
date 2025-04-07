/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: '#000',
                    100: "#000319"
                }
            },
            screens: {
                '3xl': '1920px',
                '4xl': '2560px',
                '5xl': '3840px',
                '6xl': '7680px',
            },
        },
    },
    plugins: [],
}
