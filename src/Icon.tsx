import { JSX, CSSProperties } from 'react';
import { iconsMap } from './data/mappings';

export interface IconProps {
	name?: string;
	color?: string;
	size?: number;
	containerStyle?: CSSProperties;
	weight?: number;
}

/**
 * Icon component.
 *
 * This component is used to display an Icon
 * on the current screen.
 *
 * It contains an SVG component that is used
 * to display the icon's path.
 *
 * @param {IconProps}     props                Icon props.
 * @param {string}        props.name           Name of the Icon.
 * @param {string}        props.color          Color of the Icon.
 * @param {number}        props.size           Size of the Icon (both width and height).
 * @param {CSSProperties} props.containerStyle Styles specifically for the Icon container.
 * @param {number}        props.weight         Stroke width of the Icon.
 *
 * @returns {JSX.Element} The Icon component.
 */
const Icon = ({
	name = '',
	color = '#000',
	size = 24,
	containerStyle = {},
	weight = 1,
}: IconProps): JSX.Element | null => {
	const customContainerStyle: CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		...containerStyle,
	};

  if (!name || !iconsMap[name]) {
    return null;
  }

	return(
		<div style={customContainerStyle}>
			<svg
				viewBox="0 0 24 24"
				width={size}
				height={size}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d={iconsMap[name]}
					stroke={color}
					strokeWidth={weight}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

export default Icon;
