import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title=''
  text = ''
  styleToggle=false
  @Output() addPostUser: EventEmitter<Post> = new EventEmitter<Post>()
  constructor() { }

  @ViewChild('myInputText',{static: false}) myinputText: ElementRef
  @ViewChild('myInputTitle',{static: false}) myinputTitle: ElementRef

  ngOnInit() {
  }

  addPost() {
    if(this.text.trim() && this.title.trim()) {
      const post : Post ={
        title: this.title,
        text: this.text
      }
      console.log('Add post: ', post)
      this.addPostUser.emit(post)
      this.text=''
      this.title=''
    }
  }

  onLoadDefault () {
    this.styleToggle=!this.styleToggle
    if(this.styleToggle) {
      this.myinputText.nativeElement.style.color = "red"
      this.myinputTitle.nativeElement.style.fontWeight = "bold"
        } else {
      this.myinputText.nativeElement.style.color = 'black'
      this.myinputTitle.nativeElement.style.fontWeight = "normal"
  
    }
  }
  
  
}