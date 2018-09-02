import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pledge',
  templateUrl: './pledge.component.html',
  styleUrls: ['pledge.component.styles.scss', ]
})
export class PledgeComponent {

  array = [1];
  arraySize: number;
  error: string = null;
  helpText: string = null;

  skills_list = ['Sales','Sketching','Spacing','Storyboard creation','Strategic thinking','Teamwork','Time management','Typography','Usability','Verbal communications','Vision','Visual communications','Visual problem solving','Working collaboratively','Working independently','Writing','Written communications','Negotiation','Networking','Organizational','Patience with customers and staff','Perceptive about client needs','Photography','Photoshop','Planning','PowerPoint','Presentation','Print design','Printing','Prioritizing','Problem-solving','Production','Project management','Proofreading','Quark','QuarkXpress','Representing ideas visually','Deadline management','Decision making','Design','Design strategy','Digital print','Dreamweaver','Establishing rapport','Estimating costs','Excel','Flash','Flexibility','HTML','Illustration','Initiative','Interpersonal','iWork Keynote','Layout','Listening ','Marketing','Multitasking','Accurate','Adobe Acrobat','Adobe Creative Suite','Adobe Flash','Adobe Illustrator','Adobe InDesign','Adobe Photoshop','Aesthetic sense','Analytical','Arithmetic','Assertiveness','Attention to detail','Color sense','Color theory','Communication','Composition','Confidence','Consultation','Creating Logos','Creative thinking','Creativity','Critical thinking','CSS','Customer service'];

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){

  }

	increaseArrayElement(e) {
		this.arraySize = this.array[this.array.length - 1 ];
		this.arraySize += 1;
		this.array.push(this.arraySize);
		console.log(this.arraySize);
	}

	deleteArrayElement(index){
		this.array.splice(index, 1);
		this.arraySize -= 1;
	}

	showHelpText(msg){
		this.helpText = msg;
	}

	hideHelpText(){
		this.helpText = null;
	}
}
