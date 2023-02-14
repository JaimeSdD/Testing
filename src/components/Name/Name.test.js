import { render, screen } from "@testing-library/react";
import Name from "./Name";


describe("Name", () => {
    it("renders name", () => {
        const myTitle = "Prueba";
        render(<Name title={myTitle}/>);
        expect(screen.getByText(/prueba/i)).toBeInTheDocument()
    })
})