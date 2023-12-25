import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export class PostComponent {

  title: string = "List of post";
  @Input() fromParent!: string;
  postMessage: string = "Message from post";
  childMessage: string = "This is from Post child";

  outputMessage: string = "This message is from child component using @Output Decorator";

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.outputMessage);
  }
}
