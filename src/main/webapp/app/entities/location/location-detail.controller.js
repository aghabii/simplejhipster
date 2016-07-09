(function() {
    'use strict';

    angular
        .module('simplejhipsterApp')
        .controller('LocationDetailController', LocationDetailController);

    LocationDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Location', 'Country'];

    function LocationDetailController($scope, $rootScope, $stateParams, entity, Location, Country) {
        var vm = this;

        vm.location = entity;

        var unsubscribe = $rootScope.$on('simplejhipsterApp:locationUpdate', function(event, result) {
            vm.location = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
