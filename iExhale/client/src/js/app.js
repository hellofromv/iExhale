angular.module('forms', [
  'forms.name',
  'forms.email',
  'forms.phone',
  'ngRoute'
])
.config(function($locationProvider, $routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/views/name.html',
      controller: 'NameController'
      }
    )
    .when('/#email', {
      templateUrl: 'src/views/email.html',
      controller: 'EmailController'
    })
    .when('/#phone', {
      templateUrl: 'src/views/phone.html',
      controller: 'PhoneController'
    })
    .otherwise({ redirectTo: '/' });
  })

.factory('UserInput', function($rootScope) {
  var info = {};

  return {
    save: function(key, value) {
      info[key] = value;
    },
    retrieve: function(key) {
      return info[key];
    }
  }
});