import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dr-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'simple-card',
  },
})
export class SimpleCardComponent {}
