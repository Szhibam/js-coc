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

//  factory function
const tea = Object.create(User)
console.log(tea.email);
