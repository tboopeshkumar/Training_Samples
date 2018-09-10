var user = {
    name : 'Parthi',
    sayHi : () => {
       
        console.log(this);
        sayhiinner = () =>{
            console.log(this);
        }
        sayhiinner();
    },
    sayHiAlt () {
      
        console.log(`Hi, This is ${arguments[0]}`);
    }
}

var u1 = user.sayHi;
u1();
user.sayHiAlt('joe');