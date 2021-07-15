////////////////////////////MODAL////////////////////////////
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}


////////////////////////////NAVIGATORS////////////////////////////

const homeNavigator = async () => {
    await fetch('/api/users/home').then(
        document.location.replace('/api/users/home')
    );
};
const dashboardNavigator = async () => {
    await fetch('/api/users/dashboard').then(
        document.location.replace('/api/users/dashboard')
    );
};
  
document.querySelector('#dashboard').addEventListener('click', dashboardNavigator);
document.querySelector('#home').addEventListener('click', homeNavigator);
