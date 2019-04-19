//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arguments) {
  return fn.call(thisValue, arguments);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copyFun =  functionToBeCopied.bind(thisValue);
    return copyFun;
}
