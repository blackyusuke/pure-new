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
        'font-gray': '#747474',
        'font-thin-gray': '#888787',
        'border-gray': '#E2E2E2',
        'border-thin-gray': '#D4D4D4',
        blue: '#47AFFF',
        base: '#333333',
        primary: '#FD306A', 
      },
      width: {
        1100: '1100px'
      },
      height: {
        30: '30px'
      },
      borderRadius: {
        30: '30px',
        half: '50%'
      },
      fontSize: {
        fz12: '12px',
        fz14: '14px',
        fz16: '16px',
        fz18: '18px',
        fz20: '20px',
      },
      lineHeight: {
        lh12: '12px',
        lh16: '16px',
        lh17: '17px',
        lh25: '25px',
        lh28: '28px',
      },
      spacing: {
        2: '2px',
        4: '4px',
        5: '5px',
        6: '6px',
        8: '8px',
        10: '10px',
        15: '15px',
        16: '16px',
        20: '20px',
        40: '40px',
      }
    }
  },
  variants: {},
  plugins: [],
}
