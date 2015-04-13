/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
$scope.txtara='';
$scope.mydata="This is my data";
//populate names
$scope.names=['a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d'];

$scope.name='';
$scope.text='';
$scope.image='';
$http.get('http://172.20.10.3:1337').
  success(function(data, status, headers, config) {
  	$scope.names=data;
  	console.log(data);

$scope.name=data[0].user.screen_name;
  		$scope.text=data[0].text;
  	if(data[0].entities.media==undefined)
  		{
  			$scope.image=data[0].user.profile_image_url;		
  		}
  		else{
  			$scope.image=data[0].entities.media.media_url;	
  		}
  	//console.log($scope.image);
  	alert("not error");
  }).
  error(function(data, status, headers, config) {
  	console.log(data);
  	console.log("error");
  });


$scope.hoverer=function($index){
  //alert($index);
	$scope.name=$scope.names[$index].user.screen_name;
  		$scope.text=$scope.names[$index].text;
      console.log($scope.names[$index].entities.media==undefined);
      if($scope.names[$index].entities.media!=undefined){
  	   if($scope.names[$index].entities.media[0]==undefined)
  		{
  			$scope.image=$scope.names[$index].user.profile_image_url;		
  		}
  		else{
  			$scope.image=$scope.names[$index].entities.media[0].media_url;	
  		}
     
    }
    else{
      $scope.image=$scope.names[$index].user.profile_image_url; 
    }
    console.log($scope.image);
}

$scope.fetchAll=function(){
alert('fetch all');
$http.get('http://172.20.10.3:1337').
  success(function(data, status, headers, config) {
    $scope.names=data;
    console.log(data);

$scope.name=data[0].user.screen_name;
      $scope.text=data[0].text;
    if(data[0].entities.media==undefined)
      {
        $scope.image=data[0].user.profile_image_url;    
      }
      else{
        $scope.image=data[0].entities.media.media_url;  
      }
    //console.log($scope.image);
    //alert("not error");
  }).
  error(function(data, status, headers, config) {
    console.log(data);
    console.log("error");
  });


}
$scope.fetchText=function(){

//filter data based on text
    console.log("fetch text");
    $scope.fetchAll();
    $scope.newarr=[];
    $scope.names.forEach(function(e){
      if(e.entities.media==undefined)
          $scope.newarr.push(e);
    });
    $scope.names=$scope.newarr;
    console.log($scope.newarr);
    alert('fetch text');

};
$scope.fetchImage=function(){

//filter data based on media 
console.log("fetch images");
    $scope.fetchAll();
    $scope.newarr=[];
    $scope.names.forEach(function(e){
      if(e.entities.media!=undefined)
          $scope.newarr.push(e);
    });
    $scope.names=$scope.newarr;
    console.log($scope.newarr);
    console.log($scope.newarr.length);
    if($scope.newarr.length==0)
    {
      alert('No Image feed,Redirected to All feed');
      $scope.fetchAll();
    }
};


$scope.posttweet=function(){
$("#brd").animate({marginLeft: "850px"},"slow");


$http({
    url: 'http://172.20.10.3:1337/poststat', 
    method: "GET",
    params: {txtval: $scope.txtara}
 }).success(function(data, status, headers, config) {
 	alert(data);
 });



$( "#brd" ).fadeTo( "slow" , 0.1, function() {
  });
$("#brd").animate({marginLeft: "00px"},"fast");
$( "#brd" ).fadeTo( "slow" , 1, function() {
    // Animation complete.
  });
};



});
