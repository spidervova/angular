import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(posts: Post[], args: Array<any>): Post[] {

    const [titleSearch, filteringByTitle, filteringByText] = args;
    if(!titleSearch.trim()) {
      return posts
    } else {
      return posts.filter(post=>{
        return filteringByTitle 
          ? post.title.toLowerCase().includes(titleSearch.toLowerCase()) 
          : filteringByText 
            ? post.text.toLowerCase().includes(titleSearch.toLowerCase()) 
            : false;
      })
    }
  }
}
