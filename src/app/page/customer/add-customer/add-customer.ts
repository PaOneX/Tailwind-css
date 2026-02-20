import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from '../../../../model/type';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-customer',
  imports: [FormsModule],
  templateUrl: './add-customer.html',
  styleUrl: './add-customer.css',
})
export class AddCustomer {
  customerObj: CustomerModel = {
    id: '',
    title: '',
    name: '',
    dob: '',
    salary: 0,
    address: '',
    city: '',
    province: '',
    postalCode: ''
  };

  addCustomer(){
    console.log(this.customerObj);
    
    this.http.post('http://localhost:8080/customers',this.customerObj).subscribe(data => {
      console.log(data);
       if (data === true) {
        Swal.fire({
          title: "Good job! "+this.customerObj.name+" saved!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    })
  }

  constructor(private http: HttpClient, private router: Router) {}

 

  resetForm() {
    this.customerObj = {
      id: '',
      title: '',
      name: '',
      dob: '',
      salary: 0,
      address: '',
      city: '',
      province: '',
      postalCode: ''
    };
  }
}
