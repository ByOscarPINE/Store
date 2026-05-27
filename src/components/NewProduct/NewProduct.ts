import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-product',
  imports: [],
  templateUrl: './NewProduct.html',
  styleUrl: './NewProduct.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProduct {}
