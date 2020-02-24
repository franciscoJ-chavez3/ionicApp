import { Component, OnInit } from '@angular/core';
import { IScene } from '../interfaces/i-scene';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  displayScene: IScene;

  dice: number = 0;
  diceIdx: number;


  constructor(private ds: DataService) { }

  ngOnInit() {
    //getting the first scene
    this.displayScene = this.ds.getFirstScene();
  }

  decisionResult(id: number) {
    console.log('I am in decisionResult');
    console.log(this.dice);
    console.log(id);
    //check id - verify if dice comes into play
    if (id == 2) {
      console.log('i am in if condition');
      this.dice = Math.floor(Math.random() * 6) + 1;
      this.diceIdx = this.dice + 3;
      console.log('dice: ' + this.dice);
      console.log('diceIdx: ' + this.diceIdx);
      this.displayScene = this.ds.getNextScene(id);
    } else if (this.displayScene.ending == true) {
      //need to determine function call of ending buttons
      if (this.displayScene.choice1 === 'Back to Home') {
        //add logic for back to home - route back to /home

      }

      if (this.displayScene.choice2 === 'Previous Decision') {
        //add logic to return to previous decision index
        //check for good or bad in displayscene.title then pass index into getNextScene(id)
      }
    } else {
      this.dice = 0;
      this.displayScene = this.ds.getNextScene(id);
    }

  }

}
