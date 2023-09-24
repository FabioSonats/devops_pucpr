import { render, screen } from '@testing-library/react';
import App from './App';

test('renders devops pipeline text', () => {
  render(<App />);
  const textElement = screen.getByText('Trabalho para a matéria DevOps');
  expect(textElement).toBeInTheDocument();
  const textElement2 = screen.getByText('Pipeline de teste');
  expect(textElement2).toBeInTheDocument();
});
