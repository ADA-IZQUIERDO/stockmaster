import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent {
  constructor(private qrScanner: QRScanner) {}

  scanQRCode() {
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // Permisos de cámara obtenidos. Mostrar vista previa de la cámara
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Código QR detectado:', text);

            this.qrScanner.hide(); // Ocultar la vista previa de la cámara
            scanSub.unsubscribe(); // Detener la suscripción al escaneo
          });

          this.qrScanner.show(); // Mostrar la vista previa de la cámara
        } else if (status.denied) {
          // El usuario ha denegado el permiso de cámara. Puedes mostrar un mensaje o redirigir a la configuración de la aplicación
        } else {
          // Los permisos de cámara no están disponibles (por ejemplo, en un navegador). Puedes mostrar un mensaje de error o proporcionar una funcionalidad alternativa
        }
      })
      .catch((error: any) => console.error('Error al preparar el escáner QR', error));
  }
}
