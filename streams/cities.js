
let cities = {

    kingman : {name: 'Kingman', url:"http://47.206.153.88:80/mjpg/video.mjpg", lat: 35.17, lon: -114.05, sunstart: 0, sunset: 0,  buffer: -120,  period: 180, topX: 50, topY: 0, topW: 50, topH: 50, botX: 50, botY: 300, botW: 50, botH: 50, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 180, conBot : 1, hueBot : 0, brBot : 1.1},
   //cam set

    makawao : {name: 'Makawao', url:"http://72.234.41.178:50000/mjpg/video.mjpg", lat: 20.86, lon: -156.31, sunstart: 0, sunset: 0, buffer: -20, period: 100, topX: 0, topY:30, topW: 30, topH: 30, botX: 0, botY: 270, botW: 30, botH: 30, satTop : 160, conTop : 1.1, hueTop : 0, brTop : 1, satBot : 150, conBot : 1, hueBot : 0, brBot : 1.1},
   //cam set

    yilan : {name: 'Yilan', url:"http://140.111.180.116:90/GetImage.cgi?CH=0?", lat: 24.70, lon: 121.74, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 600, topY: 0, topW: 30, topH: 30, botX: 445, botY: 140, botW: 30, botH: 30, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 180, conBot : 1, hueBot : 0, brBot : 1.1},
   //cam set

    bangkok : {name: 'Bangkok', url:"http://61.91.61.114:8080/cgi-bin/camera?resolution=640&amp;quality=1&amp", lat: 13.76, lon: 100.50, sunstart: 0, sunset: 10, buffer: 30, period: 100, topX: 610, topY: 0, topW: 30, topH: 30, botX: 610, botY: 80, botW: 30, botH: 30, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 180, conBot : 1, hueBot : 0, brBot : 1.1},
   //cam set

    moscow : {name: 'Moscow', url:"http://46.38.98.114:90/mjpg/video.mjpg", lat: 55.76, lon: 37.62, sunstart: 0, sunset: 10, buffer: -20, period: 100,  topX: 760, topY: 0, topW: 30, topH: 30, botX: 710, botY: 375, botW: 30, botH: 30, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -5, brBot : 1},
   //cam set

    //dakNong : {name: 'Dak Nong', url:"http://46.38.98.114:90/mjpg/video.mjpg", lat: 11.83, lon: 107.97, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1},
    // 	GMT+07:00
    //amsterdam : {name: 'Amsterdam', url:"http://77.161.83.197:88/-wvhttp-01-/GetOneShot?image_size=640x480&", lat: 52.37, lon: 4.89, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1},
    //	GMT+01:00
    chisinau : {name: 'Chisinau', url:"http://89.37.47.203/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&", lat: 47.00, lon: 28.86, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 0, topY: 0, topW: 10, topH: 10, botX: 245, botY: 27, botW: 8, botH: 8, satTop : 190, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 260, conBot : 1.3, hueBot : -10, brBot : 0.9},
    
    //CAM SET   //  GMT +02:00
    saarlouis : {name: 'Saarlouis', url:"http://46.165.145.199:91/oneshotimage1?", lat: 49.31, lon: 6.75, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 1250, topY: 690, topW: 30, topH: 30, botX: 1220, botY: 430, botW: 20, botH: 20, satTop : 180, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.3, hueBot : -10, brBot : 0.95},
    
    //CAM SET   //  GMT +01:00
    hannover : {name: 'Hannover', url:"http://77.20.243.28/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: 52.37, lon: 9.73, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 900, topY: 2, topW: 30, topH: 30, botX: 450, botY: 200, botW: 30, botH: 30, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 260, conBot : 1.4, hueBot : -10, brBot : 0.9},
    
   //CAM SET //  GMT +01:00
    amsterdamB : {name: 'Amsterdam', url:"http://84.28.88.219:8081/mjpg/video.mjpg", lat: 52.37, lon: 4.89, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 350, topY: 50, topW: 30, topH: 30, botX: 350, botY: 450, botW: 30, botH: 30, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 260, conBot : 1.3, hueBot : -10, brBot : 1},
    // cam set

    derio : {name: 'Derio', url:"http://212.8.110.23/-wvhttp-01-/GetOneShot?", lat: 43.30, lon: -2.88, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 1, topY: 1, topW: 30, topH: 30, botX: 1, botY: 60, botW: 30, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -10, brBot : 0.9},
   //CAM SET

 //   agropoli : {name: 'Agropoli', url:"http://195.32.73.199/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&", lat: 40.35, lon: 15.00, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
 //   ,// GMT +01:00
    linz : {name: 'Linz', url:"http://78.132.64.197:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&", lat: 48.31, lon: 14.29, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 1, topY: 1, topW: 30, topH: 30, botX: 150, botY: 38, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1, satBot : 260, conBot : 1.3, hueBot : -10, brBot : 0.9},
    
    //CAM SET //GMT +01:00

    litomysl : {name: 'Litomysl', url:"http://160.218.213.194:8080/snap.jpg?JpegSize=S&JpegCam=1&", lat: 49.87, lon: 16.31, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 245, topY: 1, topW: 10, topH: 10, botX: 82, botY: 5, botW: 10, botH: 7, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 260, conBot : 1.2, hueBot : 10, brBot : 0.9},
    
    //CAM SET //GMT+01:00

   //  gaziantep : {name: 'Gaziantep', url:"http://78.166.176.191:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&", lat: 37.06, lon: 37.38, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1},
   // GMT+02:00

    //coloradoSpr : {name: 'Colorado Springs', url:"http://71.211.13.197/mjpg/video.mjpg", lat: 38.83, lon: -104.82, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    //,// GMT-07:00


    houston : {name: 'Houston', url:"http://166.168.156.194:81/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: 29.76, lon: -95.36, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 580, topY: 1, topW: 30, topH: 30, botX: 710, botY: 400, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1, satBot : 240, conBot : 1.3, hueBot : -10, brBot : 1},
    //CAM SET // GMT-06:00


    tokyo : {name: 'Tokyo', url:"http://218.45.173.232:8000/cgi-bin/camera?resolution=640&amp;quality=1&amp;Language=0&amp", lat: 35.69, lon: 139.70, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 270, topY: 1, topW: 30, topH: 30, botX: 305, botY: 165, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -10, brBot : 0.9},
    //CAM SET // GMT+9
    mtLaurel : {name: 'Mount Laurel', url:"http://50.227.41.1:80/mjpg/video.mjpg", lat: 39.95, lon: -74.92, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 5, topY: 5, topW: 30, topH: 30, botX: 990, botY: 370, botW: 30, botH: 30, satTop : 190, conTop : 1.1, hueTop : 0, brTop : 1, satBot : 250, conBot : 1.4, hueBot : -20, brBot : 1},
    //CAM SET // GMT+02:00
    metallostroy : {name: 'Metallostroy', url:"http://94.72.9.182:80/mjpg/video.mjpg", lat: 59.80, lon: 30.55, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 730, topY: 30, topW: 30, topH: 30, botX: 90, botY: 190, botW: 30, botH: 30, satTop : 180, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 260, conBot : 1.3, hueBot : -10, brBot : 0.9},
    // GMT+02:00 //CAM SET

    auckland : {name: 'Auckland', url:"http://103.37.205.23:8000/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: -36.87, lon: 174.77, sunstart: 0, sunset: 10, buffer: 55, period: 60, topX: 300, topY: 10, topW: 30, topH: 30, botX: 30, botY: 202, botW: 20, botH: 20, satTop : 300, conTop : 1, hueTop : 0, brTop : 1, satBot : 300, conBot : 1.3, hueBot : -20, brBot : 1},
    // GMT+13 // XY DONE

    kona : {name: 'Kona', url:"http://24.43.239.50:80/mjpg/video.mjpg", lat: 19.64, lon: -155.99, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1},
    //NOT SET
    // GMT-10:00
    dortmund : {name: 'Dortmund', url:"http://87.139.9.247:80/mjpg/video.mjpg", lat: 51.51, lon: 7.47, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 0, topY: 35, topW: 30, topH: 30, botX: 100, botY: 280, botW: 30, botH: 30, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 210, conBot : 1.2, hueBot : 0, brBot : 1},// GMT+1
   //CAM SET

    tallinn : {name: 'Tallinn', url:"http://37.157.69.234:8000/-wvhttp-01-/GetOneShot?image_size=640x480&", lat: 59.44, lon: 24.75, sunstart: 0, sunset: 10, buffer: -180, period: 350, topX: 730, topY: 1, topW: 30, topH: 30, botX: 550, botY: 190, botW: 30, botH: 30, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -10, brBot : 0.9},
    
    //CAM SET // GMT+2
  
    sierre : {name: 'Sierre', url:"http://213.221.142.195:8888/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: 46.29, lon: 7.54, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 350, topY: 1, topW: 30, topH: 30, botX: 450, botY: 150, botW: 30, botH: 30, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 260, conBot : 1.3, hueBot : -10, brBot : 0.9},
    //CAM SET // GMT+1
  
    kristiansund : {name: 'Kristiansund', url:"http://85.93.226.222:8082/mjpg/video.mjpg", lat: 63.11, lon: 7.72, sunstart: 0, sunset: 10,  buffer: 0,  period: 180, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1},
    // XY DONE
   
    kamen : {name: 'Kamen Na Obi', url:"http://109.248.235.90:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&", lat: 53.79, lon: 81.34, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 80, topY: 2, topW: 30, topH: 30, botX: 800, botY: 150, botW: 30, botH: 30, satTop : 160, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 260, conBot : 1.4, hueBot : -10, brBot : 0.9},
   //GMT +6
  
   udine: {name: 'Udine', url:"http://188.12.60.168:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: 46.06, lon: 13.24, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 250, topY: 2, topW: 30, topH: 30, botX: 130, botY: 220, botW: 30, botH: 30, satTop : 160, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 260, conBot : 1.3, hueBot : -20, brBot : 0.9},
   //GMT +1
   
   meguro : {name: 'Meguro Ku', url:"http://115.179.100.76:8080/SnapshotJPEG?Resolution=640x480&amp;Quality=Clarity&amp", lat: 35.63, lon: 139.68, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 160, topY: 2, topW: 30, topH: 30, botX: 490, botY: 50, botW: 30, botH: 30, satTop : 160, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 260, conBot : 1.3, hueBot : 0, brBot : 0.9},
   //GMT +9
   
   liyama : {name: 'Liyama', url:"http://220.254.144.230:50000/cgi-bin/camera?resolution=640&amp;quality=1&amp;Language=0&", lat: 36.85, lon: 138.37, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 605, topY: 2, topW: 30, topH: 30, botX: 300, botY: 160, botW: 30, botH: 30, satTop : 160, conTop : 1.3, hueTop : 0, brTop : 0.95, satBot : 260, conBot : 1.3, hueBot : 0, brBot : 0.9},
   //GMT +9 
   
   amands : {name: 'Sint Amands', url:"http://188.210.92.19:80/oneshotimage1?", lat: 51.06, lon: 4.21, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 50, topY: 2, topW: 30, topH: 30, botX: 400, botY: 190, botW: 30, botH: 30, satTop : 160, conTop : 1.3, hueTop : 0, brTop : 0.95, satBot : 260, conBot : 1.3, hueBot : 0, brBot : 0.9},
   //GMT +1
  
   barcelona : {name: 'Barcelona', url:"http://81.47.179.157:8081/mjpg/video.mjpg", lat: 41.39, lon: 2.16, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 2, topY: 2, topW: 30, topH: 30, botX: 400, botY: 330, botW: 30, botH: 30, satTop : 160, conTop : 1.1, hueTop : 0, brTop : 1, satBot : 260, conBot : 1.3, hueBot : 0, brBot : 0.9},
   //GMT +1

   derby : {name: 'Derby', url:"http://95.177.20.83:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: 52.92, lon: -1.48, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 600, topY: 20, topW: 30, topH: 30, botX: 430, botY: 110, botW: 30, botH: 30, satTop : 160, conTop : 1.1, hueTop : 0, brTop : 1, satBot : 280, conBot : 1.3, hueBot : 0, brBot : 0.9},
   //GMT +0

   sochi : {name: 'Sochi', url:"http://158.58.130.149:80/mjpg/video.mjpg", lat: 43.60, lon: 39.73, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 210, topY: 0, topW: 10, topH: 10, botX: 450, botY: 25, botW: 10, botH: 10, satTop : 160, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 230, conBot : 1.2, hueBot : 0, brBot : 1},
   //GMT +3

   akersberga : {name: 'Akersberga', url:"http://193.234.156.26:8081/mjpg/video.mjpg", lat: 59.48, lon: 18.30, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 510, topY: 1, topW: 30, topH: 10, botX: 300, botY: 290, botW: 30, botH: 30, satTop : 160, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 270, conBot : 1.3, hueBot : -10, brBot : 0.95},
   //GMT +1

   saoPaulo : {name: 'Sao Paulo', url:"http://191.241.235.43/mjpg/video.mjpg", lat: -23.55, lon: -46.64, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 510, topY: 1, topW: 30, topH: 30, botX: 530, botY: 138, botW: 30, botH: 30, satTop : 160, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 240, conBot : 1.3, hueBot : 0, brBot : 1},
   //GMT -3

   garath: {name: 'Garath', url:"http://87.138.157.245/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: 51.14, lon: 6.91, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 170, topY: 1, topW: 30, topH: 30, botX: 300, botY: 140, botW: 30, botH: 30, satTop : 160, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 240, conBot : 1.3, hueBot : 0, brBot : 1},
   //GMT +1

   seattle: {name: 'Seattle', url:"http://209.206.162.229:80/mjpg/video.mjpg", lat: 47.61, lon: -122.33, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 140, topY: 4, topW: 20, topH: 20, botX: 145, botY: 40, botW: 10, botH: 10, satTop : 160, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 270, conBot : 1.4, hueBot : 0, brBot : 0.9},
   //GMT -8

   yuzhnouralSk : {name: 'YuzhnouralSk', url:"http://91.209.234.195:80/mjpg/video.mjpg", lat: 54.44, lon: 61.25, sunstart: 0, sunset: 10, buffer: 0, period: 100, topX: 350, topY: 1, topW: 20, topH: 20, botX: 900, botY: 100, botW: 30, botH: 30, satTop : 160, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 270, conBot : 1.4, hueBot : -20, brBot : 0.9}
   //GMT +5

};
