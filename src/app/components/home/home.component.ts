import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.interface';
import { CommentService } from 'src/app/services/comment.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  employees!: Employee[];

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  addMessage(employee: Employee): void {
    this._router.navigate(['/user', employee.id]);
  }
}
