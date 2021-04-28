describe("Test textBill that takes sms or call and return the amount and return an updated amount as more strings are added", ()=>{
    it("Should take a string call and return the total of 5 calls.", ()=>{

        var callStringTotal = textBillTotal();
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('0')
        
        console.log(callStringTotal.getTotalCost())
        
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

        // console.log(callStringTotal.getTotalCost());
        
        assert.equal(3.75, callStringTotal.getSmsCostTotal());
        assert.equal(3.75, callStringTotal.getTotalCost());
        assert.equal(0.00, callStringTotal.getCallCostTotal());

    })

    it("Should return a warning level class if a warningLevel(orange) is reached.", ()=>{

     //   let textBill = textBillTotal();

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

    it("Should return a danger level class if a criticalLevel(red) is reached.", ()=>{

        //   let textBill = textBillTotal();
   
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
    
})