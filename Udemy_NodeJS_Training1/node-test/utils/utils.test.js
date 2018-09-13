const utils=require('./utils');
const expect= require('expect');
it('should add two numbers',()=>{

    var res = utils.add(10,20);
    expect(res).toBe(30).toBeA('number');
    // if(res != 30){
    //     throw new Error(`Expected 30 but got ${res}`);
    // }

});

it('should square a number',()=>{

    var res = utils.square(10);
    expect(res).toBe(100).toBeA('number');
    // if(res != 100){
    //     throw new Error(`Expected 100 but got ${res}`);
    // }

});

it('should async multiple two numbers',(done)=>{

    utils.multiply(2,5,(val)=>{
        expect(val).toBe(10).toBeA('number');
        done();
    })

});

it('should set firstName and lastName',()=>{
    let user={
        age :20,
        location :'Bangalore'
    };
    const res = utils.setName(user,'Boopesh Kumar');
    expect(res).toInclude({
        firstName :'Boopesh',
        lastName :'Kumar'
    }).toBeA('object');
})
