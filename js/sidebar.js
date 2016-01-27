$(document).ready(function() {
    
    $("#sidebar-subMenu").css("width",$("#sidebar-menu").outerWidth()+"px");
    $(".accordion-section-content").css("width",$("#sidebar-menu").outerWidth()+"px");
    $(".accordion-section-title").css("width",$("#sidebar-menu").outerWidth()+"px");

    //Section Clicked
    $('[id^=sidebar-item]').click(function(e){
      if($(this).find('.arrow-left').css("display") == 'none'){
        $('[id^=sidebar-item]').find('.arrow-left').css("display","none");
        $(this).find('.arrow-left').css("display","block");
        $('[id^=sidebar-item]').css("background-color","#61605e");
        $(this).css("background-color","#9f9e9c");
      }});
 
    //DropdownFunction
    function close_accordion_section(e) {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
    $('.accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('href');
        if($(e.target).is('.active')) {
            close_accordion_section(e.target);
        }else {
            close_accordion_section(e.target);
            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
        e.preventDefault();
    });

    $("#sidebar-wrapper").hover(function(e){
      if($("#sidebar-wrapper").hasClass("collapsed")){
        $("#sidebar-wrapper").removeClass("collapsed");
        $(".accordion-section").css("display","block");
      }
      else{
        $("#sidebar-wrapper").addClass("collapsed");
        $(".accordion-section").css("display","none");
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

//Sidebar-resizing
$(window).on('resize', function(){
  $("#sidebar-subMenu").css("width",$("#sidebar-menu").outerWidth()+"px");
  $(".accordion-section-title").css("width",$("#sidebar-menu").outerWidth()+"px");
  $(".accordion-section-content").css("width",$("#sidebar-menu").outerWidth()+"px");
});
