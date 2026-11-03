import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {
  constructor(private readonly meta: Meta) {
    this.meta.addTag({ name: 'author', content: '@tminasen' });
    this.meta.addTag({ name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0' });
  }
}
