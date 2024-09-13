import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      maskImage: {
        'gradient-to-right': 'linear-gradient(to right, transparent, black, transparent)',
      },
    },
  },
  plugins: [    
    function ({ addUtilities }) {
    addUtilities({
      '.mask-gradient-to-right': {
        'mask-image': 'linear-gradient(to right, transparent, black, transparent)',
        '-webkit-mask-image': 'linear-gradient(to right, transparent, black, transparent)', // Para compatibilidad con WebKit
      },
    });
  },
],
};

export default config;
