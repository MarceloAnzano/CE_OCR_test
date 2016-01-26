$(document).ready(function() {
    
    $("#sidebar-subMenu").css("width",$("#sidebar-menu").outerWidth()+"px");
    // $("#sidebar-item").css("width",$("#sidebar-menu").outerWidth()+"px");
    $(".accordion-section-content").css("width",$("#sidebar-menu").outerWidth()+"px");
    $(".accordion-section-title").css("width",$("#sidebar-menu").outerWidth()+"px");

    function close_accordion_section(e) {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('[id^=sidebar-item]').click(function(e){
      if($(this).find('.arrow-left').css("display") == 'none')
      {
        $('[id^=sidebar-item]').find('.arrow-left').css("display","none");
        $(this).find('.arrow-left').css("display","block");
      }
    });
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
        console.log(e.target)    
 
        if($(e.target).is('.active')) {
            close_accordion_section(e.target);
        }else {
            close_accordion_section(e.target);
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });

    $("#sidebar-wrapper").hover(function(e){
      if($("#sidebar-wrapper").hasClass("collapsed")){
        $("#sidebar-wrapper").removeClass("collapsed");
        $(".accordion-section").css("display","block");
        // $("[class^=accordion-]").css("display","block");
      }
      else{
        $("#sidebar-wrapper").addClass("collapsed");
        $(".accordion-section").css("display","none");
        // $("[class^=accordion-]").css("display","none");
        // $("#sidebar-wrapper").attr("id","sidebar-wrapper-collapsed");
      }
    });

    $("#sidebar-wrapper").addClass("collapsed");
    $("#sidebar-wrapper").css("opacity",1);
    $(".accordion-section").css("display","none");
    if($("#sidebar-wrapper").css("opacity") == 1){
        $("#sidebar-wrapper").css("transition","all 0.5s ease");
        $("#sidebar-wrapper.collapsed").css("transition","all 0.5s ease");
    }
});

$(window).on('resize', function(){
  
  $("#sidebar-subMenu").css("width",$("#sidebar-menu").outerWidth()+"px");
  $(".accordion-section-title").css("width",$("#sidebar-menu").outerWidth()+"px");
  $(".accordion-section-content").css("width",$("#sidebar-menu").outerWidth()+"px");
});
