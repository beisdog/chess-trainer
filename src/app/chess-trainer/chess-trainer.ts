  import { Component } from '@angular/core';
  import { Chessground } from '@lichess-org/chessground';
  @Component({
    selector: 'chess-trainer',
    imports: [],
    templateUrl: './chess-trainer.html',
    styleUrl: './chess-trainer.css',
    standalone: true
  })
  export class ChessTrainer {

    displayChess() {
      const boardElement = document.getElementById('board-1');
      var cg: any;
      if (boardElement) {
        cg = Chessground(boardElement, {
          fen: 'r2q2k1/1p6/p2p4/2pN1rp1/N1Pb2Q1/8/PP1B4/R6K b - - 2 25',
        });
        
      }
      console.log('ChessTrainer component initialized', cg);
    }
  }
