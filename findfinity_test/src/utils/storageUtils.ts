export const getUserFromStorage = () => localStorage.getItem("user");

export const setUserToStorage = (data: any) => localStorage.setItem("user", JSON.stringify(data));

interface Name{
    title: string,
    first: string,
    last: string
}
interface ProfileImage{
    large: string
}
interface User {
    name: Name,
    email: string,
    picture: ProfileImage
}
export const pickUserEmail = () =>{
    const user: string =getUserFromStorage()!;
    const userObj : User = JSON.parse(user);
    return userObj.email;
}

export const pickUserName = () =>{
    const user: string =getUserFromStorage()!;
    const userObj : User = JSON.parse(user);
    return `${userObj.name.title} ${userObj.name.first} ${userObj.name.last}`;
}

export const pickProfileImage = () =>{
    const user: string =getUserFromStorage()!;
    const userObj : User = JSON.parse(user);
    return userObj.picture.large!;
}