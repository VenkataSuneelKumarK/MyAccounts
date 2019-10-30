/**
 * Created by kanamars on 30/10/19.
 */
import transactionDetails from './transactionDetails';

describe('transactionDetails()', function () {
    beforeEach(function () {

    });
    it("should get the transaction details as null if no action type ", function () {
        let state = transactionDetails(undefined, {});
        expect(state.details).toEqual("");
    });
    it("should get the transaction details by passing UPDATE_TRANS_DETAILS", function () {
        let state = transactionDetails(null, {type: 'UPDATE_TRANS_DETAILS', transaction:{account:1234}});
        expect(state.details.account).toEqual(1234);
    })
});