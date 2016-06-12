var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PaintersModule;
(function (PaintersModule) {
    var Painters = (function () {
        function Painters() {
            this.items = [];
        }
        return Painters;
    }());
    PaintersModule.Painters = Painters;
    var PainterSummary = (function () {
        function PainterSummary(summary) {
            this.text = summary.text;
            this.title = summary.title;
        }
        return PainterSummary;
    }());
    PaintersModule.PainterSummary = PainterSummary;
    var Example = (function () {
        function Example(example) {
            this.name = example.name;
        }
        return Example;
    }());
    PaintersModule.Example = Example;
    var BasePainter = (function () {
        function BasePainter(name, style) {
            this.name = name;
            this.style = style;
        }
        return BasePainter;
    }());
    var Painter = (function (_super) {
        __extends(Painter, _super);
        function Painter(painter) {
            _super.call(this, painter.name, painter.style);
            this.examples = painter.examples;
        }
        return Painter;
    }(BasePainter));
    PaintersModule.Painter = Painter;
})(PaintersModule || (PaintersModule = {}));
//# sourceMappingURL=painter.js.map