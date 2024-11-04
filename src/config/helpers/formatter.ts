export class Formatter {
  public static currency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  }
  public static date(date?: Date): string {
    if (!date) return '';

    const dateFormat = new Date(date);
    const formattedDate = new Intl.DateTimeFormat('es-ES').format(dateFormat);
    return formattedDate;
  }
}
