(function(golbal, factory) {
    golbal.MiniVue = factory()
})(this, function() {
    'use strict';

    function MiniVue(options) {
        if (!(this instanceof MiniVue)) {
            warn('new constructor');
        }
        this._init(options);
    }
    MiniVue.prototype._init = function(options) {
        console.log(options);
        document.querySelector(options.el).innerHTML = options.data.msg;
    }
    return MiniVue;
})