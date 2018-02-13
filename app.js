$(document).ready(function() {

'use strict';

// zoom in image


// $('.white-panel').click(function(){


// });


$("#prod-1").on("mouseover", function () {

    $('#quick_view_1').modal('show');
});
$("#prod-2").on("mouseover", function () {

    // $('#quick_view_2').modal('show');
});
$("#prod-3").on("mouseover", function () {

    // $('#quick_view_3').modal('show');
});
$("#prod-4").on("mouseover", function () {

    // $('#quick_view_4').modal('show');
});
$("#prod-5").on("mouseover", function () {

    // $('#quick_view_5').modal('show');
});
$("#prod-6").on("mouseover", function () {

    // $('#quick_view_6').modal('show');
});
$("#prod-7").on("mouseover", function () {

    // $('#quick_view_7').modal('show');
});
$("#prod-8").on("mouseover", function () {

    // $('#quick_view_8').modal('show');
});
$("#prod-9").on("mouseover", function () {

    // $('#quick_view_9').modal('show');
});
$("#prod-10").on("mouseover", function () {

    // $('#quick_view_10').modal('show');
});
$("#prod-11").on("mouseover", function () {

    // $('#quick_view_11').modal('show');
});
$("#prod-12").on("mouseover", function () {

    // $('#quick_view_12').modal('show');
});
$("#prod-13").on("mouseover", function () {

    // $('#quick_view_13').modal('show');
});





  // define variables
//   var items = document.querySelectorAll(".timeline li");

//   var pdfViewer = new wijmo.viewer.PdfViewer('#pdfViewer', {
//   serviceUrl: 'http://demo.grapecity.com/c1/aspnet/c1webapi/4.0.20172.105/api/pdf/',
//   filePath: 'PdfRoot/従業員別売上.pdf',
//   zoomMode: wijmo.viewer.ZoomMode.PageWidth,
//   thresholdWidth: 0
// });

// document.form.thresholdWidth.addEventListener('click', function (e) {
//   pdfViewer.thresholdWidth = e.target.checked ? 9999 : 0;
// });


  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

$('#pinBoot').pinterest_grid({
no_columns: 4,
padding_x: 10,
padding_y: 10,
margin_bottom: 50,
single_column_breakpoint: 700
});
});


;(function ($, window, document, undefined) {
    var pluginName = 'pinterest_grid',
        defaults = {
            padding_x: 10,
            padding_y: 10,
            no_columns: 3,
            margin_bottom: 50,
            single_column_breakpoint: 700
        },
        columns,
        $article,
        article_width;

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            resize_finish;

        $(window).resize(function() {
            clearTimeout(resize_finish);
            resize_finish = setTimeout( function () {
                self.make_layout_change(self);
            }, 0);
        });

        self.make_layout_change(self);

        setTimeout(function() {
            $(window).resize();
        }, 500);
    };

    Plugin.prototype.calculate = function (single_column_mode) {
        var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width();
            $article = $(this.element).children();

        if(single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x;
        } else {
            article_width = ($container.width() - self.options.padding_x * self.options.no_columns) / self.options.no_columns;
        }

        $article.each(function() {
            $(this).css('width', article_width);
        });

        columns = self.options.no_columns;

        $article.each(function(index) {
            var current_column,
                left_out = 0,
                top = 0,
                $this = $(this),
                prevAll = $this.prevAll(),
                tallest = 0;

            if(single_column_mode === false) {
                current_column = (index % columns);
            } else {
                current_column = 0;
            }

            for(var t = 0; t < columns; t++) {
                $this.removeClass('c'+t);
            }

            if(index % columns === 0) {
                row++;
            }

            $this.addClass('c' + current_column);
            $this.addClass('r' + row);

            prevAll.each(function(index) {
                if($(this).hasClass('c' + current_column)) {
                    top += $(this).outerHeight() + self.options.padding_y;
                }
            });

            if(single_column_mode === true) {
                left_out = 0;
            } else {
                left_out = (index % columns) * (article_width + self.options.padding_x);
            }

            $this.css({
                'left': left_out,
                'top' : top
            });
        });

        this.tallest($container);
        $(window).resize();
    };

    Plugin.prototype.tallest = function (_container) {
        var column_heights = [],
            largest = 0;

        for(var z = 0; z < columns; z++) {
            var temp_height = 0;
            _container.find('.c'+z).each(function() {
                temp_height += $(this).outerHeight();
            });
            column_heights[z] = temp_height;
        }

        largest = Math.max.apply(Math, column_heights);
        _container.css('height', largest + (this.options.padding_y + this.options.margin_bottom));
    };

    Plugin.prototype.make_layout_change = function (_self) {
        if($(window).width() < _self.options.single_column_breakpoint) {
            _self.calculate(true);
        } else {
            _self.calculate(false);
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);