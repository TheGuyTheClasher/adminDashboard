import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) 
  sort!: MatSort;

  ngOnInIt(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  pieChartData = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];
  colorScheme: Color = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  numberCardData = [
    {
      name: 'Card 1',
      value: 100,
    },
    {
      name: 'Card 2',
      value: 200,
    },
    {
      name: 'Card 3',
      value: 300,
    },
    {
      name: 'Card 4',
      value: 400,
    }
  ];


   // Sample data for the table
   ELEMENT_DATA: TableRow[] = [
    { position: 1, name: 'John Doe', age: 36, sex: 'Male', Designation: 'Manager', Department: 'IT', Office: 'Mumbai', Salary: 13892, JoiningDate: '2020-03-15', Email: 'john.doe@example.com' },
    { position: 2, name: 'Jane Smith', age: 28, sex: 'Female', Designation: 'Senior Developer', Department: 'Software', Office: 'New York', Salary: 12000, JoiningDate: '2019-08-10', Email: 'jane.smith@example.com' },
    { position: 3, name: 'Michael Johnson', age: 42, sex: 'Male', Designation: 'HR Manager', Department: 'Human Resources', Office: 'London', Salary: 14500, JoiningDate: '2018-05-20', Email: 'michael.johnson@example.com' },
    { position: 4, name: 'Emily Williams', age: 31, sex: 'Female', Designation: 'Product Manager', Department: 'Product', Office: 'San Francisco', Salary: 15500, JoiningDate: '2021-01-05', Email: 'emily.williams@example.com' },
    { position: 5, name: 'Daniel Lee', age: 25, sex: 'Male', Designation: 'Software Engineer', Department: 'Software', Office: 'Toronto', Salary: 11000, JoiningDate: '2022-02-18', Email: 'daniel.lee@example.com' },
    { position: 6, name: 'Sophia Brown', age: 33, sex: 'Female', Designation: 'Marketing Manager', Department: 'Marketing', Office: 'Los Angeles', Salary: 13000, JoiningDate: '2017-11-30', Email: 'sophia.brown@example.com' },
    { position: 7, name: 'Christopher Miller', age: 39, sex: 'Male', Designation: 'Financial Analyst', Department: 'Finance', Office: 'Chicago', Salary: 12500, JoiningDate: '2016-06-25', Email: 'christopher.miller@example.com' },
    { position: 8, name: 'Olivia Wilson', age: 27, sex: 'Female', Designation: 'Business Analyst', Department: 'Operations', Office: 'Sydney', Salary: 11500, JoiningDate: '2023-04-12', Email: 'olivia.wilson@example.com' },
    { position: 9, name: 'Matthew Anderson', age: 29, sex: 'Male', Designation: 'Project Manager', Department: 'Project Management', Office: 'Berlin', Salary: 13500, JoiningDate: '2015-09-08', Email: 'matthew.anderson@example.com' },
    { position: 10, name: 'Ava Martinez', age: 34, sex: 'Female', Designation: 'Sales Manager', Department: 'Sales', Office: 'Tokyo', Salary: 14200, JoiningDate: '2019-12-28', Email: 'ava.martinez@example.com' },
    { position: 11, name: 'David Thompson', age: 37, sex: 'Male', Designation: 'Accountant', Department: 'Accounting', Office: 'Paris', Salary: 12000, JoiningDate: '2017-03-03', Email: 'david.thompson@example.com' },
    { position: 12, name: 'Isabella Rodriguez', age: 30, sex: 'Female', Designation: 'UX Designer', Department: 'Design', Office: 'Stockholm', Salary: 12800, JoiningDate: '2022-07-14', Email: 'isabella.rodriguez@example.com' },
    { position: 13, name: 'Andrew Garcia', age: 26, sex: 'Male', Designation: 'Software Developer', Department: 'Software', Office: 'Singapore', Salary: 11200, JoiningDate: '2023-01-30', Email: 'andrew.garcia@example.com' },
    { position: 14, name: 'Ella Hernandez', age: 35, sex: 'Female', Designation: 'Operations Manager', Department: 'Operations', Office: 'Seoul', Salary: 13800, JoiningDate: '2016-12-10', Email: 'ella.hernandez@example.com' },
    { position: 15, name: 'James Adams', age: 40, sex: 'Male', Designation: 'Product Owner', Department: 'Product', Office: 'Amsterdam', Salary: 15000, JoiningDate: '2018-09-22', Email: 'james.adams@example.com' },
  ];
  
  
  // Table data
  displayedColumns: string[] = ['position', 'name', 'age', 'sex', 'Designation', 'Department', 'Office', 'Salary', 'JoiningDate', 'Email'];
  dataSource = new MatTableDataSource<TableRow>(this.ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
}
}

// Interface for the table rows
interface TableRow {
  position: number;
  name: string;
  age: number,
  sex: string,
  Designation: string,
  Department: string,
  Office: string,
  Salary: number,
  JoiningDate: string,
  Email: string
}





