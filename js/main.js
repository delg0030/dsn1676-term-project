var $btnShow = $('.toggle');
var $box = $('.box');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnShow.on('click', function () {
    $box.toggleClass('js-box-show');
});

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel-collapse')
    
});
