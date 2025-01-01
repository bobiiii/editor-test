/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      typography: {
        sm: {
          css: {
            h2: {
              fontSize: "22px",
              margin: "0px",
              padding: "8px 0px",
            },
            p: {
              fontSize: "16px",
              margin: "0px 0px 8px",
            },
            img: {
              height: "357px",
              width: "100%",
              margin: "32px 0px 12px 0px",
              borderRadius: '0.5rem',
            },
            a: {
              color: "#1468a1",
            },
          },
        },
        lg: {
          css: {
            h2: {
              fontSize: "22px",
              margin: "0px",
              padding: "8px 0px",
            },
            p: {
              fontSize: "16px",
              margin: "0px",
              margin: "0px 0px 8px",
            },
            img: {
              height: "357px",
              width: "100%",
              margin: "32px 0px 12px 0px",
              borderRadius: '0.5rem',
            },
            a: {
              color: "#1468a1",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
