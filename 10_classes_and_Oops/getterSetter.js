class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    set password(value){
        this._password = value;
    }
    get password(){
        return `${this._password.toUpperCase()}hitesg`
    }

}

const szhibam = new User("s@g.com", "12abs")
console.log(szhibam.password);

/*
    Cannot set property email of #<User> which has only a getter

    Maximum call stack size exceeded at get password [as password]
 */