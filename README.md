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
| <img src="./src/raw/add-column-after-outline.svg" width="30" alt="add-column-after-outline"> | [add-column-after-outline](./src/icons/AddColumnAfterOutline.tsx) |
| <img src="./src/raw/add-column-before-outline.svg" width="30" alt="add-column-before-outline"> | [add-column-before-outline](./src/icons/AddColumnBeforeOutline.tsx) |
| <img src="./src/raw/address-book-outline.svg" width="30" alt="address-book-outline"> | [address-book-outline](./src/icons/AddressBookOutline.tsx) |
| <img src="./src/raw/address-book-solid.svg" width="30" alt="address-book-solid"> | [address-book-solid](./src/icons/AddressBookSolid.tsx) |
| <img src="./src/raw/adjustments-horizontal-outline.svg" width="30" alt="adjustments-horizontal-outline"> | [adjustments-horizontal-outline](./src/icons/AdjustmentsHorizontalOutline.tsx) |
| <img src="./src/raw/adjustments-horizontal-solid.svg" width="30" alt="adjustments-horizontal-solid"> | [adjustments-horizontal-solid](./src/icons/AdjustmentsHorizontalSolid.tsx) |
| <img src="./src/raw/adjustments-vertical-outline.svg" width="30" alt="adjustments-vertical-outline"> | [adjustments-vertical-outline](./src/icons/AdjustmentsVerticalOutline.tsx) |
| <img src="./src/raw/adjustments-vertical-solid.svg" width="30" alt="adjustments-vertical-solid"> | [adjustments-vertical-solid](./src/icons/AdjustmentsVerticalSolid.tsx) |
| <img src="./src/raw/align-center-outline.svg" width="30" alt="align-center-outline"> | [align-center-outline](./src/icons/AlignCenterOutline.tsx) |
| <img src="./src/raw/align-justify-outline.svg" width="30" alt="align-justify-outline"> | [align-justify-outline](./src/icons/AlignJustifyOutline.tsx) |
| <img src="./src/raw/align-left-outline.svg" width="30" alt="align-left-outline"> | [align-left-outline](./src/icons/AlignLeftOutline.tsx) |
| <img src="./src/raw/align-right-outline.svg" width="30" alt="align-right-outline"> | [align-right-outline](./src/icons/AlignRightOutline.tsx) |
| <img src="./src/raw/angle-down-outline.svg" width="30" alt="angle-down-outline"> | [angle-down-outline](./src/icons/AngleDownOutline.tsx) |
| <img src="./src/raw/angle-left-outline.svg" width="30" alt="angle-left-outline"> | [angle-left-outline](./src/icons/AngleLeftOutline.tsx) |
| <img src="./src/raw/angle-right-outline.svg" width="30" alt="angle-right-outline"> | [angle-right-outline](./src/icons/AngleRightOutline.tsx) |
| <img src="./src/raw/angle-up-outline.svg" width="30" alt="angle-up-outline"> | [angle-up-outline](./src/icons/AngleUpOutline.tsx) |
| <img src="./src/raw/annotation-outline.svg" width="30" alt="annotation-outline"> | [annotation-outline](./src/icons/AnnotationOutline.tsx) |
| <img src="./src/raw/annotation-solid.svg" width="30" alt="annotation-solid"> | [annotation-solid](./src/icons/AnnotationSolid.tsx) |
| <img src="./src/raw/api-key-outline.svg" width="30" alt="api-key-outline"> | [api-key-outline](./src/icons/ApiKeyOutline.tsx) |
| <img src="./src/raw/apple-full-outline.svg" width="30" alt="apple-full-outline"> | [apple-full-outline](./src/icons/AppleFullOutline.tsx) |
| <img src="./src/raw/apple-full-solid.svg" width="30" alt="apple-full-solid"> | [apple-full-solid](./src/icons/AppleFullSolid.tsx) |
| <img src="./src/raw/apple-solid.svg" width="30" alt="apple-solid"> | [apple-solid](./src/icons/AppleSolid.tsx) |
| <img src="./src/raw/archive-arrow-down-outline.svg" width="30" alt="archive-arrow-down-outline"> | [archive-arrow-down-outline](./src/icons/ArchiveArrowDownOutline.tsx) |
| <img src="./src/raw/archive-arrow-down-solid.svg" width="30" alt="archive-arrow-down-solid"> | [archive-arrow-down-solid](./src/icons/ArchiveArrowDownSolid.tsx) |
| <img src="./src/raw/archive-outline.svg" width="30" alt="archive-outline"> | [archive-outline](./src/icons/ArchiveOutline.tsx) |
| <img src="./src/raw/archive-solid.svg" width="30" alt="archive-solid"> | [archive-solid](./src/icons/ArchiveSolid.tsx) |
| <img src="./src/raw/arrow-down-outline.svg" width="30" alt="arrow-down-outline"> | [arrow-down-outline](./src/icons/ArrowDownOutline.tsx) |
| <img src="./src/raw/arrow-down-to-bracket-outline.svg" width="30" alt="arrow-down-to-bracket-outline"> | [arrow-down-to-bracket-outline](./src/icons/ArrowDownToBracketOutline.tsx) |
| <img src="./src/raw/arrow-left-outline.svg" width="30" alt="arrow-left-outline"> | [arrow-left-outline](./src/icons/ArrowLeftOutline.tsx) |
| <img src="./src/raw/arrow-left-to-bracket-outline.svg" width="30" alt="arrow-left-to-bracket-outline"> | [arrow-left-to-bracket-outline](./src/icons/ArrowLeftToBracketOutline.tsx) |
| <img src="./src/raw/arrow-right-alt-outline.svg" width="30" alt="arrow-right-alt-outline"> | [arrow-right-alt-outline](./src/icons/ArrowRightAltOutline.tsx) |
| <img src="./src/raw/bell-outline.svg" width="30" alt="bell-outline"> | [bell-outline](./src/icons/BellOutline.tsx) |
| <img src="./src/raw/bitcoin-solid.svg" width="30" alt="bitcoin-solid"> | [bitcoin-solid](./src/icons/BitcoinSolid.tsx) |
| <img src="./src/raw/bookmark-solid.svg" width="30" alt="bookmark-solid"> | [bookmark-solid](./src/icons/BookmarkSolid.tsx) |
| <img src="./src/raw/book-open-solid.svg" width="30" alt="book-open-solid"> | [book-open-solid](./src/icons/BookOpenSolid.tsx) |
| <img src="./src/raw/book-solid.svg" width="30" alt="book-solid"> | [book-solid](./src/icons/BookSolid.tsx) |
| <img src="./src/raw/briefcase-outline.svg" width="30" alt="briefcase-outline"> | [briefcase-outline](./src/icons/BriefcaseOutline.tsx) |
| <img src="./src/raw/briefcase-solid.svg" width="30" alt="briefcase-solid"> | [briefcase-solid](./src/icons/BriefcaseSolid.tsx) |
| <img src="./src/raw/clipboard-check-outline.svg" width="30" alt="clipboard-check-outline"> | [clipboard-check-outline](./src/icons/ClipboardCheckOutline.tsx) |
| <img src="./src/raw/clipboard-check-solid.svg" width="30" alt="clipboard-check-solid"> | [clipboard-check-solid](./src/icons/ClipboardCheckSolid.tsx) |
| <img src="./src/raw/clipboard-solid.svg" width="30" alt="clipboard-solid"> | [clipboard-solid](./src/icons/ClipboardSolid.tsx) |
| <img src="./src/raw/clock-solid.svg" width="30" alt="clock-solid"> | [clock-solid](./src/icons/ClockSolid.tsx) |
| <img src="./src/raw/cloud-arrow-up-solid.svg" width="30" alt="cloud-arrow-up-solid"> | [cloud-arrow-up-solid](./src/icons/CloudArrowUpSolid.tsx) |
| <img src="./src/raw/egg-solid.svg" width="30" alt="egg-solid"> | [egg-solid](./src/icons/EggSolid.tsx) |
| <img src="./src/raw/envelope-solid.svg" width="30" alt="envelope-solid"> | [envelope-solid](./src/icons/EnvelopeSolid.tsx) |
