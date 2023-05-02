import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

export interface GalleryItem {
  image: string;
  title: string;
  date: string;
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.sass']
})
export class VideosComponent {
  galleryItems = [
    { image: './assets/image/gaming_placeholder.jpg', title: 'Revive Couch Co-op!', date: 'January 18, 2023' },
    { image: './assets/image/gameover_placeholder.jpg', title: 'Elden Ring Sucks', date: 'January 11, 2023' },
    { image: './assets/image/mario_placeholder.jpg', title: 'The Nintendo Model', date: 'January 4, 2023' },
    { image: './assets/image/super_mario_placeholder.jpg', title: 'Exploring the World of Video Games', date: 'January 4, 2023' },
    { image: './assets/image/vr_placeholder.jpg', title: 'Game On!', date: 'January 18, 2023' },
    { image: './assets/image/esport_placeholder.jpg', title: 'A Deep Dive into the Games Industry', date: 'January 11, 2023' },
    { image: './assets/image/input_placeholder.jpg', title: 'Game Changers: Stories of Innovation', date: 'January 4, 2023' },
    { image: './assets/image/learning_placeholder.jpg', title: 'Game Overload: Reviews', date: 'January 4, 2023' },
    { image: './assets/image/metroid_placeholder.jpg', title: 'The Game Plan: Strategies and Trends', date: 'January 18, 2023' },
    { image: './assets/image/retro_placeholder.jpg', title: 'The Gaming Insider: Insights and Analysis', date: 'January 11, 2023' },
    { image: './assets/image/gaming_placeholder.jpg', title: 'The Gaming Roundtable', date: 'January 4, 2023' },
    { image: './assets/image/gaming_placeholder.jpg', title: 'The Evolution of Gaming', date: 'January 18, 2023' },
    { image: './assets/image/gameover_placeholder.jpg', title: 'The Future of Esports', date: 'January 11, 2023' },
    { image: './assets/image/mario_placeholder.jpg', title: 'The Legacy of Mario', date: 'January 4, 2023' },
    { image: './assets/image/super_mario_placeholder.jpg', title: 'The Making of Super Mario', date: 'January 4, 2023' },
    { image: './assets/image/vr_placeholder.jpg', title: 'The Rise of VR Gaming', date: 'January 18, 2023' },
    { image: './assets/image/esport_placeholder.jpg', title: 'The Business of Esports', date: 'January 11, 2023' },
    { image: './assets/image/input_placeholder.jpg', title: 'The Evolution of Game Controllers', date: 'January 4, 2023' },
    { image: './assets/image/learning_placeholder.jpg', title: 'The Role of Games in Education', date: 'January 4, 2023' },
    { image: './assets/image/metroid_placeholder.jpg', title: 'The Legacy of Metroid', date: 'January 18, 2023' },
    { image: './assets/image/retro_placeholder.jpg', title: 'The Revival of Retro Gaming', date: 'January 11, 2023' },
    { image: './assets/image/gaming_placeholder.jpg', title: 'The Impact of Gaming on Society', date: 'January 4, 2023' },
    { image: './assets/image/gameover_placeholder.jpg', title: 'The Art of Game Design', date: 'January 4, 2023' },
    { image: './assets/image/gaming_placeholder.jpg', title: 'Revive Couch Co-op!', date: 'January 18, 2023' },
    { image: './assets/image/gameover_placeholder.jpg', title: 'Elden Ring Sucks', date: 'January 11, 2023' },
    { image: './assets/image/gaming_placeholder.jpg', title: 'The Psychology of Gaming', date: 'January 18, 2023' },
    { image: './assets/image/gameover_placeholder.jpg', title: 'The Ethics of Gaming Journalism', date: 'January 11, 2023' },
    { image: './assets/image/mario_placeholder.jpg', title: 'The History of Nintendo', date: 'January 4, 2023' },
    { image: './assets/image/super_mario_placeholder.jpg', title: 'The Making of Super Mario Odyssey', date: 'January 4, 2023' },
    { image: './assets/image/vr_placeholder.jpg', title: 'The Future of VR Gaming', date: 'January 18, 2023' },
    { image: './assets/image/esport_placeholder.jpg', title: 'The Rise of Esports in Asia', date: 'January 11, 2023' },
    { image: './assets/image/input_placeholder.jpg', title: 'The Evolution of Game Input', date: 'January 4, 2023' },
    { image: './assets/image/learning_placeholder.jpg', title: 'The Benefits of Game-Based Learning', date: 'January 4, 2023' },
    { image: './assets/image/metroid_placeholder.jpg', title: 'The Legacy of Samus Aran', date: 'January 18, 2023' },
    { image: './assets/image/retro_placeholder.jpg', title: 'The Nostalgia of Retro Gaming', date: 'January 11, 2023' },
    { image: './assets/image/gaming_placeholder.jpg', title: 'The Future of Gaming Technology', date: 'January 4, 2023' },
  ];

  startIndex = 0;
  endIndex = 12;
  pageSize = 12;

  onPageChange(event: PageEvent) {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;
  }
}
