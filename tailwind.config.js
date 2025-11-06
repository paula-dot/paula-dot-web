module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.html"
    ],
    theme: {
        extend: {
            colors: {
                bg: "hsl(var(--bg))",
                fg: "hsl(var(--fg))",
                brand: "hsl(var(--brand))",
                accent: "hsl(var(--accent))",
            }
        },
    },
    plugins: [],
}