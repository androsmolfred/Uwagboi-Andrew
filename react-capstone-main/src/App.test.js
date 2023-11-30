import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('Renders the Header heading', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Reserve a table");
  expect(headingElementNew).toBeInTheDocument();
})

// test('Initialize/Update Times', () => {
// render(<BrowserRouter><App /></BrowserRouter>);
// const reserveButton = screen.getByRole("button");
// fireEvent.click(reserveButton);

// const testTime = []
// // userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
// // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);


// })