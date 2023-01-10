import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { LoginDetailsService } from '../login-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cart:CartService, private apiCall:ApiService, private loginService: LoginDetailsService) { }

 Item:any=[];
 get totalProduct() {
  return this.cart.totalProductValue;
 }

 get isUserLoggedIn() {
  return this.loginService.isUserLoggedIn();
 }

searchData(){
  this.apiCall.getProducts();
}

  ngOnInit(): void {
  }
 viewCart() {
  this.cart.getItems();
}
}
