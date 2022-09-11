const getInputValueById = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}


const btnSendName = () => {
    const name = getInputValueById('name-input');
    localStorage.setItem('name', name)
}
const btnDeleteName = () => {
    localStorage.removeItem('name')
}


const btnSendEmail = () => {
    const email = getInputValueById('email-input');
    localStorage.setItem('email', email)
}
const btnDeleteEmail = () => {
    localStorage.removeItem('email')
}


const btnSendMsg = () => {
    const msg = getInputValueById('msg-input');
    localStorage.setItem('message', msg)
}
const btnDeleteMsg = () => {
    localStorage.removeItem('message')
}


const resetAll = () => {
    localStorage.clear();
    displayInfo()
}
const btnSendAll = () => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const msg = localStorage.getItem('message');
    // console.log(name, msg, email)
    const info = {};
    info.name = name;
    info.email = email;
    info.message = msg;
    // console.log(info)
    localStorage.setItem('info', JSON.stringify(info))
    displayInfo()
}

const displayInfo = () => {
    const info = localStorage.getItem('info')
    const parsedInfo = JSON.parse(info)
    // const {email, message:msg, name} = parsedInfo
    // console.log(parsedInfo.name);
    const infoContainer = document.getElementById('info-container')
    infoContainer.textContent=``
    const ol = document.createElement('ol');
    ol.innerHTML =`
    <li>Name: ${parsedInfo?.name ? parsedInfo.name:"Not Found"}</li>
    <li>Email: ${parsedInfo?.email ? parsedInfo.email:"Not Found"}</li>
    <li>Message: ${parsedInfo?.message ? parsedInfo.message: "Not Found"}</li>
    `
    infoContainer.appendChild(ol);
}
displayInfo()
