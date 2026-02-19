import { ChangeDetectorRef, Component } from '@angular/core';
import { CustomerModel } from '../../../../model/type';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-all-customer',
  imports: [],
  templateUrl: './view-all-customer.html',
  styleUrl: './view-all-customer.css',
})
export class ViewAllCustomer {
  customerList: Array<CustomerModel> = [];

  constructor(private http: HttpClient, private cdr:ChangeDetectorRef) {
    this.getAll();
  }

  getAll() {
    this.http.get<CustomerModel[]>('http://localhost:8080/customers').subscribe((data) => {
      this.customerList = data;
      this.cdr.detectChanges();
      console.log(this.customerList);
    });
  }
}
