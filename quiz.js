console.log('whatever')


function begin() {
  console.log("begin");
}
begin();


function echo(x) {
  console.log(x);
}
echo('hello');


function math(x, y, z) {
  let add = x + y;
  let answer = add * z;
  console.log(answer)
}
math(6, 4, 9);


function toString(array) {
  let string = array.join('');
  console.log(string);
}
toString(['here ', 'is ', 'my ', 'string.']);


function callme(callback) {
  console.log('first from callme')

  function callback() {
    console.log('second from callme');
  }
  callback();
}
callme();


function callme2(callback) {
  console.log('first from callme2')

  function callback(hello) {
    console.log('second from callme2');
    console.log(hello);
  }
  callback('hello in param of callme2');
}
callme2();


function reverse(word) {
  word = word.split('').reverse().join('');

  console.log(word);
}
reverse('Reverse Me');


function sleep() {
  setTimeout(function() {
    console.log('before sleep "loop"')
  }, 1000);
  setTimeout(function() {
    console.log('after sleep "loop"')
  }, 2000)

}
sleep();
