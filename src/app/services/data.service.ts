import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IScene } from '../interfaces/i-scene';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'https://spreadsheets.google.com/feeds/list/1gfSZdYwLpgzeA5ng9q1GoaYeN4xuMbZTfnyofbHpCs0/1/public/full?alt=json';

  private googleSheet;

  private scenes: IScene[] = [];

  private audio = new Audio();

  constructor(private http: HttpClient) {
    console.log('hello');
    this.parseData();
  }

  playMusic() {
    this.audio.src = 'assets/narutofive.mp3';
    this.audio.autoplay = true;
  }

  //retrieve data from google sheet
  parseData() {
    this.googleSheet = this.http.get(this.url);

    this.googleSheet.subscribe(
      x => {
        for (let s of x.feed.entry) {
          let info: IScene = {
            id: s.gsx$id.$t as number,
            title: s.gsx$title.$t,
            desc: s.gsx$desc.$t,
            decision: s.gsx$decision.$t,
            choice1: s.gsx$choice1.$t,
            choice2: s.gsx$choice2.$t,
            choice3: s.gsx$choice3.$t,
            choice4: s.gsx$choice4.$t,
            choice5: s.gsx$choice5.$t,
            choice6: s.gsx$choice6.$t,
            result1: s.gsx$result1.$t as number,
            result2: s.gsx$result2.$t as number,
            result3: s.gsx$result3.$t as number,
            result4: s.gsx$result4.$t as number,
            result5: s.gsx$result5.$t as number,
            result6: s.gsx$result6.$t as number,
            ending: s.gsx$end.$t as boolean
          };
          //push
          this.scenes.push(info);
        }
        console.log(this.scenes);
      }
    );
  }

  //gets next scene via index 
  getNextScene(id: number) {
    //use id as index of scenes
    return this.scenes[id - 1];
  }

  getFirstScene(): IScene {
    //display content of first item in scenes array
    return this.scenes[0];
  }
}
