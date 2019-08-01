# Components

### Sliders

#### Volume

This component supports the addition of a basic volume. 
 
` <input type="range" id="start" name="volume"
         min="0" max="11">
  <label for="volume">Volume</label>`

###  Duration

The listener may want to alter the duration of an event. 

It doesn't make much sense to go over 1 second. The cases
where we do are corner cases. 

` <input type="range" id="start" name="duration"
         min="0" max="1">
  <label for="volume">Duration</label>
`

### Drop down menu

#### Oscillator

The Web Audio oscillator allows for a change in the type
of wave form used. We can offer this to the listener whilst
trying to design sounds for themselves. 

` <select>
  <option value="sine">Sine</option>
  <option value="square">Square</option>
  <option value="sawtooth">Sawtooth</option>
  <option value="triangle">Triangle</option>
</select> 
`

The default of this component is the sine wave. 
