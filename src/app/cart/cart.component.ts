import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { LoginDetailsService } from '../login-details.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartItems:CartService, private loginService:LoginDetailsService, private route:Router) { }

  Items:any=(this.cartItems.getItems());
  loggedInUser:any=[];

  remove(i:number){
    
    this.Items.splice(i,1);
    this.cartItems.totalProductValue=(this.Items.length);
    }
  

  cartClr(){
    this.cartItems.clearCart();
    this.Items= this.cartItems.getItems();
  }

  checkOut(){
   this.loggedInUser = this.loginService.isUserLoggedIn()
   if(this.loggedInUser===1){
    this.route.navigateByUrl('checkout');
   }else{
    alert('Login to continue');
    this.route.navigateByUrl('');
   }
  }

  
  ngOnInit(): void {
  }

}
