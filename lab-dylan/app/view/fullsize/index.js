'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('FullsizeController', ['$routeParams', '$rootScope', '$location', function($routeParams, $rootScope, $location) {
  this.images = $rootScope.imageData;

  this.isValidId = function(id) {
    if (isNaN(id)) return false;
    if (!isFinite(id)) return false;
    if (id < 1) return false;
    if (typeof(this.images[id - 1]) === 'undefined') return false;
  };

  let id = Number.parseInt($routeParams.id);
  if (this.isValidId(id)) {
    $location.path('/error');
  }
  this.image = this.images[id - 1];
}]);
