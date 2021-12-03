import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, map, Observable, of, pipe, tap} from "rxjs";
import {Item} from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl: string;

  constructor(private http: HttpClient) {
    this.itemsUrl = `${environment.backendUrl}/items`
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  /** GET items */
  getItems(): Observable<any> {
    return this.http
      .get<Item[]>(this.itemsUrl);
  }


  /** POST : save item*/
  addItem(item: Item) {
    return this.http
      .post<Item>(this.itemsUrl, item);
  }

  /** PUT: update item*/
  updateItem(item: Item) : Observable<any> {
    return this.http
      .put<Item>(`${this.itemsUrl}/${item.id}`, item, this.httpOptions)
  }


  /** GET item by name*/
  getItem(id: string) : Observable<any> {
    return this.http.get(`${this.itemsUrl}/${id}`);
  }

  /** GET items for name contains search term */
  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      // if not search term, return empty item array.
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsUrl}/?name=${term}`)
      .pipe(
        catchError(this.handleError<Item[]>('searchItems', [])),
        map(items => items.filter(item => item.name.toLocaleLowerCase().startsWith(term.toLocaleLowerCase()))
        ));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
