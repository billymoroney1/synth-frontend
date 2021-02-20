module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme =>({
        'logo': "url('https://www.wallpaperflare.com/static/1019/523/600/audio-spectrum-blue-sound-wave-wallpaper-preview.jpg')",
        'cover': 'cover'
      })
    },
      backgroundSize: theme => ({
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
