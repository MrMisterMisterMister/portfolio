# Layout Components

Modern, semantic layout components for building consistent, accessible, and maintainable page structures.

## Architecture

These components follow a **composition pattern** where complex layouts are built by combining simple, single-purpose components. Each component:

- Uses **semantic HTML** elements
- Has a **single responsibility**
- Is **fully typed** with TypeScript
- Is **portable** and reusable across projects
- Uses **custom SCSS** (no utility classes)
- Includes comprehensive **JSDoc documentation**

---

## Components

### Container

**Purpose**: Constrains content width and centers it horizontally.

**Props**:
- `size`: `sm` | `md` | `lg` | `xl` | `2xl` | `full` (default: `2xl`)
- `padding`: `none` | `sm` | `base` | `lg` | `xl` (default: `lg`)
- `as`: HTML element type (default: `div`)
- `class`: Additional CSS classes

**Example**:
```astro
<Container size="xl" padding="lg">
  <p>Centered content with max-width 1280px</p>
</Container>
```

**Rendered sizes**:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px (default)
- `full`: 100%

---

### Stack

**Purpose**: Arranges children vertically with consistent spacing using flexbox gap.

**Props**:
- `gap`: `xs` | `sm` | `base` | `md` | `lg` | `xl` | `2xl` | `3xl` | `4xl` | `5xl` | `6xl` (default: `base`)
- `align`: `start` | `center` | `end` | `stretch` (horizontal alignment)
- `justify`: `start` | `center` | `end` | `between` | `around` | `evenly` (vertical distribution)
- `as`: HTML element type (default: `div`)
- `class`: Additional CSS classes

**Example**:
```astro
<Stack gap="lg" align="center">
  <h1>Title</h1>
  <p>Spaced content</p>
  <button>Action</button>
</Stack>
```

**Gap sizes**:
- `xs`: 4px
- `sm`: 8px
- `base`: 16px (default)
- `md`: 12px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 40px
- `3xl`: 48px
- `4xl`: 64px
- `5xl`: 96px
- `6xl`: 128px

---

### Grid

**Purpose**: Creates responsive grid layouts with predefined column patterns.

**Props**:
- `columns`: `1` | `2` | `3` | `4` | `5` | `6` (default: `1`)
- `gap`: `xs` | `sm` | `base` | `md` | `lg` | `xl` | `2xl` | `3xl` (default: `lg`)
- `as`: HTML element type (default: `div`)
- `class`: Additional CSS classes

**Example**:
```astro
<Grid columns={3} gap="xl">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

**Responsive behavior**:
- `columns={2}`: 1 col mobile → 2 cols tablet+
- `columns={3}`: 1 col mobile → 2 cols tablet → 3 cols desktop
- `columns={4}`: 2 cols mobile → 3 cols tablet → 4 cols desktop

---

### Section

**Purpose**: Semantic section wrapper with consistent padding and optional background variants.

**Props**:
- `id`: Section ID for navigation anchors
- `spacing`: `sm` | `base` | `lg` | `xl` | `2xl` (default: `xl`)
- `variant`: `default` | `accent` | `muted` (default: `default`)
- `containerSize`: `sm` | `md` | `lg` | `xl` | `2xl` | `full` (default: `2xl`)
- `class`: Additional CSS classes

**Example**:
```astro
<Section id="about" spacing="xl" variant="default">
  <h2>About Section</h2>
  <p>Content with consistent section padding</p>
</Section>
```

**Variants**:
- `default`: Transparent background
- `accent`: Subtle accent color background
- `muted`: Muted background color

---

## Usage Patterns

### Basic Page Section

```astro
<Section id="services">
  <Stack gap="3xl">
    <Stack gap="md" align="center" as="header">
      <h2>Our Services</h2>
      <p>Subtitle text</p>
    </Stack>

    <Grid columns={3} gap="lg">
      <Card>Service 1</Card>
      <Card>Service 2</Card>
      <Card>Service 3</Card>
    </Grid>
  </Stack>
</Section>
```

### Nested Layouts

```astro
<Section id="features">
  <Container size="xl">
    <Stack gap="xl">
      <h2>Features</h2>

      <Grid columns={2} gap="lg">
        <Stack gap="md">
          <h3>Feature 1</h3>
          <p>Description</p>
        </Stack>

        <Stack gap="md">
          <h3>Feature 2</h3>
          <p>Description</p>
        </Stack>
      </Grid>
    </Stack>
  </Container>
</Section>
```

### Semantic HTML Elements

Components support the `as` prop to render as different semantic elements:

```astro
<!-- Article with Stack -->
<Stack gap="lg" as="article">
  <h3>Blog Post Title</h3>
  <p>Content...</p>
</Stack>

<!-- Navigation with Grid -->
<Grid columns={4} gap="base" as="nav">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
</Grid>

<!-- Header with Container -->
<Container size="2xl" as="header">
  <p>Site Header</p>
</Container>
```

---

## Benefits

### **Clarity**
Components make layout intent explicit:
- `<Stack gap="lg">` clearly shows vertical spacing
- `<Grid columns={3}>` shows a 3-column layout
- No mental parsing of utility classes needed

### **Reusability**
- Copy components between projects instantly
- No framework dependencies
- Self-contained with scoped styles

### **Maintainability**
- Change spacing globally by updating design tokens
- Consistent spacing across entire site
- Easy to refactor and update

### **Documentation**
- Component props are self-documenting
- TypeScript provides autocomplete
- JSDoc comments explain usage

### **Accessibility**
- Semantic HTML by default
- Proper focus states
- ARIA attributes where needed

---

## Migration Example

**Before** (utility classes):
```astro
<section id="about" class="section">
  <div class="space-large">
    <div class="max-w-4xl mx-auto space-y-6">
      <div class="grid grid-cols-3 gap-6">
        ...
      </div>
    </div>
  </div>
</section>
```

**After** (layout components):
```astro
<Section id="about">
  <Stack gap="6xl">
    <Container size="xl">
      <Stack gap="xl">
        <Grid columns={3} gap="lg">
          ...
        </Grid>
      </Stack>
    </Container>
  </Stack>
</Section>
```

**Improvements**:
- Semantic HTML (`<section>`)
- Self-documenting structure
- Type-safe props
- No cryptic class names
- Easier to read and maintain

---

## Best Practices

### 1. **Use semantic elements**
```astro
<!-- Good -->
<Stack gap="lg" as="article">
  <h3>Title</h3>
  <p>Content</p>
</Stack>

<!-- Avoid -->
<Stack gap="lg">
  <div class="article">
    <h3>Title</h3>
    <p>Content</p>
  </div>
</Stack>
```

### 2. **Compose, don't configure**
```astro
<!-- Good: Compose simple components -->
<Container size="lg">
  <Stack gap="xl">
    <h2>Title</h2>
    <Grid columns={3} gap="lg">
      ...
    </Grid>
  </Stack>
</Container>

<!-- Avoid: Complex nested configurations -->
<ComplexLayout
  containerSize="lg"
  stackGap="xl"
  gridColumns={3}
  gridGap="lg"
>
  ...
</ComplexLayout>
```

### 3. **Use design tokens for spacing**
Always use the named gap sizes (`xs`, `sm`, `base`, etc.) instead of arbitrary values. This ensures consistency across the site.

### 4. **Leverage the `as` prop**
Use the `as` prop to render semantic HTML without adding extra wrapper divs.

---

## Performance

All layout components:
- Generate **minimal CSS** (< 1KB each)
- Use **scoped styles** (no global pollution)
- Leverage **native CSS** (flexbox, grid)
- **Zero JavaScript** runtime overhead
- Are **tree-shakeable**

---

## Extending

To create project-specific layout components, follow the same pattern:

```astro
---
/**
 * Hero Component
 *
 * Full-height hero section with background image
 */
interface Props {
  backgroundImage?: string;
  overlay?: boolean;
}

const { backgroundImage, overlay = true } = Astro.props;
---

<section class="hero">
  {backgroundImage && (
    <div class="hero-bg" style={`background-image: url(${backgroundImage})`}>
      {overlay && <div class="hero-overlay" />}
    </div>
  )}
  <div class="hero-content">
    <slot />
  </div>
</section>

<style lang="scss">
  @use "@/styles/abstracts" as *;

  .hero {
    position: relative;
    min-height: 100vh;
    // ... styles using design tokens
  }
</style>
```

---

## See Also

- [Design System Documentation](../../styles/README.md)
- [ITCSS Architecture](../../styles/main.scss)
- [Component API Reference](../README.md)
