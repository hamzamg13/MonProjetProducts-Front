import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {IProduct} from '../../domain/iproduct';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  id: string; // = 'P100';

  produit: IProduct;

  constructor(private _service: ProductsService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this._service.getAllProductsById(this.id).subscribe(
      resp => this.produit = resp,
      erreur => console.log(`Attention il y a une erreur ${erreur}`)
    );
  }

  // getProductDetails(id: string) {
  //   //   id = this.id;  // it will change later
  //   // }
  // //

}
