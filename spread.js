$(document).ready(function() {
        $.ajax({
            url: "https://sheets.googleapis.com/v4/spreadsheets/16EXdxJDXO10Yrc21EEsFTPZ7_8BgOUbLkNMnewvzk1U/values/Sheet3?key=AIzaSyCX0BPY4f7sgPWPdczsM8k_ugdsew5oeSY",
            dataType: "json",
            success: function (data) {
                i = 1;
                    console.log(data.values[i]);
                    var l = data.values[i];
                    console.log(l[0]);
                    var a = l[0];
                var barWidth = a / 10;
                console.log("Bar Size = " + barWidth);
                $(".current-food-count").text(a);
                $(".progress-bar").width(barWidth + "%");
                check();
            }
        });
        function check() {
            setTimeout(function () {
                $.ajax({
                url: "https://sheets.googleapis.com/v4/spreadsheets/16EXdxJDXO10Yrc21EEsFTPZ7_8BgOUbLkNMnewvzk1U/values/Sheet3?key=AIzaSyCX0BPY4f7sgPWPdczsM8k_ugdsew5oeSY",
                dataType: "json",
                success: function (data) {
                    i = 1;
                    console.log(data.values[i]);
                    var l = data.values[i];
                    console.log(l[0]);
                    var a = l[0];
                    var barWidth = a / 10;
                    console.log("Bar Size = " + barWidth);
                    $(".current-food-count").text(a);
                    $(".progress-bar").width(barWidth + "%");
                }
               });
               var i = 1;
               if (i < 2) {
                   check();
               }
        }, 4000);
       }
    });