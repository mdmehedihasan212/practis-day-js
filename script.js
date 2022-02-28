document.getElementById('add-border').addEventListener('click', function () {
    const addBorder = document.getElementById('container-id');
    addBorder.style.border = '1px solid red';
});

function addBackground() {
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        friend.style.background = 'lightblue';
    }

}
document.getElementById('add-friend').addEventListener('click', function () {
    const mainDiv = document.getElementById('container-id');
    const createDiv = document.createElement('div');
    createDiv.classList.add('friend');
    createDiv.innerHTML = `
    <h3 class="friend-name">Mehedi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, fugiat.</p>
    `;
    mainDiv.appendChild(createDiv);
})

