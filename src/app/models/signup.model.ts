export class SignUpData {
    email: string;
    username: string;
    password: string;
    name: Name;
    address: Address;
    phone: string;

    constructor(
        email: string, 
        username: string, 
        password: string,
        name: Name,
        address: Address,
        phone: string
    ){
        this.email = email;
        this.username = username;
        this.password = password;
        this.name = name;
        this.address = address
        this.phone = phone
    }
}

class Name {
    firstname: string;
    lastname: string;

    constructor(){
        this.firstname = '';
        this.lastname = '';
    }
}

class Address {
    city!: string;
    street!: string;
    number!: number;
    zipcode!: string;
    geolocation!:Geolocation;
}

class Geolocation {
    lat: string;
    long: string;

    constructor(){
        this.lat = '-37.3159';
        this.long = '81.1496';
    }
}