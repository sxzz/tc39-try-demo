function err() {
  throw new Error("This is a test error")
}

function ok() {
  return 42
}

console.info(try ok())
console.info(try err())
