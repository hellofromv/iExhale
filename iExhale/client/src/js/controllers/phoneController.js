angular.module('forms.phone', [])

.controller('PhoneController', function($scope, $location, UserInput) {
  $scope.changePage = function(view) {
    $location.path(view);
  };

  $scope.submit = function() {
    var name = UserInput.retrieve('NameController');
    var email = UserInput.retrieve('EmailController');
    var phone = $scope.person.personPhone;

    console.log(name + ' ' + email + ' ' + phone);
  };
});