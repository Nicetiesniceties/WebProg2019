var display_img_src=[
    "http://pic1.win4000.com/wallpaper/f/51c3bb99a21ea.jpg",
    "https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-9/32349349_1819062534781638_8967809448244412416_n.jpg?_nc_cat=103&_nc_ht=scontent-hkg3-2.xx&oh=7e8967acc67bb1d63cc95fc71aeb7caa&oe=5CE71037",
    "https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-9/41452237_2321288927897633_9124543151451668480_n.jpg?_nc_cat=106&_nc_ht=scontent-hkg3-2.xx&oh=5ac87dba2911dad305b324f06c28977f&oe=5CDEA9EC"
]



function init(){
    var index = 1;
    var index_max = 2;
    var btn = document.getElementsByClassName("image-viewer__button");
    var display = document.getElementById("display_div");
    

    var btn_back_handler = function(){
        if(index != 0){
            if(index===index_max){
                btn[1].innerHTML="<img class='image-viewer__button_img' src='images/next.png'>";
            }  
            index--;
            
            display.innerHTML="<img id='img1' src="+display_img_src[index]+">";
         
                
            

            
            
    
        }
        if(index === 0){
            btn[0].innerHTML="<img class='disabled' src='images/back.png'";
        }


    };
    var btn_next_handler = function(){
        if(index != index_max){
            if(index===0){
                btn[0].innerHTML="<img class='image-viewer__button_img' src='images/back.png'>";
            }         
            index++;
            
            display.innerHTML="<img src ="+display_img_src[index]+">";

        }
        if(index===index_max){
            btn[1].innerHTML="<img class='disabled' src='images/next.png'";
        }  

    };

    btn[0].addEventListener("click",btn_back_handler);
    btn[1].addEventListener("click",btn_next_handler);



}   
