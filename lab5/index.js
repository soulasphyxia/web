const info = window.navigator;


console.log(info)

const user_data = info.userAgentData

const browser_info = user_data.brands[2]

console.log(browser_info.brand)
console.log(browser_info.version)
console.log(user_data.platform)