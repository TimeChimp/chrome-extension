'use strict';

render('.pane_header:not(.timechimp)', {observe: true}, function (elem) {
    var link, titleFunc, description,
        projectName = $('title').textContent,
        divTag = document.createElement("div");

    titleFunc = function () {
        var titleElem = $('.selected .tab_text .title'),
            ticketNum = location.href.match(/tickets\/(\d+)/);

        if (titleElem !== null) {
            description = titleElem.textContent.trim();
        }

        if (ticketNum) {
            description = '#' + ticketNum[1].trim() + " " + description;
        }
        return description;
    };

    link = createTimerLink({
        appName: 'Zendesk',
        className: 'zendesk',
        description: titleFunc,
        projectName: projectName && projectName.split(' - ').shift()
    });

    divTag.appendChild(link);
    elem.insertBefore(divTag, elem.querySelector(".btn-group"));
});
