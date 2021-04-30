describe("Test radio-bill factory function that takes sms or call and return the amount and return an updated amount as more strings are added.", ()=>{
 

    it("Should return a total cost of a selected string and update the overall total,once a string sms is selected.", ()=>{
        let checkedItemTotal = radioBillTotal();

        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');


        console.log(checkedItemTotal.getOverallCost());

        assert.equal(7.50, checkedItemTotal.getOverallCost());
        assert.equal(7.50, checkedItemTotal.getSmsCostTotal());
        assert.equal(0.00, checkedItemTotal.getCallCostTotal()); 
    })

    it("Should return a total cost of a selected string and update the overall total,once a string call is selected.", ()=>{
        let checkedItemTotal = radioBillTotal();

        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');

        console.log(checkedItemTotal.getOverallCost());

        assert.equal(13.75, checkedItemTotal.getOverallCost());
        assert.equal(13.75, checkedItemTotal.getCallCostTotal()); 
        assert.equal(0, checkedItemTotal.getSmsCostTotal());
    })

    it("Should return a warning level class if the warning level is reached(orange).", ()=>{
        let checkedItemTotal = radioBillTotal();

        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
       
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
      
        assert.equal(33.50 , checkedItemTotal.getOverallCost());
        assert.equal(6.00, checkedItemTotal.getSmsCostTotal()); 
        assert.equal(27.50, checkedItemTotal.getCallCostTotal());
    })

    it("Should return a critical level class if the critical level is reached(red).", ()=>{
        let checkedItemTotal = radioBillTotal();

        
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');

        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
       
        assert.equal(52.50, checkedItemTotal.getOverallCost());
        assert.equal(11.25, checkedItemTotal.getSmsCostTotal()); 
        assert.equal(41.25, checkedItemTotal.getCallCostTotal());
    })
})