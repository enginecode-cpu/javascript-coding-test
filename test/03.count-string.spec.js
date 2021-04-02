import { describe, expect, it } from '@jest/globals'
import { countString } from '../03.count-string'

const string = "He's my king from this day until his last day"
describe('Count String', () => {
  it('return value', () => {
    expect(countString(string, 'z')).toBe(0)
    expect(countString(string, 'fr')).toBe(1)
    expect(countString(string, 'my')).toBe(1)
  })
})
