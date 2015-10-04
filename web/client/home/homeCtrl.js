(function () {

  angular
    .module('app.home')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['MockData'];

  function HomeCtrl(MockData) {

    var vm = this;

    vm.data = MockData;

  };

}());
