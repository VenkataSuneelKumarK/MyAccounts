/**
 * Created by kanamars on 26/10/19.
 */
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
   transactionLabels : [{
        label: "Account No",
        key: "account"
   },{
       label: "Account Name",
       key: "accountName"
   },{
       label: "Currency",
       key: "currencyCode"
   },{
       label: "Amount",
       key: "amount"
   },{
       label: "TransactionType",
       key: "transactionType"
   }],
   filters: [{
       label: "Account Name",
       key: 'accountName',
       selectedValue: '',
       values:[{
           label:'Savings Account',
           isChecked: false,
           id:'savingsAccount'
       },
       {
           label:'Checking Account',
           isChecked: false,
           id:'checkingAccount'
       },
       {
           label:'Auto Loan Account',
           isChecked: false,
           id:'autoLoanAccount'
       },
       {
           label:'Credit Card Account',
           isChecked: false,
           id:'creditCardAccount'
       },
       {
           label:'Investment Account',
           isChecked: false,
           id:'investmentAccount'
       },
       {
           label:'Personal Loan Account',
           isChecked: false,
           id:'personalLoanAccount'
       },
       {
           label:'Money Market Account',
           isChecked: false,
           id:'moneyMarketAccount'
       },
       {
           label:'Home Loan Account',
           isChecked: false,
           id:'homeLoanAccount'
       }]
   },
   {
       label: "Transaction Type",
       key: 'transactionType',
       selectedValue: '',
       values:[{
           label:'Deposit',
           isChecked: false,
           id:'deposit'
       },
       {
           label:'Withdrawal',
           isChecked: false,
           id:'withdrawal'
       },
       {
           label:'Invoice',
           isChecked: false,
           id:'invoice'
       },
       {
           label:'Payment',
           isChecked: false,
           id:'payment'
       }]
   }],
   transactions: []
};



const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.GET_TRANSACTION_LABELS :
            return state;
        case actionTypes.GET_TRANSACTIONS :
            return {
                ...state,
                transactions: action.transactions
            };
        default:
            return state;

    }

    return state;
};

export default reducer;