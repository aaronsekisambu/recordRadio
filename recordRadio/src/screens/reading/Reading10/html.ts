export const HTML = `
  <!DOCTYPE html>\n
  <html>
    <head>
      <title>Alerts</title>
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=320, user-scalable=no">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


      *{
        font-family: 'Poppins', sans-serif;
      }
      
      body{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #131313;
        color: white;
      }
      
      .container{
        position: relative;
      }
      .player {
        display: flex;
        justify-content: center;
        align-item: center;
        position: relative;
        margin-top: 40px;
        .plays{
            width: 90px;
            height: 90px;
            font-size: 30px;
            border-radius: 500px;
            border: 2px solid white;
            color: white;
            background-color: black;
        }
        .play {
            color: white;
        }
        .pause {
            color: white;
        }
      }
      .rec-logo {
        width: 25px;
        height: 25px;
        padding: 30px;
        opacity: .6;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
      .prog-line{
        color: white;
        text-align: center;
        padding-top: 15px;
      }
      </style>
    </head>
    <body>
    <div class="wrapper">
    <div class="container">
    
    <img src="https://res.cloudinary.com/dchunophk/image/upload/v1693127790/uckg_help_yhbunm.gif">
</div>
        <audio id="player" autoplay>
        <source src="https://eu1.reliastream.com/proxy/recordfm977?mp=/stream.mp3" type="audio/mpeg"/>
        </audio>
        <div class="player"> 
        <img class="rec-logo" src="https://res.cloudinary.com/dchunophk/image/upload/v1628367473/Record-App-Logo-512_pwpvnz.png">
        <button  class="plays" class="play onclick="playPause"><i id=controls class="fa fa-solid fa-pause"></i></button>
        <img class="rec-logo" src="https://res.cloudinary.com/dchunophk/image/upload/v1628367473/Record-App-Logo-512_pwpvnz.png">
        </div>
        <div class="prog-line">Record FM <br> <span>97.7 </span></div>
      <p id="demo"></p>    
      <script>
        var track = document.getElementById('player');

        var controlBtn = document.getElementById('controls');
        
        function playPause() {
            if (track.paused) {
                track.play();
                controlBtn.className = "fa fa-solid fa-pause pause";
            } else { 
                track.pause();
                controlBtn.className = "fa fa-solid fa-play play";
            }
        }
        controlBtn.addEventListener("click", playPause);
        track.addEventListener("ended", function() {
          controlBtn.className = "play";
        });
      </script>
    </body>
  </html>
  `;
