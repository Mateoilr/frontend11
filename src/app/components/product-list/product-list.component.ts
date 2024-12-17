import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TheoryshopService } from '../../services/theoryshop.service';


@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, NzTableModule, NzButtonModule],
})
export class ProductListComponent implements OnInit {
  constructor(private service: TheoryshopService) {}

  theory: any[] = [];
  @Output() theorySelected = new EventEmitter<any>();

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.service.gettheor().subscribe((theory) => {
      this.theory = theory;
    }
    );
}
 deletetheory(id: string): void {
  this.service.deletetheory(id).subscribe(() => {
    this.loadProducts();
    });
  }

  selecttheory(theory: any): void {
    this.theorySelected.emit(theory);
    }
}
