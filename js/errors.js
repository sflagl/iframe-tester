var error = true;
var approved = false;


if(error == false && approved == true){

    $('#img-to-error').hide();
    $( "div" ).removeClass( "beam-add" )
    $('#error-box').show();
    console.log('errors');

}else if(error == true && approved == false){

    console.log('no errors');
}else{

}