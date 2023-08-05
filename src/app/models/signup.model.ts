export class SignUpData {
    email!: string;
    username!: string;
    password!: string;
    name!: Name;
    address!: Address;
    phone!: string;
}

class Name {
    firstname!: string;
    lastname!: string;
}

class Address {
    city!: string;
    street!: string;
    number!: string;
    zipcode!: string;
    geolocation!:Geolocation;
}

class Geolocation {
    lat!: string;
    long!: string;
}