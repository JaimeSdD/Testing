import { fireEvent, render, screen } from "@testing-library/react";
import Note from "./Note";

it("renders content", () => {
  const note = {
    content: "test",
    important: true,
  };

  render(<Note note={note} />);
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});

it("calls event handler when clicking button", () => {
  const note = {
    content: "test",
    important: true,
  };
  // función espía --> mock
  const mockHandler = jest.fn();

  render(<Note note={note} toggleImportance={mockHandler} />);
  fireEvent.click(screen.getByText("make unimportant"));
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
