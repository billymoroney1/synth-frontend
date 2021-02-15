
exports.patch = (Tone, preset) => {

    // current preset object structure:
    // wave
    // filter
    // effects
    // envelope

    console.log('PRESET: ', preset)

    const wave = preset.options[0]
    const filter = preset.options[1]
    const effects = preset.options[2]
    const envelope = preset.options[3]

    //make a monosynth
    const synth = new Tone.Synth({
        oscillator: {
            type: wave
        },
        envelope: {
            attack: envelope[0],
            decay: envelope[1],
            sustain: envelope[2],
            release: envelope[3]
        }
    })

    // const wave = new Tone.Waveform(16)

    // synth.connect(wave)

    // let myTimer = setInterval(() => {
    //     console.log(wave.getValue())
    // }, 100)

    // setTimeout(() => {
    //     clearInterval(myTimer)
    // }, 2000)

    //how chain 2 synths?


    //check to see how many oscillators are active and type of waveform
    // const synth = new Tone.Oscillator("440", "sine")


    //check which effects are on, if no effects are on, connect synth toDestination
    let noEffects = true
    for (let i = 0; i < effects.length;  i++){
        if (effects[i].status === true){
            noEffects = false
            if (effects[i].name === 'reverb'){
                console.log('contains reverb!')
                const reverb = new Tone.Reverb("2").toDestination()
                synth.connect(reverb)
            }
    
            if (effects[i].name === 'filter'){
                console.log('props.filter: ', filter)
                let f
                if (filter === 'lowpass'){
                    f = new Tone.OnePoleFilter('300', 'lowpass').toDestination()
                } else if (filter === 'highpass'){
                    f = new Tone.OnePoleFilter('1200', 'highpass').toDestination()
                }
                synth.connect(f)
            }  
    
            if (effects[i].name === 'phasor'){
                const phaser = new Tone.Phaser({
                "frequency" : 15,
                "octaves" : 6,
                "baseFrequency" : 1000})
                .toDestination()
                synth.connect(phaser)
            }
    
            if (effects[i].name === 'delay'){
                const delay = new Tone.FeedbackDelay("8n", 0.5).toDestination()
                synth.connect(delay)
            }
        }
    }

    if (noEffects) {
        synth.connect(Tone.getDestination())
    }

    //following conditionals test to see if corresponding effect is in synth state, if it is, create that module and add it to the chain
    
    //trigger a note for a specified duration
    // synth.triggerAttackRelease("C4", "8n")
    synth.triggerAttackRelease("D2", "8n")
}

