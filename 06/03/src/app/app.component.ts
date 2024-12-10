import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
    <h1>Hello, Angular!</h1>
    <p>This is my first Angular app.</p>
  `,
  styles: [`
    h1 {
      color: blue;
      font-size: 24px;
    }

    p {
      color: green;
      font-size: 16px;
    }
  `]
})

export class AppComponent {
  title = 'project';
  
}
