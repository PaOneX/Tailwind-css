import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-item',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {

}
