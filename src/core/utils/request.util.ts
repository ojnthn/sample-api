export class RequestUtil {
  constructor() {}

  public static async get(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  public static async post(url: string, data: any): Promise<any> {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public static async put(url: string, data: any): Promise<any> {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  public static async delete(url: string): Promise<any> {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}
