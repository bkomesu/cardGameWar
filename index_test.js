var expect = chai.expect;

describe('Myfunctions', function() {
    describe('#isRoundWinner', function() {
        it ('should return true for card one', function(){
        var x = isRoundWinner(1, 3);
        expect(x).to.equal(false);
        });

        it ('should throw true if first parameter is not a value', function(){
            expect(function() {
                isRoundWinner(b,10);
            }).to.throw(Error)
        });
    });
});