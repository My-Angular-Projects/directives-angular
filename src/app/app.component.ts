import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';

@Component({
  selector: 'dr-root',
  standalone: true,
  imports: [SimpleCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  //
}
