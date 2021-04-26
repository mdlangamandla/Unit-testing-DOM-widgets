describe("Test calculateBill function using the available cost for billItems (call and sms)", ()=>{
    it("Should return the total cost of call/sms and take string both calls and sms.", ()=>{
        let stringTotal = totalPhoneBill();

        stringTotal.billItemType("call,sms,call,sms,call,sms,call,sms");


        assert.equal(14.00,stringTotal.getbillTotal());  

    });

    it("Should return the warnig class if a warningLevel is reached(orange).", ()=>{
        let stringTotal = totalPhoneBill();

        stringTotal.billItemType("call,sms,call,sms,call,sms,call,sms,call,sms,call,sms,call,sms,call,sms");


        assert.equal(28.00,stringTotal.getbillTotal());  

    });

    it("Should return the danger class if a criticalLevel is reached(red).", ()=>{
        let stringTotal = totalPhoneBill();

        stringTotal.billItemType("call,sms,call,sms,call,sms,call,sms,call,sms,call,sms,call,sms,call,sms,call,sms,call,sms");


        assert.equal(35.00  ,stringTotal.getbillTotal());  

    });

} )