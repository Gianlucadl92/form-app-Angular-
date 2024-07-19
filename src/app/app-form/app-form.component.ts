import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrl: './app-form.component.css'
})

export class AppFormComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      // Logica per inviare i dati al database
      console.log('Dati inviati:', this.myForm.value);
    }
  }

  onUpdate(): void {
    if (this.myForm.valid) {
      // Logica per modificare i dati nel database
      console.log('Dati modificati:', this.myForm.value);
    }
  }

  onDelete(): void {
    if (this.myForm.valid) {
      // Logica per cancellare i dati dal database
      console.log('Dati cancellati:', this.myForm.value);
    }
  }
}


