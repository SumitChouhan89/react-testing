import { renderHook, act } from '@testing-library/react'
import { useCount } from './use-counter'

describe('useCounter', () => {
  test('should render the initial count', () => {
    const { result } = renderHook(useCount)
    expect(result.current.count).toBe(0)
  })

  test('should accept and render the same initial count', () => {
    const { result } = renderHook(useCount, {
      initialProps: {
        initialCount: 10,
      },
    })
    expect(result.current.count).toBe(10)
  })

  test('should increment the count', () => {
    const { result } = renderHook(useCount)
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test('should decrement the count', () => {
    const { result } = renderHook(useCount)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})
