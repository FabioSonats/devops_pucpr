import { render, screen } from '@testing-library/react';
import App from './App';

test('renders devops pipeline text', () => {
  render(<App />);
  const textElement = screen.getByText(/Trabalho para a matéria DevOps Pipeline de teste/i);
  expect(textElement).toBeInTheDocument();
});
