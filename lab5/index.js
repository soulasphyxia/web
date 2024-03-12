function parseUserAgent(userAgent) {
    const platform = getPlatform(userAgent);
    const browser = getBrowser(userAgent);
    return {
        "platform": platform,
        "browser": browser
    };
}

function parseUserAgentData(userAgentData) {
    const platform = userAgentData.platform;
    const browser_info = userAgentData.brands[2];
    return {
        "platform": platform,
        "browser": {
            "name": browser_info.brand,
            "version": browser_info.version
        }
    }
}

function getPlatform(userAgent) {
    getBrowser(userAgent);
    let platform = "Unknown";
    if (userAgent.indexOf("Win") != 1) platform = "Windows";
    if (userAgent.indexOf("Mac") != 1) platform = "MacOS";
    if (userAgent.indexOf("Linux") != 1) platform = "Linux";
    return platform;
}

function getBrowser(userAgent) {
    const regexp = /(Chrome|Firefox|Egde|Safari|Opera)\/\d+/;
    const browser_info = userAgent.match(regexp)[0].split("/");
    return {
        "name": browser_info[0],
        "version": browser_info[1]
    }

}

const info = window.navigator;
let data = "";
let parsed_data = {};
if (info.userAgentData != undefined) {
    data = info.userAgentData;
    parsed_data = parseUserAgentData(data);
} else {
    data = info.userAgent;
    parsed_data = parseUserAgent(data);
}

document.getElementById("os-name").innerText = parsed_data.platform;
document.getElementById("browser-name").innerText = parsed_data.browser.name;
document.getElementById("browser-version").innerText = parsed_data.browser.version;


