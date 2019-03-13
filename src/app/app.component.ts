import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  cardTitle = 'Kosher App';
  cardSub = 'Kosher Info';
  cardContent = 'A future list of Kosher things.';

  // Init method
  ngOnInit(): void {
    this.cardTitle = 'Word!!';
  }
}


