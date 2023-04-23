import { render, screen } from '@testing-library/react';
// import Birds from './components/birds/Birds';
import Thanks from './components/thanks/Thanks'



test('renders learn react link', () => {
  render(<Thanks />);
  const linkElement = screen.getByText(/Gracias/i);
  expect(linkElement).toBeInTheDocument();
});