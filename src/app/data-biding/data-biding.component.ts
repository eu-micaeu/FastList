import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit{

  public nome: string = "Dener";
  public idade: number = 29;

  public checkedDisable: boolean = false;
  public imgSrc: string = "https://wallpapercave.com/wp/6K44j5E.jpg";
  public imgTitle: string = "Imagem qualquer";

  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() {}

  ngOnInit(): void{}

  public alertInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
