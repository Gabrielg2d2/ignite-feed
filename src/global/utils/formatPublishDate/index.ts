export function formatPublishDate(date: string): string {
  try {
    const publishDate = new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC'
    }).format(new Date(date))

    return publishDate
  } catch (error) {
    return 'invalid date'
  }
}
