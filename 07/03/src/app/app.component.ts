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
  title = 'app3';
  text = 'Marvellous Infosystems';   


  toggleText() {
    this.text = this.text === 'Marvellous Infosystems' ? 'Educating for Better Tomorrow' : 'Marvellous Infosystems';
}
}