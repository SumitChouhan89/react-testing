import { render, screen } from '@testing-library/react'
import { server } from '../../mocks/server'
import { Users } from './users'
import { rest } from 'msw'

describe('Users Component', () => {
  test('Renders Correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('Renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3)
  })

  test('Renders error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    render(<Users />)
    const error = await screen.findByText('Error Fetching Users')
    expect(error).toBeInTheDocument()
  })
})
