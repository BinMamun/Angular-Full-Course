import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  title: string = "List of post";
  @Input() fromParent!: string;
  ngOnInit(): void {
    console.log("From onInit");
  }
}
