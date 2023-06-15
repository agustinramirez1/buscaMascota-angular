import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  formData = {
    title: '',
    description: '',
    picture: '',
    phone: '',
    pais: '',
    last_time_seen: '',
    url: ''
  };
  patternUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  submitForm(form: NgForm) {
    if (form.valid) {
      // Realizar acciones cuando el formulario es válido
      console.log('Formulario válido');
    } else {
      // Mostrar mensajes de error o realizar acciones adicionales
      console.log('Formulario inválido');
    }
  }

}
