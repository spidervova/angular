import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  @Input() post: Post
  @Output() postid: EventEmitter<number> = new EventEmitter<number>()
  removePost() {
    this.postid.emit(this.post.id)
  }
  ngOnInit() {
  }
}