'use strict';

// document.getElementById('username').focus();

angular.module('scrumStoryApp')
.controller('MainCtrl', function ($scope) {

	var message = document.getElementById('message');
	var labelError = document.getElementById('lbltipAddedComment');

	$scope.section = 'user';

	$scope.users = [
		{
			'username' : '1',
			'pass' : '1',
			'role' : '1'
		},
		{
			'username' : '2',
			'pass' : '2',
			'role' : '0'
		},
		{
			'username' : '3',
			'pass' : '3',
			'role' : '0'
		},
	];

	$scope.login = function(user, pass){
		if(angular.isUndefined(user)){
			message.style.height ='auto';
			labelError.style.opacity ='1';
			labelError.innerHTML = 'Usuario vacío.';
		}
		else{
			var getUser = $scope.users;
			for (var i = 0; i < getUser.length; i++) {
				if( (getUser[i].username === user) && (getUser[i].pass === pass) ){
					
					message.style.height ='auto';
					labelError.style.opacity ='1';
					labelError.innerHTML = 'Usuario Aceptado';
					
					$scope.section = 'user';

					if (getUser[i].role==='1'){
						$scope.section = 'admin';
						window.location = '#/admin';
						return true;
					}
					window.location = '#/user';
					return true;
				}
				else{
					message.style.height ='auto';
					labelError.style.opacity ='1';
					labelError.innerHTML = 'Registro Fallido :(';
				}
			}
		}
	};

	//=========================
	//enter = tab
	//=========================
	$('body').on('keydown', 'input, select, textarea', function(e) {
		var self = $(this), form = self.parents('form:eq(0)'), focusable, next;
		if (e.keyCode === 13) {
			focusable = form.find('input,a,select,button,textarea').filter(':visible');
			next = focusable.eq(focusable.index(this)+1);
			if (next.length) {
				next.focus();
			} else {
				return true;
			}
			return false;
		}
	});

});
