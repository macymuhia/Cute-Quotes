export class Quote {
  showDetail: boolean;
  constructor(public quoteName: string, public authorName: string, public addedBy: string, public submitDate: Date){
    this.showDetail = false;
  }
}
