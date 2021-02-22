discretisation = () => {
    let audioCtx = (window.AudioContext || window.webkitCancelAnimationFrame.AudioContext)()

    let osc = audioCtx.createOscillator();
    let _time = 0.25;
    osc.start()
    for (let k=1; k<6; k++) {
        osc.frequency.setValueAtTime(323, _time * k);
    }

    osc.stop(2.0);

    osc.connect(audioCtx.destination);
}