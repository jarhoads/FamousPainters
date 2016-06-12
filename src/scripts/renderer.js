var PainterRenderer;
(function (PainterRenderer) {
    var Renderer = (function () {
        function Renderer(painterSummary) {
            this.painterSummary = painterSummary;
            if (painterSummary) {
                this.renderPainters(painterSummary);
            }
            else {
                this.renderError();
            }
        }
        // render dropdown to pick painters
        Renderer.prototype.renderPainters = function (painterSummary) {
            var painterSelect = document.getElementById('PainterSelect');
            painterSummary.items.forEach(function (painter) {
                var opt = document.createElement('option');
                opt.setAttribute('title', painter.title);
                opt.innerHTML = painter.text;
                painterSelect.appendChild(opt);
            });
        };
        Renderer.prototype.renderPainter = function (painter) {
            //Update the style
            var style = document.getElementById('painterStyle');
            style.value = '';
            var html = painter.style;
            style.innerHTML = html + '</ul>';
            //Update description
            var el = document.getElementById('painterName');
            el.innerHTML = painter.name;
            this.renderExamples(painter);
        };
        Renderer.prototype.renderExamples = function (painter) {
            //Update examples
            var examples = document.getElementById('examples');
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
        };
        Renderer.prototype.renderError = function () {
            var examples = document.getElementById('examples');
            examples.value = 'Unable to load data!';
        };
        return Renderer;
    }());
    PainterRenderer.Renderer = Renderer;
})(PainterRenderer || (PainterRenderer = {}));
//# sourceMappingURL=renderer.js.map