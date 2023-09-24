import { render, screen } from '@testing-library/react';
import App from './App';

test('renders devops pipeline text', () => {
  render(<App />);
  const textElement1 = screen.getByText('Trabalho para a matéria DevOps');
  const textElement2 = screen.getByText('Pipeline de teste');
  expect(textElement1).toBeInTheDocument();
  expect(textElement2).toBeInTheDocument();
});
