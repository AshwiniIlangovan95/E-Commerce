import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private checkOut:CartService) { }

  Items:any=(this.checkOut.getItems());

  completeOrder(){
    this.checkOut.clearCart();
    this.Items= this.checkOut.getItems();
  }
  ngOnInit(): void {
  }

}
