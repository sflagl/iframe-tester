var error = false;
var approved = true;


// if(error == false && approved == true){

//     $('#img-to-error').hide();
//     $( "div" ).removeClass( "beam-add" )
//     $('#approve-box').show();
//     $('#error-box').hide();
//     console.log('errors');

// }else if(error == true && approved == false){

//     $('#img-to-error').hide();
//     $( "div" ).removeClass( "beam-add" )
//     $('#error-box').show();
//     $('#approve-box').hide();
//     console.log('no errors');
// }else{

//     $('#img-to-error').show();
//     $( "#img-to-error" ).addClass( "beam-add" )
//     $('#approve-box').hide();
//     $('#error-box').hide();
// }

error();

function error(){

    if(error == true){

        $('#img-to-error').hide();
        $("div").removeClass("beam-add")
        $('#error-box').show();
        $('#approve-box').hide();

    } else{

        approve()

    }

}

function approve(){

    $('#img-to-error').hide();
    $( "div" ).removeClass( "beam-add" )
    $('#error-box').show();
    $('#approve-box').hide();


}