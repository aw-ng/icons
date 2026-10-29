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

## Contributors

[badasswp](https://github.com/badasswp), [chibuzorihueze](https://github.com/chibuzorihueze), [kelechiorunta](https://github.com/kelechiorunta), [activist507](https://github.com/activist507), [tegaguru](https://github.com/tegaguru)

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
| <img src="./src/raw/arrow-right-alt-solid.svg" width="30" alt="arrow-right-alt-solid"> | [arrow-right-alt-solid](./src/icons/ArrowRightAltSolid.tsx) |
| <img src="./src/raw/arrow-right-outline.svg" width="30" alt="arrow-right-outline"> | [arrow-right-outline](./src/icons/ArrowRightOutline.tsx) |
| <img src="./src/raw/arrow-right-to-bracket-outline.svg" width="30" alt="arrow-right-to-bracket-outline"> | [arrow-right-to-bracket-outline](./src/icons/ArrowRightToBracketOutline.tsx) |
| <img src="./src/raw/arrow-sort-letters-outline.svg" width="30" alt="arrow-sort-letters-outline"> | [arrow-sort-letters-outline](./src/icons/ArrowSortLettersOutline.tsx) |
| <img src="./src/raw/arrow-up-down-outline.svg" width="30" alt="arrow-up-down-outline"> | [arrow-up-down-outline](./src/icons/ArrowUpDownOutline.tsx) |
| <img src="./src/raw/arrow-up-from-bracket-outline.svg" width="30" alt="arrow-up-from-bracket-outline"> | [arrow-up-from-bracket-outline](./src/icons/ArrowUpFromBracketOutline.tsx) |
| <img src="./src/raw/arrow-up-outline.svg" width="30" alt="arrow-up-outline"> | [arrow-up-outline](./src/icons/ArrowUpOutline.tsx) |
| <img src="./src/raw/arrow-up-right-down-left-outline.svg" width="30" alt="arrow-up-right-down-left-outline"> | [arrow-up-right-down-left-outline](./src/icons/ArrowUpRightDownLeftOutline.tsx) |
| <img src="./src/raw/arrow-up-right-from-square-outline.svg" width="30" alt="arrow-up-right-from-square-outline"> | [arrow-up-right-from-square-outline](./src/icons/ArrowUpRightFromSquareOutline.tsx) |
| <img src="./src/raw/arrow-up-right-from-square-solid.svg" width="30" alt="arrow-up-right-from-square-solid"> | [arrow-up-right-from-square-solid](./src/icons/ArrowUpRightFromSquareSolid.tsx) |
| <img src="./src/raw/atom-outline.svg" width="30" alt="atom-outline"> | [atom-outline](./src/icons/AtomOutline.tsx) |
| <img src="./src/raw/award-outline.svg" width="30" alt="award-outline"> | [award-outline](./src/icons/AwardOutline.tsx) |
| <img src="./src/raw/award-solid.svg" width="30" alt="award-solid"> | [award-solid](./src/icons/AwardSolid.tsx) |
| <img src="./src/raw/badge-check-outline.svg" width="30" alt="badge-check-outline"> | [badge-check-outline](./src/icons/BadgeCheckOutline.tsx) |
| <img src="./src/raw/badge-check-solid.svg" width="30" alt="badge-check-solid"> | [badge-check-solid](./src/icons/BadgeCheckSolid.tsx) |
| <img src="./src/raw/ban-outline.svg" width="30" alt="ban-outline"> | [ban-outline](./src/icons/BanOutline.tsx) |
| <img src="./src/raw/bars-from-left-outline.svg" width="30" alt="bars-from-left-outline"> | [bars-from-left-outline](./src/icons/BarsFromLeftOutline.tsx) |
| <img src="./src/raw/bars-outline.svg" width="30" alt="bars-outline"> | [bars-outline](./src/icons/BarsOutline.tsx) |
| <img src="./src/raw/battery-full-outline.svg" width="30" alt="battery-full-outline"> | [battery-full-outline](./src/icons/BatteryFullOutline.tsx) |
| <img src="./src/raw/battery-full-solid.svg" width="30" alt="battery-full-solid"> | [battery-full-solid](./src/icons/BatteryFullSolid.tsx) |
| <img src="./src/raw/bell-active-outline.svg" width="30" alt="bell-active-outline"> | [bell-active-outline](./src/icons/BellActiveOutline.tsx) |
| <img src="./src/raw/bell-active-solid.svg" width="30" alt="bell-active-solid"> | [bell-active-solid](./src/icons/BellActiveSolid.tsx) |
| <img src="./src/raw/bell-outline.svg" width="30" alt="bell-outline"> | [bell-outline](./src/icons/BellOutline.tsx) |
| <img src="./src/raw/bell-solid.svg" width="30" alt="bell-solid"> | [bell-solid](./src/icons/BellSolid.tsx) |
| <img src="./src/raw/bitcoin-solid.svg" width="30" alt="bitcoin-solid"> | [bitcoin-solid](./src/icons/BitcoinSolid.tsx) |
| <img src="./src/raw/bookmark-outline.svg" width="30" alt="bookmark-outline"> | [bookmark-outline](./src/icons/BookmarkOutline.tsx) |
| <img src="./src/raw/bookmark-solid.svg" width="30" alt="bookmark-solid"> | [bookmark-solid](./src/icons/BookmarkSolid.tsx) |
| <img src="./src/raw/book-open-outline.svg" width="30" alt="book-open-outline"> | [book-open-outline](./src/icons/BookOpenOutline.tsx) |
| <img src="./src/raw/book-open-solid.svg" width="30" alt="book-open-solid"> | [book-open-solid](./src/icons/BookOpenSolid.tsx) |
| <img src="./src/raw/book-outline.svg" width="30" alt="book-outline"> | [book-outline](./src/icons/BookOutline.tsx) |
| <img src="./src/raw/book-solid.svg" width="30" alt="book-solid"> | [book-solid](./src/icons/BookSolid.tsx) |
| <img src="./src/raw/briefcase-outline.svg" width="30" alt="briefcase-outline"> | [briefcase-outline](./src/icons/BriefcaseOutline.tsx) |
| <img src="./src/raw/briefcase-solid.svg" width="30" alt="briefcase-solid"> | [briefcase-solid](./src/icons/BriefcaseSolid.tsx) |
| <img src="./src/raw/bug-outline.svg" width="30" alt="bug-outline"> | [bug-outline](./src/icons/BugOutline.tsx) |
| <img src="./src/raw/bug-solid.svg" width="30" alt="bug-solid"> | [bug-solid](./src/icons/BugSolid.tsx) |
| <img src="./src/raw/building-outline.svg" width="30" alt="building-outline"> | [building-outline](./src/icons/BuildingOutline.tsx) |
| <img src="./src/raw/building-solid.svg" width="30" alt="building-solid"> | [building-solid](./src/icons/BuildingSolid.tsx) |
| <img src="./src/raw/bullhorn-outline.svg" width="30" alt="bullhorn-outline"> | [bullhorn-outline](./src/icons/BullhornOutline.tsx) |
| <img src="./src/raw/bullhorn-solid.svg" width="30" alt="bullhorn-solid"> | [bullhorn-solid](./src/icons/BullhornSolid.tsx) |
| <img src="./src/raw/calendar-edit-outline.svg" width="30" alt="calendar-edit-outline"> | [calendar-edit-outline](./src/icons/CalendarEditOutline.tsx) |
| <img src="./src/raw/calendar-edit-solid.svg" width="30" alt="calendar-edit-solid"> | [calendar-edit-solid](./src/icons/CalendarEditSolid.tsx) |
| <img src="./src/raw/calendar-month-outline.svg" width="30" alt="calendar-month-outline"> | [calendar-month-Outline](./src/icons/CalendarMonthOutline.tsx) |
| <img src="./src/raw/calendar-month-solid.svg" width="30" alt="calendar-month-solid"> | [calendar-month-solid](./src/icons/CalendarMonthSolid.tsx) |
| <img src="./src/raw/calendar-plus-outline.svg" width="30" alt="calendar-plus-outline"> | [calendar-plus-outline](./src/icons/CalendarPlusOutline.tsx) |
| <img src="./src/raw/calendar-plus-solid.svg" width="30" alt="calendar-plus-solid"> | [calendar-plus-solid](./src/icons/CalendarPlusSolid.tsx) |
| <img src="./src/raw/calendar-week-solid.svg" width="30" alt="calendar-week-solid"> | [calendar-week-solid](./src/icons/CalendarWeekSolid.tsx) |
| <img src="./src/raw/calendar-week-outline.svg" width="30" alt="calendar-week-outline"> | [calendar-week-outline](./src/icons/CalendarWeekOutline.tsx) |
| <img src="./src/raw/camera-photo-outline.svg" width="30" alt="camera-photo-outline"> | [camara-photo-outline](./src/icons/CameraPhotoOutline.tsx) |
| <img src="./src/raw/camera-photo-solid.svg" width="30" alt="camera-photo-solid"> | [camara-photo-solid](./src/icons/CameraPhotoSoild.tsx) |
| <img src="./src/raw/chart-pie-outline.svg" width="30" alt="chart-pie-outline"> | [chart-pie-outline](./src/icons/ChartPieOutline.tsx) |
| <img src="./src/raw/check-circle-outline.svg" width="30" alt="check-circle-outline"> | [check-circle-outline](./src/icons/CheckCircleoutline.tsx) |
| <img src="./src/raw/check-circle-solid.svg" width="30" alt="check-circle-solid"> | [check-circle-solid](./src/icons/CheckCircleSolid.tsx) |
| <img src="./src/raw/check-outline.svg" width="30" alt="check-outline"> | [check-outline](./src/icons/CheckOutline.tsx) |
| <img src="./src/raw/chevron-double-down-outline.svg" width="30" alt="chevron-double-down-outline"> | [chevron-double-down-outline](./src/icons/ChevronDoubleDownOutline.tsx) |
| <img src="./src/raw/chevron-double-left-outline.svg" width="30" alt="chevron-double-left-outline"> | [chevron-double-left-outline](./src/icons/ChevronDoubleLeftOutline.tsx) |
| <img src="./src/raw/chevron-double-right-outline.svg" width="30" alt="chevron-double-right-outline"> | [chevron-double-right-outline](./src/icons/ChevronDoubleRightOutline.tsx) |
| <img src="./src/raw/chevron-double-up-outline.svg" width="30" alt="chevron-double-up-outline"> | [chevron-double-up-outline](./src/icons/ChevronDoubleUpOutline.tsx) |
| <img src="./src/raw/chevron-down-outline.svg" width="30" alt="chevron-down-outline"> | [chevron-down-outline](./src/icons/ChevronDownOutline.tsx) |
| <img src="./src/raw/chevron-left-outline.svg" width="30" alt="chevron-left-outline"> | [chevron-left-outline](./src/icons/ChevronLeftOutline.tsx) |
| <img src="./src/raw/chevron-right-outline.svg" width="30" alt="chevron-right-outline"> | [chevron-right-outline](./src/icons/ChevronRightOutline.tsx) |
| <img src="./src/raw/chevron-up-outline.svg" width="30" alt="chevron-up-outline"> | [chevron-up-outline](./src/icons/ChevronUpOutline.tsx) |
| <img src="./src/raw/clipboard-check-outline.svg" width="30" alt="clipboard-check-outline"> | [clipboard-check-outline](./src/icons/ClipboardCheckOutline.tsx) |
| <img src="./src/raw/clipboard-check-solid.svg" width="30" alt="clipboard-check-solid"> | [clipboard-check-solid](./src/icons/ClipboardCheckSolid.tsx) |
| <img src="./src/raw/clipboard-outline.svg" width="30" alt="clipboard-outline"> | [clipboard-outline](./src/icons/ClipboardOutline.tsx) |
| <img src="./src/raw/clipboard-solid.svg" width="30" alt="clipboard-solid"> | [clipboard-solid](./src/icons/ClipboardSolid.tsx) |
| <img src="./src/raw/clock-outline.svg" width="30" alt="clock-outline"> | [clock-outline](./src/icons/ClockOutline.tsx) |
| <img src="./src/raw/clock-solid.svg" width="30" alt="clock-solid"> | [clock-solid](./src/icons/ClockSolid.tsx) |
| <img src="./src/raw/cloud-arrow-up-outline.svg" width="30" alt="cloud-arrow-up-outline"> | [cloud-arrow-up-outline](./src/icons/CloudArrowUpOutline.tsx) |
| <img src="./src/raw/cloud-arrow-up-solid.svg" width="30" alt="cloud-arrow-up-solid"> | [cloud-arrow-up-solid](./src/icons/CloudArrowUpSolid.tsx) |
| <img src="./src/raw/code-branch-outline.svg" width="30" alt="code-branch-outline"> | [code-branch-outline](./src/icons/CodeBranchOutline.tsx) |
| <img src="./src/raw/code-branch-solid.svg" width="30" alt="code-branch-solid"> | [code-branch-solid](./src/icons/CodeBranchSolid.tsx) |
| <img src="./src/raw/code-merge-outline.svg" width="30" alt="code-merge-outline"> | [code-merge-outline](./src/icons/CodeMergeOutline.tsx) |
| <img src="./src/raw/code-merge-solid.svg" width="30" alt="code-merge-solid"> | [code-merge-solid](./src/icons/CodeMergeSolid.tsx) |
| <img src="./src/raw/code-outline.svg" width="30" alt="code-outline"> | [code-outline](./src/icons/CodeOutline.tsx) |
| <img src="./src/raw/cog-outline.svg" width="30" alt="cog-outline"> | [cog-outline](./src/icons/CogOutline.tsx) |
| <img src="./src/raw/cog-solid.svg" width="30" alt="cog-solid"> | [cog-solid](./src/icons/CogSolid.tsx) |
| <img src="./src/raw/credit-card-outline.svg" width="30" alt="credit-card-outline"> | [credit-card-outline](./src/icons/CreditCardOutline.tsx) |
| <img src="./src/raw/credit-card-solid.svg" width="30" alt="credit-card-solid"> | [credit-card-solid](./src/icons/CreditCardSolid.tsx) |
| <img src="./src/raw/cube-solid.svg" width="30" alt="cube-solid"> | [cube-solid](./src/icons/CubeSolid.tsx) |
| <img src="./src/raw/database-outline.svg" width="30" alt="database-outline"> | [database-outline](./src/icons/DatabaseOutline.tsx) |
| <img src="./src/raw/database-solid.svg" width="30" alt="database-solid"> | [database-solid](./src/icons/DatabaseSolid.tsx) |
| <img src="./src/raw/device-mobile-outline.svg" width="30" alt="device-mobile-outline"> | [device-mobile-outline](./src/icons/DeviceMobileOutline.tsx) |
| <img src="./src/raw/device-tablet-outline.svg" width="30" alt="device-tablet-outline"> | [device-tablet-outline](./src/icons/DeviceTabletOutline.tsx) |
| <img src="./src/raw/device-tablet-solid.svg" width="30" alt="device-tablet-solid"> | [device-tablet-solid](./src/icons/DeviceTabletSolid.tsx) |
| <img src="./src/raw/document-add-outline.svg" width="30" alt="document-add-outline"> | [document-add-outline](./src/icons/DocumentAddOutline.tsx) |
| <img src="./src/raw/document-add-solid.svg" width="30" alt="document-add-solid"> | [document-add-solid](./src/icons/DocumentAddSolid.tsx) |
| <img src="./src/raw/document-check-outline.svg" width="30" alt="document-check-outline"> | [document-check-outline](./src/icons/DocumentCheckOutline.tsx) |
| <img src="./src/raw/document-check-solid.svg" width="30" alt="document-check-solid"> | [document-check-solid](./src/icons/DocumentCheckSolid.tsx) |
| <img src="./src/raw/document-outline.svg" width="30" alt="document-outline"> | [document-outline](./src/icons/DocumentOutline.tsx) |
| <img src="./src/raw/document-solid.svg" width="30" alt="document-solid"> | [document-solid](./src/icons/DocumentSolid.tsx) |
| <img src="./src/raw/document-text-solid.svg" width="30" alt="document-text-solid"> | [document-text-solid](./src/icons/DocumentTextSolid.tsx) |
| <img src="./src/raw/download-outline.svg" width="30" alt="download-outline"> | [download-outline](./src/icons/DownloadOutline.tsx) |
| <img src="./src/raw/download-solid.svg" width="30" alt="download-solid"> | [download-solid](./src/icons/DownloadSolid.tsx) |
| <img src="./src/raw/edit-outline.svg" width="30" alt="edit-outline"> | [edit-outline](./src/icons/EditOutline.tsx) |
| <img src="./src/raw/edit-solid.svg" width="30" alt="edit-solid"> | [edit-solid](./src/icons/EditSolid.tsx) |
| <img src="./src/raw/egg-outline.svg" width="30" alt="egg-outline"> | [egg-outline](./src/icons/EggOutline.tsx) |
| <img src="./src/raw/egg-solid.svg" width="30" alt="egg-solid"> | [egg-solid](./src/icons/EggSolid.tsx) |
| <img src="./src/raw/envelope-open-outline.svg" width="30" alt="envelope-open-outline"> | [envelope-open-outline](./src/icons/EnvelopeOpenOutline.tsx) |
| <img src="./src/raw/envelope-open-solid.svg" width="30" alt="envelope-open-solid"> | [envelope-open-solid](./src/icons/EnvelopeOpenSolid.tsx) |
| <img src="./src/raw/envelope-outline.svg" width="30" alt="envelope-outline"> | [envelope-outline](./src/icons/EnvelopeOutline.tsx) |
| <img src="./src/raw/envelope-solid.svg" width="30" alt="envelope-solid"> | [envelope-solid](./src/icons/EnvelopeSolid.tsx) |
| <img src="./src/raw/exclamation-circle-outline.svg" width="30" alt="exclamation-circle-outline"> | [exclamation-circle-outline](./src/icons/ExclamationCircleOutline.tsx) |
| <img src="./src/raw/exclamation-circle-solid.svg" width="30" alt="exclamation-circle-solid"> | [exclamation-circle-solid](./src/icons/ExclamationCircleSolid.tsx) |
| <img src="./src/raw/eye-outline.svg" width="30" alt="eye-outline"> | [eye-outline](./src/icons/EyeOutline.tsx) |
| <img src="./src/raw/eye-slash-outline.svg" width="30" alt="eye-slash-outline"> | [eye-slash-outline](./src/icons/EyeSlashOutline.tsx)
| <img src="./src/raw/eye-slash-solid.svg" width="30" alt="eye-slash-solid"> | [eye-slash-solid](./src/icons/EyeSlashSolid.tsx) |
| <img src="./src/raw/eye-solid.svg" width="30" alt="eye-solid"> | [eye-solid](./src/icons/EyeSolid.tsx) |
| <img src="./src/raw/facebook-solid.svg" width="30" alt="facebook-solid"> | [facebook-solid](./src/icons/FacebookSolid.tsx) |
| <img src="./src/raw/file-chart-outline.svg" width="30" alt="file-chart-outline"> | [file-chart-outline](./src/icons/FileChartOutline.tsx) |
| <img src="./src/raw/file-chart-bar-outline.svg" width="30" alt="file-chart-bar-outline"> | [file-chart-bar-outline](./src/icons/FileChartBarOutline.tsx) |
| <img src="./src/raw/file-code-outline.svg" width="30" alt="file-code-outline"> | [file-code-outline](./src/icons/FileCodeOutline.tsx) |
| <img src="./src/raw/file-code-solid.svg" width="30" alt="file-code-solid"> | [file-code-solid](./src/icons/FileCodeSolid.tsx) |
| <img src="./src/raw/file-copy-outline.svg" width="30" alt="file-copy-outline"> | [file-copy-outline](./src/icons/FileCopyOutline.tsx) |
| <img src="./src/raw/file-copy-solid.svg" width="30" alt="file-copy-solid"> | [file-copy-solid](./src/icons/FileCopySolid.tsx) |
| <img src="./src/raw/file-image-outline.svg" width="30" alt="file-image-outline"> | [file-image-outline](./src/icons/FileImageOutline.tsx) |
| <img src="./src/raw/file-image-solid.svg" width="30" alt="file-image-solid"> | [file-image-solid](./src/icons/FileImageSolid.tsx) |
| <img src="./src/raw/file-import-outline.svg" width="30" alt="file-import-outline"> | [file-import-outline](./src/icons/FileImportOutline.tsx) |
| <img src="./src/raw/file-import-solid.svg" width="30" alt="file-import-solid"> | [file-import-solid](./src/icons/FileImportSolid.tsx) |
| <img src="./src/raw/file-music-outline.svg" width="30" alt="file-music-outline"> | [file-music-outline](./src/icons/FileMusicOutline.tsx) |
| <img src="./src/raw/file-music-solid.svg" width="30" alt="file-music-solid"> | [file-music-solid](./src/icons/FileMusicSolid.tsx) |
| <img src="./src/raw/file-pdf-outline.svg" width="30" alt="file-pdf-outline"> | [file-pdf-outline](./src/icons/FilePdfOutline.tsx) |
| <img src="./src/raw/file-pdf-solid.svg" width="30" alt="file-pdf-solid"> | [file-pdf-solid](./src/icons/FilePdfSolid.tsx) |
| <img src="./src/raw/file-video-outline.svg" width="30" alt="file-video-outline"> | [file-video-outline](./src/icons/FileVideoOutline.tsx) |
| <img src="./src/raw/file-video-solid.svg" width="30" alt="file-video-solid"> | [file-video-solid](./src/icons/FileVideoSolid.tsx) |
| <img src="./src/raw/file-word-outline.svg" width="30" alt="file-word-outline"> | [file-word-outline](./src/icons/FileWordOutline.tsx) |
| <img src="./src/raw/file-word-solid.svg" width="30" alt="file-word-solid"> | [file-word-solid](./src/icons/FileWordSolid.tsx) |
| <img src="./src/raw/filter-outline.svg" width="30" alt="filter-outline"> | [filter-outline](./src/icons/FilterOutline.tsx) |
| <img src="./src/raw/filter-solid.svg" width="30" alt="filter-solid"> | [filter-solid](./src/icons/FilterSolid.tsx) |
| <img src="./src/raw/fire-outline.svg" width="30" alt="fire-outline"> | [fire-outline](./src/icons/FireOutline.tsx) |
| <img src="./src/raw/fire-solid.svg" width="30" alt="fire-solid"> | [fire-solid](./src/icons/FireSolid.tsx) |
| <img src="./src/raw/flag-outline.svg" width="30" alt="flag-outline"> | [flag-outline](./src/icons/FlagOutline.tsx) |
| <img src="./src/raw/flag-solid.svg" width="30" alt="flag-solid"> | [flag-solid](./src/icons/FlagSolid.tsx) |
| <img src="./src/raw/flask-outline.svg" width="30" alt="flask-outline"> | [flask-outline](./src/icons/FlaskOutline.tsx) |
| <img src="./src/raw/flask-solid.svg" width="30" alt="flask-solid"> | [flask-solid](./src/icons/FlaskSolid.tsx) |
| <img src="./src/raw/folder-open-outline.svg" width="30" alt="folder-open-outline"> | [folder-open-outline](./src/icons/FolderOpenOutline.tsx) |
| <img src="./src/raw/folder-open-solid.svg" width="30" alt="folder-open-solid"> | [folder-open-solid](./src/icons/FolderOpenSolid.tsx) |
| <img src="./src/raw/folder-outline.svg" width="30" alt="folder-outline"> | [folder-outline](./src/icons/FolderOutline.tsx) |
| <img src="./src/raw/folder-solid.svg" width="30" alt="folder-solid"> | [folder-solid](./src/icons/FolderSolid.tsx) |
| <img src="./src/raw/forward-outline.svg" width="30" alt="forward-outline"> | [forward-outline](./src/icons/ForwardOutline.tsx) |
| <img src="./src/raw/forward-solid.svg" width="30" alt="forward-solid"> | [forward-solid](./src/icons/ForwardSolid.tsx) |
| <img src="./src/raw/gift-box-outline.svg" width="30" alt="gift-box-outline"> | [gift-box-outline](./src/icons/GiftBoxOutline.tsx) |
| <img src="./src/raw/gift-box-solid.svg" width="30" alt="gift-box-solid"> | [gift-box-solid](./src/icons/GiftBoxSolid.tsx) |
| <img src="./src/raw/globe-outline.svg" width="30" alt="globe-outline"> | [globe-outline](./src/icons/GlobeOutline.tsx) |
| <img src="./src/raw/globe-solid.svg" width="30" alt="globe-solid"> | [globe-solid](./src/icons/GlobeSolid.tsx) |
| <img src="./src/raw/google-solid.svg" width="30" alt="google-solid"> | [google-solid](./src/icons/GoogleSolid.tsx) |
| <img src="./src/raw/graduation-cap-outline.svg" width="30" alt="graduation-cap-outline"> | [graduation-cap-outline](./src/icons/GraduationCapOutline.tsx) |
| <img src="./src/raw/graduation-cap-solid.svg" width="30" alt="graduation-cap-solid"> | [graduation-cap-solid](./src/icons/GraduationCapSolid.tsx) |
| <img src="./src/raw/grid-outline.svg" width="30" alt="grid-outline"> | [grid-outline](./src/icons/GridOutline.tsx) |
| <img src="./src/raw/grid-plus-outline.svg" width="30" alt="grid-plus-outline"> | [grid-plus-outline](./src/icons/GridPlusOutline.tsx) |
| <img src="./src/raw/grid-plus-solid.svg" width="30" alt="grid-plus-solid"> | [grid-plus-solid](./src/icons/GridPlusSolid.tsx) |
| <img src="./src/raw/grid-solid.svg" width="30" alt="grid-solid"> | [grid-solid](./src/icons/GridSolid.tsx) |
| <img src="./src/raw/heart-outline.svg" width="30" alt="heart-outline"> | [heart-outline](./src/icons/HeartOutline.tsx) |
| <img src="./src/raw/heart-solid.svg" width="30" alt="heart-solid"> | [heart-solid](./src/icons/HeartSolid.tsx) |
| <img src="./src/raw/home-outline.svg" width="30" alt="home-outline"> | [home-outline](./src/icons/HomeOutline.tsx) |
| <img src="./src/raw/home-solid.svg" width="30" alt="home-solid"> | [home-solid](./src/icons/HomeSolid.tsx) |
| <img src="./src/raw/hourglass-outline.svg" width="30" alt="hourglass-outline"> | [hourglass-outline](./src/icons/HourglassOutline.tsx) |
| <img src="./src/raw/hourglass-solid.svg" width="30" alt="hourglass-solid"> | [hourglass-solid](./src/icons/HourglassSolid.tsx) |
| <img src="./src/raw/image-outline.svg" width="30" alt="image-outline"> | [image-outline](./src/icons/ImageOutline.tsx) |
| <img src="./src/raw/image-solid.svg" width="30" alt="image-solid"> | [image-solid](./src/icons/ImageSolid.tsx) |
| <img src="./src/raw/inbox-outline.svg" width="30" alt="inbox-outline"> | [inbox-outline](./src/icons/InboxOutline.tsx) |
| <img src="./src/raw/inbox-solid.svg" width="30" alt="inbox-solid"> | [inbox-solid](./src/icons/InboxSolid.tsx) |
| <img src="./src/raw/indent-outline.svg" width="30" alt="indent-outline"> | [indent-outline](./src/icons/IndentOutline.tsx) |
| <img src="./src/raw/indent-solid.svg" width="30" alt="indent-solid"> | [indent-solid](./src/icons/IndentSolid.tsx) |
| <img src="./src/raw/Keyboard-outline.svg" width="30" alt="Keyboard-outline"> | [Keyboard-outline](./src/icons/KeyboardOutline.tsx) |
| <img src="./src/raw/Keyboard-solid.svg" width="30" alt="Keyboard-solid"> | [Keyboard-solid](./src/icons/KeyboardSolid.tsx) |
| <img src="./src/raw/language-outline.svg" width="30" alt="language-outline"> | [language-outline](./src/icons/LanguageOutline.tsx) |
| <img src="./src/raw/layers-outline.svg" width="30" alt="layers-outline"> | [layers-outline](./src/icons/LayersOutline.tsx) |
| <img src="./src/raw/layers-solid.svg" width="30" alt="layers-solid"> | [layers-solid](./src/icons/LayersSolid.tsx) |
| <img src="./src/raw/letter-bold-outline.svg" width="30" alt="letter-bold-outline"> | [letter-bold-outline](./src/icons/LetterBoldOutline.tsx) |
| <img src="./src/raw/lock-open-outline.svg" width="30" alt="lock-open-outline"> | [lock-open-outline](./src/icons/LockOpenOutline.tsx) |
| <img src="./src/raw/lock-open-solid.svg" width="30" alt="lock-open-solid"> | [lock-open-solid](./src/icons/LockOpenSolid.tsx) |
| <img src="./src/raw/lock-outline.svg" width="30" alt="lock-outline"> | [lock-outline](./src/icons/LockOutline.tsx) |
| <img src="./src/raw/lock-solid.svg" width="30" alt="lock-solid"> | [lock-solid](./src/icons/LockSolid.tsx) |
| <img src="./src/raw/mail-box-outline.svg" width="30" alt="mail-box-outline"> | [mail-box-outline](./src/icons/MailBoxOutline.tsx) |
| <img src="./src/raw/mail-box-solid.svg" width="30" alt="mail-box-solid"> | [mail-box-solid](./src/icons/MailBoxSolid.tsx) |
| <img src="./src/raw/map-pin-outline.svg" width="30" alt="map-pin-outline"> | [map-pin-outline](./src/icons/MapPinOutline.tsx) |
| <img src="./src/raw/map-pin-solid.svg" width="30" alt="map-pin-solid"> | [map-pin-solid](./src/icons/MapPinSolid.tsx) |
| <img src="./src/raw/microphone-outline.svg" width="30" alt="microphone-outline"> | [microphone-outline](./src/icons/MicrophoneOutline.tsx) |
| <img src="./src/raw/microphone-solid.svg" width="30" alt="microphone-solid"> | [microphone-solid](./src/icons/MicrophoneSolid.tsx) |
| <img src="./src/raw/moon-outline.svg" width="30" alt="moon-outline"> | [moon-outline](./src/icons/MoonOutline.tsx) |
| <img src="./src/raw/moon-solid.svg" width="30" alt="moon-solid"> | [moon-solid](./src/icons/MoonSolid.tsx) |
| <img src="./src/raw/newspaper-outline.svg" width="30" alt="newspaper-outline"> | [newspaper-outline](./src/icons/NewspaperOutline.tsx) |
| <img src="./src/raw/newspaper-solid.svg" width="30" alt="newspaper-solid"> | [newspaper-solid](./src/icons/NewspaperSolid.tsx) |
| <img src="./src/raw/paper-clip-outline.svg" width="30" alt="paper-clip-outline"> | [paper-clip-outline](./src/icons/PaperClipOutline.tsx) |
| <img src="./src/raw/pause-outline.svg" width="30" alt="pause-outline"> | [pause-outline](./src/icons/PauseOutline.tsx) |
| <img src="./src/raw/pause-solid.svg" width="30" alt="pause-solid"> | [pause-solid](./src/icons/PauseSolid.tsx) |
| <img src="./src/raw/pen-outline.svg" width="30" alt="pen-outline"> | [pen-outline](./src/icons/PenOutline.tsx) |
| <img src="./src/raw/pen-solid.svg" width="30" alt="pen-solid"> | [pen-solid](./src/icons/PenSolid.tsx) |
| <img src="./src/raw/phone-outline.svg" width="30" alt="phone-outline"> | [phone-outline](./src/icons/PhoneOutline.tsx) |
| <img src="./src/raw/phone-solid.svg" width="30" alt="phone-solid"> | [phone-solid](./src/icons/PhoneSolid.tsx) |
| <img src="./src/raw/play-outline.svg" width="30" alt="play-outline"> | [play-outline](./src/icons/PlayOutline.tsx) |
| <img src="./src/raw/play-solid.svg" width="30" alt="play-solid"> | [play-solid](./src/icons/PlaySolid.tsx) |
| <img src="./src/raw/printer-outline.svg" width="30" alt="printer-outline"> | [printer-outline](./src/icons/PrinterOutline.tsx) |
| <img src="./src/raw/printer-solid.svg" width="30" alt="printer-solid"> | [printer-solid](./src/icons/PrinterSolid.tsx) |
| <img src="./src/raw/question-circle-outline.svg" width="30" alt="question-circle-outline"> | [question-circle-outline](./src/icons/QuestionCircleOutline.tsx) |
| <img src="./src/raw/question-circle-solid.svg" width="30" alt="question-circle-solid"> | [question-circle-solid](./src/icons/QuestionCircleSolid.tsx) |
| <img src="./src/raw/receipt-outline.svg" width="30" alt="receipt-outline"> | [receipt-outline](./src/icons/ReceiptOutline.tsx) |
| <img src="./src/raw/receipt-solid.svg" width="30" alt="receipt-solid"> | [receipt-solid](./src/icons/ReceiptSolid.tsx) |
| <img src="./src/raw/reply-outline.svg" width="30" alt="reply-outline"> | [reply-outline](./src/icons/ReplyOutline.tsx) |
| <img src="./src/raw/reply-solid.svg" width="30" alt="reply-solid"> | [reply-solid](./src/icons/ReplySolid.tsx) |
| <img src="./src/raw/rocket-outline.svg" width="30" alt="rocket-outline"> | [rocket-outline](./src/icons/RocketOutline.tsx) |
| <img src="./src/raw/rocket-solid.svg" width="30" alt="rocket-solid"> | [rocket-solid](./src/icons/RocketSolid.tsx) |
| <img src="./src/raw/search-outline.svg" width="30" alt="search-outline"> | [search-outline](./src/icons/SearchOutline.tsx) |
| <img src="./src/raw/search-solid.svg" width="30" alt="search-solid"> | [search-solid](./src/icons/SearchSolid.tsx) |
| <img src="./src/raw/server-outline.svg" width="30" alt="server-outline"> | [server-outline](./src/icons/ServerOutline.tsx) |
| <img src="./src/raw/server-solid.svg" width="30" alt="server-solid"> | [server-solid](./src/icons/ServerSolid.tsx) |
| <img src="./src/raw/shield-check-outline.svg" width="30" alt="shield-check-outline"> | [shield-check-outline](./src/icons/ShieldCheckOutline.tsx) |
| <img src="./src/raw/shield-check-solid.svg" width="30" alt="shield-check-solid"> | [shield-check-solid](./src/icons/ShieldCheckSolid.tsx) |
| <img src="./src/raw/shield-outline.svg" width="30" alt="shield-outline"> | [shield-outline](./src/icons/ShieldOutline.tsx) |
| <img src="./src/raw/shield-solid.svg" width="30" alt="shield-solid"> | [shield-solid](./src/icons/ShieldSolid.tsx) |
| <img src="./src/raw/shopping-bag-outline.svg" width="30" alt="shopping-bag-outline"> | [shopping-bag-outline](./src/icons/ShoppingBagOutline.tsx) |
| <img src="./src/raw/shopping-bag-solid.svg" width="30" alt="shopping-bag-solid"> | [shopping-bag-solid](./src/icons/ShoppingBagSolid.tsx) |
| <img src="./src/raw/star-outline.svg" width="30" alt="star-outline"> | [star-outline](./src/icons/StarOutline.tsx) |
| <img src="./src/raw/star-solid.svg" width="30" alt="star-solid"> | [star-solid](./src/icons/StarSolid.tsx) |
| <img src="./src/raw/stop-solid.svg" width="30" alt="stop-solid"> | [stop-solid](./src/icons/StopSolid.tsx) |
| <img src="./src/raw/sun-outline.svg" width="30" alt="sun-outline"> | [sun-outline](./src/icons/SunOutline.tsx) |
| <img src="./src/raw/sun-solid.svg" width="30" alt="sun-solid"> | [sun-solid](./src/icons/SunSolid.tsx) |
| <img src="./src/raw/tag-outline.svg" width="30" alt="tag-outline"> | [tag-outline](./src/icons/TagOutline.tsx) |
| <img src="./src/raw/tag-solid.svg" width="30" alt="tag-solid"> | [tag-solid](./src/icons/TagSolid.tsx) |
| <img src="./src/raw/terminal-outline.svg" width="30" alt="terminal-outline"> | [terminal-outline](./src/icons/TerminalOutline.tsx) |
| <img src="./src/raw/terminal-solid.svg" width="30" alt="terminal-solid"> | [terminal-solid](./src/icons/TerminalSolid.tsx) |
| <img src="./src/raw/thumbs-down-outline.svg" width="30" alt="thumbs-down-outline"> | [thumbs-down-outline](./src/icons/ThumbsDownOutline.tsx) |
| <img src="./src/raw/thumbs-down-solid.svg" width="30" alt="thumbs-down-solid"> | [thumbs-down-solid](./src/icons/ThumbsDownSolid.tsx) |
| <img src="./src/raw/thumbs-up-outline.svg" width="30" alt="thumbs-up-outline"> | [thumbs-up-outline](./src/icons/ThumbsUpOutline.tsx) |
| <img src="./src/raw/thumbs-up-solid.svg" width="30" alt="thumbs-up-solid"> | [thumbs-up-solid](./src/icons/ThumbsUpSolid.tsx) |
| <img src="./src/raw/ticket-outline.svg" width="30" alt="ticket-outline"> | [ticket-outline](./src/icons/TicketOutline.tsx) |
| <img src="./src/raw/ticket-solid.svg" width="30" alt="ticket-solid"> | [ticket-solid](./src/icons/TicketSolid.tsx) |
| <img src="./src/raw/trash-bin-outline.svg" width="30" alt="trash-bin-outline"> | [trash-bin-outline](./src/icons/TrashBinOutline.tsx) |
| <img src="./src/raw/trash-bin-solid.svg" width="30" alt="trash-bin-solid"> | [trash-bin-solid](./src/icons/TrashBinSolid.tsx) |
| <img src="./src/raw/truck-outline.svg" width="30" alt="truck-outline"> | [truck-outline](./src/icons/TruckOutline.tsx) |
| <img src="./src/raw/truck-solid.svg" width="30" alt="truck-solid"> | [truck-solid](./src/icons/TruckSolid.tsx) |
| <img src="./src/raw/undo-outline.svg" width="30" alt="undo-outline"> | [undo-outline](./src/icons/UndoOutline.tsx) |
| <img src="./src/raw/upload-outline.svg" width="30" alt="upload-outline"> | [upload-outline](./src/icons/UploadOutline.tsx) |
| <img src="./src/raw/upload-solid.svg" width="30" alt="upload-solid"> | [upload-solid](./src/icons/UploadSolid.tsx) |
| <img src="./src/raw/user-add-outline.svg" width="30" alt="user-add-outline"> | [user-add-outline](./src/icons/UserAddOutline.tsx) |
| <img src="./src/raw/user-add-solid.svg" width="30" alt="user-add-solid"> | [user-add-solid](./src/icons/UserAddSolid.tsx) |
| <img src="./src/raw/user-circle-outline.svg" width="30" alt="user-circle-outline"> | [user-circle-outline](./src/icons/UserCircleOutline.tsx) |
| <img src="./src/raw/user-circle-solid.svg" width="30" alt="user-circle-solid"> | [user-circle-solid](./src/icons/UserCircleSolid.tsx) |
| <img src="./src/raw/user-outline.svg" width="30" alt="user-outline"> | [user-outline](./src/icons/UserOutline.tsx) |
| <img src="./src/raw/user-solid.svg" width="30" alt="user-solid"> | [user-solid](./src/icons/UserSolid.tsx) |
| <img src="./src/raw/users-outline.svg" width="30" alt="users-outline"> | [users-outline](./src/icons/UsersOutline.tsx) |
| <img src="./src/raw/users-solid.svg" width="30" alt="users-solid"> | [users-solid](./src/icons/UsersSolid.tsx) |
| <img src="./src/raw/video-camera-outline.svg" width="30" alt="video-camera-outline"> | [video-camera-outline](./src/icons/VideoCameraOutline.tsx) |
| <img src="./src/raw/video-camera-solid.svg" width="30" alt="video-camera-solid"> | [video-camera-solid](./src/icons/VideoCameraSolid.tsx) |
| <img src="./src/raw/volume-down-outline.svg" width="30" alt="volume-down-outline"> | [volume-down-outline](./src/icons/VolumeDownOutline.tsx) |
| <img src="./src/raw/volume-down-solid.svg" width="30" alt="volume-down-solid"> | [volume-down-solid](./src/icons/VolumeDownSolid.tsx) |
| <img src="./src/raw/volume-up-outline.svg" width="30" alt="volume-up-outline"> | [volume-up-outline](./src/icons/VolumeUpOutline.tsx) |
| <img src="./src/raw/volume-up-solid.svg" width="30" alt="volume-up-solid"> | [volume-up-solid](./src/icons/VolumeUpSolid.tsx) |
| <img src="./src/raw/wallet-outline.svg" width="30" alt="wallet-outline"> | [wallet-outline](./src/icons/WalletOutline.tsx) |
| <img src="./src/raw/wallet-solid.svg" width="30" alt="wallet-solid"> | [wallet-solid](./src/icons/WalletSolid.tsx) |
| <img src="./src/raw/wand-magic-sparkles-outline.svg" width="30" alt="wand-magic-sparkles-outline"> | [wand-magic-sparkles-outline](./src/icons/WandMagicSparklesOutline.tsx) |
| <img src="./src/raw/wand-magic-sparkles-solid.svg" width="30" alt="wand-magic-sparkles-solid"> | [wand-magic-sparkles-solid](./src/icons/WandMagicSparklesSolid.tsx) |
| <img src="./src/raw/window-outline.svg" width="30" alt="window-outline"> | [window-outline](./src/icons/WindowOutline.tsx) |
| <img src="./src/raw/window-solid.svg" width="30" alt="window-solid"> | [window-solid](./src/icons/WindowSolid.tsx) |
| <img src="./src/raw/youtube-solid.svg" width="30" alt="youtube-solid"> | [youtube-solid](./src/icons/YoutubeSolid.tsx) |
| <img src="./src/raw/zoom-in-solid.svg" width="30" alt="zoom-in-solid"> | [zoom-in-solid](./src/icons/ZoomInSolid.tsx) |
| <img src="./src/raw/zoom-in-outline.svg" width="30" alt="zoom-in-outline"> | [zoom-in-outline](./src/icons/ZoomInOutline.tsx) |
| <img src="./src/raw/zoom-out-outline.svg" width="30" alt="zoom-out-outline"> | [zoom-out-outline](./src/icons/ZoomOutOutline.tsx) |
| <img src="./src/raw/zoom-out-solid.svg" width="30" alt="zoom-out-solid"> | [zoom-out-solid](./src/icons/ZoomOutSolid.tsx) |
