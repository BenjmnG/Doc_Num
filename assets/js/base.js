//$(document).ready(function(){

        var sideContainer = (document).getElementsByClassName("side_container");
        var plays = (document).getElementById("plays");
        var inplays = (plays).getElementsByClassName("outer_container");
        var destination = (document).getElementsByClassName("side_container inner_container");
      
        var footnote = (document).getElementsByClassName("footnote");
        var footnotes = (document).getElementsByClassName("footnotes");
        var sideClose = (document).getElementsByClassName("sideClose");
        var Referenced = (document).getElementsByClassName("Referenced");

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
      var ExitRef = '<img src="{{site.baseurl}}/assets/images/bullet-close.svg" class="ExitRef">'

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

/* Calls */



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

