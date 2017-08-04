;(function() {
    const videoId = 'Bd8L__Te3Dw';
    const injectedCode = `
        <iframe
            style="position: absolute; left: 0px; top: 30px;"
            width="420" height="315"
            src="https://www.youtube.com/embed/${ videoId }?autoplay=1"
        ></iframe>
    `;
    const div = document.createElement('div');
    div.innerHTML = injectedCode;
    document.querySelector('body').appendChild(div);
})();