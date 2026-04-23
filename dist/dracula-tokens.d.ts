/**
 * Dracula CSS - JavaScript/TypeScript Tokens
 * https://github.com/dracula/dracula-css
 *
 * Color tokens for CSS-in-JS libraries (styled-components, Emotion, etc.)
 */
export declare const dracula: {
    readonly colors: {
        readonly bg: "#282a36";
        readonly fg: "#f8f8f2";
        readonly selection: "#44475a";
        readonly comment: "#6272a4";
        readonly red: "#ff5555";
        readonly orange: "#ffb86c";
        readonly yellow: "#f1fa8c";
        readonly green: "#50fa7b";
        readonly purple: "#bd93f9";
        readonly cyan: "#8be9fd";
        readonly pink: "#ff79c6";
    };
    readonly ui: {
        readonly bgDarker: "#191a21";
        readonly bgDark: "#21222c";
        readonly bgLight: "#343746";
        readonly bgLighter: "#424450";
        readonly float: "#343746";
    };
    readonly functional: {
        readonly error: "#de5735";
        readonly warning: "#a39514";
        readonly success: "#089108";
        readonly info: "#0081d6";
        readonly focus: "#815cd6";
    };
    readonly semantic: {
        readonly heading: "#bd93f9";
        readonly link: "#8be9fd";
        readonly linkHover: "#ff79c6";
        readonly strong: "#ffb86c";
        readonly emphasis: "#f1fa8c";
        readonly code: "#50fa7b";
        readonly blockquote: "#6272a4";
        readonly markBg: "#f1fa8c";
        readonly markColor: "#282a36";
        readonly del: "#ff5555";
        readonly ins: "#50fa7b";
        readonly border: "#6272a4";
    };
    readonly ansi: {
        readonly black: "#21222c";
        readonly red: "#ff5555";
        readonly green: "#50fa7b";
        readonly yellow: "#f1fa8c";
        readonly blue: "#bd93f9";
        readonly magenta: "#ff79c6";
        readonly cyan: "#8be9fd";
        readonly white: "#f8f8f2";
        readonly brightBlack: "#6272a4";
        readonly brightRed: "#ff6e6e";
        readonly brightGreen: "#69ff94";
        readonly brightYellow: "#ffffa5";
        readonly brightBlue: "#d6acff";
        readonly brightMagenta: "#ff92df";
        readonly brightCyan: "#a4ffff";
        readonly brightWhite: "#ffffff";
    };
    readonly typography: {
        readonly fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";
        readonly fontFamilyMono: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, \"Liberation Mono\", monospace";
        readonly fontSizeBase: "16px";
        readonly lineHeight: "1.6";
    };
    readonly spacing: {
        readonly xs: "0.25rem";
        readonly sm: "0.5rem";
        readonly md: "1rem";
        readonly lg: "1.5rem";
        readonly xl: "2rem";
    };
    readonly borders: {
        readonly radius: "6px";
    };
    readonly transitions: {
        readonly duration: "0.15s";
        readonly timing: "ease";
    };
};
export declare const alucard: {
    readonly colors: {
        readonly bg: "#f8f8f2";
        readonly fg: "#282a36";
        readonly selection: "#e6e6e6";
        readonly comment: "#6272a4";
        readonly red: "#c33027";
        readonly orange: "#c47a1a";
        readonly yellow: "#9a8c04";
        readonly green: "#1d8a2f";
        readonly purple: "#7c4dbd";
        readonly cyan: "#1a9ab5";
        readonly pink: "#c44f8f";
    };
    readonly ui: {
        readonly bgDarker: "#bcbab3";
        readonly bgDark: "#ceccc0";
        readonly bgLight: "#dedccf";
        readonly bgLighter: "#ece9df";
        readonly float: "#efeddc";
    };
    readonly functional: {
        readonly error: "#de5735";
        readonly warning: "#a39514";
        readonly success: "#089108";
        readonly info: "#0081d6";
        readonly focus: "#815cd6";
    };
    readonly semantic: {
        readonly heading: "#7c4dbd";
        readonly link: "#1a9ab5";
        readonly linkHover: "#c44f8f";
        readonly strong: "#c47a1a";
        readonly emphasis: "#9a8c04";
        readonly code: "#1d8a2f";
        readonly blockquote: "#6272a4";
        readonly markBg: "#f1fa8c";
        readonly markColor: "#282a36";
        readonly del: "#c33027";
        readonly ins: "#1d8a2f";
        readonly border: "#bcbab3";
    };
    readonly ansi: {
        readonly black: "#21222c";
        readonly red: "#ff5555";
        readonly green: "#50fa7b";
        readonly yellow: "#f1fa8c";
        readonly blue: "#bd93f9";
        readonly magenta: "#ff79c6";
        readonly cyan: "#8be9fd";
        readonly white: "#f8f8f2";
        readonly brightBlack: "#6272a4";
        readonly brightRed: "#ff6e6e";
        readonly brightGreen: "#69ff94";
        readonly brightYellow: "#ffffa5";
        readonly brightBlue: "#d6acff";
        readonly brightMagenta: "#ff92df";
        readonly brightCyan: "#a4ffff";
        readonly brightWhite: "#ffffff";
    };
    readonly typography: {
        readonly fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";
        readonly fontFamilyMono: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, \"Liberation Mono\", monospace";
        readonly fontSizeBase: "16px";
        readonly lineHeight: "1.6";
    };
    readonly spacing: {
        readonly xs: "0.25rem";
        readonly sm: "0.5rem";
        readonly md: "1rem";
        readonly lg: "1.5rem";
        readonly xl: "2rem";
    };
    readonly borders: {
        readonly radius: "6px";
    };
    readonly transitions: {
        readonly duration: "0.15s";
        readonly timing: "ease";
    };
};
export type DraculaTheme = typeof dracula;
export type AlucardTheme = typeof alucard;
export default dracula;
