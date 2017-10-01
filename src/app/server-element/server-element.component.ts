import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  /**
   * ViewEncapsulation is about css. Each css file works only in each component thanks to encapsulation.
   * Emulated is the default. Angular does some work to avoid browser issues.
   * None is to avoid encapsulation, and css will apply to all components app wide.
   * Native is to use the native encapsulation if browsers support it, but could have some problems using
   * non supported browsers.
   */
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
