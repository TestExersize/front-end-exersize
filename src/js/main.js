angular.module('MainApp', [])
    .controller('MainAppController', MainAppController);

MainAppController.$inject = [];

/* @ngInject */
function MainAppController() {
    var vm = this;

    vm.title = 'Test application header';
}
