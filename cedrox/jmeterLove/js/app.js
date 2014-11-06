var app1= angular.module('jmeterLove',['angularFileUpload']);

  app1.controller('AppController', ['$scope', '$http','FileUploader', function($scope ,$http,FileUploader) {
       
     var uploader = $scope.uploader = new FileUploader({
            url: 'js/upload.php',
            autoUpload: true
        });
        // FILTERS
        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });
        //CALLBACK
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
          this.name= fileItem.file.name;
           csvData.rowsCsv = [];
          csvData.headersCsv = [];
         $http.get("/jmeterLove/uploads/"+this.name).success(function (data,status){ 
            var rowsCsv = data.split("\n");
            //dandole a la cabezera del gato
            rowsCsv[0]=rowsCsv[0].replace(/_/g," ");
            csvData.headersCsv=rowsCsv[0].split(",");;
            //dandole al cuerpo del gato
            for(var i=1;i<rowsCsv.length;i++){
              csvData.rowsCsv[i-1]=[];
              csvData.rowsCsv[i-1]=rowsCsv[i].split(",");
            }
            this.csvData=csvData;
         });  
        };
    }]);
  app1.controller('csvreader-ng',['$scope','$http',function($scope,$http){
          $scope.csvData=csvData;

        $scope.getStyleHeader = function () {
            return      "background: lightblue; border-color: white;";
        };
 $scope.getStylCell = function () {
            return 
            "width: 4rem;height: 2rem; border: 1px solid #ccc;text-align: center;";
        };
       
  }]  );

var csvData = {
    headersCsv: null,
    rowsCsv: null
  }


  var name = null;
