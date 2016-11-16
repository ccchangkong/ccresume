export default function () {
	var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
　　NodeList.prototype.on = function (event, fn) {
　　　　[]['forEach'].call(this, function (el) {
　　　　　　el.on(event, fn);
　　　　});
　　　　return this;
　　};
　　Element.prototype.trigger = function (type, data) {
　　　　var event = document.createEvent('HTMLEvents');
　　　　event.initEvent(type, true, true);
　　　　event.data = data || {};
　　　　event.eventName = type;
　　　　event.target = this;
　　　　this.dispatchEvent(event);
　　　　return this;
　　};
　　NodeList.prototype.trigger = function (event) {
　　　　[]['forEach'].call(this, function (el) {
　　　　　　el['trigger'](event);
　　　　});
　　　　return this;
　　};
function request(type, url, opts, callback) {
　　　　var xhr = new XMLHttpRequest();
　　　　if (typeof opts === 'function') {
　　　　　　callback = opts;
　　　　　　opts = null;
　　　　}
　　　　xhr.open(type, url);
　　　　var fd = new FormData();
　　　　if (type === 'POST' && opts) {
　　　　　　for (var key in opts) {
　　　　　　　　fd.append(key, JSON.stringify(opts[key]));
　　　　　　}
　　　　}
　　　　xhr.onload = function () {
　　　　　　callback(JSON.parse(xhr.response));
　　　　};
　　　　xhr.send(opts ? fd : null);
　　}
　var get = request.bind(this, 'GET');
　　var post = request.bind(this, 'POST');
}

