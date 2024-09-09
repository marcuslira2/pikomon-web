import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css'
})
export class TrainersComponent {
  showForm = false; // Controla a exibição do formulário
  genders = ['Masculino', 'Feminino', 'Outros'];
  pokemons = ['Charmander', 'Bulbasaur', 'Squirtle'];
  

  // Dados para a lista de treinadores
  trainers = [
    { name: 'Ash Ketchum', id: 1 },
    { name: 'Brock', id: 2 },
    { name: 'Misty', id: 3 },
  ];

  // Dados do novo treinador
  newTrainer = {
    name: '',
    gender: '',
    pokemon: ''
  };

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    // Aqui você pode adicionar a lógica para criar um novo treinador
    console.log('Novo treinador:', this.newTrainer);

    // Após a criação, você pode esconder o formulário e limpar os dados
    this.showForm = false;
    this.newTrainer = { name: '', gender: '', pokemon: '' };
  }

}
