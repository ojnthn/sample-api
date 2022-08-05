import { DateTime } from "luxon";

export class DateHelper {
  /**
   * Returns the current date
   * @param format
   */
  public current_date(format = "yyyy-MM-dd HH:mm:ss"): String {
    return DateTime.local().toFormat(format);
  }

  /**
   * Change the date format to yyyy-MM-dd HH:mm:ss or yyyy-MM-dd
   * @param date
   * @param hasHour
   */
  public save_date(date: String, hasHour = true): String {
    let from_format = hasHour ? "dd/MM/yyyy HH:mm:ss" : "dd/MM/yyyy";
    let to_format = hasHour ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd";

    return DateTime.fromFormat(date, from_format).toFormat(to_format);
  }

  /**
   * Change the date format to dd/MM/yyyy HH:mm:ss or dd/MM/yyyy
   * @param date
   * @param hasHour
   */
  public show_date(date: String, hasHour = true): String {
    let from_format = hasHour ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd";
    let to_format = hasHour ? "dd/MM/yyyy HH:mm:ss" : "dd/MM/yyyy";

    return DateTime.fromFormat(date, from_format).toFormat(to_format);
  }

  /**
   * Add date to the current date
   * @param duration
   */
  public add_date(duration: {}): String {
    return DateTime.local().plus(duration).toFormat("yyyy-MM-dd HH:mm:ss");
  }

  /**
   * Formats a date
   * @param date
   * @param to_format
   * @param from_format
   */
  public to_format(
    date: String,
    to_format: String,
    from_format = "yyyy-MM-dd HH:mm:ss"
  ): String {
    return DateTime.fromFormat(date, from_format).toFormat(to_format);
  }

  /**
   * Returns the name of the month
   * @param month
   */
  public month_name(month: number): String {
    switch (month) {
      case 1:
        return "Janeiro";
      case 2:
        return "Fevereiro";
      case 3:
        return "Março";
      case 4:
        return "Abril";
      case 5:
        return "Maio";
      case 6:
        return "Junho";
      case 7:
        return "Julho";
      case 8:
        return "Agosto";
      case 9:
        return "Setembro";
      case 10:
        return "Outubro";
      case 11:
        return "Novembro";
      case 12:
        return "Dezembro";
    }
  }
}
