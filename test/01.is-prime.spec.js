import { describe, expect, it } from '@jest/globals'
import { isPrime } from '../01.is-prime'

describe('isPrime Test', () => {
  it('return false', () => {
    expect(isPrime(4)).toBe(false)
    expect(isPrime(1)).toBe(false)
    expect(isPrime(6)).toBe(false)
    expect(isPrime(9)).toBe(false)
    expect(isPrime(10)).toBe(false)
  })
  it('return true', () => {
    expect(isPrime(2)).toBe(true)
    expect(isPrime(3)).toBe(true)
    expect(isPrime(5)).toBe(true)
    expect(isPrime(7)).toBe(true)
    expect(isPrime(11)).toBe(true)
    expect(isPrime(13)).toBe(true)
  })
})
