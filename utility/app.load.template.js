function loadTemplate(container, templateName) {
	try {
		var URL = appConfig.appName + 'templates';
		if (templateName != null) {
			URL += '/' + templateName;
		}
		return container.load(URL + '.html');
	}
	catch (err) {
		printError(getDelegateName(arguments), err.message);
		console.log(getDelegateName(arguments), err.message);
	}
}
function loadTemplate(container, fncName, tmpName) {
	try {
		var URL = appConfig.appName + 'templates';
		if (fncName != null) {
			URL += '/' + fncName;
		}
		if (tmpName != null) {
			URL += '/' + tmpName;
		}
		return container.load(URL + '.html');
	}
	catch (err) {
		printError(getDelegateName(arguments), err.message);
		console.log(getDelegateName(arguments), err.message);
	}
}
