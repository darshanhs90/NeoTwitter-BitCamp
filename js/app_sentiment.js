/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
	
$scope.mydata="This is my data";
var count=0;
$scope.addElem=function(){
				count++;
                element = document.createElement("input");
                element.className="form-control";
                element.id='rcpnt'+count;
                element.placeholder='@username';
				var foo = document.getElementById("rcpnt");
                foo.appendChild(element);
};
$scope.sendTweet=function(){
	if($('#rcpnt0').val()!='' && $('#rcpntxt').val()!=''){
$('#intro:not(#brd)').fadeTo( "3500" , 0.1, function() {
  });	

//send herer
$scope.rcpt='';
 var tableFields = document.getElementById("rcpnt");
var children = tableFields.children;
for (var i = 0; i < children.length; i++) {
  var tableChild = children[i];
  var ida='#'+tableChild.id;
  //alert($(ida).val());
  //alert(tableChild.val());
 // alert(tableChild.text());
  
  $scope.rcpt+=$(ida).val()+' ';
  // Do stuff
}
/*alert($scope.rcpt);
alert($scope.txtarra);*/

$scope.txtarra=$scope.txtarra.replace(' #','23');

$http({
    url: 'http://172.20.10.3:1337/postmultstat', 
    method: "GET",
    params: {recip:$scope.rcpt,txtval: $scope.txtarra}
 }).success(function(data, status, headers, config) {
    alert(data);
 });





$("#brd").animate({marginLeft: "850px"},"3500");
$("#brd").animate({marginLeft: "00px"},"3500");
$('#intro:not(#brd)').fadeTo( "3500" , 0.8, function() {
  });
count=0;
var myNode = document.getElementById("rcpnt");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
element = document.createElement("input");
                element.className="form-control";
                element.id='rcpnt'+count;
                element.placeholder='@username';
				var foo = document.getElementById("rcpnt");
                foo.appendChild(element);
}
};
});

