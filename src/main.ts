import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <div> 
  <input type="radio" />

    </div>
  `,
})
export class App {
  name = 'Device List';
}

bootstrapApplication(App);
