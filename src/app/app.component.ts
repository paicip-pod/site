import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  socials: any[] = [ { handle: 'https://www.instagram.com/paicip_pod/', icon: 'fab fa-instagram ' } ];
  albums: any[] = [
    { title: '1' }, { title: '2' },{ title: '3' }
  ];
  title = 'site';
}
