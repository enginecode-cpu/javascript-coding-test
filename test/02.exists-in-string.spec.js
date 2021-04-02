import { describe, expect, it } from '@jest/globals'
import { existsInString } from '../02.exists-in-string'

describe('ExistsInString Test', () => {
  it('return true', () => {
    expect(existsInString('string', 's')).toBe(true)
    expect(existsInString('dragon', 'o')).toBe(true)
    expect(existsInString('king', 'ki')).toBe(true)
  })
  it('return false', () => {
    expect(existsInString('string', 'k')).toBe(false)
    expect(existsInString('keyboard', 'zo')).toBe(false)
    expect(existsInString('notebook', 'ao')).toBe(false)
  })
})
