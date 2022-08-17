var btn = document.querySelectorAll('.question');
var ans = document.querySelectorAll('.answer');
console.log(btn);
// const g = document.getElementById('my_div');
for (let i = 0, len = btn.length; i < len; i++)
{
    btn[i].onclick = function(){

        if(ans[i].style.display == ""){
            btn[i].style.fontWeight = "700";
            btn[i].children[0].style.transform = "rotate(180deg)";
            ans[i].style.display = "block";
        }else{
            btn[i].style.fontWeight= "normal";
            btn[i].children[0].style.transform = "";
            ans[i].style.display="";
        }
    }
}


