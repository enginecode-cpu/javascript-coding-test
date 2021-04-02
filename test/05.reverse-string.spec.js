import { describe, expect, it } from '@jest/globals'
import { reverseString } from '../05.reverse-string'

describe('Reverse String', () => {
  it('Test', () => {
    expect(reverseString('hello')).toBe('olleh')
    expect(reverseString('python')).toBe('nohtyp')
  })
})
