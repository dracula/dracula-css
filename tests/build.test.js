const sass = require('sass');
const path = require('path');

describe('Dracula CSS Build', () => {
  let compiledCSS;

  beforeAll(() => {
    // Compile main Sass file
    const result = sass.compile(path.join(__dirname, '../src/scss/dracula.scss'), {
      style: 'expanded',
    });
    compiledCSS = result.css;
  });

  test('Sass compiles without errors', () => {
    expect(compiledCSS).toBeDefined();
    expect(compiledCSS.length).toBeGreaterThan(0);
  });

  test('CSS contains core custom properties', () => {
    expect(compiledCSS).toContain('--drac-bg:');
    expect(compiledCSS).toContain('--drac-fg:');
    expect(compiledCSS).toContain('--drac-purple:');
    expect(compiledCSS).toContain('--drac-cyan:');
    expect(compiledCSS).toContain('--drac-pink:');
  });

  test('CSS contains UI background scale', () => {
    expect(compiledCSS).toContain('--drac-ui-bg-darker:');
    expect(compiledCSS).toContain('--drac-ui-bg-dark:');
    expect(compiledCSS).toContain('--drac-ui-bg-light:');
  });

  test('CSS contains functional colors', () => {
    expect(compiledCSS).toContain('--drac-ui-error:');
    expect(compiledCSS).toContain('--drac-ui-warning:');
    expect(compiledCSS).toContain('--drac-ui-success:');
    expect(compiledCSS).toContain('--drac-ui-focus:');
  });

  test('CSS contains semantic mappings', () => {
    expect(compiledCSS).toContain('--drac-heading-color:');
    expect(compiledCSS).toContain('--drac-link-color:');
    expect(compiledCSS).toContain('--drac-code-color:');
  });

  test('Minified build is smaller than expanded', () => {
    const minResult = sass.compile(path.join(__dirname, '../src/scss/dracula.scss'), {
      style: 'compressed',
    });
    expect(minResult.css.length).toBeLessThan(compiledCSS.length);
  });

  test('CSS is valid (no unclosed braces)', () => {
    const openBraces = (compiledCSS.match(/\{/g) || []).length;
    const closeBraces = (compiledCSS.match(/\}/g) || []).length;
    expect(openBraces).toBe(closeBraces);
  });

  test('Light mode media query contains Alucard colors', () => {
    expect(compiledCSS).toContain('@media (prefers-color-scheme: light)');
    expect(compiledCSS).toMatch(/@media.*prefers-color-scheme:\s*light.*--drac-bg:\s*#f8f8f2/s);
    expect(compiledCSS).toMatch(/@media.*prefers-color-scheme:\s*light.*--drac-purple:\s*#7c4dbd/s);
  });

  test('Manual theme toggle classes exist', () => {
    expect(compiledCSS).toContain('.dracula-light');
    expect(compiledCSS).toContain('.dracula-dark');
    expect(compiledCSS).toMatch(/\.dracula-light\s*\{[\s\S]*--drac-bg:\s*#f8f8f2/);
    expect(compiledCSS).toMatch(/\.dracula-dark\s*\{[\s\S]*--drac-bg:\s*#282a36/);
  });

  test('All ANSI colors are exported', () => {
    const ansiColors = [
      'black',
      'red',
      'green',
      'yellow',
      'blue',
      'magenta',
      'cyan',
      'white',
      'bright-black',
      'bright-red',
      'bright-green',
      'bright-yellow',
      'bright-blue',
      'bright-magenta',
      'bright-cyan',
      'bright-white',
    ];

    ansiColors.forEach((color) => {
      expect(compiledCSS).toContain(`--drac-ansi-${color}:`);
    });
  });
});

describe('Variables-only Build', () => {
  test('Variables file compiles independently', () => {
    const result = sass.compile(path.join(__dirname, '../src/scss/_variables.scss'));
    expect(result.css).toContain(':root');
    expect(result.css).toContain('--drac-bg:');
  });
});
