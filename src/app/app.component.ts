import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onActivate() {
    // Smooth scroll
    // const scrollToTop = window.setInterval(() => {
    //   const pos = window.pageYOffset;
    //   (pos > 0) ? window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
    // }, 1);

    window.scroll(0, 0);
  }
}
