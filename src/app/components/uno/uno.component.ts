import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  public flag : boolean = true;


  constructor() { }

  ngOnInit(): void {
  }


  onClick(): void{
    this.flag = !this.flag;
  }

  onMouseEnter(): void{
    console.log('entro');
  }

  validation(event : Event): void{
    console.log(event.target);
  }
}
