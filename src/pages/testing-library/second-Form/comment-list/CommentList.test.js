import { render, screen, logRoles, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import CommentList from "."


test('array-of-comment-is-null', () => {
    render(<CommentList allotments={[]} />)
    const h2element = screen.queryByText('no comments', { exact: false })
    expect(h2element).toBeInTheDocument()
})

test('list-all-comments', () => {
    const comments = [{ id: 1, text: "Comment 1" }, { id: 2, text: "Comment 2" }]
    render(<CommentList allotments={comments} />)

    const h2element = screen.queryByText('no comments', { exact: false })
    expect(h2element).not.toBeInTheDocument()
    const commentList = screen.getAllByRole('listitem')
    // object ke liye toEqual else toBe(2)
    expect(commentList.length).toBe(2)
})