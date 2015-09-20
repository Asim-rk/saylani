/**
 * Created by Saylani_IT on 20/9/2015.
 */


angular.module('app')
.controller('QurbaniController', function($scope, $cordovaCamera, $firebaseArray) {
    var ref = new Firebase("https://swit.firebaseio.com");
    $scope.user = $firebaseArray(ref);
    $scope.save = function(user){
      /*$scope.user.push(user);*/
      $scope.user.$add(user);
    };

    $scope.takePicture = function() {
      var options = {
        quality : 75,
        destinationType : Camera.DestinationType.DATA_URL,
        sourceType : Camera.PictureSourceType.CAMERA,
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.imgURI = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // An error occured. Show a message to the user
      });
    };


  });
