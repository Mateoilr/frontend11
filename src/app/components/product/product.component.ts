import { Component } from '@angular/core';
import { NzFormControlComponent } from 'ng-zorro-antd/form';
import { NzFormDirective } from 'ng-zorro-antd/form';
import { NzFormItemComponent } from 'ng-zorro-antd/form';
import { NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { Form, ReactiveFormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { Validators as MyValidators } from '@angular/forms';
import { TheoryshopService } from '../../services/theoryshop.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductListComponent } from '../product-list/product-list.component';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NzFormControlComponent,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzInputDirective,
    NzButtonComponent,
    NzInputNumberComponent,
    CommonModule,
    ProductListComponent,
    UpdateProductComponent,

  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
submitFormProduct() {
throw new Error('Method not implemented.');
}
  constructor(
    private Service: TheoryshopService,
    private fb : NonNullableFormBuilder,
    private notification: NzNotificationService
  ) {
    const { required } = MyValidators;
    this.validateForm = this.fb.group({
      title: ['', [required]],
      description: ['', [required]],
      category: ['', [required]],
      popularity: [0, [required]],
      confirmed: [false, [required]],
   });

   

  }
  selecttheory: any;

  validateForm: FormGroup <{
  title: FormControl <string>;
  description : FormControl <string>;
  category : FormControl <string>;
  popularity : FormControl <number>;
  confirmed: FormControl<boolean>;
  }>;

  submitFormTheory(): void {
    if (this.validateForm.valid) {
      this.Service.createtheory(this.validateForm.value).subscribe(() => {
      this.createNotification(
        'success', 
        `${this.validateForm.value.title}${this.validateForm.value.category}`,
        'Your theory has been created successfully'
      );
    }); 
  }else {
      Object.values(this.validateForm.controls).forEach((control) => {  
        if(control.invalid) {
        control.markAsDirty(); 
        control.updateValueAndValidity();
  }});
    }
  }
  createNotification(type: string, title: string, content: string): void {
    this.notification.create(type, title,content);
  } 
  onTheoryUpdate(): void {
  this.selecttheory = null;
  }
  edittheory(theory: any): void {
    this.selecttheory = theory;
  }

  }
