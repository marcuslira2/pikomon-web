import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm: any;
  
constructor(private router: Router) { }

onSubmit() {
  // Adicionar a lógica de validação
  this.router.navigate(['/trainers']);
}

}
