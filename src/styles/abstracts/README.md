# Developer Settings

This document describes developer-only settings that affect the site's appearance. These settings are **not exposed to users** and can only be modified by developers/designers in the codebase.

## Transparent Components Mode

### Location

`src/styles/abstracts/_variables.scss`

### Description

A global flag that enables transparent glass-morphism effects across all major components (cards, sections, panels, modals) similar to the header's style.

### Usage

To enable transparent components site-wide, change the flag in `_variables.scss`:

```scss
// Set to true to enable transparent components
$enable-transparent-components: true;

// Optionally adjust transparency settings
$transparent-component-opacity: 0.95;  // Opacity level (0-1)
$transparent-component-blur: 12px;     // Backdrop blur amount
```

### Default

```scss
$enable-transparent-components: false;  // Disabled by default
```

### Affected Components

When enabled, the following components will have transparent backgrounds with backdrop blur:

- All Card components (`.card`)
- Project details panel (`.project-details-panel`)
- Project modal content (`.project-modal-content`)
- Any component using `@include transparent-component()` mixin

### How It Works

The mixin `transparent-component()` checks if `$enable-transparent-components` is true. If enabled, it applies:

- Transparent background with configurable opacity
- Backdrop blur for glass morphism effect
- More visible borders for definition

### Adding to New Components

Developers can apply this effect to any component by adding the mixin:

```scss
.my-component {
    background: hsl(var(--card));

    // Apply transparent glass effect if enabled
    @include transparent-component();
}
```

### Important Notes

- **This is a developer-only setting** - Users should NOT have access to toggle this
- Changing this affects the entire site's appearance
- The effect works best with background images or gradients
- May impact performance on lower-end devices due to backdrop-filter
- Test both light and dark modes when enabling this feature

## Future Developer Settings

Additional developer-only settings can be added to the same section in `_variables.scss`:

- Animation speed multipliers
- Spacing scale adjustments
- Typography scale modifications
- Color scheme variants
