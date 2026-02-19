import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {

}
