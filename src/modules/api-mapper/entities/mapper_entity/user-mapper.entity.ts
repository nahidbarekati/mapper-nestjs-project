export class Geo {
  lat: string;
  lng: string;
}

export class AddressEntity {
  street: string;
  city: string;
  zipcode: string;
  state: string;
  geo: Geo;
}

interface propertyInterface {
  id: number;
  firstname: string;
  lastname: string;
  full_name: string;
  username: string;
  email: string;
  address: AddressEntity;
  phone: string;

  age: string;
  gender: string;
  image: string;
  password: string;
  birthDate: string;
  appearance: {
    hair: any;
    eyeColor: string;
    height: string;
    weight: string;
    bloodGroup: string;
    subSubObject: {
      image: string;
      age: string;
      birthDate: string;
    };
  };
}

export class UserMapEntity implements propertyInterface {
  address: AddressEntity;
  age: string;
  appearance: {
    hair: any;
    eyeColor: string;
    height: string;
    weight: string;
    bloodGroup: string;
    subSubObject: { image: string; age: string; birthDate: string };
  };

  birthDate: string;
  email: string;
  firstname: string;
  full_name: string;
  gender: string;
  id: number;
  image: string;
  lastname: string;
  password: string;
  phone: string;
  username: string;

  constructor(user: any) {
    this.id = user.id;
    this.full_name = user.lastName + ' ' + user.lastName;
    this.firstname = user.firstName;
    this.lastname = user.lastName;
    this.email = user.username;
    this.address = {
      state: user.address.state,
      city: user.address.city,
      street: user.address.address,
      zipcode: user.address.postalCode,
      geo: {
        lat: user.address.coordinates.lat,
        lng: user.address.coordinates.lng,
      },
    };
    this.phone = user.username;
    this.age = user.age;
    this.gender = user.gender;
    this.image = user.image;
    this.password = user.password;
    this.birthDate = user.birthDate;
    this.appearance = {
      hair: user.hair,
      eyeColor: user.eyeColor,
      height: user.height,
      weight: user.weight,
      bloodGroup: user.bloodGroup,
      subSubObject: {
        image: user.image,
        age: user.age,
        birthDate: user.birthDate,
      },
    };
  }
}
