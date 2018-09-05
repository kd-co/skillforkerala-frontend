import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['send-message.component.styles.scss', ]
})
export class SendMessageComponent {

  helpText: string = null;
  error: string = null;

  constructor() {
  
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){

  }

  showHelpText(msg){
	this.helpText = msg;
  }

  hideHelpText(){
	this.helpText = null;
  }

}
