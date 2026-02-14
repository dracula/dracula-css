const colorContrast = require('color-contrast-checker');

describe('Color Contrast Accessibility (WCAG AA)', () => {
  const checker = new colorContrast();

  // Hardcoded color values matching Sass variables in _variables.scss
  const colors = {
    bg: '#282a36',
    fg: '#f8f8f2',
    purple: '#bd93f9',
    cyan: '#8be9fd',
    pink: '#ff79c6',
    green: '#50fa7b',
    orange: '#ffb86c',
    yellow: '#f1fa8c',
    red: '#ff5555',
  };

  describe('Core contrast requirements', () => {
    test('Background vs Foreground meets WCAG AA (4.5:1)', () => {
      // For body text (14px default), need at least 4.5:1 ratio
      const passes = checker.isLevelAA(colors.bg, colors.fg, 14);
      expect(passes).toBe(true);
    });

    test('Purple headings on dark bg meet WCAG AA', () => {
      const passes = checker.isLevelAA(colors.bg, colors.purple, 14);
      expect(passes).toBe(true);
    });

    test('Cyan links on dark bg meet WCAG AA', () => {
      const passes = checker.isLevelAA(colors.bg, colors.cyan, 14);
      expect(passes).toBe(true);
    });

    test('Green code on dark bg meets WCAG AA', () => {
      const passes = checker.isLevelAA(colors.bg, colors.green, 14);
      expect(passes).toBe(true);
    });
  });

  describe('All accent colors meet minimum contrast', () => {
    const accentColors = ['purple', 'cyan', 'pink', 'green', 'orange', 'yellow', 'red'];

    accentColors.forEach((colorName) => {
      test(`${colorName} on dark background meets WCAG AA`, () => {
        const passes = checker.isLevelAA(colors.bg, colors[colorName], 14);
        expect(passes).toBe(true);
      });
    });
  });

  describe('Functional UI colors', () => {
    const functionalColors = {
      error: '#de5735',
      warning: '#a39514',
      success: '#089108',
      info: '#0081d6',
    };

    Object.entries(functionalColors).forEach(([name, color]) => {
      test(`${name} color on dark background meets WCAG AA for large text (18px+)`, () => {
        // Functional colors are used for buttons, alerts, badges which use larger text
        const passes = checker.isLevelAA(colors.bg, color, 18);
        expect(passes).toBe(true);
      });
    });

    test('Warning color meets WCAG AA even for small text', () => {
      // Warning is the only functional color optimized for all text sizes
      const passes = checker.isLevelAA(colors.bg, '#a39514', 14);
      expect(passes).toBe(true);
    });
  });
});

describe('Interactive State Colors', () => {
  const checker = new colorContrast();

  const colors = {
    bg: '#282a36',
    pink: '#ff79c6', // Link hover
  };

  test('Link hover color (pink) meets WCAG AA', () => {
    const passes = checker.isLevelAA(colors.bg, colors.pink, 14);
    expect(passes).toBe(true);
  });
});

describe('Alucard (Light Mode) Contrast', () => {
  const checker = new colorContrast();

  const alucardColors = {
    bg: '#f8f8f2',
    fg: '#282a36',
    purple: '#7c4dbd',
    cyan: '#1a9ab5',
    green: '#1d8a2f',
  };

  test('Light mode: Background vs Foreground meets WCAG AA', () => {
    const passes = checker.isLevelAA(alucardColors.bg, alucardColors.fg, 14);
    expect(passes).toBe(true);
  });

  test('Light mode: Purple headings meet WCAG AA', () => {
    const passes = checker.isLevelAA(alucardColors.bg, alucardColors.purple, 14);
    expect(passes).toBe(true);
  });
});
