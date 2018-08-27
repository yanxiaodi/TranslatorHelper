import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordDocumentService {

  constructor() { }

  async getParagraph() {
    return await Word.run(async (context) => {
      // The collection of paragraphs of the current selection returns the full paragraphs contanied on it.
      const paragraph = context.document.getSelection().paragraphs.getFirst();
      paragraph.load('text');
      await context.sync();
      console.log(paragraph.text);
      return paragraph.text;
    });
  }

  async insertText(text: string) {
    await Word.run(async (context) => {
      // Here we insert to replace text
      const paragraph = context.document.getSelection().paragraphs.getFirst();
      const result = paragraph.insertText(text, 'End');
      result.font.set({
        name: 'SimSun'
      });
      // paragraph.insertParagraph(text,  Word.InsertLocation.after);
      // range.font.highlightColor = "black";
      // range.font.color = "white";
      await context.sync();
    });
  }
}
