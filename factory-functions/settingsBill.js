function BillWithSettings(){
    //create variable for settingsBill
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;
    

    function setCallCost(callCost){
         theCallCost = callCost;
    }

    function getCallCost(callCost){
        return theCallCost;
   }

   function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }

    function getSmsCost(smsCost){
        return theSmsCost;
    }
//set warning Level function
    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }

    function getWarningLevel(warningLevel){
        return theWarningLevel;
    }


    //set critical Level function
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel(criticalLevel){
        return theCriticalLevel;
    }

    function makeCall(){
       
        if(!hasReachedCriticalLevel()){
            callCostTotal += theCallCost;
        }
    }
    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost(){
        return callCostTotal;
    }

    function getTotalSmsCost(){
        return smsCostTotal;
    }

    function sendSms(){
        //when sending sms if I have not reached the criticalLevel...increament the sms cost 
        if(!hasReachedCriticalLevel()){
            smsCostTotal += theSmsCost;
            
        };
    }
    //below function checks if the total cost is greater or equal to the criticalLevel
    function hasReachedCriticalLevel(){
        return getTotalCost() >= getCriticalLevel()
    }

    function totalClassName(){

        if(hasReachedCriticalLevel()){
            return "critical";
        };

        if(getTotalCost() >= getWarningLevel()){
            return "warning";
        };
    
    }

//expose functions into factory function
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName

    }
}