//compile all data to make final sound
//MODIFY SO THAT IT CAN ACCEPT PRESET OBJECT, INSTEAD OF USE ALL THE PROPS IN THE TRIGGER COMPONENT. THEN REFACTOR TRIGGER?
export.patch = (preset) => {
    //make a monosynth
    const synth = new Tone.Synth({
        oscillator: {
            type: props.wave
        },
        envelope: {
            attack: props.envelope[0],
            decay: props.envelope[1],
            sustain: props.envelope[2],
            release: props.envelope[3]
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
    for (let i = 0; i < props.effects.length;  i++){
        if (props.effects[i].status === true){
            noEffects = false
            if (props.effects[i].name === 'reverb'){
                console.log('contains reverb!')
                const reverb = new Tone.Reverb("2").toDestination()
                synth.connect(reverb)
            }
    
            if (props.effects[i].name === 'filter'){
                console.log('props.filter: ', props.filter)
                let filter
                if (props.filter === 'lowpass'){
                    filter = new Tone.OnePoleFilter('300', 'lowpass').toDestination()
                } else if (props.filter === 'highpass'){
                    filter = new Tone.OnePoleFilter('1200', 'highpass').toDestination()
                }
                synth.connect(filter)
            }  
    
            if (props.effects[i].name === 'phasor'){
                const phaser = new Tone.Phaser({
                "frequency" : 15,
                "octaves" : 6,
                "baseFrequency" : 1000})
                .toDestination()
                synth.connect(phaser)
            }
    
            if (props.effects[i].name === 'delay'){
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

