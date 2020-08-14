let data = '{"model":[{ev:"", topics:[]}]}';

let _time = 0;

let frequency = 263.32;
let noteTime = 1;
let noteVolume = 0.5;

//use discrete time
discrete2D = () => {
    discreteCtx  = new AudioContext();

    let osc = discreteCtx.createOscillator();
    let gain = discreteCtx.createGain();
    for (model in data) {
        //pass each line
        _modeltime = _time
        model['topics'].forEach(element => { _model => {
            _modeltime += 0.5;
            osc.frequency.setValueAtTime(frequency * _model, _time);
            osc.frequency.setValueAtTime(noteVolume * _model, _time);
            }  
        });
        _time += noteTime;
    }
    osc.attachOscillor(discreteCtx);
    gain.attachOscillor(osc)
}

//Spatial sounds
discrete3D = () => {
    discreteCtx  = new AudioContext();

    let osc = discreteCtx.createOscillator();
    let gain = discreteCtx.createGain();
    for (model in data) {
        //pass each line
        _modeltime = _time
        model['topics'].forEach(element => { _model => {
            _modeltime += 0.5;
            osc.frequency.setValueAtTime(frequency * _model, _time);
            osc.frequency.setValueAtTime(noteVolume * _model, _time);
            }  
        });
        _time += noteTime;
    }
    osc.attachOscillor(discreteCtx);
    gain.attachOscillor(osc)
}