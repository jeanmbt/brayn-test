import { render, screen } from "@testing-library/react";

import Home from "../pages";

describe("Home", () => {
  it("renders the home page", () => {
    render(<Home />);

    const home = screen.getByRole(<Home />);

    expect(home).toBeInTheDocument();
  });
});
