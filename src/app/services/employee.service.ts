import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module
import { Observable, map } from 'rxjs';
import { Employee } from '../models/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    let url = 'http://localhost:3000/employees';

    return this._http.get<Employee[]>(url).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getEmployeeById(id: number): Observable<Employee[]> {
    let url = 'http://localhost:3000/employees';

    let params = {
      id: id,
    };

    return this._http.get<Employee[]>(url, { params }).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
