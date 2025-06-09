import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChessTrainer } from './chess-trainer/chess-trainer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChessTrainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'chess-trainer';
}
