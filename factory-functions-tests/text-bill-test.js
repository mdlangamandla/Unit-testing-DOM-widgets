describe("Test textBill factory function that takes sms or call and return the amount and return an updated amount as more strings are added.", ()=>{
    it("Should take a string call and return the total of 5 calls.", ()=>{

        var callStringTotal = textBillTotal();
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('0')
                       
        assert.equal(0, callStringTotal.getSmsCostTotal());
        assert.equal(13.75, callStringTotal.getTotalCost());
        assert.equal(13.75, callStringTotal.getCallCostTotal());

    })

    it("Should take a string sms and return the total of 5 sms.", ()=>{

        var callStringTotal = textBillTotal();
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')

       
        
        assert.equal(3.75, callStringTotal.getSmsCostTotal());
        assert.equal(3.75, callStringTotal.getTotalCost());
        assert.equal(0.00, callStringTotal.getCallCostTotal());

    })

    it("Should return a warning level class if a warning level(orange) is reached.", ()=>{


        var callStringTotal = textBillTotal();
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')

       
        assert.equal("warning", (callStringTotal.getWarningLevel()));
    })

    it("Should return a danger level class if a critical level(red) is reached.", ()=>{

           
           var callStringTotal = textBillTotal();
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
   
          
           assert.equal("danger", (callStringTotal.getCriticalLevel()));
       })

    it("Should be able to set the warning and critical level.", ()=>{
        var callStringTotal = textBillTotal();
        callStringTotal.getWarningLevel(30.00);
        callStringTotal.getCriticalLevel(50.00);

      
       })
    
});