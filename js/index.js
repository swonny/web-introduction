window.onload = function () {
    const saveButton = document.getElementById("saveButton");
    saveButton.addEventListener('click', function () {
        const name = document.querySelector('#friendName').value;
        alert(name + "님, 저와 " + getCheckedCnt() + "개의 취향이 같으시네요!");
    })
}

function getCheckedCnt()  {
    const query = 'input[name="movieName"]:checked';
    const selectedElements = 
        document.querySelectorAll(query);

    return selectedElements.length;
}