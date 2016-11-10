var $ = require('jquery')

var getBrowserType = function() {
    var userAgent = navigator.userAgent
    var browser = 'Others'; 
    var version = '';
    
    // Chrome
    if (userAgent.search(/(Chrome\/)/ig) > 0) {
        browserInfo = userAgent.match(/(Chrome\/[\d|.]+)/ig)
        version = browserInfo[0].replace(/(Chrome\/)/, '')
        browser = 'Chrome' + '/' + version
    }
    
    // Chromium
    if (userAgent.search(/(Chromium\/)/ig) > 0) {
        browserInfo = userAgent.match(/(Chromium\/[\d|.]+)/ig)
        version = browserInfo[0].replace(/(Chromium\/)/, '')
        browser = 'Chromium' + '/' + version
    }
    
    // Firefox
    if (userAgent.search(/(Firefox\/)/ig) > 0) {
        browserInfo = userAgent.match(/(Firefox\/[\d|.]+)/ig)
        version = browserInfo[0].replace(/(Firefox\/)/, '')
        browser = 'Firefox' + '/' + version
    }
    
    // Seamonkey
    if (userAgent.search(/(Seamonkey\/)/ig) > 0) {
        browserInfo = userAgent.match(/(Seamonkey\/[\d|.]+)/ig)
        version = browserInfo[0].replace(/(Seamonkey\/)/, '')
        browser = 'Seamonkey' + '/' + version
    }
    
    // Safari
    if (userAgent.search(/(Safari\/)/ig) > 0 && !userAgent.match(/(Chrome\/)/ig) > 0 && !userAgent.match(/(Chromium\/)/ig) > 0) {
        browserInfo = userAgent.match(/(Safari\/[\d|.]+)/ig)
        version = browserInfo[0].replace(/(Safari\/)/, '')
        browser = 'Safari' + '/' + version
    }
    
    // Opera
    if (userAgent.search(/(Opera\/)/ig) > 0 || userAgent.match(/(OPR\/)/ig) > 0) {
        browserInfo = userAgent.match(/(Opera\/[\d|.]+)/ig) != '' ? userAgent.match(/(Opera\/[\d|.]+)/ig) : userAgent.match(/(OPR\/[\d|.]+)/ig)
        version = userAgent.match(/(Opera\/[\d|.]+)/ig) != '' ? browserInfo[0].replace(/(Opera\/)/, '') : browserInfo[0].replace(/(OPR\/)/, '')
        browser = 'Opera' + '/' + version
    }
    
    // Internet Explorer
    if (userAgent.search(/(\;\sMSIE\/)/ig) > 0) {
        browserInfo = userAgent.match(/(MSIE\s[\d|.]+)/ig)
        version = browserInfo[0].replace(/(MSIE\s\/)/, '')
        browser = 'Internet Explorer' + '/' + version
    }
    
    // Microsoft Edge
    if (userAgent.search(/(Edge\/)/ig) > 0) {
        browserInfo = userAgent.match(/(Edge\/[\d|.]+)/ig)
        version = browserInfo[0].replace(/(Edge\/)/, '')
        browser = 'Edge' + '/' + version
    }
    
    return browser
}

var getDeviceType = function() {
    var userAgent = navigator.userAgent
    var deviceType = 'desktop'
    
    // Mobile
    if (userAgent.search(/Mobile/ig) > 0) {
        deviceType = 'mobile'
    }
    
    // Tablet
    if (userAgent.search(/Tablet/ig) > 0) {
        deviceType = 'tablet'
    }
    
    return deviceType
}

var getOSType = function() {
    var userAgent = navigator.userAgent
    var osType = ''
    
    // Win 3.11
    if (userAgent.search(/Win16/ig) > 0) {
        osType = 'Windows 3.11'
    }
    
    // Win 95
    if (userAgent.search(/(Windows 95|Win95|Windows_95)/ig) > 0) {
        osType = 'Windows 95'
    }
    
    // Win ME
    if (userAgent.search(/(Win 9x 4.90|Windows ME)/ig) > 0) {
        osType = 'Windows ME'
    }
    
    // Win 98
    if (userAgent.search(/(Windows 98|Win98)/ig) > 0) {
        osType = 'Windows 98'
    }
    
    // Win CE
    if (userAgent.search(/Windows CE/ig) > 0) {
        osType = 'Windows CE'
    }
    
    // Win 2000
    if (userAgent.search(/(Windows NT 5.0|Windows 2000)/ig) > 0) {
        osType = 'Windows 2000'
    }
    
    // Win XP
    if (userAgent.search(/(Windows NT 5.1|Windows XP)/ig) > 0) {
        osType = 'Windows XP'
    }
    
    // Win Server 2003
    if (userAgent.search(/Windows NT 5.2/ig) > 0) {
        osType = 'Windows Server 2003'
    }
    
    // Win Vista
    if (userAgent.search(/Windows NT 6.0/ig) > 0) {
        osType = 'Windows Vista'
    }
    
    // Win 7
    if (userAgent.search(/(Windows 7|Windows NT 6.1)/ig) > 0) {
        osType = 'Windows 7'
    }
    
    // Win 8.1
    if (userAgent.search(/(Windows 8.1|Windows NT 6.3)/ig) > 0) {
        osType = 'Windows 8.1'
    }
    
    // Win 8
    if (userAgent.search(/(Windows 8|Windows NT 6.2)/ig) > 0) {
        osType = 'Windows 8'
    }
    
    // Win NT 4.0
    if (userAgent.search(/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ig) > 0) {
        osType = 'Windows NT 4.0'
    }
    
    // Win ME
    if (userAgent.search(/Windows ME/ig) > 0) {
        osType = 'Windows ME'
    }
    
    // Linux
    if (userAgent.search(/(Linux|X11)/ig) > 0) {
        osType = 'Linux'
    }
    
    // Android
    if (userAgent.search(/Android/ig) > 0) {
        osType = 'Android'
    }
    
    // Open BSD
    if (userAgent.search(/OpenBSD/ig) > 0) {
        osType = 'Open BSD'
    }
    
    // Sun OS
    if (userAgent.search(/SunOS/ig) > 0) {
        osType = 'Sun OS'
    }
    
    // Mac OS X
    if (userAgent.search(/Mac OS X/ig) > 0) {
        osType = 'Mac OS X'
    }
    
    // Mac OS
    if (userAgent.search(/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ig) > 0) {
        osType = 'Mac OS'
    }
    
    // iOS
    if (userAgent.search(/(iPhone|iPad|iPod)/ig) > 0) {
        osType = 'iOS'
    }
    
    // QNX
    if (userAgent.search(/QNX/ig) > 0) {
        osType = 'QNX'
    }
    
    // UNIX
    if (userAgent.search(/UNIX/ig) > 0) {
        osType = 'UNIX'
    }
    
    // BeOS
    if (userAgent.search(/BeOS/ig) > 0) {
        osType = 'BeOS'
    }
    
    // OS/2
    if (userAgent.search(/OS\/2/ig) > 0) {
        osType = 'OS/2'
    }
    
    // Search Bot
    if (userAgent.search(/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ig) > 0) {
        osType = 'Search Bot'
    }
    
    return osType
}

var getCurrentUrl = function() {
    return window.location.href;
}

var getChannelRef = function() {
    var param, channelParam, channel = ''
    
    if (param = getParams()) {
        channelParam = param.match(/c=[\d|\w]+/ig)
        channel = channelParam[0].replace(/c\=/ig, '')
    }
    
    return channel
}

var getBatchRef = function() {
    var param, batchParam, batch = ''
    
    if (param = getParams()) {
        batchParam = param.match(/b=[\d|\w]+/ig)
        batch = batchParam[0].replace(/b\=/ig, '')
    }
    
    return batch
}

var getParams = function() {
    var url, param
    
    url = getCurrentUrl()
    
    param = url.match(/\?[(\w|\d|\=|\&|\#)]+/ig)
    
    return param === null ? false : param[0]
}

var getPageName = function() {
    var url, page = ''
    
    url = getCurrentUrl()
    pageAry = url.match(/(([(\w|\.)]*\?)|(\/[\w]+\/\?))/ig)
    
    if (pageAry !== null) {
        page = pageAry[0].replace(/([.]*[\w]*\?)|([\/]+[\?]*)/ig, '')
    } 
    
    return page.trim() == '' ? 'index' : page
}

var getTrimUrl = function() {
    var url = 
    var url = getCurrentUrl()
    
    url = url.match(/(http\:\/\/|https\:\/\/)+[\w\.\:]+\/\?*/ig)
    
    if (url !== null) {
        trimUrl = url[0].replace(/\/\?/ig, '')
    }
    
    return trimUrl
}

module.exports = {
    track: function(data) {
        var action = data.action
        var component = typeof data.component === 'undefined' ? '' : data.component
        var section = typeof data.section === 'undefined' ? '' : data.section
        
        $.get('https://ipinfo.io/', function(response) {
            ip = response.ip
            browser = getBrowserType()
            device = getDeviceType()
            os = getOSType()
            url = getTrimUrl()
            channel = getChannelRef()
            batch = getBatchRef()
            page = getPageName()
            
            var data = {
                ip: ip,
                action: action,
                url: url,
                channel: channel,
                batch: batch,
                browser: browser,
                device: device,
                os: os,            
                component: component,
                section: section,
                page: page
            }
            
            $.post('http://wearecrave.com/pinpoint/insertPinpoint.php', data, function(response) {
                console.log(response)
            }, 'json');
            
        }, 'json')
    },
    getBrowserType: getBrowserType,
    getDeviceType: getDeviceType,
    getOSType: getOSType,
    getCurrentUrl: getCurrentUrl
};