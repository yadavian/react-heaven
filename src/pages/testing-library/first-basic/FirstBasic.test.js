import { render, screen, logRoles } from "@testing-library/react"
import FirstBasic from "."

test('first test', () => {
    render(<FirstBasic />)
    // logRoles(screen.getByTestId('root-test'))
    const btnElement = screen.getByRole("button", { name: "test button", exact: false })
    expect(btnElement).toBeDefined();
})