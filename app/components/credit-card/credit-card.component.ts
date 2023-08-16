import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent {
  listTarjetas: any[] = [
    {
      titulo: "Juan Perez",
      numeroTarjeta: '23232323',
      fechaExpiracion: '11/25',
      cvv: '123'
    },
    {
      titulo: "Ramiro Perez",
      numeroTarjeta: '25252525',
      fechaExpiracion: '12/25',
      cvv: '321'
    }
  ];

}
