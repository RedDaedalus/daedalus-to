const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./app/**/*.{ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            ...colors,
            dark: "#0F1923"
                // slate: "#0F1923"
        }
    },
    plugins: [],
}