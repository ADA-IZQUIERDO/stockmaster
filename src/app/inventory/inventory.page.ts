import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import Producto from '../interfaces/productos.interface';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  productos: Producto[]=[];

  constructor() { }

  ngOnInit() {
/*     this.productosService.getProductos().subscribe(productos => {
      console.log(productos);
    }) */
  }



}
