let logger = () => {
  console.log(new Date().toString())
}

let debounce = function (fn, wait) {
  let timeout;


  var debounced = function () {
    let later = () => {
      fn.call()
    }

    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, wait)
  }

  return debounced
}

var debouncedLogger = debounce(logger, 400)

let emulateDebouncedUserEvent = () => {
  var interval = setInterval(debouncedLogger, 100)


  setTimeout(function () {
    clearInterval(interval)
  }, 2000)
}

// debouncedLogger()


emulateDebouncedUserEvent()

