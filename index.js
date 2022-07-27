$(document).ready(function(){
    let $captcha = $( ".captcha" );
    let $inp = $( "#inp" );
    let $all = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9];
    
    $( "#reload" ).click( function(){
      $captcha.text("");
      getCaptcha();
    });        
    function getCaptcha(){    
      let abc ="";      
      for(let i = 0; i<6; i++){
      let randomChar = $all[Math.floor(Math.random() * $all.length)];
      // console.log(randomChar);
      abc += ` ${randomChar}`;
      $captcha.text(abc) ;
      }
    }
    getCaptcha();
    $( "#checks" ).click(function(){
      let value = $inp.val().split("").join(" ");
      let value2 = $captcha.text().trim()
      // console.log(value);
      // console.log($captcha.text());
      if(value == value2){
        $( "#demo" ).text("Congratulations! You are not a robot.");
        $( "#demo" ).hide(5000);
        $( "#demo2" ).text("");
        $inp.val("");
        getCaptcha();
      }
      else if(value == ""){
        $( "#demo2" ).text("");
        $( "#demo" ).text("");
        alert("Please enter Captcha!");
        getCaptcha();
      }
      else{
        $( "#demo2" ).text("Please enter Valid Captcha!!");
        $inp.val("");
        $( "#demo" ).text("");
        getCaptcha();
      }
    });
});