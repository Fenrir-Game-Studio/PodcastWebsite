import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScreenWidthService } from '../screen-width.service';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent {
  isLargeScreen = false;
  body = '';
  pinnedBlogPost = { id: '#', createdAt: 'date', author: 'name',  title: 'Read this first. A glossary of game design terms', caption: 'Glossary', tags: ['Glossary', 'Learning'], thumbnail: './assets/image/controller.jpg', body: this.body};
  blogPosts = [
    { id: '#', createdAt: 'date', author: 'name',  title: 'A title that is longer is better', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/esport_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/super_mario_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/learning_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/retro_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/vr_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/gameover_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/gaming_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/mario_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/input_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/metroid_placeholder.jpg', body: this.body},
    { id: '#', createdAt: 'date', author: 'name',  title: 'title abc', caption: 'short title', tags: ['Tag1', 'Tag2'], thumbnail: './assets/image/esport_placeholder.jpg', body: this.body},
  ];

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 6},
    {text: 'Two', cols: 7, rows: 3},
    {text: 'Three', cols: 7, rows: 3},
    {text: 'Four', cols: 10, rows: 3},
  ];

  constructor(private http: HttpClient, screenWidthService: ScreenWidthService) {
    this.isLargeScreen = screenWidthService.getIsLargeScreen();
    console.log(this.isLargeScreen);
  }

  ngOnInit() {

  }
}