# Dracula CSS

> Framework-agnostic Dracula theme for the web — CSS variables, Sass, and JS tokens.
> Built and maintained by the community for people who use Dracula Themes. This is **not an official Dracula team project.**

![Screenshot](./screenshot.png)

## 🧛 What This Is (And What It Is Not)

**Dracula CSS is not a component library.** It is:

- A **design token system** (colors, spacing, typography)
- **Base element styling** (sensible defaults for HTML elements)
- **Framework-agnostic** — works with React, Vue, Svelte, plain HTML, and other stacks

It focuses on shared color tokens and HTML defaults, not on a full component framework such as Bootstrap.

### Why This Exists

| Aspect           | dracula-ui (archived)           | Dracula CSS                                 |
| ---------------- | ------------------------------- | ------------------------------------------- |
| **Scope**        | Full React component library    | Variables + base element styling only       |
| **Framework**    | React-first                     | Framework-agnostic — pure CSS/Sass          |
| **Dependencies** | React, TypeScript, TSDX         | Zero runtime deps                           |
| **Maintenance**  | High — components need updates  | Low — CSS variables are stable              |
| **Competition**  | Competing with Tailwind, shadcn | Not competing — complementary foundation    |
| **Use case**     | "Build sites with Dracula UI"   | "Add Dracula colors to your existing stack" |

### Color Accuracy & Spec Compliance

**Dracula CSS uses official Dracula specification colors** — verified against [spec.draculatheme.com](https://spec.draculatheme.com/).

Some third-party Dracula implementations use modified color values that differ from the official spec. Dracula CSS prioritizes spec compliance for consistency with the Dracula theme for Visual Studio Code, terminal themes, and other official implementations.

## 🦇 Install

All instructions can be found at [https://draculatheme.com/dracula-css](https://draculatheme.com/dracula-css).

### Quick Start (CDN)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/dracula-css/dist/dracula.min.css" />
```

### npm

```bash
npm install dracula-css
```

```js
// Import from JavaScript or a CSS pipeline
import 'dracula-css/dist/dracula.css';
```

### Sass

```scss
// Import variables only
@use 'dracula-css/src/scss/variables';

// Or import everything
@use 'dracula-css/src/scss/dracula';
```

### CSS-in-JS

```js
import { dracula, alucard } from 'dracula-css/dist/dracula-tokens.js';

// Use with styled-components, Emotion, or similar libraries
const styles = {
  backgroundColor: dracula.colors.bg,
  color: dracula.colors.fg,
};
```

## ⚰️ What's Included

| File                         | Use Case                                    |
| ---------------------------- | ------------------------------------------- |
| `dist/dracula.css`           | Full bundle — variables + base styles       |
| `dist/dracula.min.css`       | Minified production bundle                  |
| `dist/dracula-variables.css` | Just CSS custom properties (no base styles) |
| `dist/dracula-tokens.js`     | JS/TS export for CSS-in-JS                  |
| `src/scss/*`                 | Sass source files for customization         |

## 🩸 Color Architecture

Dracula CSS organizes colors from the [official Dracula specification](https://spec.draculatheme.com/) into three layers for web development:

### Three Color Layers

**1. Syntax Palette** — For prose and content (bright, high contrast)

```css
--drac-bg: #282a36;
--drac-fg: #f8f8f2;
--drac-purple: #bd93f9;
--drac-pink: #ff79c6;
/* ... and more */
```

**2. UI Background Scale** — For surfaces and elevation

```css
--drac-ui-bg-darker: #191a21;
--drac-ui-bg-dark: #21222c;
--drac-ui-bg-light: #343746;
--drac-ui-bg-lighter: #424450;
```

**3. Functional Colors** — For UI interactions (buttons, alerts, validation)

```css
--drac-ui-error: #de5735;
--drac-ui-warning: #a39514;
--drac-ui-success: #089108;
--drac-ui-info: #0081d6;
--drac-ui-focus: #815cd6;
```

Per the spec: _"Functional colors are UI-specific colors for interactive elements, borders, and indicators. Do not use in editor or terminal applications."_

### 🌙 Dark/Light Mode

Dracula CSS supports both dark (Dracula) and light (Alucard) modes:

```html
<!-- Option 1: Automatic (follows system preference) -->
<html>
  ...
</html>

<!-- Option 2: Force dark mode -->
<html class="dracula-dark">
  ...
</html>

<!-- Option 3: Force light mode -->
<html class="dracula-light">
  ...
</html>
```

## Base Element Styling

Includes sensible defaults for:

- **Typography**: h1-h6, p, a, strong, em, small, mark, del, ins
- **Code**: code, pre, kbd, samp, var
- **Lists**: ul, ol, li, dl, dt, dd
- **Tables**: table, th, td, caption (with striped rows)
- **Forms**: input, textarea, select, button, label, fieldset
- **Other elements**: blockquote, hr, details and summary, abbr

**Not included** (by design):

- Layout utilities (flexbox helpers, grid systems)
- Component classes (.card, .modal, .alert)
- JavaScript behaviors
- Complex animations

## CSS Variables Reference

All variables are prefixed with `--drac-` to avoid conflicts:

```css
/* Colors */
--drac-bg, --drac-fg, --drac-selection, --drac-comment
--drac-red, --drac-orange, --drac-yellow, --drac-green
--drac-purple, --drac-cyan, --drac-pink

/* UI Backgrounds */
--drac-ui-bg-darker, --drac-ui-bg-dark
--drac-ui-bg-light, --drac-ui-bg-lighter, --drac-ui-float

/* Functional */
--drac-ui-error, --drac-ui-warning, --drac-ui-success
--drac-ui-info, --drac-ui-focus

/* Semantic */
--drac-heading-color, --drac-link-color, --drac-link-hover-color
--drac-strong-color, --drac-emphasis-color, --drac-code-color

/* Typography */
--drac-font-family, --drac-font-family-mono
--drac-font-size-base, --drac-line-height

/* Spacing */
--drac-spacing-xs, --drac-spacing-sm, --drac-spacing-md
--drac-spacing-lg, --drac-spacing-xl

/* Borders */
--drac-border-radius, --drac-border-color

/* Transitions */
--drac-transition-duration, --drac-transition-timing

/* ANSI Colors (terminal emulators) */
--drac-ansi-black, --drac-ansi-red, --drac-ansi-green, --drac-ansi-yellow
--drac-ansi-blue, --drac-ansi-magenta, --drac-ansi-cyan, --drac-ansi-white
--drac-ansi-bright-black, --drac-ansi-bright-red, --drac-ansi-bright-green
--drac-ansi-bright-yellow, --drac-ansi-bright-blue, --drac-ansi-bright-magenta
--drac-ansi-bright-cyan, --drac-ansi-bright-white
```

## 🏰 Team

This theme is maintained by the following person(s) and a bunch of [awesome contributors](https://github.com/dracula/dracula-css/graphs/contributors).

| [![James Fishwick](https://github.com/jamesfishwick.png?size=100)](https://github.com/jamesfishwick) |
| ---------------------------------------------------------------------------------------------------- |
| [James Fishwick](https://github.com/jamesfishwick)                                                   |

## Community

- [Twitter](https://twitter.com/draculatheme) - Best for getting updates about themes and new stuff.
- [GitHub](https://github.com/dracula/dracula-theme/discussions) - Best for asking questions and discussing issues.
- [Discord](https://draculatheme.com/discord-invite) - Best for hanging out with the community.

## Dracula PRO

[![Dracula PRO](./.github/dracula-pro.png)](https://draculatheme.com/pro)

## License

[MIT License](./LICENSE)

## External Tools & Resources

**Color Pickers & Generators:**

- [Dracula Colors by Stormhold](https://dracula-colors.stormhold.net/) — Interactive color reference with RGB values and copy-to-clipboard
- [Stormhold Visual Reference](https://stormhold.net/the-dracula-theme-visual-reference-and-css-variables-for-web-design/) — Comprehensive visual guide to Dracula theme

**Component libraries (third-party):**

- [dracula-ui](https://github.com/dracula/dracula-ui) (archived) — React component library (uses modified colors, see "Color Accuracy" above)

**Note:** External tools may use modified Dracula color values that differ from the official spec. Dracula CSS uses spec-compliant colors for consistency with Visual Studio Code, terminal themes, and other official Dracula implementations.

## Related

- [Dracula CSS (source)](https://github.com/dracula/dracula-css) — Repository and issue tracker
- [dracula-markdown-css](https://github.com/dracula/markdown-css) — Dracula theme specifically for rendered markdown
- [Dracula Theme](https://draculatheme.com) — The main Dracula theme for 400+ apps
- [Dracula Spec](https://spec.draculatheme.com) — Official color specification
