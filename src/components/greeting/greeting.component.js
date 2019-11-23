import Component from '../components.module';
import template from './greeting.template.html';

const Greeting = Component('Greeting', {
  template,
  controller: [
    '$scope',
    '$attrs',
    function($scope, $attrs) {
      $scope.name = $attrs.name || 'World';
    },
  ],
});

export default Greeting;
