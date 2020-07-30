/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        default: '-apple-system,BlinkMacSystemFont,"Segoe UI","Hiragino Sans","Hiragino Kaku Gothic ProN",Meiryo,sans-serif',
      },
      colors: {
        'font-base': '#333333',
        'font-gray': '#747474',
        'border-gray': '#E2E2E2',
        blue: '#47AFFF',
        primary: '#FD306A',
      },
      width: {
        1100: '1100px'
      },
      height: {
        30: '30px'
      },
      borderWidth: {
        2: '2px',
      },
      borderRadius: {
        30: '30px',
        half: '50%'
      },
      fontSize: {
        fz12: '12px',
        fz14: '14px',
        fz20: '20px',
      },
      lineHeight: {
        lh17: '17px',
        lh25: '25px',
      },
      spacing: {
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        20: '20px',
      }
    }
  },
  variants: {},
  plugins: [],
}
