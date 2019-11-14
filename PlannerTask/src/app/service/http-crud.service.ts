import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class HttpCRUDService {

  baseApiUrl = 'http://localhost:5000/api';

  constructor(private _http: HttpClient,
              private _apiUrl) {
    this._apiUrl = `${this.baseApiUrl}/${this._apiUrl}`;
  }

  get http(): HttpClient {
    return this._http;
  }

  get apiUrl() {
    return this._apiUrl;
  }

  /**
   * Получения списка всех записей
   */
  getAll<M>(): Observable<M> {
    console.log(this._apiUrl);
    return this._http.get<M>(`${this._apiUrl}`);
  }

  /**
   * Получения записи по id
   * @param id - id записи
   */
  getById<M>(id: string): Observable<M> {
    return this._http.get<M>(`${this._apiUrl}/${id}`);
  }

  /**
   * Создание записи
   * @param record - запись
   */
  create<M>(record: M | any): Observable<M> {
    return this._http.post<M>(this._apiUrl, record);
  }

  /**
   * Редактирования записи
   * @param id - id записи
   * @param record - запись
   */
  edit<M>(id: string, record: M): Observable<M> {
    return this._http.put<M>(`${this._apiUrl}/${id}`, record);
  }

  /**
   * Удаления записи
   * @param id - id запись
   */
  delete<M>(id: string): Observable<M> {
    return this._http.delete<M>(`${this._apiUrl}/${id}`);
  }

}
