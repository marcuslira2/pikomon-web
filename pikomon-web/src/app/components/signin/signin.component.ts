import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  registerForm: any
  constructor(private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;
      // Adicionar a lógica para criar um usuário

      // Redirecionar para a página de login após o registro
      this.router.navigate(['/']);
    }
  }

}
