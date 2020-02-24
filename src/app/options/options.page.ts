import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  music: boolean = false;

  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  //play music; still neeed to fix
  play() {
    this.music = !this.music;
    this.ds.playMusic();
  }

}
