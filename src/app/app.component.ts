
import { Component, ViewEncapsulation } from '@angular/core';
import { User } from 'src/entity/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'MyFirstApp';

  user: User = new User("Mario", "Rossi");
}
