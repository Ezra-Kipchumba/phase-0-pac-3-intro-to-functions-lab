function shout(hello) {
    return hello.toUpperCase();
}
function whisper(NOELA) {
    return NOELA.toLowerCase();
}
function logWhisper(SEKANI) {
    console.log(SEKANI.toLowerCase());
}
function logShout(noela) {
    console.log(noela.toUpperCase());
}
function sayHiToHeadphonedRoommate(hello) {
    if (hello.toLowerCase() === hello) {
        return "I can't hear you!";
    }
    else if (hello === hello.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (hello === "Let's have dinner together!") {
        return "I would love to!";
    }

}


