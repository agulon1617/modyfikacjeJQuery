 $(document).ready(function(){
     $('.button1').click(
         function(){
        var copy = $('.holder :last-child').clone();
        $('.holder :last-child').remove();
        $('.holder').prepend(copy)
     }
     )
     $('.button2').click(
        function(){
       var copy = $('.holder :first-child').clone();
       $('.holder :first-child').remove();
       $('.holder').append(copy)
    }
    )
})