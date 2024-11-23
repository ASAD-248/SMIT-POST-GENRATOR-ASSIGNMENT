





var txt = document.getElementById("text");
var btn = document.getElementById("btn");
//  var ac = "".toLocaleUpperCase();
//  console.log(ac)

    //  post card elements //
var title = document.getElementById("post_title")
var post_time = document.getElementById("post_time");
var postCart_disc =  document.getElementById("post_discription");
var post_innertext = document.getElementById("img_text");
var profile_img = document.getElementById("pro_img");

      //****  post create form elements  ****//

var user_name = document.getElementById('title_inp');
// console.log(user_name);
var user_discription = document.getElementById('user_discription');
// // console.log(user_discription);
var user_Text = document.getElementById('post_innerTxt');
// // console.log(user_postInner_Text);
var user_profilrImg = document.getElementById('user_img');
// var profile_img = user_profilrImg.value;
// console.log(profile_img);\


function postbtn(){

  var user_inpValue = user_name.value;
  console.log(user_inpValue)
  title.innerText = user_inpValue;

  var post_hor = new Date().toUTCString();
  post_time.innerText = post_hor;

  var disc_val = user_discription.value;
  console.log(disc_val)
  postCart_disc.innerText = disc_val;  

  var post_text = user_Text.value;
  // console.log(post_text)
  post_innertext.innerText = post_text;


}


var b_image = document.getElementById('back_img');

var selectImgPath;
var select_bg = document.getElementsByClassName("select_bg");

function select_bgColor(src){

  for(var i = 0;i < select_bg.length; i++){
    select_bg[i].classList.remove('selectedImage');
  }
  event.target.classList.add('selectedImage')
    selectImgPath = src;
    console.log(selectImgPath)

    b_image.src=`${selectImgPath}`;
    
}

var like_text = document.getElementById("like_nmbr");
var like_countn = 0;

function like_count(){
  like_countn++ 
  like_text.textContent = like_countn;
}


// var aaa = bg_image.style.backgroundImage= "`url(${selectImgPath})`"
// console.log(aaa)

// function selectedImage(src) {
//   var imagesBg = document.getElementsByClassName('box')
//    for(var i = 0; i < imagesBg.length; i++) {
//        imagesBg[i].classList.remove('selectedImage')
//    }
//    event.target.classList.add('selectedImage')
//    selectImgPath = src
// }