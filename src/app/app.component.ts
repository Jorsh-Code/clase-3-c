import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clase-3-b';
  public entrada : number = 1;

  out(event : any): void{
    this.entrada += event;
  }
}
