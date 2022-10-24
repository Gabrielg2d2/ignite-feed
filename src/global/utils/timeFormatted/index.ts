interface ITimeFormattedProps {
  biggestDate: string
  smallestDate: string
}

export function timeFormatted({
  biggestDate,
  smallestDate
}: ITimeFormattedProps): string {
  const d1 = new Date(biggestDate)
  const d2 = new Date(smallestDate)

  const diffInMs = new Date(d1) - new Date(d2)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

  if (diffInDays >= 365) {
    const years = Math.round(diffInDays / 365)

    if (years > 1) {
      return `${years} anos`
    }

    return `${years} ano`
  }

  if (diffInDays >= 30) {
    const months = Math.round(diffInDays / 30)

    if (months > 1) {
      return `${months} meses`
    }

    return `${months} mês`
  }

  if (diffInDays >= 1) {
    const days = Math.round(diffInDays)

    if (days > 1) {
      return `${days} dias`
    }

    return `${days} dia`
  }

  if (diffInDays < 1) {
    const hours = Math.round(diffInMs / (1000 * 60 * 60))

    if (hours === 1) {
      return `${hours} hora`
    }

    if (hours > 1) {
      return `${hours} horas`
    }

    if (hours < 1) {
      const minutes = Math.round(diffInMs / (1000 * 60))

      if (minutes === 1) {
        return `${minutes} minuto`
      }

      if (minutes > 1) {
        return `${minutes} minutos`
      }

      if (minutes < 1) {
        const seconds = Math.round(diffInMs / 1000)

        if (seconds === 1) {
          return `${seconds} segundo`
        }

        if (seconds > 1) {
          return `${seconds} segundos`
        }
      }
    }
  }

  return '0 segundo'
}
