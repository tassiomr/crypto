import API from "../api";

class HttpService {
  httpClient: typeof API = API;

  async get<T>(route: string): Promise<T> {
    const { data } = await this.httpClient.get(route);
    return data;
  }

  async post<T>(route: string): Promise<T | any> {
    await this.httpClient.post(route);
  }

  async put<T>(route: string): Promise<T | any> {
    await this.httpClient.put(route);
  }

  async remove<T>(route: string): Promise<T | any> {
    await this.httpClient.remove(route);
  }
}

export default new HttpService();
