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
| <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10.0419c-1.3902 0-1.3935-1.1249-4.20643-1.037-1.73056.05408-3.15551 2.2303-2.71168 5.3081C5.35949 16.2381 6.98619 21 8.99172 21c2.00548 0 2.07358-.8508 3.00828-.8508.9347 0 .8551.8508 3.0083.8508s3.6322-4.7619 3.9098-6.687c.4438-3.0778-.9811-5.25402-2.7117-5.3081-2.8129-.0879-2.8162 1.037-4.2064 1.037Zm2.3598-4.2126c-.8779.74829-1.8612.71957-2.7221.71957 0-.62576.0792-1.94012.8609-2.76911.7817-.82898 2.1271-.7664 2.6434-.7664 0 .59448.0956 2.06766-.7822 2.81594Z"/></svg> | [apple-full-outline](./src/icons/AppleFullOutline.tsx) |
| <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/></svg> | [bell-outline](./src/icons/BellOutline.tsx) |

