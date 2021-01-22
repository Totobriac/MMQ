import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-editor',
  templateUrl: './quiz-editor.component.html',
  styleUrls: ['./quiz-editor.component.css']
})
export class QuizEditorComponent implements OnInit {

  @Input() quizedMovie;

  component: number = 1
  
  constructor() { }  

  ngOnInit(): void {    
  }

  questionEditor(page) {    
    this.component = page
  }

}
