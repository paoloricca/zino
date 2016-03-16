﻿function getDelegateName(arguments) {
    try {
        return arguments.callee.toString().match(/function ([^\(]+)/)[1];
    } catch (err) {
        console.log("[getFunctionName]: " + err.description)
    }

}
function printError(delegateName, strError) {
    $('#errorTitle').empty().append("<b class='control-label' ita='Attenzione!' eng='Warning!'></b>");
    $('#stringError').empty();
    if (!strError) {
        $('#stringError').append('<p>' + appMessage.defaultRequired + '</p>');
    }
    else {
        $('#stringError').append('<span style="font-weight:normal;">[' + delegateName + ']: ' + strError + '</span>');
    }
    $('#mainError').show().delay(3000).fadeOut();
    initLang();
    return false;
}
function displayError(strError) {
    if (!strError) {
        appError.text = appMessage.defaultRequired;
    }
    else {
        appError.text = strError;
    }
    appError.show();
    initLang();
    return false;
}
function displayErrors(errors) {
    $('#errorTitle').empty().append("<b class='control-label' ita='Attenzione' eng='Warning'></b>");
    $('#stringError').empty();
    $('#stringError').append('<p>' + appMessage.defaultRequired + '</p>');
    //$('#stringError').append("<ul class='dBlock'>");
    errors.each(function (model, index, list) {
        if (index == 0) {
            setFocusToEl($("#" + model.get("targetID")));
            //$("#" + model.get("targetID")).focus();
            //$("html, body").animate({ scrollTop: eval($("#" + model.get("targetID")).offset().top)+eval(-100) }, "slow");
        }
        //$('#stringError').append("<li>" + model.get("descE") + "</li>");
    });
    //$('#stringError').append("</ul>");
    $('#mainError').show().delay(3000).fadeOut();
    initLang();
    return false;
}