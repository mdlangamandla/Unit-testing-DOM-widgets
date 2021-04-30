describe("Test settings bill factory function.", ()=>{

    it("Should be able to set the sms cost.", ()=>{
        let settingsBill = BillWithSettings();
//testing smsCost of 2.00
        settingsBill.setSmsCost(2.00);     
        assert.equal(2.00, settingsBill.getSmsCost());
//different value of smsCost
        let settingsBill2 = BillWithSettings();
        settingsBill2.setSmsCost(2.50);     
        assert.equal(2.50, settingsBill2.getSmsCost());
    });

    it("Should be able to set the call cost.", ()=>{
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(20);

//testing call Cost of 5.00
        settingsBill.setCallCost(5.00);     
        assert.equal(5.00, settingsBill.getCallCost());

//testing a different value of callCost
        let settingsBill2 = BillWithSettings();
        settingsBill2.setCallCost(10.00);     
        assert.equal(10.00, settingsBill2.getCallCost());
    });

 

    //testing both sms and calls

    it("Should be able to set the sms and call cost.", ()=>{
        let settingsBill = BillWithSettings();
//testing callCost of 5.00 and smsCost of 2.00
        settingsBill.setCallCost(5.00);                                                        
        settingsBill.setSmsCost(2.00); 

        assert.equal(5.00, settingsBill.getCallCost());
        assert.equal(2.00, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(5.75);                                                        
        settingsBill2.setSmsCost(2.50);

        assert.equal(5.75, settingsBill2.getCallCost());
        assert.equal(2.50, settingsBill2.getSmsCost());
    });

    it("Should be able to set the warning level(orange).", ()=>{
        let settingsBill = BillWithSettings();
        
    //testing warning level 

        settingsBill.setWarningLevel(10);

        assert.equal(10, settingsBill.getWarningLevel());
    });

    //testing critical level 
    it("Should be able to set the critical level(red).", ()=>{
        let settingsBill = BillWithSettings();
        


        settingsBill.setCriticalLevel(20);

        assert.equal(20, settingsBill.getCriticalLevel());
    });

    //
    it("Should be able to set the warning and critical level.", ()=>{
        let settingsBill = BillWithSettings();
        
//testing warning and critical level

        settingsBill.setWarningLevel(10);
        settingsBill.setCriticalLevel(20);

        assert.equal(10, settingsBill.getWarningLevel());
        assert.equal(20, settingsBill.getCriticalLevel());
    });

})

