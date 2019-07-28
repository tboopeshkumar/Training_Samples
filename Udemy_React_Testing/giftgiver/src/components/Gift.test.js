import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift',()=>{
    const mockRemove = jest.fn();
    const id = 1; 
    const props = { gift : { id : 1}, removeGift :mockRemove}; 
    const gift = shallow(<Gift {...props}></Gift>);
    it('renders properly',()=>{
        expect(gift).toMatchSnapshot();
    });

    it('initialize the person and present in the `state`',()=>{
        expect(gift.state()).toEqual({ person:'', present: ''});
    });

    describe('when typing into the person input',()=>{
        const person = 'Uncle';
        
        beforeEach(()=>{
             gift.find('.input-person').simulate('change',{ target : { value : person}});
        });
     
        it('update the person in the `state`',()=>{
            expect(gift.state().person).toEqual(person);
        })
     
     }); 

     describe('when typing into the prent input',()=>{
        const present = 'Golf Clubs';
        
        beforeEach(()=>{
             gift.find('.input-present').simulate('change',{ target : { value : present}});
        });
     
        it('update the person in the `state`',()=>{
            expect(gift.state().present).toEqual(present);
        })
     
     });

     describe('when clicking the `Remove Gift` button',()=>{

        beforeEach(()=>{
            gift.find('.btn-remove').simulate('click');
        });

        it('calls the removeGift callback ',()=>{
            expect(mockRemove).toHaveBeenCalledWith(id); 
        }); 

     });
});


