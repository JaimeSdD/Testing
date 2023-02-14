import { render, screen } from "@testing-library/react";
import User from "./User";

describe("User", () => {
  const user = {
    name: "Chuck",
    image:
      "https://img.europapress.es/fotoweb/fotonoticia_20150310130850-732359_420.jpg",
  };
  it("renders properly", () => {
    render(<User name={user.name} image={user.image} />);
    expect(screen.getByTestId("user-card")).toHaveClass("user-container")
    expect(screen.getByTestId("user-card-image")).toHaveAttribute(
      "src",
      user.image
    );
    expect(screen.getByTestId("user-card-image")).toHaveAttribute(
      "alt",
      user.name
    );
    expect(screen.getByTestId("user-card-name")).toHaveTextContent(user.name);
  });
});
