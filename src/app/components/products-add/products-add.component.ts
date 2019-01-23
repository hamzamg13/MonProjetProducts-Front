import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IProduct} from '../../domain/iproduct';
import {ProductsService} from '../../services/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder,
              private _service: ProductsService,
              private _router: Router) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      id: new FormControl('', [Validators.required]),
      // We can also use the duck typing ->  // id: ['', [Validators.required]],
      nom: new FormControl('', [Validators.required]),
      prixUnitaire: new FormControl('', [Validators.required, Validators.pattern('[+-]?[0-9.]+')])
    });
  }

  addProduct(prod: IProduct) {
    this._service.addProduct(prod).subscribe(
      resp => this._router.navigateByUrl('/list'),
      err => console.log(`ATTENTION Il y a eu l'erreur ${err}`)
    );
    // console.log('===== Dans l\'ajout. La validation a bel est bien réussit');
  }

}
