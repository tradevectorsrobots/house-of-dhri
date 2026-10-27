/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  // `.overline` is the site's label style; Tailwind's text-decoration utility of the same name must not apply.
  blocklist: ['overline'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
      },
    },
  },
  plugins: [],
};
