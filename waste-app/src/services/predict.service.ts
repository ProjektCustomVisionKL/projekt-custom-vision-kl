import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PredictService {
  constructor(private http: HttpClient) {}

  sendFile(file: any): Promise<any> {
    return this.http.post('https://custom-vision-dl.cognitiveservices.azure.com/customvision/v3.0/Prediction/d61780df-cd25-4172-ab7a-13b7b750b407/detect/iterations/Iteration1/image', file, { headers: { 'Content-Type': 'application/octet-stream', 'Prediction-Key': 'c0ac9b426efb458facfac59e93098521' } }).toPromise();
  }

  sendFileCV(file: any): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post('https://waste-api.azurewebsites.net/', formData).toPromise();
  }
}