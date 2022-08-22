import { Component, Input, OnInit } from '@angular/core';
import { appConstant } from '../../app.constant';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  productForm: any;
  id: number | string = '';

  @Input() product: string | undefined;

  constructor(
  
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    if (this.product) {
      this.initializeForm(this.product);
    }
  }

  get appConstant() {
    return appConstant;
  }

  initializeForm(product: any) {
    this.productForm = this.commonService.createProductForm(product);
  }
  onSubmit(formData: any, isValid: boolean) {
    console.log(formData);
  }
}
