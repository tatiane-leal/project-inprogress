import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  employee!: Employee;
  employeeId!: number;

  constructor(
    private _employeeService: EmployeeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.employeeId = +this._route.snapshot.params['id'];

    this._employeeService.getEmployeeById(this.employeeId).subscribe((data) => {
      this.employee = data[0];
    });
  }

  goHome(): void {
    this._router.navigate(['/']);
  }
}
