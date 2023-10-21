import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'book-list';

  constructor(private router: Router) {}

  goBack() {
    // Navigating to the previous page
    window.history.back();
  }

  goForward() {
    // Navigating to the next page
    window.history.forward();
  }

  ngOnInit(): void {
    initFlowbite();
  }
}