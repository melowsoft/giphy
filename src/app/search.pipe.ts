import { Pipe, PipeTransform } from '@angular/core';
import { Iimage } from './iimage.sometype';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(images: Iimage[], searchInput: string): any[]{     
        if(!searchInput) {
            return  images;
        }
        searchInput = searchInput.toLowerCase();
        
       return images.filter(
           image => image.title.toLowerCase().includes(searchInput)
       )
     }
}