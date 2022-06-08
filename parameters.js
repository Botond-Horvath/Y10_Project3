function setParameters() {
    if (document.getElementById('directions').checked) {
        mode = 'directions'
        }
    else {
        mode = 'GPS'
    }
    document.getElementById('message').style.display = block;
};