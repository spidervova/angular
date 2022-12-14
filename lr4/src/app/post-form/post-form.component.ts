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
  titleSearching = ''
  filteringByTitle = false
  filteringByText = false

  @Output() addPostUser: EventEmitter<Post> = new EventEmitter<Post>()
  @Output() titleSearch = new EventEmitter<string>()
  @Output() filterByTitle = new EventEmitter<boolean>()
  @Output() filterByText = new EventEmitter<boolean>()

  constructor() { }

  @ViewChild('myInputText',{static: false}) myinputText: ElementRef
  @ViewChild('myInputTitle',{static: false}) myinputTitle: ElementRef

  ngOnInit() {
  }

  onChangeSearch(change: string) {
    this.titleSearch.emit(change)
  }


  addPost() {
    if(this.text.trim() && this.title.trim()) {
      const post: Post ={
        title: this.title,
        text: this.text
      }
      console.log('Add post: ', post)
      this.addPostUser.emit(post)
      this.text=''
      this.title=''
    }
  }

  onFilterByTitle () {
    this.filterByTitle.emit(true);
    this.filterByText.emit(false);
  }

  onFilterByText () {
    this.filterByText.emit(true);
    this.filterByTitle.emit(false);
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