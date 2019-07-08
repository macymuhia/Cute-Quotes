import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {quoteName:'The grass is greener where you water it', authorName:'Maya Angelou', addedBy:'Macy Muhia'},
    {quoteName:'YOLO', authorName:'Elenor Roosevelt', addedBy:'Macy Muhia'},
    {quoteName:'Imitation is suicide', authorName:'Albert Einstein', addedBy:'Macy Muhia'},
    {quoteName:'Peace begins with a smile', authorName:'Mahatma Gandi', addedBy:'Macy Muhia'},
    {quoteName:'Impossible is for the unwilling', authorName:'Mother Teresa', addedBy:'Macy Muhia'},
    {quoteName:'No pressure, no diamonds', authorName:'Joel Osteen', addedBy:'Macy Muhia'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
