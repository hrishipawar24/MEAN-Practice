import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <p style="color: blue;">Marvellous Infosystems</p>
    <input type="text">
  `,
  styles: [`
    /* No need for a separate CSS file */
  `]
})
export class AppComponent {
  title = 'my-app';
}
