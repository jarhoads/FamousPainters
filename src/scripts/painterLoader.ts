/// <reference path="typings\jquery.d.ts" />
module Loader{
    
    export class PainterLoader {
  
        constructor(public url: string) {}

        load() : JQueryPromise<PainterData.IPainterData> {
            return $.getJSON(this.url).then((data: any) => {
                var painterData = this.mapData(data);      
                return painterData; 
            });
        }

        mapData(data: any) : PainterData.IPainterData {
            if (data) {
                let fps: any[] = data.famousPainters;
           
                var painters = new PaintersModule.Painters<PainterData.IPainter>();
                var painterSummary = new PaintersModule.Painters<PainterData.IPainterSummary>();

                fps.forEach((painter: any) => {

                    let famousPainter = new PaintersModule.Painter({
                        name: painter.name,
                        style: painter.style,
                        examples: this.getExamples(painter.examples) 
                    });
                
                    painters.items.push(famousPainter);

                    let painterSummaryVal = new PaintersModule.PainterSummary({
                        // just use the name for both the text and title
                        text: painter.name,
                        title: painter.name
                    });
                    
                    painterSummary.items.push(painterSummaryVal);

                });
                      
                return {
                 painters: painters,
                 paintersSummary: painterSummary
                };
            }
            else {
                return null;
            }
        }
        
        getExamples(examples: any) : PainterData.IExample[] {
            return examples.map((example: any) => { 
                return new PaintersModule.Example({
                    name: example
                });
            });
        }


    } 
}
