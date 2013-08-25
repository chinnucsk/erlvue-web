require.config({
  baseUrl: '/base/app/scripts',
  paths: {
    jquery: '../bower_components/jquery/jquery',
    backbone: '../bower_components/backbone/backbone',
    'backbone.layoutmanager': '../bower_components/layoutmanager/backbone.layoutmanager',
    underscore: '../bower_components/underscore/underscore',
    'underscore.string': '../bower_components/underscore.string/lib/underscore.string',
    handlebars: '../bower_components/handlebars/handlebars.runtime',
    d3: '../bower_components/d3/d3',
    async: '../bower_components/async/lib/async',
    bacon: '../bower_components/bacon/dist/Bacon',
    sockjs: '../bower_components/sockjs-0.3.4/index',
    
    templates: '../../.tmp/scripts/templates',

    chai: '../bower_components/chai/chai',
    sinon: '../bower_components/sinon/index',
    'sinon-chai': '../bower_components/sinon-chai/lib/sinon-chai',

    spec: '../../test/spec'
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
  },
  deps: ['../../test/helpers']
});

require([
  'chai', 
  'sinon',
  'sinon-chai'
], function (chai, sinon, sinonChai) {
  'use strict';

  chai.use(sinonChai);

  window.expect = chai.expect
  window.sinon = sinon;

  require([
    'spec/test'
  ], function() {
     window.__karma__.start();
  });
});
