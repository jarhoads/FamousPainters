/// <reference path="typings\jquery.d.ts" />
var Loader;
(function (Loader) {
    var PainterLoader = (function () {
        function PainterLoader(url) {
            this.url = url;
        }
        PainterLoader.prototype.load = function () {
            var _this = this;
            console.log("inside load - url: " + this.url);
            //$.getJSON('json/famousPainters.json')
            return $.getJSON(this.url).then(function (data) {
                console.log(data);
                var painterData = _this.mapData(data);
                return painterData;
            });
        };
        PainterLoader.prototype.mapData = function (data) {
            var _this = this;
            console.log("inside mapData - data: " + data);
            if (data) {
                var fps = data.famousPainters;
                var painters = new PaintersModule.Painters();
                var painterSummary = new PaintersModule.Painters();
                fps.forEach(function (painter) {
                    console.log("inside mapData foreach");
                    console.log(painter);
                    var famousPainter = new PaintersModule.Painter({
                        name: painter.name,
                        style: painter.style,
                        examples: _this.getExamples(painter.examples)
                    });
                    painters.items.push(famousPainter);
                    var painterSummaryVal = new PaintersModule.PainterSummary({
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
        };
        PainterLoader.prototype.getExamples = function (examples) {
            console.log(examples);
            return examples.map(function (example) {
                return new PaintersModule.Example({
                    name: example
                });
            });
        };
        return PainterLoader;
    }());
    Loader.PainterLoader = PainterLoader;
})(Loader || (Loader = {}));
//# sourceMappingURL=painterLoader.js.map