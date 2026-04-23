/**
 * Dracula CSS - JavaScript/TypeScript Tokens
 * https://github.com/dracula/dracula-css
 *
 * Color tokens for CSS-in-JS libraries (styled-components, Emotion, etc.)
 */

// =============================================================================
// Dracula Classic (Dark)
// =============================================================================

export const dracula = {
  // Syntax Palette
  colors: {
    bg: '#282a36',
    fg: '#f8f8f2',
    selection: '#44475a',
    comment: '#6272a4',
    red: '#ff5555',
    orange: '#ffb86c',
    yellow: '#f1fa8c',
    green: '#50fa7b',
    purple: '#bd93f9',
    cyan: '#8be9fd',
    pink: '#ff79c6',
  },

  // UI Background Scale
  ui: {
    bgDarker: '#191a21',
    bgDark: '#21222c',
    bgLight: '#343746',
    bgLighter: '#424450',
    float: '#343746',
  },

  // Functional Colors (for UI interactions)
  functional: {
    error: '#de5735',
    warning: '#a39514',
    success: '#089108',
    info: '#0081d6',
    focus: '#815cd6',
  },

  // Semantic Mappings (prose elements)
  semantic: {
    heading: '#bd93f9',
    link: '#8be9fd',
    linkHover: '#ff79c6',
    strong: '#ffb86c',
    emphasis: '#f1fa8c',
    code: '#50fa7b',
    blockquote: '#6272a4',
    markBg: '#f1fa8c',
    markColor: '#282a36',
    del: '#ff5555',
    ins: '#50fa7b',
    border: '#6272a4',
  },

  // ANSI Colors
  ansi: {
    black: '#21222c',
    red: '#ff5555',
    green: '#50fa7b',
    yellow: '#f1fa8c',
    blue: '#bd93f9',
    magenta: '#ff79c6',
    cyan: '#8be9fd',
    white: '#f8f8f2',
    brightBlack: '#6272a4',
    brightRed: '#ff6e6e',
    brightGreen: '#69ff94',
    brightYellow: '#ffffa5',
    brightBlue: '#d6acff',
    brightMagenta: '#ff92df',
    brightCyan: '#a4ffff',
    brightWhite: '#ffffff',
  },

  // Typography
  typography: {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    fontSizeBase: '16px',
    lineHeight: '1.6',
  },

  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },

  // Borders
  borders: {
    radius: '6px',
  },

  // Transitions
  transitions: {
    duration: '0.15s',
    timing: 'ease',
  },
} as const;

// =============================================================================
// Alucard Classic (Light)
// =============================================================================

export const alucard = {
  // Syntax Palette (adjusted for light backgrounds)
  colors: {
    bg: '#f8f8f2',
    fg: '#282a36',
    selection: '#e6e6e6',
    comment: '#6272a4',
    red: '#c33027',
    orange: '#c47a1a',
    yellow: '#9a8c04',
    green: '#1d8a2f',
    purple: '#7c4dbd',
    cyan: '#1a9ab5',
    pink: '#c44f8f',
  },

  // UI Background Scale
  ui: {
    bgDarker: '#bcbab3',
    bgDark: '#ceccc0',
    bgLight: '#dedccf',
    bgLighter: '#ece9df',
    float: '#efeddc',
  },

  // Functional Colors (same as dark - good contrast on both)
  functional: {
    error: '#de5735',
    warning: '#a39514',
    success: '#089108',
    info: '#0081d6',
    focus: '#815cd6',
  },

  // Semantic Mappings (adjusted for light backgrounds)
  semantic: {
    heading: '#7c4dbd',
    link: '#1a9ab5',
    linkHover: '#c44f8f',
    strong: '#c47a1a',
    emphasis: '#9a8c04',
    code: '#1d8a2f',
    blockquote: '#6272a4',
    markBg: '#f1fa8c',
    markColor: '#282a36',
    del: '#c33027',
    ins: '#1d8a2f',
    border: '#bcbab3',
  },

  // ANSI Colors (same as dark)
  ansi: dracula.ansi,

  // Typography (same as dark)
  typography: dracula.typography,

  // Spacing (same as dark)
  spacing: dracula.spacing,

  // Borders (same as dark)
  borders: dracula.borders,

  // Transitions (same as dark)
  transitions: dracula.transitions,
} as const;

// =============================================================================
// Type Exports
// =============================================================================

export type DraculaTheme = typeof dracula;
export type AlucardTheme = typeof alucard;

// Default export
export default dracula;
