


main();


function main() {
    createPlaygroundForPromisesAllFastest();
}

function dynamicallyLoadScript(url) {
    const script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}

function createPlaygroundForPromisesAllFastest() {
    dynamicallyLoadScript('./promiseAllFastest.js');
}
