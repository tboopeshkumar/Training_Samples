module.exports.add = (a,b)=> a+b;
module.exports.square = x => x * x;
module.exports.setName = (user,fullName)=>{
    const name = fullName.split(' ');
    user.firstName = name[0];
    user.lastName = name[1];
    return user;
}
module.exports.multiply = (a,b,callback) => {
    setTimeout(()=>{
        callback(a*b);
    },1000)
}