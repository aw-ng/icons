# icons

A set of reusable icons useful for React applications..

It ships with a reusable **Icon** component for rendering SVG icons consistently across the application. It accepts the `name`, `color`, `size`, `containerStyle`, and `weight` props to customize the icon's appearance and presentation.

Internally, the component renders a native `<svg>` element containing one or more `<path>` elements. The `name` prop is used to resolve and render the corresponding icon from a predefined collection of imported SVG paths.

## Getting Started

Install via NPM like so:

```bash
npm install @aw-ng/icons
```

or use Yarn:

```bash
yarn add @aw-ng/icons
```

## How To Use

```js
import { Icon } from '@aw-ng/icons';

const Avatar = (): JSX.Element => {
  return(
    <>
      <Icon
        name="bell"
        color="#ff0000"
        size={32}
        weight={2}
      />
      <span>John Doe</span>
    </>
  );
}

export default Avatar;
```

## Props

- name _`{string}`_ This represents the name of the icon to display. If the name doesn't match a known icon, no icon is rendered.
- color _`{string}`_ This represents the stroke color of the icon. The default is `#000`.
- size _`{number}`_ This represents the width & height of the icon's SVG. The default is `24`.
- containerStyle _`{Object}`_ This represents an object that overrides the current inline styles of the icon's wrapping container `div` (Optional).
- weight _`{number}`_ This represents the stroke width of the icon. The default is `1`.

## Icons

- [Icons](#icons)
  - [Bell](#bell)
