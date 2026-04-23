# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-02-14

### Added

- Comprehensive test suite with 29 passing tests
  - Build validation tests (Sass compilation, CSS structure)
  - WCAG AA accessibility compliance tests (color contrast)
  - Light mode media query validation
  - Manual theme toggle classes validation
  - ANSI color export validation
- GitHub Actions CI/CD workflows
  - Automated testing on pull requests
  - Automated npm publishing on version tags
  - Coverage reporting to Codecov
- Documentation improvements
  - Color accuracy and spec compliance section
  - External tools and resources section
  - Clarified three-layer color architecture

### Fixed

- Stylelint/Prettier conflict in `_variables.scss`
- Misleading comments in test files and Jest configuration
- Invalid nested HTML example in README
- Inaccurate Stormhold tool description

### Changed

- Configured Jest with 80% coverage thresholds
- Improved test comments for clarity and accuracy

## [1.0.0] - 2024-02-13

### Added

- Initial release
- Framework-agnostic Dracula theme for the web
- CSS variables for all Dracula colors
- Sass source files for customization
- JavaScript token exports for CSS-in-JS
- Dark mode (Dracula) and light mode (Alucard) support
- Base element styling for typography, forms, tables, and more
- Linting and formatting tooling (stylelint, prettier)

[1.1.0]: https://github.com/dracula/dracula-css/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/dracula/dracula-css/releases/tag/v1.0.0
