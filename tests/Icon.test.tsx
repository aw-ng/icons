import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Icon from '../src/Icon';

describe('Icon', () => {
	it('matches the snapshot', () => {
		const container = render(<Icon name="bell" />);

		expect(container).toMatchSnapshot();
	});

	it('renders svg & path elements', () => {
		const { container } = render(<Icon name="bell" />);

		expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('path')).toBeInTheDocument();
	});

	it('applies the default width and height to the svg', () => {
		const { container } = render(<Icon name="bell" />);

		const svg = container.querySelector('svg');

		expect(svg).toHaveAttribute('width', '24');
		expect(svg).toHaveAttribute('height', '24');
	});

	it('applies a custom width and height to the svg', () => {
		const { container } = render(<Icon name="bell" size={48} />);

		const svg = container.querySelector('svg');

		expect(svg).toHaveAttribute('width', '48');
		expect(svg).toHaveAttribute('height', '48');
	});

	it('applies the default stroke color to the path', () => {
		const { container } = render(<Icon name="bell" />);

		const path = container.querySelector('path');

		expect(path).toHaveAttribute('stroke', '#000');
	});

	it('applies a custom stroke color to the path', () => {
		const { container } = render(<Icon name="bell" color="red" />);

		const path = container.querySelector('path');

		expect(path).toHaveAttribute('stroke', 'red');
	});

	it('applies the default stroke weight to the path', () => {
		const { container } = render(<Icon name="bell" />);

		const path = container.querySelector('path');

		expect(path).toHaveAttribute('stroke-width', '1');
	});

	it('applies a custom stroke weight to the path', () => {
		const { container } = render(<Icon name="bell" weight={3} />);

		const path = container.querySelector('path');

		expect(path).toHaveAttribute('stroke-width', '3');
	});

	it('applies the default container styles', () => {
		const { container } = render(<Icon name="bell" />);

		const wrapper = container.firstChild;

		expect(wrapper).toHaveStyle('display: flex');
		expect(wrapper).toHaveStyle('align-items: center');
		expect(wrapper).toHaveStyle('justify-content: center');
	});

	it('merges custom containerStyle with default container styles', () => {
		const { container } = render(
			<Icon name="bell" containerStyle={{ backgroundColor: '#ff0000' }} />
		);

		const wrapper = container.firstChild;

		expect(wrapper).toHaveStyle('display: flex');
		expect(wrapper).toHaveStyle('align-items: center');
		expect(wrapper).toHaveStyle('justify-content: center');
		expect(wrapper).toHaveStyle('background-color: rgb(255, 0, 0)');
	});

	it('renders with an empty path when no name is passed', () => {
		const { container } = render(<Icon />);

    expect(container.querySelector('svg')).not.toBeInTheDocument();
	});

	it('renders with an empty JSX when an unknown icon name is passed', () => {
		const { container } = render(<Icon name="unknown-icon" />);

    expect(container.querySelector('svg')).not.toBeInTheDocument();
	});
});
