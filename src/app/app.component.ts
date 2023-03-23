import { Component, OnInit } from '@angular/core';
import { CentroAyudaService } from './centro-ayuda.service';
import { FrequentQuestion } from './models/frequent-question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'explore-app';
  options: any[] = [
    {
      alias: 'BANCO',
      nombre: 'Banco'
    },
    {
      alias: 'TRANDING',
      nombre: 'Trading'
    }
  ]
  frequentQuestions!: FrequentQuestion;
  selectedOption:any

  constructor(private centroAyudaService: CentroAyudaService) {

  }

  ngOnInit():void{
    this.centroAyudaService.getData();
    setTimeout(()=>{
      this.getFrequentQuestions();
      console.log('frequentQuestions: ', this.frequentQuestions)

    }, 500)
  }

  getFrequentQuestions(): void {
    this.frequentQuestions = this.centroAyudaService.get(this.options[0].alias);
  }

  onSelect(option: any): void {
    console.log('option: ', option)
    this.selectedOption = option;
    this.getFrequentQuestions();
  }
}
