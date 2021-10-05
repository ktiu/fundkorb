(function($) {
     $.fn.shuffle = function() {
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
        return $(shuffled);
    };
})(jQuery);

$(function() {
  $("#quiz .carousel-inner > div").shuffle();
  var first = $("#quiz .carousel-inner > div").first();
  first.addClass("active");
  var firstImg = first.find("img[data-src]");
  firstImg.attr('src', firstImg.data('src'));
  firstImg.removeAttr('data-src');

  $('.carousel.lazy-load').bind('slide.bs.carousel', function (e) {
    var image = $(e.relatedTarget).find('img[data-src]');
    image.attr('src', image.data('src'));
    image.removeAttr('data-src');
  });
});
