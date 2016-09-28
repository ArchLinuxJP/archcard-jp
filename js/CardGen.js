var Gen = angular.module("CardGen", ["ngMaterial"])
    .controller("PicInfo", ["$scope", "$sce", function ($scope, $sce) {
        $scope.info = "img/sample.png";

        var fileSelect = document.getElementById("fileSelect"),
            fileElem = document.getElementById("fileElem");

        //https://developer.mozilla.org/ja/docs/Using_files_from_web_applications
        $scope.Listener = function (e) {
            if (fileElem) {
                fileElem.click();
            }
            e.preventDefault(); // "#" に移動するのを防ぐ
        }, false;

        $scope.handleFiles = function (files) {
            $scope.info = "none";
            var file = files[0];
            if (!files.length) {
                $scope.info = "img/sample.png";
            } else {
                var reader = new FileReader();
                reader.onload = function () {
                    $scope.info = $sce.trustAsResourceUrl(reader.result);
                    $scope.$apply();
                };
                reader.readAsDataURL(file);
            }
        }
    }]);
