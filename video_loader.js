/* 
Author: Md Soliman Faragy
Email: solimankhulna@gmail.com
Codepen Link: https://codepen.io/sfaragy/pen/WNjwRBO
This scripts will help you to add youtube video in your website without loading time. Normally it will load one of the video image at the loaing time of the page 
which will show the image like youtube video. But originally it's image and icon of youtube. Once people click on the video to play it will load the video. 
This way you can improve your loading time

*/


( function() {

            var youtube = document.querySelectorAll( ".youtube" );
            
            for (var i = 0; i < youtube.length; i++) {
                
                var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/0.jpg";
                        
                var image = new Image();
                        image.src = source;
                        image.addEventListener( "load", function() {
                            youtube[ i ].appendChild( image );
                        }( i ) );
                
                        youtube[i].addEventListener( "click", function() {

                            var iframe = document.createElement( "iframe" );

                                    iframe.setAttribute( "frameborder", "0" );
                                    iframe.setAttribute( "allowfullscreen", "" );
                                    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

                                    this.innerHTML = "";
                                    this.appendChild( iframe );
                        } );    
            };
            
        } )();
