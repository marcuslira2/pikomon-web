/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dracula-bg': '#282a36',
        'dracula-current-line': '#44475a',
        'dracula-selection': '#44475a',
        'dracula-text': '#f8f8f2',
        'dracula-comment': '#6272a4',
        'dracula-cyan': '#8be9fd',
        'dracula-green': '#50fa7b',
        'dracula-orange': '#ffb86c',
        'dracula-pink': '#ff79c6',
        'dracula-purple': '#bd93f9',
        'dracula-red': '#ff5555',
      },
    },
  },
  plugins: [],
}

