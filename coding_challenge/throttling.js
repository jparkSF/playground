function logger(){
  // print the current date each time it is invoked
  console.log(new Date().toString());
}

// Emulating event triggered by users interaction that uses logger as event handler
function emulateUserEvent(){
  var interval = setInterval(logger, 100);

  // In order to avoid being called infinitely,
  // let's clear the interval after 2000ms this emulating end of user interaction
  setTimeout(function(){
    clearInterval(interval)
  },2000)
}

function throttle(fn, wait){
  var nextTick = false;

  var throttled = function(){
    var args = arguments,
    context = this;
  
    function later(){
      nextTick = false;
      fn.call(context,args)
    }
    if(!nextTick){
      nextTick = setTimeout(later, wait)
    }
  
  }

  return throttled;

}

var throttledLogger = throttle(logger, 300)

function emulateThrottledUserEvent(){
  var interval = setInterval(throttledLogger, 100)

  setTimeout(function(){
    clearInterval(interval)
  },2000)
}

emulateThrottledUserEvent()