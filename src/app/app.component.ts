import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { HightlightDirective } from './directives';

@Component({
  selector: 'dr-root',
  standalone: true,
  imports: [SimpleCardComponent, HightlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public onHightLightChange(event: boolean): void {
    console.log(event);
  }
}
