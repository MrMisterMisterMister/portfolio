# Portfolio Styles Documentation

## File Structure

The styles are organized into modular SCSS partials using a centralized design system with variables:

```
src/styles/
├── main.scss              # Main entry point (imports all partials)
├── _variables.scss        # Design system variables (spacing, fonts, breakpoints, etc.)
├── _colors.scss           # Cursor-inspired dark theme & color system
├── _base.scss             # Typography, reset, accessibility
├── _layout.scss           # Header, sections, grids, spacing
├── _components.scss       # Cards, buttons, forms, badges, etc.
├── _social-icons.scss     # Social icon styles (About & Hero sections)
├── _utilities.scss        # Decorative animations, scrollbar, mixins
└── README.md              # This file
```

## Purpose of Each File

### `main.scss`

Main entry point that imports all partials in the correct order. This is the only file imported in your Astro components.

### `_variables.scss`

Centralized design system tokens:
- **Spacing scale** (xs to 5xl): 4px - 96px
- **Font sizes** (xs to 6xl): 12px - 60px
- **Font weights**: light, normal, medium, semibold, bold
- **Line heights**: tight, snug, normal, relaxed, loose
- **Border radius**: sm, base, md, lg, xl, full
- **Transitions**: fast (0.15s), base (0.2s), slow (0.3s), slower (0.5s)
- **Easings**: smooth cubic-bezier curves
- **Breakpoints**: sm (640px) to 2xl (1536px)
- **Z-index layers**: dropdown to tooltip
- **Shadows**: sm to 2xl

All values are accessible via helper functions:
- `spacing($key)`, `font-size($key)`, `font-weight($key)`
- `radius($key)`, `transition($key)`, `easing($key)`
- `breakpoint($key)`, `shadow($key)`

### `_colors.scss`

Modern vibrant theme with full light and dark mode support:

**Light Mode (Default):**
- **Background**: #FFFFFF (White)
- **Text**: #0F172A (Dark slate)
- **Cards**: #FFFFFF with subtle borders
- **Primary**: #3B82F6 (Vibrant blue)
- **Borders**: #E2E8F0 (Light slate)

**Dark Mode:**
- **Background**: #0F172A (Deep slate)
- **Text**: #F8FAFC (Off-white)
- **Cards**: #1E293B (Slate)
- **Primary**: #3B82F6 (Vibrant blue - consistent)
- **Borders**: #334155 (Slate borders)

Functions:
- `theme-color($color)` - Get theme color
- `brand-color($brand, $variant)` - Get brand colors (LinkedIn, GitHub, Discord)
- `opacity($level)` - Get opacity level (subtle to full)

### `_base.scss`

- Global resets and normalizations
- Responsive typography (h1-h6, p) using design system variables
- Accessibility utilities (`.sr-only`, focus styles)
- Reduced motion support (WCAG 2.1)
- Custom scrollbar styling

### `_layout.scss`

- Header and navigation with hover effects
- Hero section with animated gradient background and grid pattern
- Floating particle animations
- Section headers (center, left, right variants)
- Grid layouts (2-column, 3-column, 4-column)
- Spacing utilities (small, content, section, large)
- Flex utilities (center, start, end, between)

### `_components.scss`

Component styles using centralized variables:
- **Cards**: Hover effects with shadow and border transitions
- **Buttons**: Primary, secondary, outline, ghost, danger variants
- **Forms**: Inputs, labels, textareas with focus states
- **Badges**: Primary, secondary, outline variants
- **Projects**: Split layout with list and details panel
- **Terminal**: Code block styling
- **Experience timeline**: Vertical timeline with animated connector
- **Skills**: Tag-based skill display
- All hover/focus states use design system transitions

### `_social-icons.scss`

- **About section**: Large filled icons (64x64px) with labels and brand colors
- **Hero section**: Small outline icons (48x48px) with subtle hover effects
- Theme-aware brand colors for LinkedIn, GitHub, Discord, Email
- Smooth transitions and hover states

### `_utilities.scss`

- **Decorative animations**: gradientShift (hero background), float (particles)
- **Scrollbar utilities**: .scrollbar-thin (invisible until hover), .scrollbar-minimal
- **Glass morphism**: .glass utility for frosted glass effect
- **Responsive mixins**: respond-to($breakpoint) for media queries

## Design System

### Color Tokens (HSL Format)

All colors use CSS custom properties:

- `--background` / `--foreground`
- `--card` / `--card-foreground`
- `--primary` / `--primary-foreground`
- `--secondary` / `--secondary-foreground`
- `--muted` / `--muted-foreground`
- `--accent` / `--accent-foreground`
- `--destructive` / `--destructive-foreground`
- `--border`, `--input`, `--ring`

### Spacing Scale

Using `spacing()` function:
- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 0.75rem (12px)
- `base`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl` through `5xl`: up to 6rem (96px)

### Breakpoints

Using `breakpoint()` function:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Usage

### Importing in Astro Components

```astro
---
import "@/styles/main.scss";
---
```

### Using Classes

```astro
<!-- Layout -->
<section class="section">
    <div class="space-large">
        <div class="section-header-center">
            <h2>Title</h2>
        </div>
    </div>
</section>

<!-- Grid -->
<div class="grid-layout-3">
    <!-- 3-column responsive grid -->
</div>

<!-- Card -->
<div class="card">
    <div class="card-header">
        <h3 class="card-title-lg">Title</h3>
    </div>
    <div class="card-content">Content here</div>
</div>

<!-- Button -->
<button class="btn btn-primary">Click Me</button>
```

## Animations

### Available Decorative Animations

Only minimal decorative animations for the hero section:

- `gradientShift`: Subtle animated gradient background (20s loop)
- `float`: Floating particles effect (15-24s per particle)

These animations respect `prefers-reduced-motion` settings.

### Hover Transitions

All interactive elements use consistent transition timing:
- Fast: 0.15s (color changes)
- Base: 0.2s (most hover effects)
- Slow: 0.3s (complex transformations)

## Social Icons

### About Section (Large Icons)

```astro
<a href="..." class="social-icon-link linkedin-link">
    <div class="social-icon-wrapper">
        <svg class="social-icon">...</svg>
    </div>
    <span class="social-icon-label">LinkedIn</span>
</a>
```

### Hero Section (Small Icons)

```astro
<a href="..." class="hero-social-link hero-linkedin">
    <svg>...</svg>
</a>
```

## Accessibility Features

- **Skip to main content** link for keyboard users (WCAG 2.1)
- **Focus visible** styles with outline-ring (WCAG 2.1)
- **ARIA landmarks** properly styled
- **Reduced motion** support for users with vestibular disorders
- **High contrast** ratios meeting WCAG standards
- **Large touch targets** (minimum 44x44px for buttons)
- **Semantic HTML** throughout all components

## Responsiveness

All components are mobile-first and fully responsive:

- Typography scales with breakpoints using design system
- Grids adapt from 1→2→3→4 columns
- Sections have responsive padding using spacing scale
- Navigation adapts to mobile
- Touch-friendly interactions (48px minimum touch targets)

## Customization

### Changing Design System Values

Edit `_variables.scss` to update spacing, fonts, transitions, etc.

### Changing Colors

Edit `_colors.scss` to update theme colors or brand colors.

### Adding New Components

Add to `_components.scss` or create a new partial and import in `main.scss`. Always use design system variables:

```scss
.my-component {
    padding: spacing(lg);
    font-size: font-size(xl);
    border-radius: radius(md);
    transition: all transition(base) easing(smooth);
}
```

### Modifying Animations

Edit `_utilities.scss` keyframes section (keep minimal for performance).

## Troubleshooting

### Styles not applying

1. Ensure `main.scss` is imported in your layout
2. Check Tailwind directives are at the top of `main.scss`
3. Verify partial imports are in correct order (variables → colors → others)

### Build errors

1. Check for SASS syntax errors
2. Ensure all partials use `_` prefix
3. Verify import paths are correct
4. Check that `@use "sass:map"` is present where needed

### Variables not working

1. Ensure `_variables.scss` is imported before other partials
2. Check function names: `spacing()`, `font-size()`, etc.
3. Verify the key exists in the variable map

## Best Practices

1. **Always use design system variables** instead of hardcoded values
2. **Use helper functions** for spacing, fonts, transitions
3. **Test in different viewport sizes** at all breakpoints
4. **Verify accessibility** with keyboard navigation and screen readers
5. **Keep transitions fast** (use design system transition values)
6. **Use semantic HTML** for better structure and accessibility
7. **Follow HSL color format** for consistency with theme
8. **Respect reduced motion** preferences

## Design Principles

1. **Centralized variables**: No arbitrary numeric values
2. **Modern vibrant theme**: Professional with full light/dark mode support
3. **Minimal animations**: Only decorative, respects preferences
4. **WCAG compliant**: Accessible to all users
5. **Mobile-first**: Responsive from 320px to 4K
6. **Semantic HTML**: Proper use of HTML5 elements
7. **Performance-focused**: Minimal CSS, fast transitions

## Theme Switching

The portfolio includes a theme toggle button that:
- **Defaults to light mode** for a bright, welcoming experience
- **Respects system preferences** (prefers-color-scheme)
- **Persists user choice** in localStorage
- **Smooth transitions** between themes
- **Accessible** with proper ARIA labels

---

**Last Updated**: 2025-11-03
**Theme**: Modern Vibrant (Light/Dark)
**Default Mode**: Light
**Design System**: Centralized variables with helper functions
