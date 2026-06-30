import { Component } from '@angular/core';
import { Header } from './core/header/header';
import { ServerStatus } from './features/dashboard/server-status/server-status';
import { Tickets } from './features/dashboard/tickets/tickets';
import { Traffic } from './features/dashboard/traffic/traffic';

@Component({
  selector: 'app-root',
  imports: [Header, ServerStatus, Traffic, Tickets],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
