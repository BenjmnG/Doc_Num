//$(document).ready(function(){

        var sideContainer = (document).getElementsByClassName("side_container");
        var plays = (document).getElementById("plays");
        var inplays = (plays).getElementsByClassName("outer_container");
        var destination = (document).getElementsByClassName("side_container inner_container");
      
        var footnote = (document).getElementsByClassName("footnote");
        var footnotes = (document).getElementsByClassName("footnotes");
        var sideClose = (document).getElementsByClassName("sideClose");
        var Referenced = (document).getElementsByClassName("Referenced");
     
        var cButton = (document).getElementById("cButton_0001");
        var html = document.getElementsByTagName('html')[0];

/* Diseable Specefic a  link */
  $ (footnote).off("click");
  $ (footnote).unbind("click");
  $ (sideClose).off("click");
  $ (sideClose).unbind("click");


/* Functions */

  function open_side(){

    if ($(plays).hasClass('side_closed')){
          $(sideContainer).removeClass('side_closed');
          $(sideContainer).addClass('side_opened');
          $(plays).removeClass('side_closed');
          $(plays).addClass('side_opened');

          } else {

          };
  };

  function close_side(){

          $(sideContainer).removeClass('side_opened');
          $(sideContainer).addClass('side_closed');
          $(plays).removeClass('side_opened');
          $(plays).addClass('side_closed');
  };

  function showContent(){
    //clearInnerSide();
    var i = 0;
    var PreSerial = $(this).attr("href");
    var Serial = PreSerial.replace("#","");
    var getSerial = document.getElementById(Serial);

    var url = document.location.host

    //  alert(Serial)
     //   alert(firstDivContent);
    
    if (Serial.match(/\d+$/)) { /* show side content */
      open_side();
      var getSerialContentToSide = $ (getSerial).clone();
      $ ("#side .inner_container").html(getSerialContentToSide);
    
    } else if (Serial.match(/[a-zA-Z]$/)) { /* show reference */
      var getSerialContenttoRef = $(getSerial).clone() //clone the element
       .children() //select all the children
       .end()  //again go back to selected element
       .text() //get the text
       .replace(/↩/i, ''); // Erase ↩ glyphe
      var ExitRef = '<img src="/Doc_Num/assets/images/bullet-close.svg" class="ExitRef">'

      /*$ (this).parent()
      .text(" " + getSerialContenttoRef+ " ") // Insert Text Reference
      .append(ExitRef + " ") // Add Close button at the end
      .attr("footnoteID", PreSerial) // Store footnote #href
      .addClass("Referenced"); // Add specefic class to global div
      //.attr('onclick', 'clearReference.call("this")');
      */
      var parent = $(this).parent();
      parent.replaceWith( "<span class='referenced' footnoteID='"
            + PreSerial 
            +"'>" 
            + getSerialContenttoRef 
            + ExitRef 
            + "</span>"
            +"<script src='/assets/js/base.js''></script>" // USEFULL ??
            );


                } else {
      $ ("#side .inner_container").html("OUUUUUPSS ! <br> On s'emmêle les pinceaux ici. Veuillez recharger la page.");
    }

    return false;

};

  function clearInnerSide(){
    // delete firstDivContent;
    $ ("#side .inner_container").html("");
  };

  function clearReference(){
    //var getReference = (document).getElementsByClassName("Referenced");
    var getReferenceAttribute = $(this).attr("footnoteID");
    var AttributeValue = getReferenceAttribute.split(':')[1];

    $ (this).replaceWith('<sup id="fnref:'
            + AttributeValue 
            +'"><a href="'
            + getReferenceAttribute
            +'" class="footnote">'
            + AttributeValue
            +'</a></sup>'
            +"<script src='/assets/js/base.js''></script>"  // USEFULL ??
            );
  };

  function colorChange1(){ // yellow
      document.body.style.setProperty("--light", "#ffff84");
      document.body.style.setProperty("--dark", "#333");
    };

  function colorChange2(){ //white
      document.body.style.setProperty("--light", "white");
      document.body.style.setProperty("--dark", "#333");  
    };

    function colorChange3(){ //black
      document.body.style.setProperty("--light", "#333");
      document.body.style.setProperty("--dark", "white");  
    };

/* Calls */



  $(cButton_0001).click(
    function(){

     //className = cButton.getAttribute("class") //pure JS Solution

    if($(".cButton").hasClass('color1')) {
      colorChange3();
      $(".cButton").removeClass('color1');
      $(".cButton").addClass('color3');

    }
    else if($(".cButton").hasClass('color2')){
      colorChange1();
      $(".cButton").removeClass('color2');
      $(".cButton").addClass('color1');    }

    else{
      colorChange2();
      $(".cButton").removeClass('color3');
      $(".cButton").addClass('color2');
    };
  });

  $(footnote).click(
      function() {
        showContent.call(this);
    });

  $(sideClose).click(
      function() {
        close_side();
    });

    $('.referenced').click(
      function() {
        //alert('go');
        clearReference.call(this);
    });

//});

