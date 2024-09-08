import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsListComponent } from './components/cards-list/cards-list.component';

@Component({
  selector: 'dr-root',
  standalone: true,
  imports: [CardsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
