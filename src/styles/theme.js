export const theme = {
  fonts: {
    main: "'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },

    colors: {
      background: '#28002B',
      surface: '#0b1220',
      text: '#ffffff',
      textMuted: '#cbd5f5',

      primary: '#646cff',
      success: '#22c55e',
      info: '#3b82f6',
      danger: '#ef4444',

      border: 'rgba(255,255,255,0.08)'
    },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "18px",
    lg: "20px",
    xl: "24px",
    xxl: "32px"
  },

    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px'
    },

  //   radii: {
  //     sm: '4px',
  //     md: '6px',
  //     lg: '10px'
  //   },

  media: {
    mobile: '(min-width: 320px)',
    bigMobile: '(min-width: 480px)',
    tablet: '(min-width: 768px)',
    landscapeTablet: '(min-width: 1000px)',
    desktop: '(min-width: 1280px)',
  },
};

export default theme;
