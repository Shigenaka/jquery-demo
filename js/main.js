/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

//gets input data
$('button').click(function() {
    var buttonName = $(this).attr('id');
    var element = $('#selector').val();
    var content = $('#newContent').val();
    decideAction(buttonName, element, content);
})

//decides which function should be done depending on button name
var decideAction = function(buttonName, element, content) {
    //if else
    /*if (buttonName == 'change-content') {
        changeContent(element, content);
    } else if (buttonName == 'add-at-end') {
        addAtEnd(element, content);
    } else if (buttonName == 'add-at-start') {
        addAtStart(element, content);
    } else if (buttonName == 'insert-before') {
        before(element, content);
    } else if (buttonName == 'move-after') {
        moveAfter(element, content);
    } else if (buttonName == 'surround-class') {
        surroundClass(element, content);
    } else if (buttonName == 'hide-text') {
        hideText(element, content);
    } else {
        removeWord(element, content);
    };*/

    //switch
    switch(buttonName) {
        case 'change-content':
            changeContent(element, content);
            break;
        case 'add-at-end':
            addAtEnd(element, content);
            break;
        case 'add-at-start':
            addAtStart(element, content);
            break;
        case 'insert-before':
            before(element, content);
            break;
        case 'move-after':
            moveAfter(element, content);
            break;
        case 'surround-class':
            surroundClass(element, content);
            break;
        case 'remove-word':
            removeWord(element, content);
            break;
    }
}

//different button functions
var changeContent = function(element, content) {
    $('main ' + element).html(content);
}

var addAtEnd = function(element, content) {
    $('main ' + element).append(content);
}

var addAtStart = function(element, content) {
    $('main ' + element).prepend(content);
}

var before = function(element, content) {
    $('main ' + element).before(content);
}

var moveAfter = function(element, content) {

}

var surroundClass = function(element, content) {

}

var hideText = function(element, content) {

}

var removeWord = function(element, content) {
    //if($('main ' + element))
}