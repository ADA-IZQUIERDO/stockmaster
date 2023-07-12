export default interface Producto{
  id?: string;
  nombre: string;
  descripcion: string;
  estado: boolean;
  fecha_entrada: string;
  fecha_salida: string;
  marca: string;
  modelo: string;
  numero_serie: number;
  tipo: string;
}
