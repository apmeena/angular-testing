import { HighlightPipe } from './highlight-text.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';
import { SecurityContext } from '@angular/core';


describe('HighlightPipe', () => {
  let highlightPipe: HighlightPipe;

  // synchronous beforeEach
  beforeEach(inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    highlightPipe = new HighlightPipe(domSanitizer);
    expect(highlightPipe).toBeTruthy();
  }));

  it('should return a formated string with html injected into it', () => {
    const safeResourceUrl = highlightPipe.transform('Hello World', 'Hello');
    expect(safeResourceUrl.length).not.toEqual(0);
  });
});
