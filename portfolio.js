var tagLinks = document.getElementsByClassName("tag-links");
var tagContents = document.getElementsByClassName("tag-contents");

function opentag(tagName){
    for(tagLink of tagLinks){
        tagLink.classList.remove("active-skills");
    }

    for(tagContent of tagContents){
        tagContent.classList.remove("active-tag");
    }

    event.currentTarget.classList.add("active-skills");
    document.getElementById(tagName).classList.add("active-tag");

}

var menuBar = document.getElementById("menu-bar");

function openmenu(){
    menuBar.style.right = "0";       
}

function closemenu(){
    menuBar.style.right = "-130px";       
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxgP3Pl99M4xd2sOql-rSBUk0FnP6odv3tXFbmL0GQNqJndQj6YHBxlv_M0F6-JoIoX/exec'
  const form = document.forms['submit-to-google-sheet']
  const upMsg = document.getElementById("form-updated")


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        upMsg.innerHTML = "Meassage sent successfully"
        setTimeout(function (){
            upMsg.innerHTML = ""
            },5000)
            form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })