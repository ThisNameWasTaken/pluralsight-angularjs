import config from '../app.config';
import * as angular from 'angular';

angular.module('app.components', []);

/**
 * Creates new AngularJS component
 *
 * @param {string} componentName
 * @param {angular.IComponentOptions} options
 */
const Component = (componentName, options) =>
  angular
    .module('app.components')
    .component(config.prefix + componentName, options);

export default Component;
