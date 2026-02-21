module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'genesis-black': '#0A0A0A',
        'genesis-text': '#F5F5F5',
        'genesis-white': '#FFFFFF',
        'genesis-muted': 'rgba(245, 245, 245, 0.7)',
        'genesis-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'scroll-x': 'scroll-x 40s linear infinite',
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
