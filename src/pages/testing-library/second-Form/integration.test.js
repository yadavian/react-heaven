import { render, screen, logRoles, fireEvent, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event"
import SecondForm from "./comment-form"

// agar api call hoga toh getby ki jagah findby use karte h, aur api call nhi katna same data use karna h
test("comments dispayed after submit", async () => {
    render(<SecondForm />)
    const commentInput = screen.getByPlaceholderText('write your comment here')
    const checkInput = screen.getByLabelText('I agree to terms and conditions')
    const submitButton = screen.getByRole('button', { name: 'Submit', exact: false })

    userEvent.type(commentInput, 'nice pick dear')
    userEvent.click(checkInput)
    userEvent.click(submitButton)

    const commentList = screen.getByText('nice pick dear', { exact: false })
    expect(commentList).toBeInTheDocument()
})

test("2 comments dispayed after submit", async () => {
    render(<SecondForm />)
    const commentInput = screen.getByPlaceholderText('write your comment here')
    const checkInput = screen.getByLabelText('I agree to terms and conditions')
    const submitButton = screen.getByRole('button', { name: 'Submit', exact: false })

    userEvent.type(commentInput, 'nice pick dear')
    userEvent.click(checkInput)
    userEvent.click(submitButton)

    userEvent.type(commentInput, 'awesome')
    userEvent.click(submitButton)

    const commentList = screen.getAllByRole('listitem')
    expect(commentList.length).toBe(2)

    //For Api call
    // waitFor(() => {
    //     const commentList = screen.getAllByRole('listitem')
    //     expect(commentList.length).toBe(2)
    // })
})