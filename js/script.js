/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        
        
    });
        
    function calculateQuestionOne(q1Result){
        if (q1Result === "jumping"){
         return 5;
        }else{
            return 3;
        }
    }
    
    function calculateQuestionTwo(q2Result){
     if (q2Result === "Fire"){
         return 5;
        }else if (q2Result == "Thunder"){
            return 3;
        }else if (q2Result == "Water"){
        return 6;
        }else{
            return 1;
        }
    }
    
    function calculateQuestionThree(q3Result){
 if (q3Result === "dog"){
         return 5;
        }else if (q3Result == "cat"){
            return 3;
        }else if (q3Result == "hedgehog"){
            return 6;
        }else if (q3Result == "bandicoot"){
            return 4;
        }else if (q3Result == "monkey"){
            return 7;
        }else{
            return 8;
        }
        
        
    }


});
