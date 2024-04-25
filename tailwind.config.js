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
        'h-blue-1': '#0B1018',
        'h-blue-2': '#0E1521',
        'h-blue-3': '#1E293B',
        'h-gray-1': '#E2E8F0',
        'h-gray-2': '#94A3B8',
        'h-green-1': '#4FFF54',
        'h-purple-1': '#4F46E5',
        'h-purple-1': '#6366F1'
      },
    },
  },
  plugins: [],
};
