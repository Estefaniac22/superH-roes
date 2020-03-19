$(document).ready(() => {


    $("#readButton").click(() => {
      const requestURL = "data/" + $("#nameBox").val();
      console.log("ajax request..." + requestURL);
      $.ajax({
        url: requestURL,
        type: "GET",
        dataType: "json",
        success: data => {
          console.log("data received" + data);


          if(data.name && data.photo){
                //  $('#status').html('SUCESSS' + requestURL);
                  $('#nameDiv').html('My name is: '+ data.name);
                  $('#herImage').attr('src', data.photo); 
          }else{
              $('#status').html('ERROR');
          }
         
        }
      });
    });

    $("#allUsers").click(() => {
      $.ajax({
        url: "data/",
        type: "GET",
        dataType: "json",
        success: data => {
          $("#status").html('All super Heroes:' + data);
        }
      });
    });

  });