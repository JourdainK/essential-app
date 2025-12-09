import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../../interfaces/player';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit{
  public players$:  Observable<Player[] | undefined> = of(undefined);

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.players$ = this.api.getAllPlayers$();
  }

  public update(text: string){
    this.players$ = this.api.getPlayersByName$(text);
  }

}
