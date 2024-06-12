import { render } from "@testing-library/react";
import HomePage from "./HomePage"; // Adjust the import path to your component

test("homepage renders blank", () => {
  const { container } = render(<HomePage />);
  expect(container).toBeEmptyDOMElement();
});
