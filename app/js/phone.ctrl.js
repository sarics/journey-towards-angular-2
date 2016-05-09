'use strict';

angular
  .module('phoneApp')
  .controller('PhoneController', ['$routeParams', '$scope', '$rootScope', 'phoneRepository', function($routeParams, $scope, $rootScope, phoneRepository) {
    $scope.phone = {};

    phoneRepository
      .getOne($routeParams.fileId)
      .then((phone) => $scope.phone = phone);

  }]);
