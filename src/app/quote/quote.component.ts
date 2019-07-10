import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'The grass is greener where you water it', 'Maya Angelou', 'Macy Muhia', new Date(2019, 6, 4)),
    new Quote(2, 'YOLO', 'Elenor Roosevelt', 'Macy Muhia', new Date(3,14, 2019)),
    new Quote(3, 'Imitation is suicide', 'Albert Einstein', 'Macy Muhia', new Date(3,14, 2019)),
    new Quote(4, 'Peace begins with a smile', 'Mahatma Gandi', 'Macy Muhia', new Date(3,14, 2018)),
    new Quote(5, 'Impossible is for the unwilling', 'Mother Teresa', 'Macy Muhia', new Date(3,14, 2019)),
    new Quote(6, 'No pressure, no diamonds', 'Joel Osteen', 'Macy Muhia', new Date(3,14, 2019))
  ];

  toggleDetails(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.quoteId = quoteLength+1;
    quote.submitDate = new Date(quote.submitDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete "${this.quotes[index].quoteName}" ?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
