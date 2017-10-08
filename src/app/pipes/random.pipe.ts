import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

    transform(value: any[]): any {
        const len = value.length;
        const num = Math.floor(Math.random() * 1000) % len;
        return value[num];
    }

}
