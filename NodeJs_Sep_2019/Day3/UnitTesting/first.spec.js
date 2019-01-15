describe("A suite is just a function", function() {
      var a;
    
      it("and so is a spec", function() {
        a = true;    
        expect(a).toBe(true);
        //expect(a).toBe(true);
      });
}); 

Add=(x,y)=> x+y;

describe('An addtion suite', ()=>{
    it('Adds two numbers',()=>{
        expect(Add(20,30)).toBe(50);
    })
})

