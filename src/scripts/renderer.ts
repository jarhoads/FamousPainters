module PainterRenderer {

    export class Renderer {

        constructor(public painterSummary: PaintersModule.Painters<PainterData.IPainterSummary>) {
            if (painterSummary) { this.renderPainters(painterSummary); }
            else { this.renderError(); }
        }

        // render dropdown to pick painters
        renderPainters(painterSummary: PaintersModule.Painters<PainterData.IPainterSummary>) {
            var painterSelect = document.getElementById('PainterSelect');
            
            painterSummary.items.forEach((painter) => {
                var opt = document.createElement('option');
                opt.setAttribute('title',painter.title);
                opt.innerHTML = painter.text;
                painterSelect.appendChild(opt);
            });
        }
        
        renderPainter(painter: PainterData.IPainter) {
            //Update the style
            var style = (<HTMLSelectElement>document.getElementById('painterStyle'));
            style.value = '';
            var html = painter.style;
            style.innerHTML = html + '</ul>';

            //Update description
            var el = (<HTMLSelectElement>document.getElementById('painterName'));
            el.innerHTML = painter.name;

            this.renderExamples(painter);

        }


        renderExamples(painter: PainterData.IPainter) {
            //Update examples
            var examples = (<HTMLSelectElement>document.getElementById('examples'));
            examples.value = '';

            var html = '<ol>';
            for (var i = 0, len = painter.examples.length; i < len; i++) {
                var example = painter.examples[i];
                //var name = example.name;

                html += '<li>' +
                    '<h4>' + example.name + ' </h4>' +
                    '</li>';
            }

            examples.innerHTML = html + '</ol>';
        }

        renderError() {
            var examples = (<HTMLSelectElement>document.getElementById('examples'));
            examples.value = 'Unable to load data!';
        }
    }
}
