import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent {

  agregarTarjeta(){
    console.log(this.form)

    const tarjeta: any ={
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    
    }

    this.listTarjetas.push(tarjeta)
    this.form.reset();
    }


  listTarjetas: any[] = [
    {
      titular: "Juan Perez",
      numeroTarjeta: '23232323',
      fechaExpiracion: '11/25',
      cvv: '123'
    },
    {
      titular: "Ramiro Perez",
      numeroTarjeta: '25252525',
      fechaExpiracion: '12/25',
      cvv: '321'
    }
  ];

 form: FormGroup;

 constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    titular:['',Validators.required],
    numeroTarjeta:['',[Validators.required,Validators.maxLength(16),Validators.minLength(16),]],
    fechaExpiracion:['',[Validators.required,Validators.maxLength(5),Validators.minLength(5)]],
    cvv:['',[Validators.required,Validators.maxLength(3),Validators.minLength(3)]]
  })
 }




}

