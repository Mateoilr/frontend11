import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TheoryshopService } from '../../services/theoryshop.service';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Validators as MyValidators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'app-update-product',
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
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnChanges {
submitFormTheory() {
throw new Error('Method not implemented.');
}
onTheoryUpdate() {
throw new Error('Method not implemented.');
}
edittheory(_$event: Event) {
throw new Error('Method not implemented.');
}
  @Input() theory: any;
  @Output() theoryUpdate = new EventEmitter<any>();

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

  ngOnChanges(changes: SimpleChanges): void {
  
   if (changes['theory']) {
      this.setvalues();
   }
  }
  setvalues(): void {
    if(this.theory) {
      this.validateForm.setValue({
        title: this.theory.title,
        description: this.theory.description,
        category: this.theory.category,
        popularity: this.theory.popularity,
        confirmed: this.theory.confirmed
      });
    }
  }

  submitformProductUpdate(): void {
    if (this.validateForm.valid) {
      this.Service.updatetheory(this.theory.id, this.validateForm.value).subscribe(() => {
        this.createNotification('success', 
          `${this.validateForm.value.title}${this.validateForm.value.category}`, 
          'The product has been updated successfully.');
      });
    }else {
      Object.values(this.validateForm.controls).forEach((control) => {  
        if(control.invalid) {
        control.markAsDirty(); 
        control.updateValueAndValidity();
  }});
  
}}
createNotification(type: string, title: string, content: string): void {
  this.notification.create(type, title,content);
} }
function submitformProductUpdate() {
  throw new Error('Function not implemented.');
}

