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
    
    // Validate all fields are filled
    if (!this.customerObj.id || !this.customerObj.title || !this.customerObj.name || 
        !this.customerObj.dob || !this.customerObj.salary || !this.customerObj.address || 
        !this.customerObj.city || !this.customerObj.province || !this.customerObj.postalCode) {
      Swal.fire({
        title: "Validation Error!",
        text: "Please fill in all fields!",
        icon: "warning"
      });
      return;
    }
    
    this.http.post('http://localhost:8080/customers',this.customerObj).subscribe(data => {
      console.log(data);
      Swal.fire({
        title: "Good job! "+this.customerObj.name+" saved!",
        text: "Customer added successfully!",
        icon: "success"
      });
    }, error => {
      Swal.fire({
        title: "ERROR!",
        text: "Failed to save customer!",
        icon: "error"
      });
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
