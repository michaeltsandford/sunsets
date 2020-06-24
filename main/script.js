
    
    let initialise = true;
    

    let timeNow = new Date();




    let hUTC = timeNow.getUTCHours();
    let mUTC = timeNow.getUTCMinutes();



  
    let startDiff;
   

    function configTiming (city) {
        console.log('MAIN SCRIPT CHECKING TIMES')
        startDiff = 1441;
        setTimes()

        //start = nativeTimes[0]
       // console.log(start)

        city = currentCheck(city)


        return city

    }











//var city = {url:"http://197.188.144.196:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER"};



let canvasGradient = document.getElementById('canvasGradient');

// canvasGradient.width  = window.innerWidth;
// canvasGradient.height = window.innerHeight;
canvasGradient.width  = window.outerWidth;
canvasGradient.height = window.innerHeight;


$(function(){
	resizeCanvas();
});

$(window).on('resize', function(){
    resizeCanvas();
});

function resizeCanvas()
{
    var gradientCanvas = $('#canvasGradient');
    gradientCanvas.css("width", $(window).width());
    gradientCanvas.css("height", $(window).height());
}



// function fitToContainer(canvas){
//     canvas.style.width='100%';
//     canvas.style.height='100%';
//     canvas.width  = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;
//   }

// fitToContainer(canvasGradient)




function getStream(city){


    // configTiming(city);




        



    //   currentCheck()

        // do whatever you like here
        console.log('INIT', initialise)

        //currentCheck()

        let proxyUrl = 'https://pure-crag-66869.herokuapp.com/';
        var proxiedURL = (proxyUrl + city.url);


        let formatCheck = city.url.endsWith("mjpg");

        if(city.url.endsWith("mjpeg") == true) {
            formatCheck = true;
        }

        if(city.url.endsWith("COUNTER") == true) {
            formatCheck = true;
        }
        


        if (formatCheck == true) {
            //console.log('MJPG Stream');

            function getMJPEG () {

            var imgMJPEG = new Image(),
            srcMJPEG = proxiedURL;
            imgMJPEG.onload = function() {
                test(imgMJPEG.src)
                }
                // check if //domain.com or http://domain.com is a different origin
                
            imgMJPEG.crossOrigin = "anonymous"; // or "use-credentials"
                
            imgMJPEG.src = srcMJPEG;
                
            }
                
            getMJPEG();



        
        }
        else if (formatCheck != true) {
            //console.log('Non MJPG Stream');

            var xhr = new XMLHttpRequest();


            //var proxyUrl = 'https://pure-crag-66869.herokuapp.com/';
            //var targetUrl = city.url;
            //var targetUrl = 'http://47.206.153.88/mjpg/video.mjpg';
            var proxiedURL = (proxyUrl + city.url);
            // Use PlaceKitten as a sample image to avoid complicating
            // this example with cross-domain issues.
            xhr.open( "GET", proxiedURL, true );

            // Ask for the result as an ArrayBuffer.
            xhr.responseType = "arraybuffer";



            xhr.onload = function( e ) {
                // Obtain a blob: URL for the image data.

                var arrayBufferView = new Uint8Array( this.response );
                var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
                var urlCreator = window.URL || window.webkitURL;
                var imgUrl = urlCreator.createObjectURL( blob );
                // var imgC = document.querySelector( "#photo" );
                // imgC.src = imgUrl;

                xhr = null;
                blob = null;
                imgUrl.onload = test(imgUrl);
            }

            xhr.send();
        
        }



        //let img = imgPT;  
        //let image = img;

        function test(imgUrl) {

        //var img = imgPT;  
        //var image  = img;
        var canvasTop = document.getElementById("canvasTop")
        var canvasBot = document.getElementById("canvasBot")

        // canvas.width  = img.width;
        // canvas.height = img.height;
        //canvas.width  = 500;
        //canvas.height = 300;

        //w = (img.width + 0);
        //h = (img.height + 0);

        var ctxT = canvasTop.getContext("2d");
        var ctxB = canvasBot.getContext("2d");
        var imgI = new Image;

        imgI.onload = function(){

            canvasBot.width = 300
            canvasBot.height = 300
            canvasTop.width = 300
            canvasTop.height = 300

            imgI.height = canvasTop.height
            imgI.width = canvasTop.width


            ctxT.filter = `saturate(${city.satTop}%) contrast(${city.conTop}) hue-rotate(${city.hueTop}deg) brightness(${city.brTop})`;
            ctxT.drawImage(imgI, city.topX, city.topY, city.topW, city.topH, 0 , 0 , canvasTop.width ,canvasTop.height);

            ctxB.filter = `saturate(${city.satTop}%) contrast(${city.conTop}) hue-rotate(${city.hueTop}deg) brightness(${city.brTop})`;
            ctxB.drawImage(imgI, city.botX, city.botY, city.botW, city.botH, 0 , 0 , canvasBot.width ,canvasBot.height);
            


            convert(findColor);
        }
        imgI.crossOrigin = "anonymous";
        imgI.src = imgUrl;

        function convert(callback) {
            var dataTop = canvasTop.toDataURL('image/jpeg', 0.5);
            let dataBot = canvasBot.toDataURL('image/jpeg', 0.5);

            dataBot.onload = callback(dataTop, dataBot)

            return dataTop

        }

    

    
 

        //convert(findColor);








        //grab the context from your destination canvas


        //call its drawImage() function passing it the source canvas directly

        function findColor(dataTop, dataBot){



        (function () { // Begin scoping function

            function rgb2hex(red, green, blue) {
                var rgb = blue | (green << 8) | (red << 16);
                return '#' + (0x1000000 + rgb).toString(16).slice(1)
            }


            let hexaTop;
            hexaTop = 'INIT';

            let hexaBot;
            hexaBot = 'INIT'

            const colorThief = new ColorThief();
            let imgTop = new Image();
            let imgBot = new Image();

            //let imgTest = new Image();
            imgTop.src = dataTop;
            imgBot.src = dataBot;




            

            function check() {
            let rgbColourTop = colorThief.getColor(imgTop);
            let rgbColourBot = colorThief.getColor(imgBot);

            let rT = parseInt(rgbColourTop[0].toString());
            let gT = parseInt(rgbColourTop[1].toString());
            let bT = parseInt(rgbColourTop[2].toString());

            let rB = parseInt(rgbColourBot[0].toString());
            let gB = parseInt(rgbColourBot[1].toString());
            let bB = parseInt(rgbColourBot[2].toString());


            hexaTop = rgb2hex(rT,gT,bT);

            hexaBot = rgb2hex(rB,gB,bB);


            console.log('Top =',hexaTop);
            console.log('Bot =',hexaBot);
            
            
            buildGradient(hexaTop, hexaBot);
            //imgTop = null;
            //imgBot = null;

            };

            imgBot.onload = check;

            // let imageURL = 'http://182.76.100.18:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&' + new Date().getTime();
            // let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

            // imgTop.crossOrigin = 'Anonymous';
            // imgTop.src = googleProxyURL + encodeURIComponent(imageURL);

            //console.log('Undefined')



            
        })(); 

    }

    function buildGradient(hexaTop, hexaBot) {
    //console.log('begin Build')
    var c = document.getElementById("canvasGradient");
    var gtx = c.getContext("2d");

    var gradientW = canvasGradient.width;
    var gradientH = canvasGradient.height;

    // Create gradient
    var grd = gtx.createLinearGradient(0,0,0,gradientH);
    grd.addColorStop(0,hexaTop);
    grd.addColorStop(1,hexaBot);

    // Fill with gradient
    gtx.fillStyle = grd;
    gtx.fillRect(0,0,gradientW,gradientH);

    let loadImage = document.getElementById('loadImage');
    let wrapper = document.getElementById('wrapper');

    function showGradient() {
        loadImage.style.display = 'none'
        wrapper.style.display = 'none'
        canvasGradient.style.display = 'block';
        initialise = false;
        console.log('SHOW GRADIENT')
    }

    if (initialise == true) {
        showGradient()

    }
    else {
        console.log('GRADIENT VISIBLE')
    }
    


    }



    
    
}



}


function fullscreen() {

    var el = document.getElementById('canvasGradient');
  
    // Supports most browsers and their versions.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen 
    || el.mozRequestFullScreen || el.msRequestFullScreen;

  
    if (requestMethod) {
  
      // Native full screen.
      requestMethod.call(el);
  
    } else if (typeof window.ActiveXObject !== "undefined") {
  
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
  
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }



let city = 0;


function sunsets(city) {

city = configTiming(city)




if (city != 0) {
    console.log('CITY SELECTED ==', city.name,'---',timeNow.getHours(),':',timeNow.getMinutes())
    getStream(city);
    console.log('WAITING')
          canvasGradient.addEventListener("click",fullscreen)
    setTimeout(function() { sunsets(city); }, 12000);
}
else {
    canvasGradient.style.display = 'none';
    noStream();
    setTimeout(function() { sunsets(city); }, 45000);
}




}

