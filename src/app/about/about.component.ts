import { Component } from '@angular/core';
import { ScreenWidthService } from '../screen-width.service';

export interface Stat {
  sName: string
  value: number
}

export interface Job {
  title: string
}

export interface Character {
  cName: string;
  origin: string;
  jobs: Job[];
  background: string;
  stats: Stat[];
  email: string;
  portrait: string;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  isLargeScreen: boolean = false;
  constructor(private screenWidthService: ScreenWidthService) { }
  ngOnInit() {
    this.isLargeScreen = this.screenWidthService.isGreaterThanThreshold('sm');
  }

  dmj: Character = {
    cName: 'DMJ',
    origin: 'Copenhagen',
    jobs: [{ title: 'Squarefantasy' }, { title: 'Lightweight' }, { title: 'Bandit' }],
    background: 'Web Developer',
    stats: [{ sName: 'Art', value: 1 }, { sName: 'Game Design', value: 4 }, { sName: 'Technical', value: 2 },
    { sName: 'Temperament', value: 5 }, { sName: 'Story', value: 3 }, { sName: 'Audio', value: 3 },],
    email: 'Dmj@fenrirgamestudio.com',
    portrait: 'img-dmj'
  }
  light: Character = {
    cName: 'Light',
    origin: 'Copenhagen',
    jobs: [{ title: 'Cyberpunk' }, { title: 'Lightweight' }, { title: 'Trickster' }],
    background: 'Game Developer',
    stats: [{ sName: 'Art', value: 3 }, { sName: 'Game Design', value: 5 }, { sName: 'Technical', value: 3 },
    { sName: 'Temperament', value: 1 }, { sName: 'Story', value: 2 }, { sName: 'Audio', value: 3 },],
    email: 'Light@fenrirgamestudio.com',
    portrait: 'img-light'
  }
  paladin: Character = {
    cName: 'Paladin',
    origin: 'Copenhagen',
    jobs: [{ title: 'Destiny' }, { title: 'Medium weight' }, { title: 'Holy Knight' }],
    background: 'Artist, Theologist',
    stats: [{ sName: 'Art', value: 5 }, { sName: 'Game Design', value: 3 }, { sName: 'Technical', value: 1 },
    { sName: 'Temperament', value: 3 }, { sName: 'Story', value: 5 }, { sName: 'Audio', value: 2 },],
    email: 'Paladin@fenrirgamestudio.com',
    portrait: 'img-paladin'
  }
  selectedCharacter: Character = this.light;

  changeCharacter(value: number) {
    switch (value) {
      case 0:
        this.selectedCharacter = this.light;
        break;
      case 1:
        this.selectedCharacter = this.dmj;
        break;
      case 2:
        this.selectedCharacter = this.paladin;
        break;
      default:
        this.selectedCharacter = this.light;
        break;
    }
    window.scrollTo(0, 0);
  }
}
