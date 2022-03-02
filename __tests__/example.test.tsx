import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<div>asdf</div>);
    expect(screen.getByText('asdf')).toBeInTheDocument();
  });
});
