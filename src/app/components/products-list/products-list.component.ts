import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../domain/iproduct';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  valeur: string = 'initial';
  couleur: string = 'blue';
  data: IProduct[];

  constructor(private _service: ProductsService) {
  }

  ngOnInit() {
    this.data = this._service.getAllProducts().subscribe(
      resp => this.data = resp,
      erreur => console.log(`ATTENTION, Il y a l'erreur ${erreur}`)
    );
  }

  // faireQuelqueChose() {
  //   console.log('===================== OK c\'est partie');
  // }

}
