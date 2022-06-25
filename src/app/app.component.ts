import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Neat tree",
      username: "@blabla",
      imageUrl: 'assets/tree.jpeg',
      content: 'I saw this neat tree today'
    },
    {
      title: "Mountain",
      username: "@mountainlover",
      imageUrl: 'assets/mountain.jpeg',
      content: 'Here is a picture of a snowy mountain.'
    },
    {
      title: "Mountain biking",
      username: "@biking1222",
      imageUrl: 'assets/biking.jpeg',
      content: 'I like bike.'
    },
  ]
}
