function logger(){
  // print the current date each time it is invoked
  console.log(new Date().toString());
}

// Emulating event triggered by users interaction that uses logger as event handler
// function emulateUserEvent(){
//   var interval = setInterval(logger, 100);

//   // In order to avoid being called infinitely,
//   // let's clear the interval after 2000ms this emulating end of user interaction
//   setTimeout(function(){
//     clearInterval(interval)
//   },2000)
// }

// emulateUserEvent()



// Debouncing

function debounce(fn, wait){
  var timeout;
  var debounced = function(){
    var args = arguments, context = this;

    function later(){
      fn.call(context, args)
    }

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }

  return debounced
}
// get the debounced version of logger
var debouncedLogger = debounce(logger, 500)

// emulating event triggered by user interaction that uses debouncedLogger as event handler
function emulateDebouncedUserEvent(){
  var interval = setInterval(debouncedLogger, 100)

  // in order to avoid being called infinitely,
  // lets clear the interval after 2000ms this emulating end of user interaction

  setTimeout(function(){
    clearInterval(interval)
  }, 2000)
}


emulateDebouncedUserEvent()