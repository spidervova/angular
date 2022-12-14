import { Location } from '@angular/common';
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from "@angular/router";
import {Post, PostsService} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit{
  post: Post
  constructor(
    private router: ActivatedRoute,
    private postS: PostsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param)=>{
      console.log( 'param', param );
      this.post = this.postS.getById(+param['id'])
    })
  }

  goBack() {
    this.location.back();
  }

  loadPosts() {
    this.postS.loadMore()
  }
}