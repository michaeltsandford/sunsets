
let cities = {

    kingman : {name: 'Kingman', url:"http://47.206.153.88:80/mjpg/video.mjpg", lat: 35.17, lon: -114.05, sunstart: 0, sunset: 0,  buffer: -120,  period: 180, topX: 50, topY: 0, topW: 50, topH: 50, botX: 50, botY: 300, botW: 50, botH: 50, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 180, conBot : 1, hueBot : 0, brBot : 1.1}
    ,
    makawao : {name: 'Makawao', url:"http://72.234.41.178:50000/mjpg/video.mjpg", lat: 20.86, lon: -156.31, sunstart: 0, sunset: 0, buffer: -20, period: 100, topX: 0, topY:30, topW: 30, topH: 30, botX: 0, botY: 270, botW: 30, botH: 30, satTop : 160, conTop : 1.1, hueTop : 0, brTop : 1, satBot : 150, conBot : 1, hueBot : 0, brBot : 1.1}
    ,
    yilan : {name: 'Yilan', url:"http://140.111.180.116:90/GetImage.cgi?CH=0?", lat: 24.70, lon: 121.74, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 600, topY: 0, topW: 30, topH: 30, botX: 445, botY: 140, botW: 30, botH: 30, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 180, conBot : 1, hueBot : 0, brBot : 1.1}
    ,
    bangkok : {name: 'Bangkok', url:"http://61.91.61.114:8080/cgi-bin/camera?resolution=640&amp;quality=1&amp", lat: 13.76, lon: 100.50, sunstart: 0, sunset: 10, buffer: 40, period: 60, topX: 610, topY: 0, topW: 30, topH: 30, botX: 610, botY: 80, botW: 30, botH: 30, satTop : 210, conTop : 1.2, hueTop : 0, brTop : 1, satBot : 250, conBot : 1.2, hueBot : 0, brBot : 1}
    ,
    moscow : {name: 'Moscow', url:"http://46.38.98.114:90/mjpg/video.mjpg", lat: 55.76, lon: 37.62, sunstart: 0, sunset: 10, buffer: -20, period: 100,  topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,
    dakNong : {name: 'Dak Nong', url:"http://46.38.98.114:90/mjpg/video.mjpg", lat: 11.83, lon: 107.97, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,// 	GMT+07:00
    amsterdam : {name: 'Amsterdam', url:"http://77.161.83.197:88/-wvhttp-01-/GetOneShot?image_size=640x480&", lat: 52.37, lon: 4.89, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,//	GMT+01:00
    chisinau : {name: 'Chisinau', url:"http://89.37.47.203/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&", lat: 47.00, lon: 28.86, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,//  GMT +02:00
    saarlouis : {name: 'Saarlouis', url:"http://46.165.145.199:91/oneshotimage1?", lat: 49.31, lon: 6.75, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,//  GMT +01:00
    hannover : {name: 'Hannover', url:"http://77.20.243.28/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: 52.37, lon: 9.73, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,//  GMT +01:00
    amsterdamB : {name: 'Amsterdam', url:"http://84.28.88.219:8081/mjpg/video.mjpg", lat: 52.37, lon: 4.89, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,// better
    derio : {name: 'Derio', url:"http://212.8.110.23/-wvhttp-01-/GetOneShot?", lat: 43.30, lon: -2.88, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,
 //   agropoli : {name: 'Agropoli', url:"http://195.32.73.199/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&", lat: 40.35, lon: 15.00, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
 //   ,// GMT +01:00
    linz : {name: 'Linz', url:"http://78.132.64.197:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&", lat: 48.31, lon: 14.29, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,//GMT +01:00
    litomysl : {name: 'Litomysl', url:"http://160.218.213.194:8080/snap.jpg?JpegSize=S&JpegCam=1&", lat: 49.87, lon: 16.31, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,//GMT+01:00
    gaziantep : {name: 'Gaziantep', url:"http://78.166.176.191:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&", lat: 37.06, lon: 37.38, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,// GMT+02:00
    //coloradoSpr : {name: 'Colorado Springs', url:"http://71.211.13.197/mjpg/video.mjpg", lat: 38.83, lon: -104.82, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    //,// GMT-07:00
    houston : {name: 'Houston', url:"http://166.168.156.194:81/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: 29.76, lon: -95.36, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,// GMT-06:00
    swakopmund : {name: 'Swakopmund', url:"http://197.188.144.196:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: -22.68, lon: 14.53, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,// GMT+02:00
    tokyo : {name: 'Tokyo', url:"http://218.45.173.232:8000/cgi-bin/camera?resolution=640&amp;quality=1&amp;Language=0&amp", lat: 35.69, lon: 139.70, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,// GMT+9
    mtLaurel : {name: 'Mount Laurel', url:"http://50.227.41.1:80/mjpg/video.mjpg", lat: 39.95, lon: -74.92, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,// GMT+02:00
    metallostroy : {name: 'Metallostroy', url:"http://94.72.9.182:80/mjpg/video.mjpg", lat: 59.80, lon: 30.55, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,// GMT+02:00
    auckland : {name: 'Auckland', url:"http://103.37.205.23:8000/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: -36.87, lon: 174.77, sunstart: 0, sunset: 10, buffer: 55, period: 60, topX: 300, topY: 10, topW: 30, topH: 30, botX: 30, botY: 202, botW: 20, botH: 20, satTop : 300, conTop : 1, hueTop : 0, brTop : 1, satBot : 300, conBot : 1.3, hueBot : -20, brBot : 1}
    ,// GMT+13 // XY DONE
    kona : {name: 'Kona', url:"http://24.43.239.50:80/mjpg/video.mjpg", lat: 19.64, lon: -155.99, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,// GMT-10:00
    dortmund : {name: 'Dortmund', url:"http://87.139.9.247:80/mjpg/video.mjpg", lat: 51.51, lon: 7.47, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,// GMT+1
    tallinn : {name: 'Tallinn', url:"http://37.157.69.234:8000/-wvhttp-01-/GetOneShot?image_size=640x480&", lat: 59.44, lon: 24.75, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1}
    ,// GMT+2
    sierre : {name: 'Sierre', url:"http://213.221.142.195:8888/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", lat: 46.29, lon: 7.54, sunstart: 0, sunset: 10, buffer: -20, period: 100, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1},
    // GMT+1
    kristiansund : {name: 'Kristiansund', url:"http://85.93.226.222:8082/mjpg/video.mjpg", lat: 63.11, lon: 7.72, sunstart: 0, sunset: 10,  buffer: -30,  period: 180, topX: 250, topY: 0, topW: 30, topH: 30, botX: 500, botY: 140, botW: 20, botH: 20, satTop : 160, conTop : 1, hueTop : 0, brTop : 1.1, satBot : 240, conBot : 1.2, hueBot : -20, brBot : 1},
    // XY DONE
    };
