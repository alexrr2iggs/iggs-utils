'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.remove =
	exports.writeJson =
	exports.readJson =
	exports.write =
	exports.append =
	exports.exists =
	exports.removeSync =
	exports.deserealizeObjectSync =
	exports.serealizeObjectSync =
	exports.readGZipSync =
	exports.writeGZipSync =
	exports.fileLinesSync =
	exports.insertBetweenPlacweHoldersSync =
	exports.readJsonSync =
	exports.writeJsonSync =
	exports.writeSync =
	exports.writeToDesktopSync =
	exports.writeObjectToDesktopSync =
	exports.DESKTOP_PATH =
		void 0;
const fs_1 = require('fs');
const promises_1 = require('fs/promises');
const os_1 = require('os');
const path_1 = require('path');
const zlib_1 = require('zlib');
const promises_2 = require('./promises');
exports.DESKTOP_PATH = (0, path_1.join)((0, os_1.homedir)(), 'Desktop');
function writeObjectToDesktopSync(fileName, object) {
	(0, fs_1.writeFileSync)(`${exports.DESKTOP_PATH}/${fileName}`, JSON.stringify(object));
}
exports.writeObjectToDesktopSync = writeObjectToDesktopSync;
function writeToDesktopSync(fileName, data) {
	(0, fs_1.writeFileSync)(`${exports.DESKTOP_PATH}/${fileName}`, data);
}
exports.writeToDesktopSync = writeToDesktopSync;
/**
 * Returns `undefined`.
 *
 * If `data` is a plain object, it must have an own (not inherited) `toString`function property.
 *
 * The `mode` option only affects the newly created file. See {@link open} for more details.
 *
 * For detailed information, see the documentation of the asynchronous version of
 * this API: {@link writeFile}.
 * @param file filename or file descriptor
 */
function writeSync(file, data, options) {
	const dirPath = (0, path_1.dirname)(file.toString());
	if (!(0, fs_1.existsSync)(dirPath)) (0, fs_1.mkdirSync)((0, path_1.dirname)(dirPath));
	(0, fs_1.writeFileSync)(file, data || '');
}
exports.writeSync = writeSync;
function writeJsonSync(path, object) {
	(0, fs_1.writeFileSync)(path, JSON.stringify(object));
}
exports.writeJsonSync = writeJsonSync;
function readJsonSync(path, reviver) {
	const data = (0, fs_1.readFileSync)(path);
	if (!data) return;
	const retVal = JSON.parse(data.toString(), reviver);
	return retVal;
}
exports.readJsonSync = readJsonSync;
function insertBetweenPlacweHoldersSync(filePath, data, beginPlaceHolder, endPlaceHolder) {
	var _a, _b, _c, _d, _e, _f;
	const writeData = (0, fs_1.readFileSync)(filePath);
	if (!(0, fs_1.existsSync)(filePath)) {
		(0, fs_1.writeFileSync)(filePath, writeData);
	}
	const fileContent = (0, fs_1.readFileSync)(filePath).toString();
	const top = (_b = (_a = fileContent === null || fileContent === void 0 ? void 0 : fileContent.split) === null || _a === void 0 ? void 0 : _a.call(fileContent, beginPlaceHolder)) === null || _b === void 0 ? void 0 : _b[0];
	const bottom =
		(_f = (_e = (_c = fileContent === null || fileContent === void 0 ? void 0 : fileContent.split) === null || _c === void 0 ? void 0 : (_d = _c.call(fileContent, endPlaceHolder)).reverse) === null || _e === void 0 ? void 0 : _e.call(_d)) === null ||
		_f === void 0
			? void 0
			: _f[0];
	(0, fs_1.writeFileSync)(filePath, `${top}\n\r${beginPlaceHolder}\n\r${data}\n\r${endPlaceHolder}\n\r${bottom}`);
}
exports.insertBetweenPlacweHoldersSync = insertBetweenPlacweHoldersSync;
function fileLinesSync(path, lineSeparator = /[\n|\r]/) {
	var _a;
	if (!path) return null;
	try {
		const data = (_a = (0, fs_1.readFileSync)(path)) === null || _a === void 0 ? void 0 : _a.toString();
		if (!data) return null;
		return data.split(lineSeparator);
	} catch (error) {
		console.error(error);
	}
}
exports.fileLinesSync = fileLinesSync;
function writeGZipSync(filePath, data, writeFileOptions, zLibOptions) {
	const buffer = data instanceof Buffer ? data : Buffer.from(data);
	const zippBuffer = (0, zlib_1.gzipSync)(buffer, zLibOptions);
	(0, fs_1.writeFileSync)(filePath, zippBuffer, writeFileOptions);
}
exports.writeGZipSync = writeGZipSync;
function readGZipSync(path, readFileOptions, zlibOptions) {
	const data = (0, fs_1.readFileSync)(path, readFileOptions);
	return (0, zlib_1.unzipSync)(data, zlibOptions);
}
exports.readGZipSync = readGZipSync;
function serealizeObjectSync(filePath, object) {
	writeGZipSync(filePath, JSON.stringify(object));
}
exports.serealizeObjectSync = serealizeObjectSync;
function deserealizeObjectSync(filePath) {
	return JSON.parse(readGZipSync(filePath).toString());
}
exports.deserealizeObjectSync = deserealizeObjectSync;
/**
 * Synchronous [`unlink(2)`](http://man7.org/linux/man-pages/man2/unlink.2.html). Returns `undefined`.
 * @return `undefined` upon success.
 * @see {@link unlinkSync}
 */
function removeSync(path) {
	try {
		(0, fs_1.unlinkSync)(path);
	} catch (e) {
		if ((e === null || e === void 0 ? void 0 : e.code) !== 'ENOENT') throw e;
	}
}
exports.removeSync = removeSync;
/**
 * check if file exists
 *
 *
 * @param path file path
 * @returns true if exists false otherwise
 *
 * @see{@link stat}
 */
const exists = path =>
	(0, promises_1.stat)(path)
		.then(() => true)
		.catch(e => {
			if ((e === null || e === void 0 ? void 0 : e.code) === 'ENOENT') return false;
			throw e;
		});
exports.exists = exists;
/**
 * add to file, if the file or folder does not exist it will be recursively created
 * @param path
 * @param data
 * @param options
 * @returns
 */
function append(path, data, options) {
	return (0, promises_1.appendFile)(path, data, options).catch(error => {
		if (error.code === 'ENOENT') return (0, promises_1.mkdir)((0, path_1.dirname)(path.toString()), { recursive: true }).then(() => append(path, data, options));
		return error;
	});
}
exports.append = append;
/**
 * write to file, if the folder does not exist it will be recursively created
 *
 * @param file filename or `FileHandle`
 * @param data
 * @param options
 * @return Fulfills with `undefined` upon success.
 *
 *
 * @see{@link exists}
 * @see{@link mkdir}
 * @see{@link writeFile}
 */
function write(file, data, options) {
	const dirPath = (0, path_1.dirname)(file.toString());
	return (0, exports.exists)(dirPath).then(exist => {
		const _opt = typeof options === 'string' ? { encoding: options } : options;
		let promise = (0, promises_2.of)();
		if (!exist) promise = (0, promises_1.mkdir)(dirPath, Object.assign(Object.assign({}, _opt), { recursive: true }));
		return promise.then(() => (0, promises_1.writeFile)(file, data || '', options));
	});
}
exports.write = write;
/**
 * Asynchronously reads the entire contents of a file that contains a valid JSON string, and converts the content into an object.
 *
 * @param file filename or `FileHandle`
 * @param options
 * @param reviver A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 *
 * @see{@link readFile}
 * @see{@link JSON.parse}
 */
function readJson(file, options, reviver) {
	return (0, promises_1.readFile)(file, options).then(fileContent => JSON.parse(fileContent.toString(), reviver));
}
exports.readJson = readJson;
/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string, and asynchronously writes data to a file, replacing the file if it already exists.
 *
 * @param file filename or `FileHandle`
 * @param obj A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * @returns
 * @see {@link JSON.stringify}
 * @see {@link write}
 */
function writeJson(file, obj, options, replacer, space) {
	const data = JSON.stringify(obj, replacer, space);
	return write(file, data, options);
}
exports.writeJson = writeJson;
/**
 * If `path` refers to a symbolic link, then the link is removed without affecting
 * the file or directory to which that link refers. If the `path` refers to a file
 * path that is not a symbolic link, the file is deleted. See the POSIX [`unlink(2)`](http://man7.org/linux/man-pages/man2/unlink.2.html) documentation for more detail.
 * @return Fulfills with `undefined` upon success.
 * @see {@link unlink}
 */
function remove(path) {
	return (0, promises_1.unlink)(path).catch(e => (e.code === 'ENOENT' ? undefined : e));
}
exports.remove = remove;
//# sourceMappingURL=files.js.map
