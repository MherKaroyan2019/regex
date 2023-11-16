function number(){
    let pattern = /[0-9]+/g;
    let matchValue = document.getElementById("regexValue").value.match(pattern);
    let matchIndexs = [];
    while ((match = pattern.exec(matchValue)) !== null) {
        matchIndexs.push(match.index);

    }
    document.getElementById("result").innerHTML = matchValue + ": " + matchIndexs;
}

function hex(){
    let pattern = /#[0-9|a-f]{6}/g;
    let matchValue = document.getElementById("regexValue").value.match(pattern);
    let matchIndexs = [];
    while ((match = pattern.exec(matchValue)) !== null) {
        matchIndexs.push(match.index);
    }
    document.getElementById("result").innerHTML = matchValue + ": " + matchIndexs;
}

function phone(){
    let pattern = /[0-9]{3}-[0-9]{3}-[0-9]{3}/g;
    let matchValue = document.getElementById("regexValue").value.match(pattern);
    let matchIndexs = [];
    while ((match = pattern.exec(matchValue)) !== null) {
        matchIndexs.push(match.index);
    }
    document.getElementById("result").innerHTML = matchValue + ": " + matchIndexs;
}

function bankCardNumber(){
    let pattern = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/g;
    let matchValue = document.getElementById("regexValue").value.match(pattern);
    let matchIndexs = [];
    while ((match = pattern.exec(matchValue)) !== null) {
        matchIndexs.push(match.index);
    }
    document.getElementById("result").innerHTML = matchValue + ": " + matchIndexs;
}

function date(){
    let pattern = /(([0-2]+[0-9])|(3+[0-1]))+\/((0+[0-9])|1+[0-2])+\/([0-9]{4})/g;
    let matchValue = document.getElementById("regexValue").value.match(pattern);
    let matchIndexs = [];
    while ((match = pattern.exec(matchValue)) !== null) {
        matchIndexs.push(match.index);
    }
    document.getElementById("result").innerHTML = matchValue + ": " + matchIndexs;
}

function htmlElement(){
    let pattern = /<+[A-z]+>+([A-z|0-9]|)+<\/+[A-z]+>/g;
    let matchValue = document.getElementById("regexValue").value.match(pattern);
    let matchIndexs = [];
    while ((match = pattern.exec(matchValue)) !== null) {
        matchIndexs.push(match.index);
    }
    document.getElementById("result").innerHTML = matchValue + ": " + matchIndexs;
}

function ipv6(){
    let pattern = /[0-9|a-f]{4}:[0-9|a-f]{4}:[0-9|a-f]{4}:[0-9|a-f]{4}:[0-9|a-f]{4}:[0-9|a-f]{4}:[0-9|a-f]{4}:[0-9|a-f]{4}/g;
    let matchValue = document.getElementById("regexValue").value.match(pattern);
    let matchIndexs = [];
    while ((match = pattern.exec(matchValue)) !== null) {
        matchIndexs.push(match.index);
    }
    document.getElementById("result").innerHTML = matchValue + ": " + matchIndexs;
}

function password(){
    let pattern = /(?=.{0,14}\d)(?=.{0,14}[A-Z])(?=.{0,14}[a-z])(?=.{0,14}[@^#$&])[A-Za-z\d@^#$&]{10,15}/g;
    let matchValue = document.getElementById("regexValue").value.match(pattern);
    let matchIndexs = [];
    while ((match = pattern.exec(matchValue)) !== null) {
        matchIndexs.push(match.index);
    }
    document.getElementById("result").innerHTML = matchValue + ": " + matchIndexs;
}

function email(){
    let pattern = /\S*[0-9|a-z|A-Z|.-_]+@+[0-9|a-z|A-Z|\-_]+.+[0-9|a-z|A-Z|\-]{2,}/g;
    let matchValue = document.getElementById("regexValue").value.match(pattern);
    let matchIndexs = [];
    while ((match = pattern.exec(matchValue)) !== null) {
        matchIndexs.push(match.index);
    }
    document.getElementById("result").innerHTML = matchValue + ": " + matchIndexs;
}