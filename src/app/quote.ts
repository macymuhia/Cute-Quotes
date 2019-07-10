export class Quote {
  showDetail: boolean;
  constructor(public quoteId: number, public quoteName: string, public authorName: string, public addedBy: string, public submitDate: Date){
    this.showDetail = false;
  }
}
