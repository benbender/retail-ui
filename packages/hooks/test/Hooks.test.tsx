import { render, screen } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'
import * as React from 'react'

import { useCreateCtx } from '../src'

describe('user context', () => {
  it('return provided user data', () => {
    type User = {
      id: string
      name: string
    }
    const { result } = renderHook(() => useCreateCtx<User>())
    act(() => {
      const useUserCtx = result.current[0]
      const UserProvider = result.current[1]

      const providerProps = {
        id: '123',
        name: 'Fett',
      }
      const wrapper: React.FC = ({ children }) => (
        <UserProvider value={providerProps}>{children}</UserProvider>
      )
      const UserComsumer = () => {
        const { id, name } = useUserCtx()
        return (
          <div>
            <span>id: {id}</span>
            <span>name: {name}</span>
          </div>
        )
      }

      render(<UserComsumer />, { wrapper })

      expect(screen.getByText(/^id:/).textContent).toBe('id: 123')
      expect(screen.getByText(/^name:/).textContent).toBe('name: Fett')
    })
  })
})
