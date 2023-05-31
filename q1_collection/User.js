class User {
  constructor() {
    this.Users = [
      {
        name: "Win",
        age: 25,
      },
      {
        name: "Ton",
        age: 25,
      },
      {
        name: "Jeff",
        age: 33,
      },
      {
        name: "Boat",
        age: 26,
      },
    ];
  }

  show() {
    return this.Users;
  }

  maximumAge() {
    let maxAge = 0;
    let maxAgeName = "";
    this.Users.forEach(user => {
        if(user.age > maxAge){
            maxAge = user.age;
            maxAgeName = user.name;
        }
    });
    return maxAgeName;
  }

  getAgeByName(name) {
    let isHaveName = false;
    let age = 0;
    this.Users.forEach(user => {
        // console.log(user.name.toLowerCase() == name.toLowerCase());
        if(user.name.toLowerCase() == name.toLowerCase()){
            isHaveName = true;
            age = user.age;
        }
    });
    if(isHaveName){
        return age;
    } else {
        false
    }
  }

  transform(){
    const ageList = [];
    this.Users.forEach(user => {
        if(!ageList.includes(user.age)){
            ageList.push(user.age);
        }
    });
    const response = {};
    ageList.forEach(age => {
        let userAtAge = []
        this.Users.forEach(user => {
            if(user.age == age){
                userAtAge.push(user.name);
            }
        });
        response[age]=userAtAge;
    })
    return response;
  }
}
[{ 25: ['Win', 'Ton'], 33: ['Jeff'], 26: ['Boat']}]

export default User;
