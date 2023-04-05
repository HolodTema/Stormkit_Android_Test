function onLinkClicked() {
    androidApp.onLinkClicked()
}

window.onload = function(){
    let link = document.getElementById("link");
    link.onclick = onLinkClicked;
}