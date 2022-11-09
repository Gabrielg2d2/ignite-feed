import { formatPublishDate } from '.'

describe('formatPublishDate', () => {
  it('should format date to pt-BR', () => {
    const date = formatPublishDate('2020-12-25')

    expect(date).toBe('25 de dezembro de 2020')
  })

  it('should return date if format fails', () => {
    const date = formatPublishDate('invalid')

    expect(date).toBe('invalid date')
  })

  it('should return date if format fails with date empty', () => {
    const date = formatPublishDate('')

    expect(date).toBe('invalid date')
  })
})
