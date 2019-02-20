var MIN_RANDOM_NUMBER = -100;
var MAX_RANDOM_NUMBER = 100;

var MIN_DELAY = 0;
var MAX_DELAY = 10000;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function subscribe(cb) {
  var timeoutID;

  function pushRandomNumber() {
    var delay = Math.round(getRandomNumber(MIN_DELAY, MAX_DELAY));

    timeoutID = setTimeout(function () {
      cb(getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER));

      pushRandomNumber();
    }, delay);
  }

  function unsubscribe() {
    clearTimeout(timeoutID);
  };

  pushRandomNumber();

  return unsubscribe;
}

exports.subscribe = subscribe;
