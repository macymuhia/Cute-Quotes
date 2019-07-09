import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-delete',
  templateUrl: './quote-delete.component.html',
  styleUrls: ['./quote-delete.component.css']
})
export class QuoteDeleteComponent implements OnInit {

  @Input() quote: Quote;

  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
