module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        drive: "url('./images/drive.png')",
        ride: "url('./images/ride.png')",
        map: "url('./images/map.png')",
        mappath: "url('./images/map_path.png')",
        phone: "url('./images/phone_rider.png')",
      },
      borderRadius: {
        "25p": "50px",
      },
      height: {
        "90-screen": "90vh",
      },
      fontSize: {
        "5xl": "40px",
        "6xl": "48px",
      },
      colors: {
        "black-transparent": "rgba(0, 0, 0, 0.8)",
        "electric-ultramarine": "#3C00FF",
        "dark-silver": "#707070",
        "eerie-black": "#17181A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
