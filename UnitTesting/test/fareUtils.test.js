const mocha = require('mocha');
const chai = require('chai');
const fareUtils = require('../fareUtils');

const expect = chai.expect;

// Use describe for grouping of tests
describe('fareUtils',function(){
    it('expect fare to be rs.50 for 0 km 0 min',function(){
        let fare = fareUtils.calcFare(0,0);
        expect(fare).to.equal(50); // chai assertion
    });
    it('expect fare to be rs.100 for 10km and 0 min',function(){
        let fare = fareUtils.calcFare(10,0);
        expect(fare).to.equal(100);
    });

})



