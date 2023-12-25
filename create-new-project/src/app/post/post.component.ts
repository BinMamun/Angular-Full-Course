import { Component, Input, OnInit } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    PostListComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  title: string = "List of post";
  @Input() fromParent!: string;
  postMessage: string = "Message from post";
  ngOnInit(): void {
    console.log("From onInit");
  }
}
