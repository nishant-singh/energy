


var data={"rooms":[{"id":1,"name":"Kitchen","items":[{"id":1,"name":"Light","value":7},{"id":2,"name":"Fan","value":8}]},{"id":2,"name":"Bathroom","items":[{"id":1,"name":"Light","value":8},{"id":2,"name":"Light","value":5}]}]};

angular.module('Energy.controllers', [])
.controller('AppCtrl', function($scope) {
$scope.vm=data;
  
})
.controller('RoomCtrl', function($scope, $stateParams,$ionicActionSheet) {
  var Id = Number($stateParams.id);
  angular.forEach(data.rooms, function(room, key) {
    if(room.id==Id)
      $scope.vm=room;
  })

  /*Actionsheet*/
  $scope.showDetails = function() {
    
    $ionicActionSheet.show({
    
     destructiveText: 'Delete',
     titleText: 'Update Todo',
     cancelText: 'Cancel',
     buttonClicked: function(index) {
       return true;
     }
   });

  }
})
.controller('ItemCtrl', function($scope, $stateParams) {
  console.log($stateParams.Id);
  var Id = $stateParams.Id;
  var pId = $stateParams.parentId;
  console.log(Id);
   angular.forEach(data.rooms, function(room, key) {
    if(room.id==pId)
      {
        angular.forEach(room.items, function(item, key) {
          if(item.id==Id)
            $scope.vm=item;
        });
      }
  });
   console.log($scope.vm);
});
