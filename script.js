// JavaScript code to detect browser
var browser;
var agent = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
    browser = "msie";
}
else {
    browser = agent[1].toLowerCase();
}
if (document.getElementsByClassName(browser).length > 0)
    document.getElementsByClassName(browser)[0].classList.add('active');
