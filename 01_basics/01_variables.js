const accountId = 14538
let accountEmail = "abc@jkdjfd.com"
var accountPassword = "12345"
accountCity = "Delhi"

// accountId = 7733 //Not Allowed as its constant
console.log("accountId = ", accountId)
accountEmail = "ksdfds@jsfsd.com"
accountPassword = "73344"
accountCity = "Chennai"

/* 
Prefer never to use var, as it has issue in Block scope and Functinal Scope
*/
console.table([accountEmail, accountId, accountPassword, accountCity])