const result = (fn) => typeof fn === 'function' ? fn() : fn

export default (cond, ifTrue, ifFalse) =>
  result(cond) ? result(ifTrue) : result(ifFalse)
