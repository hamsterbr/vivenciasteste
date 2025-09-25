function openPopup(id){document.getElementById(id).classList.remove('hidden');}
function closePopup(id){document.getElementById(id).classList.add('hidden');}
function switchPopup(current,next){closePopup(current);openPopup(next);}