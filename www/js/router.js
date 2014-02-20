define(function (require) {

    "use strict";

    console.log("instantiating router");

    var $ = require('jquery'),
        HomeView   = require("app/HomeView"),
        MenuView   = require("app/MenuView"),
        BudgetView = require("app/BudgetView"),
        PageSlider = require("app/utils/PageSlider"),

        slider   = new PageSlider($("body")),
        homePage = new HomeView().render(),

        menuURL = /^#menu/,
        budgetURL = /^#budgets/,

        route = function () {
            var hash = window.location.hash,
                view,
                match;

            if (!hash) {
                if (homePage) {
                    slider.slidePage(homePage.$el);
                } else {
                    homePage = new HomeView().render();
                    slider.slidePage(homePage.$el);
                }
            }
            
            match = hash.match(menuURL);
            if (match) {
                view = new MenuView().render();
                slider.slidePage(view.$el);
            }

            match = hash.match(budgetURL);
            if (match) {
                view = new BudgetView().render();
                slider.slidePage(view.$el);
            } 
        },

        start = function () {
            $(window).on('hashchange', route);
            route();
        };

    // The public API
    return {
        start: start
    };

});