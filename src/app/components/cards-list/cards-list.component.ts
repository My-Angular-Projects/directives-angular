import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleCardComponent } from '../simple-card/simple-card.component';
import { HightlightDirective } from '../../directives';

@Component({
  selector: 'dr-cards-list',
  standalone: true,
  imports: [SimpleCardComponent, HightlightDirective],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'cards-list',
  },
})
export class CardsListComponent {
  public onHightLightChange(event: boolean): void {
    console.log(event);
  }
}
