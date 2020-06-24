
    //////////////////////////////////
    
    function checkTimes (stream) {
    
        let calcPrint = SunCalc.getTimes(new Date(), stream.lat, stream.lon);
        let timePrint = calcPrint.sunset;
      
        let calc = SunCalc.getTimes(new Date(), stream.lat, stream.lon);
        let times = calc.sunset;
      
        let utcTimes = (times.getUTCHours()) + ':' + (times.getUTCMinutes());
      
        let nativeTimes = (times.getHours()) + ':' + (times.getMinutes());
    
        function periodTime(sunsettime, minutes) {
          return new Date( sunsettime - minutes * 60000 );
        }
      
        function bufferTime(sunsettime, minutes) {
          return new Date(sunsettime.getTime() + minutes * 60000);
        }
      
        function utcString (time){
          return utcFrame = (time.getUTCHours()) + ':' + (time.getUTCMinutes());
        }
    
        function nativeString (time){
            return utcFrame = (time.getHours()) + ':' + (time.getMinutes());
          }
      
      
        let timeStart = periodTime(timePrint, stream.period) 
        let timeEnd = bufferTime(timePrint, stream.buffer)
      
        let utcStart = utcString(timeStart);
        let utcEnd = utcString(timeEnd);
    
        let nativeStart = nativeString(timeStart);
        let nativeEnd = nativeString(timeEnd);
      
      
     //   console.log(stream.name,utcStart,'-',utcEnd,'(',utcTimes,')')
        //let timeEnd = new Date( timePrint - ((10)) * 60000 );
        console.log(stream.name,nativeStart,'-',nativeEnd,'(',nativeTimes,')')
      
        //console.log(startUTC)
      
      
        stream.sunstart = times.getUTCHours() * 60 + times.getUTCMinutes() - stream.period;
        stream.sunset =  times.getUTCHours() * 60 + times.getUTCMinutes() + stream.buffer;
      
        
        xEntry = (stream.sunstart+((stream.period+stream.buffer)*0.3));
        if (xEntry >= 1359){
          stream.midTime = xEntry - 1440
        }
        else if (xEntry <= 0){
          stream.midTime = xEntry + 1440
        }
        else {
          stream.midTime = xEntry
        }


        return nativeEnd

      }
    
    
 
    
    function noStream() {
            city = 0;
            console.log('NO STREAM FOUND - ',timeNow.getHours(),':',timeNow.getMinutes())
            let loadImage = document.getElementById('loadImage');
            let wrapper = document.getElementById('wrapper');
            let canvasGradient = document.getElementById('canvasGradient');
            document.getElementById('loadImage').src = "/images/joon.gif";
            loadImage.style.display = ''
            wrapper.style.display = ''
            canvasGradient.style.display = 'none';
            initialise = true;


            
         }
     
      
      //////////////////////////////////
      
      function timeCheck(stream){
        timeNow = new Date();
        let start = stream.sunstart;
        let now = timeNow.getUTCHours() * 60 + timeNow.getUTCMinutes();
        let end =  stream.sunset

      
      
        if(end < start && now < start){
            start -= 24*60; 
        
            if(start <= now && now <= end){
              return true;
            }
            else {
              return false;
            }
            
        }
        else if(start > end){
            end+=24*60;
            if(start <= now && now <= end){
              return true;
            }
            else {
              return false;
             }
        }
      
        else if(start <= now && now <= end) {
          return true
        }

        else {
          return false
         }
      
        }
      





      
      function currentCheck(city){
        
        timeNow = new Date();
        
      
      
        if (city != 0){
          console.log('CHECKING CURRENT CITY')
          if ((timeCheck(city)) == true){
              console.log('STILL VALID')
              return city
          }
          else {
              console.log(city,'NOT VALID')
              city = 0;
              city = findClosest();
              return city
          }
        }
        ////FULL CHECK ///////
        else {
          console.log('NO CURRENT CITY')
//          findClosest();
          city = findClosest();
          return city

        }
      
      
      }



    
    function timeDiff(stream) {
 
    timeNowdiff = new Date();

    let startD = stream.sunstart;
   
    let nowD = timeNowdiff.getUTCHours() * 60 + timeNowdiff.getUTCMinutes();
    //let nowD = 1439;

    let endD =  stream.sunset


    if(stream.sunset < stream.sunstart && nowD < stream.sunstart){
        stream.startDM = stream.sunstart - (24*60); 
    
        if(stream.startDM <= nowD && nowD <= stream.sunset){

          checkDiff = Math.abs(stream.startDM - nowD)
          stream.timeDiff = checkDiff;

          if (checkDiff <= startDiff) {

            startDiff = checkDiff;
            console.log(stream.name, '=====', startDiff)
            cityTBA = stream;
            }

            }

     }
        

    else if(stream.sunstart > stream.sunset && nowD > stream.sunstart){
        stream.endDM = stream.sunset + (24*60);
    
        if(stream.sunstart <= nowD && nowD <= stream.endDM){
          checkDiff = Math.abs(stream.sunstart - nowD)

          stream.timeDiff = checkDiff;

          if (checkDiff <= startDiff) {

            startDiff = checkDiff;
            console.log(stream.name, '=====', startDiff)
            cityTBA = stream;
            }

        }
    }
  


    else if(stream.sunstart <= nowD && nowD <= stream.sunset) {
      
     checkDiff = Math.abs(stream.sunstart - nowD)

      stream.timeDiff = checkDiff;

      if (checkDiff <= startDiff) {
        
        
        startDiff = checkDiff;
        console.log(stream.name, '=====', startDiff)
        cityTBA = stream;
        }

    }
 
    else if(stream.sunstart <= 0 && nowD > stream.sunset) {
        nowDM = nowD - 1440
        if(stream.sunstart <= nowDM && nowDM <= stream.sunset){
            
            checkDiff = Math.abs(stream.sunstart- nowDM)

            stream.timeDiff = checkDiff;

            if (checkDiff <= startDiff) {
                
                startDiff = checkDiff;
                console.log(stream.name, '=====', startDiff)
                cityTBA = stream;
                }
        }
    }



    // else {
    //   cityTBA = 1441;
    //   //city = cities.auckland;

    //  }
 }
  




 
    function setTimes() {
    console.log('SETTING TIMES')
    for (let key in cities){
      checkTimes(cities[key]);
    }
    
    }



let cityTBA


    function findClosest() {
    console.log('FINDING CLOSEST')
    cityTBA = 0;
    for (let key in cities){
      let stream = cities[key]
      timeDiff(stream)
    }
    if (cityTBA !== 0) {
         city = cityTBA;
    }
    else {
        city = 0;
   }

    // else{
    //     city = 0;
    // }
        
  
 
  //      getStream(city);


    return city
    }
    
    
    

