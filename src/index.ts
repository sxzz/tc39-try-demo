function err() {
  throw new Error("This is a test error")
}

function ok() {
  return 42
}

console.info(try ok())
console.info((try ok()).ok)
console.info(try err())

const result = try JSON.parse("wtf")
console.info(result.error instanceof Error)

const result2 = try JSON.parse("[]")
console.info(result2.value)
