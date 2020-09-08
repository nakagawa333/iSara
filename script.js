var pageTop_Button = document.getElementById('page_top')
window.onscroll = (e) => {
    if(this.scrollY > 60){
        pageTop_Button.style.display = 'block'
    } else {
        pageTop_Button.style.display = 'none'
    }
}

function startPointClick(){
    const reqinfo_form = document.querySelector("div[class='reqinfo_form']")
    const offsetTop = reqinfo_form.offsetTop
    $('body, html').animate({
        scrollTop:offsetTop
    }, 500)
}

pageTop_Button.addEventListener('click',() => {
    $('body, html').animate({
        scrollTop:0
    }, 500);
})