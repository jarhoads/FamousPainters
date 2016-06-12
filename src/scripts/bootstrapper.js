var Bootstrap;
(function (Bootstrap) {
    var Bootstrapper = (function () {
        function Bootstrapper() {
        }
        Bootstrapper.prototype.loadPainters = function () {
            var el = document.getElementById('PainterSelect');
            try {
                var famousPainter = this.painters.items
                    .filter(function (item) { return item.name === el.value; })
                    .reduce(function (item) {
                    var painterObj = {
                        name: item.name,
                        style: item.style,
                        examples: item.examples
                    };
                    var paint = new PaintersModule.Painter(painterObj);
                    return paint;
                });
                this.renderer.renderPainter(famousPainter);
            }
            catch (ex) {
                alert(ex.message);
            }
        };
        Bootstrapper.prototype.init = function () {
            var _this = this;
            var paintersSelect = document.getElementById('PainterSelect');
            paintersSelect.onchange = function () { return _this.loadPainters(); };
            var painterLoader = new Loader.PainterLoader('json/famousPainters.json');
            painterLoader.load().then(function (painterData) {
                _this.painters = painterData.painters;
                _this.renderer = new PainterRenderer.Renderer(painterData.paintersSummary);
            });
        };
        return Bootstrapper;
    }());
    Bootstrap.Bootstrapper = Bootstrapper;
})(Bootstrap || (Bootstrap = {}));
//# sourceMappingURL=bootstrapper.js.map