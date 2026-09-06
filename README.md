# icons

A set of reusable icons made for React applications..

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
        name="bell-outline"
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

## Development

- Clone repo to local desktop (you can use any other location of your choice):
  - `git clone git@github.com:aw-ng/icons.git`
- Install the repo you just cloned by running:
  - `yarn install`
- Setup local React test env (as before, you can use any location of your choice):
  - `npm create vite@latest test-icons -- --template react-ts`.
- You should now have something like so:
  - `~/Desktop/icons      ← aw-ng repo`
  - `~/Desktop/test-icons ← React app to test it in`
- Run `yarn link` inside `~/Desktop/icons` folder to link npm package globally.
- You should see something similar to: `success Registered "@aw-ng/icons".`
- Run `yarn link @aw-ng/icons` inside `~/Desktop/test-icons` folder to symlink this.
- You can verify that this is linked correctly using: `ls -l node_modules/@aw-ng/icons`.
- You should now be able to test `@aw-ng/icons` easily from your `test-icons` repo.

## Icons

| Icon | Link |
| - | - |
| <img src="./src/raw/apple-full-outline.svg" width="30" alt="apple-full-outline"> | [apple-full-outline](./src/icons/AppleFullOutline.tsx) |
| <img src="./src/raw/bell-outline.svg" width="30" alt="bell-outline"> | [bell-outline](./src/icons/BellOutline.tsx) |

