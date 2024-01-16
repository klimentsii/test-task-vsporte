import { Component, Input } from '@angular/core';
import { PlayerModel } from 'src/app/app.component';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent {
  @Input() player!: PlayerModel;
}
