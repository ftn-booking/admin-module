'use strict';

angular.module('authentication.login')
	.component('myLogin', {
		templateUrl: '/part/authentication/login/login.template.html',
		controller: function(AuthenticationService, $rootScope, $state) {
			this.send = () => {
				AuthenticationService.logIn(this.user).then(
					() => {
						$rootScope.user = {};
						$rootScope.user.email = this.user.email;
						$state.go('home');
					},
					() => {
						this.status = 'Wrong email/password.';
					});
			};
			
			this.resetPassword = () => {
				AuthenticationService.resetPassword(this.user.email).then(
					() => {
						this.status = 'Recovery email sent';
					}
				);
			};
		}
	});
