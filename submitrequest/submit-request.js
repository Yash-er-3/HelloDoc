const modebtn = document.getElementById('img-btn')
const imgbtn = document.getElementById('img-mode')

modebtn.addEventListener('click', darkLight)

var flag;

window.onload = function () {
    var array = document.cookie.split("=");
    console.log(array)
    flag = parseInt(array[1]);
    darkLight ()
    // console.log(flag)
    try {
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
     
            myModal.show();
        
        const closeBtn = document.getElementById("closeBtn");
        closeBtn.addEventListener('click', function () { myModal.hide(); })
    } catch (error) {
        
    }
}


function darkLight () {
    if (flag == 0) {
        document.querySelector('body').style.backgroundColor = "black"
        imgbtn.toString().replace('light', 'dark')
        document.cookie = "flag = " + flag;
        flag = 1;
    }
    else {
        document.querySelector('body').style.backgroundColor = "rgb(247,247,247)"
        document.querySelector('body').setAttribute('data-bs-theme', 'light')
        imgbtn.toString().replace('dark', 'light')
        document.cookie = "flag = " + flag
        flag = 0;
    }
}
