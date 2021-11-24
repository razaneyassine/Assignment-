import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @ViewChild('tableSort') table_sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  table_list = new MatTableDataSource([]);
  persons: any;
  countries: any;

  displayedColumns: string[] = [
    'first_name',
    'father_name',
    'last_name',
    'dob',
    'address',
    'country',
    'gender',
    'phone',
    'email',
    'notes',
  ];
  constructor(private http: ServiceService) {
    this.getData();
  }

  ngOnInit(): void {
    this.getCountries()
  }

  getCountries(){
    this.http.get('/countries').subscribe((data) => {
      this.countries = data;
  })
}
  getData() {
    this.http.get('/persons').subscribe((data) => {
      this.persons = data;

      this.table_list = new MatTableDataSource(this.persons);

      this.table_list.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'first_name':
            return (item as any).firstName;

          case 'father_name':
            return (item as any).fatherName;
          case 'last_name':
            return (item as any).lastName;
          case 'dob':
            return (item as any).dateofBirth;
          case 'address':
            return (item as any).address;
          case 'country':
            return (item as any).countryId;
          case 'gender':
            return (item as any).genderId;
          case 'email':
            return (item as any).email;
          case 'phone':
            return (item as any).mobilePhone;
          case 'notes':
            return (item as any).notes;

          default:
            return item[property];
        }
      };
      (this.table_list as any).sort = this.table_sort;
      (this.table_list as any).paginator = this.paginator;
    });
  }

  DoB(date: any) {
    const dob = date.split('T');
    return dob[0];
  }

  Country(country: number) {
      const result = this.countries.filter((data: any) => {
        return data.id === parseInt(country as any);
      });
      return result[0].coutryName;
  }

   titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

}
