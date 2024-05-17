const User = {
    _email : 's@hai.com',
    _password : "123abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value;
    }

}

const tea = Object.create(User)
console.log(tea.email);
