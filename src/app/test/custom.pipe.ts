import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(index: number, todoEintrag: string): unknown {
    return "todo " + "-".repeat(index) + " " + todoEintrag;
  }

}
