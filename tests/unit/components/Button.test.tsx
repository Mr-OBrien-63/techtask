// tests/unit/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/Button';

describe('Button Component', () => {
    it('renders the button with the correct text', () => {
        render(<Button text="Click Me" />);
    });

    it('triggers onClick event handler when clicked', () => {
        const handleClick = jest.fn(); // Mock function for testing
        render(<Button text="Click Me" onClick={handleClick} />);
        fireEvent.click(screen.getByText('Click Me'));
    });

    it('applies custom styles when style prop is provided', () => {
        const customStyle = "bg-red-500 text-black";
        render(<Button text="Styled Button" style={customStyle} />);
        const buttonElement = screen.getByText('Styled Button');
    });

    it('uses default styles when no style prop is provided', () => {
        render(<Button text="Default Styled Button" />);
        const buttonElement = screen.getByText('Default Styled Button');
    });
});
