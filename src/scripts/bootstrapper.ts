module Bootstrap {

    export class Bootstrapper {

        renderer: PainterRenderer.Renderer;

        painters: PaintersModule.Painters<PainterData.IPainter>;

        loadPainters() {
            var el = (<HTMLSelectElement>document.getElementById('PainterSelect'));
            console.log(el);
            try {
                let famousPainter = this.painters.items
                    //Find selected painter (item) by name
                    .filter(item => item.name === el.value)
                    //return the painter (item)
                    .reduce(item => {

                        var painterObj: PainterData.IPainter = {
                            name: item.name,
                            style: item.style,
                            examples: item.examples

                        };
                        var paint = new PaintersModule.Painter(painterObj);
                        return paint;
                    });
                this.renderer.renderPainter(famousPainter);
            }
            catch (ex) { alert(ex.message) }
        }

        init() {
            console.log("in bootstrapper init");
            let paintersSelect = (<HTMLSelectElement>document.getElementById('PainterSelect'));
            paintersSelect.onchange = () => this.loadPainters();

            //let painterLoader = new Loader.PainterLoader("/JSON/famousPainters.json");
            let painterLoader = new Loader.PainterLoader('json/famousPainters.json');
            
            painterLoader.load().then((painterData: PainterData.IPainterData) => {
                console.log(painterData);
                console.log(painterData.painters);
                this.painters = painterData.painters;
                this.renderer = new PainterRenderer.Renderer(painterData.paintersSummary);
            });
        }

    }
}