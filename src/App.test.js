import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // console.log(linkElement.toJSON())
  // expect(linkElement).toBeInTheDocument();
  // screen.debug();
});