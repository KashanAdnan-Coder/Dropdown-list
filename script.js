let account = document.getElementsByClassName("account")

account[0].addEventListener("click", () => {
    let content = document.getElementById("content")
    let downarrwo = document.getElementById("down-arrow")
    downarrwo.style.transform = "rotate(180deg)"
    content.style.display = "flex"
    let home = document.getElementById("home")
    home.style.animation = "point 0.5s"
    let dash = document.getElementById("dash")
    dash.style.animation = "point 1s"
    let profile = document.getElementById("profile")
    profile.style.animation = "point 1.5s"
})