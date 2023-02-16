window.onload = function () {
    const saveButton = document.getElementById("saveButton");
    var name = document.querySelector('#friendName').value;

    saveButton.addEventListener('click', function () {
        console.log(name);
        alert(name + "님, 저와 " + getCheckedCnt() + "개의 취향이 같으시네요!");
    })
}

function getCheckedCnt()  {
    const query = 'input[name="movieName"]:checked';
    const selectedElements = 
        document.querySelectorAll(query);

    return selectedElements.length;
}~