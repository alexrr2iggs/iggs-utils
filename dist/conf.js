'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getConfSync = exports.getConf = void 0;
var fs_1 = require('fs');
var path_1 = require('path');
function getConf(path) {
	if (!path) path = path_1.join(__dirname, 'config.json');
	return new Promise(function (resolve, reject) {
		try {
			resolve(JSON.parse(fs_1.readFileSync(path).toString('utf-8')));
		} catch (error) {
			reject(error);
		}
	});
}
exports.getConf = getConf;
function getConfSync(path) {
	if (!path) path = path_1.join(__dirname, 'config.json');
	return JSON.parse(fs_1.readFileSync(path).toString('utf-8'));
}
exports.getConfSync = getConfSync;
//# sourceMappingURL=../src/dist/conf.js.map
