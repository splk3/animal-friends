import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MobileDropdown from '../MobileDropdown';

describe('MobileDropdown', () => {
  const defaultProps = {
    id: 'test-dropdown',
    title: 'Test Menu',
    links: [
      { to: '/link-1', label: 'Link 1' },
      { to: '/link-2', label: 'Link 2' },
    ],
    isOpen: false,
    onToggle: jest.fn(),
    onLinkClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<MobileDropdown {...defaultProps} />);
    expect(screen.getByText('Test Menu')).toBeInTheDocument();
  });

  it('calls onToggle when button is clicked', async () => {
    const user = userEvent.setup();
    render(<MobileDropdown {...defaultProps} />);

    const button = screen.getByRole('button', { name: /Test Menu/i });
    await user.click(button);

    expect(defaultProps.onToggle).toHaveBeenCalledTimes(1);
  });

  it('calls onToggle when Enter key is pressed', async () => {
    render(<MobileDropdown {...defaultProps} />);

    const button = screen.getByRole('button', { name: /Test Menu/i });
    button.focus();
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });

    expect(defaultProps.onToggle).toHaveBeenCalledTimes(1);
  });

  it('calls onToggle when Space key is pressed', async () => {
    render(<MobileDropdown {...defaultProps} />);

    const button = screen.getByRole('button', { name: /Test Menu/i });
    button.focus();
    fireEvent.keyDown(button, { key: ' ', code: 'Space' });

    expect(defaultProps.onToggle).toHaveBeenCalledTimes(1);
  });

  it('does not render links when isOpen is false', () => {
    render(<MobileDropdown {...defaultProps} />);

    expect(screen.queryByText('Link 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Link 2')).not.toBeInTheDocument();
  });

  it('renders links when isOpen is true', () => {
    render(<MobileDropdown {...defaultProps} isOpen={true} />);

    expect(screen.getByText('Link 1')).toBeInTheDocument();
    expect(screen.getByText('Link 2')).toBeInTheDocument();
  });

  it('calls onLinkClick when a link is clicked', async () => {
    const user = userEvent.setup();
    render(<MobileDropdown {...defaultProps} isOpen={true} />);

    const link = screen.getByText('Link 1');
    await user.click(link);

    expect(defaultProps.onLinkClick).toHaveBeenCalledTimes(1);
  });
});
