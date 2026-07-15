import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, MessagesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
