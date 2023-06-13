import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buscaMascota-angular';
  info: {img: string, message: string, description: string, date: string, contact: string, location: string, report: boolean }[] = [
    { img: 'https://media.traveler.es/photos/613760adcb06ad0f20e11980/master/w_1600%2Cc_limit/202931.jpg', message: 'PERRO PERDIDO', description: 'Perro perdido cerca de mi casa no suele ir tan lejos pero ya no lo veo desde anoche.', date: '12/06/2023', contact: '0982232452', location: 'Paraguay', report: true },
    { img: 'https://images.hola.com/imagenes/mascotas/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-t.jpg', message: 'PERRO PERDIDO', description: 'Perro perdido por zona Mcal. Lopez', date: '23/05/2023', contact: '0982232454', location: 'Paraguay', report: false },
    { img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg', message: 'PERRO PERDIDO', description: 'Perro perdido por barrio Sajonia', date: '17/08/2023', contact: '0982212345', location: 'Paraguay', report: true }
  ];
}
