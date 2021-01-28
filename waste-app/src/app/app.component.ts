import { Component } from '@angular/core';
import { PredictService } from 'src/services/predict.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  url: string;
  visibleUrl1: string;
  visibleUrl2: string;
  predictions = [];
  predictions2 = [];
  predictionTime = '';
  predictionTime2 = '';
  requestWaiting = 2;
  file: any;
  
  constructor(public predictService: PredictService) {}

  toBase64(file): any {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
  async onFileChange(files) {
    this.file = files.item(0);
    this.predictions = [];
    this.predictions2 = [];
    this.predictionTime = '';
    this.predictionTime2 = '';
    this.visibleUrl1 = await this.toBase64(this.file);
    this.visibleUrl2 = this.visibleUrl1;
  }

  async sendFileClick() {
    if (this.file) {
      this.requestWaiting = 2;
      const startTime = Date.now();
      this.predictService.sendFile(this.file).then(result => {
        this.predictionTime = ((Date.now() - startTime) / 1000).toFixed(1);
        this.predictions = result.predictions.filter(p => p.probability > 0.4);
        --this.requestWaiting;
        console.log(this.predictions);
      }).catch(err => {
        this.requestWaiting = 0;
        console.error(err);
      });
      this.predictService.sendFileCV(this.file).then(async result => {
        this.predictionTime2 = ((Date.now() - startTime) / 1000).toFixed(1);
        this.predictions2 = result.filter(p => p.percentage_probability > 50);
        --this.requestWaiting;
        console.log(this.predictions2);
      }).catch(err => {
        this.requestWaiting = 0;
        console.error(err);
      });
    }
  }
}
