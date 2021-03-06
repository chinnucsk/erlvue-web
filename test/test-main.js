require.config({
  baseUrl: '/base/app/scripts',
  paths: {
    jquery: '../bower_components/jquery/jquery',
    backbone: '../bower_components/backbone/backbone',
    'backbone.layoutmanager': '../bower_components/layoutmanager/backbone.layoutmanager',
    underscore: '../bower_components/underscore/underscore',
    'underscore.string': 
      '../bower_components/underscore.string/lib/underscore.string',
    handlebars: '../bower_components/handlebars/handlebars.runtime',
    d3: '../bower_components/d3/d3',
    async: '../bower_components/async/lib/async',
    bacon: '../bower_components/bacon/dist/Bacon',
    sockjs: '../bower_components/sockjs-0.3.4/index',
    
    templates: '../../.tmp/scripts/templates',

    chai: '../bower_components/chai/chai',
    sinon: '../bower_components/sinon/index',
    'sinon-chai': '../bower_components/sinon-chai/lib/sinon-chai',
    squire: '../bower_components/squire/src/Squire',

    spec: '../../test/spec',
    test: '../../test'
  },
  shim: {
    underscore: { exports: '_' },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    d3: { exports: 'd3' },
    handlebars: { exports: 'Handlebars' },
    sinon: { exports: 'sinon' },
  }
});

require([
  'chai', 
  'sinon',
  'sinon-chai',

  'jquery',
  'underscore'
], function (chai, sinon, sinonChai, $, _) {
  'use strict';

  chai.use(sinonChai);

  window.expect = chai.expect
  window.sinon = sinon;

  require([
    'spec/test'
  ], function() {
    var promises = _.foldl(arguments, function(acc, v) {
      return v ? acc.concat(v) : acc;
    }, []);
    $.when.apply(null, promises).then(__karma__.start);
  });
});
