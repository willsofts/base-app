import { bindingChildMessaging, bindingParentMessaging } from "./messenger";

var DEFAULT_LANGUAGE = process.env.VUE_APP_DEFAULT_LANGUAGE;
var API_URL = process.env.VUE_APP_API_URL;
var BASE_URL = process.env.VUE_APP_BASE_URL;
var CDN_URL = process.env.VUE_APP_CDN_URL;
var IMG_URL = process.env.VUE_APP_IMG_URL;
var BASE_STORAGE = process.env.VUE_APP_BASE_STORAGE;
var API_TOKEN = process.env.VUE_APP_API_TOKEN;
var DEFAULT_RAW_PARAMETERS = process.env.VUE_APP_DEFAULT_RAW_PARAMETERS == "true";
var SECURE_STORAGE = process.env.VUE_APP_SECURE_STORAGE == "true";
export const DEFAULT_CONTENT_TYPE = "application/json; charset=UTF-8";
console.info("DEFAULT_LANGUAGE="+DEFAULT_LANGUAGE,", BASE_STORAGE="+BASE_STORAGE,", DEFAULT_RAW_PARAMETERS="+DEFAULT_RAW_PARAMETERS,", SECURE_STORAGE="+SECURE_STORAGE);
console.info("API_URL="+API_URL,", BASE_URL="+BASE_URL,", CDN_URL="+CDN_URL,", IMG_URL="+IMG_URL);
console.info("API_TOKEN="+API_TOKEN);
export function getDefaultLanguage() { return DEFAULT_LANGUAGE; }
export function setDefaultLanguage(language: string) {
	console.log("set default_language="+language);
	if(language && language.trim().length>0) DEFAULT_LANGUAGE = language;
}
export function getApiToken() { return API_TOKEN; }
export function getApiUrl() { return API_URL; }
export function getBaseUrl() { return BASE_URL; }
export function getCdnUrl() { return CDN_URL; }
export function getImgUrl() { return IMG_URL; }
export function getBaseStorage() { return BASE_STORAGE; }
export function getDefaultRawParameters() { return DEFAULT_RAW_PARAMETERS; }
export function setApiToken(value: string) { API_TOKEN = value; }
export function setApiUrl(value: string) { API_URL = value; }
export function setBaseUrl(value: string) { BASE_URL = value; }
export function setCdnUrl(value: string) { CDN_URL = value; }
export function setImgUrl(value: string) { IMG_URL = value; }
export function setBaseStorage(value: string) { BASE_STORAGE = value; }
export function setDefaultRawParameters(value: boolean) { DEFAULT_RAW_PARAMETERS = value; }
export function setSecureStorage(value: boolean) { SECURE_STORAGE = value; }
export function isSecureStorage() { return SECURE_STORAGE; }
var default_labels : Array<any> = [];
var program_labels : Array<any> = [];
var program_message : Array<any> = [];
export function getProgramMessage() : Array<any> { return program_message; }
export function getDefaultLabels() : Array<any>{ return default_labels; }
export function getProgramLabels() : Array<any> { return program_labels; }
export function setProgramMessage(message: Array<any>) { program_message = message; }
export function setDefaultLabels(labels: Array<any>) { default_labels = labels; }
export function setProgramLabels(labels: Array<any>) { program_labels = labels; }
export function appInit(settings = {program_message,default_labels,program_labels,listen_messaging: 'child'}) {
	const setting = Object.assign({listen_messaging: 'child'},settings)
	setProgramMessage(setting.program_message);
	setDefaultLabels(setting.default_labels);
	setProgramLabels(setting.program_labels);
	if(setting.listen_messaging=='child') {
		bindingChildMessaging();
	} else if(setting.listen_messaging=='parent') {
		bindingParentMessaging();
	}
}
