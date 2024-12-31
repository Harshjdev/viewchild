import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  personame:string='harsh';
  @Output() _childpersonname= new EventEmitter();

  
  sendtoparent(event:Event){
    this._childpersonname.emit(event);
  }

}
