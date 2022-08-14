import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import{ Product } from '../productInterface'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {  
  data: Array<Product> = [];

  constructor(private product: UserserviceService) { }

  ngOnInit(): void {
      this.product.getData().subscribe((data:any[]) => {
        this.data = (data as any).products;
        console.log(this.data);
        console.log(data);
      });
  }

}
