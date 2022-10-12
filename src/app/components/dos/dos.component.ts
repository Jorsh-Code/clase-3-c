import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  @Input()rada : number = 0;

  public inicial : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
