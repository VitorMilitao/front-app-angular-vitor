import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { API_CONFIG } from '../config/api_config';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
url: string = API_CONFIG.urlApi;

  constructor(private http: HttpClient) {}
  save(customer: Customer) : Observable<Customer[]> {
    return this.http.post<Customer[]>(this.url+'/customer/create', customer);
  }
}
