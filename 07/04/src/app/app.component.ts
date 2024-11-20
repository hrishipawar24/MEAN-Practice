import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app4';
  text = 'Marvellous Infosystems';   


  toUpper() {
    this.text = this.text.toUpperCase();
  }

  toLower() {
    this.text = this.text.toLowerCase();
  }

}
