const userProfileTransformRule = {
  item: {
    id: 'id',
    name: 'firstName',
    lastname: 'lastName',
    fullname: 'firstname + lastname',
    age: 'age',
    gender: 'gender',
    email: 'email',
    image: 'image',
    phone: 'phone',
    username: 'username',
    password: 'password',
    birthDate: 'birthDate',
    appearance: {
      hair: 'hair',
      eyeColor: 'eyeColor',
      height: 'height',
      weight: 'weight',
      bloodGroup: 'bloodGroup',
      subSubObject: {
        image: 'image',
        age: 'age',
        birthDate: 'birthDate',
      },
    },
  },
  operate: [
    {
      run: function (val, data) {
        return data.firstName + ' ' + data.lastName;
      },
      on: 'full_name',
    },
    {
      run: function (facilities: any) {
        // return facilities.map((facility: any) => ({
        //   facilityId: facility.facilityId,
        //   facilityName: facility.name,
        //   roleTypeId: facility.roleTypeId,
        //   roleTypeDescription: facility.roleTypeDescription
        // }))
      },
      on: 'facilities',
    },
    {
      run: 'Date.parse',
      on: 'birthDate',
    },
    {
      run: function (val, data) {
        return data.birthDate + ' ' +'is birth Date :)';
      },
      on: 'info',
    },
  ],
};

export { userProfileTransformRule };
