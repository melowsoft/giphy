import { Component } from '@angular/core';
import { Iimage } from './iimage.sometype';
import { ImagesService } from "./images.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: Iimage[] = []
  public searchInput: string = "";


  constructor(private image: ImagesService) {
    
    this.image.getData().subscribe((data: any) => {
      console.warn(data)
      this.images = data['data']
    })
  }
}
