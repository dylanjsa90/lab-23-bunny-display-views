'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/

describe('testing controllers used in routing', function() {
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller) => {
      this.homeController = new $controller('HomeController');
      this.fullsizeController = new $controller('FullsizeController');
      this.thumbnailController = new $controller('ThumbnailController');
      this.errorController = new $controller('ErrorController');
    });
  });

  it('home controller should create a list of images', () => {
    expect(this.homeController.images.length > 0).toEqual(true);
    expect(this.homeController.images.length).toEqual(4);
  });

  it('thumbnail controller should create a list of thumbnails', () => {
    expect(this.thumbnailController.images.length > 0).toEqual(true);
    expect(this.thumbnailController.images.length).toEqual(4);
  });

  it('fullsize controller image test', () => {
    expect(this.fullsizeController.images.length > 0).toEqual(true);
    expect(this.fullsizeController.images.length).toEqual(4);
  });

  it('fullsize controller should test for valid id', () => {
    expect(this.fullsizeController.isValidId('x')).toEqual(false);
    expect(this.fullsizeController.isValidId(3)).toEqual(true);
  });


});
