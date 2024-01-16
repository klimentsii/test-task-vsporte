import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

export interface PlayerModel {
  photo: string;
  number: number;
  name: string;
  surname: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  fields: Array<Array<PlayerModel>> = [[], [], [], [], [], [], [], [], [], [], [], []];

  players: Array<PlayerModel> = [
    {
      photo: 'https://cdn.soccerwiki.org/images/player/85260.png',
      number: 0,
      name: 'Kylian',
      surname: 'Mbappé',
    },
    {
      photo: 'https://cdn.soccerwiki.org/images/player/52690.png',
      number: 1,
      name: 'Mohamed',
      surname: 'Salah',
    },
    {
      photo: 'https://cdn.soccerwiki.org/images/player/88100.png',
      number: 2,
      name: 'Erling',
      surname: 'Haaland',
    },
    {
      photo: 'https://cdn.soccerwiki.org/images/player/49590.png',
      number: 3,
      name: 'Harry',
      surname: 'Kane',
    },
    {
      photo: 'https://cdn.soccerwiki.org/images/player/41105.png',
      number: 4,
      name: 'Kevin',
      surname: 'de Bruyne',
    },
  ]

  drop(event: CdkDragDrop<Array<Array<PlayerModel>>>) {
    console.log(event)
    // event.container.element.nativeElement.appendChild(event.item.element.nativeElement)
  }
}
