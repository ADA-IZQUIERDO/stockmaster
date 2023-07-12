import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import  Producto  from '../interfaces/productos.interface';
import { collection, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private firestore: Firestore) { }

  getProductos(): Observable<Producto[]>{
    const placeRef = collection(this.firestore, 'productos');
    return collectionData(placeRef, {idField: 'id'}) as Observable<Producto[]>;
  }
}
