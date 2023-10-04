import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {

  public nome: string = "Dener";
  public idade: number = 29;

  public checkedDisable: boolean = false;
  public imgSrc: string = "https://wallpapercave.com/wp/6K44j5E.jpg";
  public imgTitle: string = "Imagem qualquer";
}
