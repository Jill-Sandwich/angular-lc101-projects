import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = [
    'https://learn.launchcode.org/',
    'https://www.youtube.com/c/LinusTechTips',
    'https://www.youtube.com/c/TheProperPeople'
  ];
  constructor() { }

  ngOnInit() {
  }

}
