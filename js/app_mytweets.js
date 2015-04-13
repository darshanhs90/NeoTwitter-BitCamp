/**
 * Created by darshan on 3/16/2015.
 */


  angular.module('DemoApp', [
            'angular-carousel'
        ])

        .controller('DemoCtrl', function($scope,$http) {

            $scope.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"];

            function getSlide(target, style) {
                var i = target.length;
                return {
                    id: (i + 1),
                    label: 'slide #' + (i + 1),
                    img: 'http://lorempixel.com/450/300/' + style + '/' + ((i + 1) % 10) ,
                    color: $scope.colors[ (i*10) % $scope.colors.length],
                    odd: (i % 2 === 0)
                };
            }

            function addSlide(target, style) {
                target.push(getSlide(target, style));
            };

            $scope.carouselIndex = 3;
            $scope.carouselIndex2 = 0;
            $scope.carouselIndex2 = 1;
            $scope.carouselIndex3 = 5;
            $scope.carouselIndex4 = 5;

            function addSlides(target, style, qty) {
                for (var i=0; i < qty; i++) {
                    addSlide(target, style);
                }
            }

            // 1st ngRepeat demo
            $scope.slides = [];
            addSlides($scope.slides, 'sports', 50);

            // 2nd ngRepeat demo
            $scope.slides2 = [];
            addSlides($scope.slides2, 'sports', 10);

            // 3rd ngRepeat demo
            $scope.slides3 = [];
            addSlides($scope.slides3, 'people', 50);

            // 4th ngRepeat demo
            $scope.slides4 = [];
            addSlides($scope.slides4, 'city', 50);


            // 5th ngRepeat demo
            $scope.slides6 = [];
            $scope.carouselIndex6 = 0;
            addSlides($scope.slides6, 'sports', 10);
            $scope.addSlide = function(at) {
                if(at==='head') {
                    $scope.slides6.unshift(getSlide($scope.slides6, 'people'));
                } else {
                    $scope.slides6.push(getSlide($scope.slides6, 'people'));
                }
            }

      



	$scope.srchr=false;
	$scope.shwdate=false;
	$scope.shwlcn=false;
	$scope.shwtwt=false;
	 $scope.cards =[];
     $scope.sentimentType=[];
     $scope.score=[];
     

$http.get('http://172.20.10.3:1337/getusertime').
  success(function(data, status, headers, config) {
    $scope.cards=data;
   

data.forEach(function(e){
      //  alert(e.text);
        $http({
    url: 'http://172.20.10.3:1337/alchemy', 
    method: "GET",
    params: {txtval: e.text}
 }).success(function(data, status, headers, config) {
    //alert(data.type);
    console.log(data);
    $scope.sentimentType.push(data.type);
    //$scope.score.push(data.score);
});


});
    


    /*$scope.cards.forEach(function(e){
        alert(e);
        $http({
    url: 'http://172.20.10.3:1337/alchemy', 
    method: "GET",
    params: {txtval: e.text}
 }).success(function(data, status, headers, config) {
    $scope.sentimentType.push(data.type);
    $scope.score.push(data.score);
 });
*/


    })




    $scope.srch=function(){
    	if($scope.srchr)
    		$scope.srchr=false;
    	else
    		$scope.srchr=true;
    };
    $scope.showdate=function(){
    	$scope.shwdate=true;
   		$scope.shwlcn=false;
    	$scope.shwtwt=false;
    		
    };
    $scope.showlocation=function(){
    	$scope.shwdate=false;
   		$scope.shwlcn=true;
    	$scope.shwtwt=false;
    };
    $scope.showtweet=function(){
    	$scope.shwdate=false;
   		$scope.shwlcn=false;
    	$scope.shwtwt=true;
    };
    $scope.to=0;
    $scope.from=0;
     $scope.diff=$scope.from-$scope.to;
   	$scope.$watch('from', function() {
   		$scope.$watch('to', function() {	
       $scope.diff=$scope.from-$scope.to;
   		});
   });
    $scope.arr=['#ffffff','#000000'];
    $scope.arr1=['#000000','#ffffff'];
    $scope.setBG=function($index){
        var ind=$index%2;
        return{backgroundColor:$scope.arr[ind]}
    }
    $scope.setBG1=function($index){
        var ind=$index%2;
        return{backgroundColor:$scope.arr1[ind]}
    }



	  });
    

