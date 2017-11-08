$(function(){
    $(".heading-compose").click(function() {
      $(".side-two").css({
        "left": "0"
      });
    });

    $(".newMessage-back").click(function() {
      $(".side-two").css({
        "left": "-100%"
      });
    });

    // This Selector Get the User Data to the Chat Room,
    // Based on clicking the User Name on Users Menu.
    $("[id^=chatWithUser_]").click(function() {
      var user_id = $(this).attr('id');
      user_id = user_id.substring(13);
      // Now we have user id.
      $.ajax({
            url: '/User/?id='+user_id,
            type: 'GET',
            dataType:"json",                                          
            success: function (response) 
            {
                $("#heading-username").text(response.username);
                $("#current-chat-id").val(user_id);
            },
            error: function() {
                alert("Oops, Connection Lost. Please Refresh the Page");
            }
        });
    });

    $("#messageAreaForm").submit(function( event ) {
      event.preventDefault();

      var message = $("#comment").val();
      var receiverId = $("#current-chat-id").val();
      var senderId = "34267e2c10aac7eb5769f3a77cd22e77";
      //Thats a default Channel Bro

      addMessageToHistory(senderId,receiverId,message);
      // The main line to start socket Connection
      io.socket.post('/chat/sendMessage', {senderId: senderId, receiverId: receiverId, message: message});
    });

    function addMessageToHistory(senderId,receiverId,message){
        var alignCssClass = (senderId == "34267e2c10aac7eb5769f3a77cd22e77")?"sender":"receiver";

        var text = '<div class="row message-body">';
        text+='<div class="col-sm-12 message-main-'+alignCssClass+'">';
        text+='<div class="'+alignCssClass+'">';
        text+='<div class="message-text">'+message+'</div>';
        text+='<span class="message-time pull-right">Sun</span>';
        text+='</div></div></div>';

        $("#main-chat-history-area").append(text);
    }
})