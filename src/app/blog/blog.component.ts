import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent {

  body = '';
  pinnedBlogPost = { id: '#', createdAt: 'date', author: 'name',  title: 'Read this first. A glossary of game design terms', caption: 'Glossary', tags: ['Glossary', 'Learning'], thumbnail: './assets/image/controller.jpg', body: this.body};
  blogPosts = [
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/gaming_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/mario_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/gameover_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/gaming_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/mario_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/gameover_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/gaming_placeholder.jpg', body: this.body},
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/dummy/dummy-blog.html', { responseType: 'text' }).subscribe(data => {
      this.body = data;
    });
  }
}