import { Component,Input } from '@angular/core';
 
@Component({
  selector: 'modal-static',
  templateUrl: './static-modal.component.html',
  styleUrls: [ './static-modal.component.css' ]
})
export class DemoModalStaticComponent{
    
    @Input() private header: String;
    @Input() private body: String;

}