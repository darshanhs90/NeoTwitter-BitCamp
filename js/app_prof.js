/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
$scope.friends=[];
$scope.followers=[];
$scope.myinfo=[];
$http.get('http://172.20.10.3:1337/getfriends').
  success(function(data, status, headers, config) {
    $scope.friends=data;
    console.log("friends");
    console.log(data);
});
  $http.get('http://172.20.10.3:1337/getfollowers').
  success(function(data, status, headers, config) {
    $scope.followers=data;
       console.log("followers");
    console.log(data);
});

   $http.get('http://172.20.10.3:1337/getmyinfo').
  success(function(data, status, headers, config) {
    $scope.myinfo=data;
       console.log("myinfo");
    console.log(data[0].user.screen_name);
   console.log(data[0].user.statuses_count);
   console.log(data);
     
});

});