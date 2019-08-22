import * as constants from '../actions/constants';
import balanceReducer from './balance';

describe('balanceReducer',()=>{
    it('sets a balance',()=>{
        const balance =10;
        expect(balanceReducer(undefined,{ type :constants.SET_BALANCE,balance }))
            .toEqual(balance);
    });

    it('deposits into balance',()=>{
        const deposit =10;
        const intialState =5;
        expect(balanceReducer(intialState,{ type : constants.DEPOSIT, deposit})).toEqual(intialState+deposit);
    });
});