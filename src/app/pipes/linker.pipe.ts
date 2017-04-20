import { Pipe, PipeTransform } from '@angular/core';
import * as Autolinker from 'autolinker';

@Pipe({ name: 'linker' })
export class LinkerPipe implements PipeTransform {
  transform(value: string, options?: any): string {
    return Autolinker.link(value, options);
  }
}