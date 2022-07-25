import { render, screen, logRoles, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SecondForm from "."

test('initial-condition', () => {
    render(<SecondForm />) 
    const commentInput = screen.getByRole('textbox')
    expect(commentInput).toBeDefined();
    const checkInput = screen.getByLabelText('I agree to terms and conditions')
    expect(checkInput).toBeDefined();
    const submitButton = screen.getByRole('button', { name: 'Submit', exact: false })
    expect(submitButton).toBeDefined();
})

test('enable-on-validation-success', () => {
    render(<SecondForm />)  
    const commentInput = screen.getByPlaceholderText('write your comment here')
    const checkInput = screen.getByLabelText('I agree to terms and conditions')
    const submitButton = screen.getByRole('button', { name: 'Submit', exact: false })

    // fireEvent.change(commentInput,{target : {value : ""}})
    // fireEvent.click(checkInput)
    // expect(submitButton).toBeEnabled()

    // fireEvent.click(checkInput)
    // expect(button).toBeDisabled()

     userEvent.type(commentInput,"something")
     userEvent.click(checkInput)
    expect(submitButton).toBeEnabled

    userEvent.click(checkInput)
    expect(submitButton).toBeDisabled

})