define(function (require) {
  "use strict";

  var $ = require('jquery'),
      Handlebars = require('handlebars'),
      Highcharts = require('highcharts'),
      homeHtml = require('text!tpl/Home.html'),
      
      homeTpl = Handlebars.compile(homeHtml);

  return function () {
    this.initialize = function () {
      this.$el = $('<div/>');
    };

    this.render = function () {
      this.$el.html(homeTpl());
      return this;
    };

    this.initialize();
  };
});

