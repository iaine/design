lists = () => {
    let audioCtx = (window.AudioContext || window.webkitCancelAnimationFrame.AudioContext)()

    let osc = audioCtx.createOscillator();

    const notes = [224,260,323,336];
    let _time = 0;
    osc.start()
    for (note in notes) {
        osc.frequency.setValueAtTime(note, _time);
        _time += 0.25;
    }

    osc.stop(1.5);

    osc
}

matrix = () => {
    let audioCtx = (window.AudioContext || window.webkitCancelAnimationFrame.AudioContext)()

    let osc = audioCtx.createOscillator();

    const notes = [224,260,323,336];

    const detuneNotes = [0, 0.25, 0.5, 0.75]

    let _time = 0;
    osc.start()
    for (note in notes) {
        osc.frequency.setValueAtTime(note, _time);
        _time += 0.25;
        for  (detuned in detuneNotes) {
            osc.detune.setValueAtTime(note, _time += 0.05);
        }
    }

    osc.stop(1.5);   
}