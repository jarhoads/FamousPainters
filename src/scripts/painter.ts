module PaintersModule {

    export class Painters<T> {
        items: T[] = [];
    }

    export class PainterSummary implements PainterData.IPainterSummary {
        text: string;
        title: string;

        constructor(summary: PainterData.IPainterSummary) {
            this.text = summary.text;
            this.title = summary.title;
        }
    }

    export class Example implements PainterData.IExample {
        name: string;
        constructor(example: PainterData.IExample) {
            this.name = example.name;
        }
    }

    class BasePainter implements PainterData.IBasePainter {

        name: string;
        style: string;

        constructor(name: string, style: string) {
            this.name = name;
            this.style = style;
        }
    }

    export class Painter extends BasePainter {
        name: string;
        examples: PainterData.IExample[];

        constructor(painter: Painter) {
            super(painter.name, painter.style);
            this.examples = painter.examples;
        }

    }

}