import styled from "styled-components";

const preloaderParent = styled.div` 

#preloader {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
}
#preloader.hide{
    width: 0%;
    transition-delay: 0.26s;
}
#preloader:before,
#preloader:after{
    content: '';
    width:  100%;
    height: 100%;
    position: fixed;
    left: 0;
    top:  0;
    z-index: 4;
    background-color: #000000;
    transition: 1s cubic-bezier(.858, .01, .068, .99);
}
#preloader:after{
    background: #59815b;
    mix-blend-mode: difference;
    transition-delay: 0.13s;
    z-index: 3;
}
#preloader.hide:before,
#preloader.hide:after{
    -webkit-transform: translateX(-105%);
            transform: translateX(-105%);
}`;

const preLoaderWrapper = styled.div`

.loader-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
}
#preloader.hide .loader-wrap{
    opacity: 0;
    visibility: hidden;
    transition-delay: 0.18s;
}`;

const preLoaderLoader = styled.div`

.loader {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid #ffffff;
    animation: loader 2s infinite ease;
}

  
@keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    
    25% {
      transform: rotate(180deg);
    }
    
    50% {
      transform: rotate(180deg);
    }
    
    75% {
      transform: rotate(360deg);
    }
    
    100% {
      transform: rotate(360deg);
    }
}`;

const preLoaderInner = styled.div`

.loader-inner {
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color:#ffffff;
    animation: loader-inner 2s infinite ease-in;
}
  
@keyframes loader-inner {
    0% {
      height: 0%;
    }
    
    25% {
      height: 0%;
    }
    
    50% {
      height: 100%;
    }
    
    75% {
      height: 100%;
    }
    
    100% {
      height: 0%;
    }
}`;

