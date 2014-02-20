define(function (require) {
  "use strict";

  var $ = require('jquery'),
      Handlebars = require('handlebars'),
      budgetHtml = require('text!tpl/Budgets.html'),
      
      budgetTpl = Handlebars.compile(budgetHtml);
      
  return function () {
    this.initialize = function () {
      this.$el = $('<div/>');
    };

    this.render = function () {
      this.$el.html(budgetTpl());

      return this;
    };

    this.initialize();
  };
});