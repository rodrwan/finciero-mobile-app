require.config({

    baseUrl: 'lib',

    paths: {
        app: '../js',
        tpl: '../tpl'
    },

    map: {
        '*': {
            'adapters/product': 'app/adapters/product-memory'
        }
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        "highcharts": {
            "exports": "Highcharts",
            "deps": ["jquery"] 
        },
    }

});

require(['fastclick', 'app/router'], function (FastClick, router) {
    
    "use strict";

    $(function () {
        FastClick.attach(document.body);
    });

    router.start();

});
