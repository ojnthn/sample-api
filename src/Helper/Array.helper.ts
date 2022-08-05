export class ArrayHelper {
  constructor() {}

  /**
   * Removes the null values from an array
   * @param array
   */
  static array_filter(array: []) {
    return array.filter(function (value) {
      return value != null;
    });
  }
}
