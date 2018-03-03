import { Component } from '@angular/core';

@Component({
  selector: 'app-touch-event',
  template: `
    <div class="gestures"
         (click)="divClicked()"
    >
      Click Me
    </div>
    <div class="gestures"
         (tap)="divTaped()"
    >
      Tap Me
    </div>
    <div class="gestures"
         (press)="divLongPressed()"
    >
      LongPress Me
    </div>
  `
})
export class TouchEventComponent {

  divClicked() {
    console.log('clicked div')
  }

  divTaped() {
    console.log('div tapped')
  }

  divLongPressed() {
    console.log('long pressed')
  }
}
