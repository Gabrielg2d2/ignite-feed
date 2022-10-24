import { timeFormatted } from '.'

describe('timeFormatted', () => {
  it('should return "1 ano" when time is 1 year ago', () => {
    const time = '2021-08-01T00:00:00.000Z'
    const now = '2022-08-01T00:00:00.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('1 ano')
  })

  it('should return "2 anos" when time is 2 years ago', () => {
    const time = '2020-08-01T00:00:00.000Z'
    const now = '2022-08-01T00:00:00.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('2 anos')
  })

  it('should return "1 mês" when time is 1 month ago', () => {
    const time = '2021-07-01T00:00:00.000Z'
    const now = '2021-08-01T00:00:00.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('1 mês')
  })

  it('should return "2 meses" when time is 2 months ago', () => {
    const time = '2021-06-01T00:00:00.000Z'
    const now = '2021-08-01T00:00:00.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('2 meses')
  })

  it('should return "1 dia" when time is 1 day ago', () => {
    const time = '2021-08-03T00:00:00.000Z'
    const now = '2021-08-04T00:00:00.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('1 dia')
  })

  it('should return "2 dias" when time is 2 days ago', () => {
    const time = '2021-07-30T00:00:00.000Z'
    const now = '2021-08-01T00:00:00.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('2 dias')
  })

  it('should return "1 hora" when time is 1 hour ago', () => {
    const time = '2021-08-04T00:00:00.000Z'
    const now = '2021-08-04T01:00:00.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('1 hora')
  })

  it('should return "2 horas" when time is 2 hours ago', () => {
    const time = '2021-08-04T00:00:00.000Z'
    const now = '2021-08-04T02:00:00.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('2 horas')
  })

  it('should return "1 minuto" when time is 1 minute ago', () => {
    const time = '2021-08-04T00:00:00.000Z'
    const now = '2021-08-04T00:01:00.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('1 minuto')
  })

  it('should return "2 minutos" when time is 2 minutes ago', () => {
    const time = '2021-08-04T00:00:00.000Z'
    const now = '2021-08-04T00:02:00.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('2 minutos')
  })

  it('should return "1 segundo" when time is 1 second ago', () => {
    const time = '2021-08-04T00:00:00.000Z'
    const now = '2021-08-04T00:00:01.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('1 segundo')
  })

  it('should return "2 segundos" when time is 2 seconds ago', () => {
    const time = '2021-08-04T00:00:00.000Z'
    const now = '2021-08-04T00:00:02.000Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('2 segundos')
  })

  it('should return "1 milissegundo" when time is 1 millisecond ago', () => {
    const time = '2021-08-04T00:00:00.000Z'
    const now = '2021-08-04T00:00:00.001Z'

    const result = timeFormatted({
      biggestDate: now,
      smallestDate: time
    })

    expect(result).toBe('0 segundo')
  })
})
