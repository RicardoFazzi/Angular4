import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers', //This selector is by tag
  //selector: '[app-servers]', //This selector is by attribute
  //selector: '.app-servers', //This selector is by class
  /*template: `
    <app-server></app-server>
    <app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Test', 'server', 'testServer'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name was: ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
