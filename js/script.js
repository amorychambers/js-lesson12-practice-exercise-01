const randomFolks = document.querySelector(".random-peeps");

const getData = async function (){
    const usersRequest = await fetch('https://randomuser.me/api?results=5');
    const data = await usersRequest.json();
    const userResults = data.results;
    console.log(userResults);
    displayUsers(userResults);

};

getData();

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

