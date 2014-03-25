'use strict';

angular.module('scrumStoryApp')
  .controller('TasksCtrl', function ($scope) {
		$scope.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
   //  $scope.tasks = [
			// {
			// 	'task' : 'lavar platos',
			// 	'description' : 'Lavar los platos del almuerzo. ',
			// 	'time' : '6'
			// },
			// {
			// 	'task' : 'task2',
			// 	'description' : 'Iste, tenetur, officia, id, officiis tempore illo perspiciatis beatae.',
			// 	'time' : '1'
			// },
			// {
			// 	'task' : 'task3',
			// 	'description' : 'Sequi quidem non quas expedita vitae laudantium eligendi nisi placeat accusantium culpa amet.',
			// 	'time' : '6'
			// },
			// {
			// 	'task' : 'task4',
			// 	'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
			// 	'time' : '4'
			// },
   //  ];

    $scope.addTask = function() {
      $scope.tasks.push({task: $scope.taskName,description: $scope.taskDescription,time: $scope.taskTime});
      $scope.taskName = '';
      $scope.taskDescription = '';
      $scope.taskTime = '';
    };

    $scope.$watch('tasks',function(newValue, oldValue){
			if (newValue!==oldValue) {
				localStorage.setItem('tasks', JSON.stringify(newValue));
			}
    },true);

  });
