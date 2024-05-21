import QueryString, { parse } from 'qs';

/**
 * Gets the URL parameters into object format. 获取 URL 中的参数转化为对象格式.
 *
 * @param {string | undefined} url Incoming link text. 传入的链接文本.
 * @return {QueryString.ParsedQs} Parameter object. 参数对象.
 */
const getQuery = (url?: string): QueryString.ParsedQs => {
	url = decodeURIComponent(url || window.location.search);
	if (url.indexOf('?') > -1) url = url.slice(1);
	return parse(url);
};

export default getQuery;
