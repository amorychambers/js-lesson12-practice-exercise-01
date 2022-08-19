const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector(".num-users");

const getData = async function (numUsers){
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    const userResults = data.results;
    console.log(userResults);
    displayUsers(userResults);
};

getData(1);

function displayUsers (userResults){
    randomFolks.innerHTML = "";
    for (let user of userResults) {
        let country = user.location.country;
        let name = `${user.name.title} ${user.name.first} ${user.name.last}`;
        let imageURL = user.picture.medium;
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `<h3>${name}</h3><p>${country}</p><img src=${imageURL} alt="User avatar">`;
        randomFolks.append(userDiv);
    }
};

selectUserNumber.addEventListener("change", function(e){
    const numUsers = e.target.value;
    getData(numUsers);
});

