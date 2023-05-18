export class RequestUtil {
  constructor() {}

  public static get(url: string): Promise<any> {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public static post(url: string, data: any): Promise<any> {
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

  public static put(url: string, data: any): Promise<any> {
    return fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public static delete(url: string): Promise<any> {
    return fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
