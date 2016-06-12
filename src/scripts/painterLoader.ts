/// <reference path="typings\jquery.d.ts" />
module Loader{
    
    export class PainterLoader {
  
        constructor(public url: string) {}

        load() : JQueryPromise<PainterData.IPainterData> {
            console.log("inside load - url: " + this.url);
            //$.getJSON('json/famousPainters.json')
            return $.getJSON(this.url).then((data: any) => {
                console.log(data);
                var painterData = this.mapData(data);      
                return painterData; 
            });
        }

        mapData(data: any) : PainterData.IPainterData {
            console.log("inside mapData - data: " + data);
            if (data) {
                let fps: any[] = data.famousPainters;
           
                var painters = new PaintersModule.Painters<PainterData.IPainter>();
                var painterSummary = new PaintersModule.Painters<PainterData.IPainterSummary>();

                fps.forEach((painter: any) => {
                    console.log("inside mapData foreach");
                    console.log(painter);
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
            console.log(examples);
            return examples.map((example: any) => { 
                return new PaintersModule.Example({
                    name: example
                });
            });
        }


    } 
}
