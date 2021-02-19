const { ThumbDown } = require("heroicons-react")

exports.patch = (Tone, preset, sequence = null) => {


    console.log('preset: ', preset)

    // current preset object structure:
    // wave
    // filter
    // effects
    // envelope
    // pitch

    const wave = preset[0]
    const filter = preset[1]
    const effects = preset[2]
    const envelope = preset[3]
    const p = preset[4]
    const pitch = p[0] + p[1] 

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
    
            if (effects[i].name === 'phaser'){
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
            if (effects[i].name === 'chorus'){
                const chorus = new Tone.Chorus({
                    frequency : 1.5 ,
                    delayTime : 3.5 ,
                    depth : 0.7 ,
                    spread : 180
                    }).toDestination()
                synth.connect(chorus)
            }
    }

    if (noEffects) {
        synth.connect(Tone.getDestination())
    }

    synth.triggerAttackRelease(`${pitch}`, "8n")

    // if (sequence) {
    //     if (sequence === '1'){
    //         const loop = new Tone.Loop((time) => {
    //             synth.triggerAttackRelease("D2", "8n")
    //         }, "4n").start(0)
    //     }
    //     else if (sequence === '2'){
    //         const loop = new Tone.Loop((time) => {
    //             synth.triggerAttackRelease("F2", "8n")
    //         }, "4n").start(0)
    //     }
    //     else if (sequence === '3'){
    //         const loop = new Tone.Loop((time) => {
    //             synth.triggerAttackRelease("A2", "8n")
    //         }, "4n").start(0)
    //     }
    //     else if (sequence === '4'){
    //         const loop = new Tone.Loop((time) => {
    //             synth.triggerAttackRelease("Bb2", "8n")
    //         }, "4n").start(0)
    //     }
    // }
}

//GET WAVEFORM DATA
// const wf = new Tone.Waveform(16)

// synth.connect(wf)

// let myTimer = setInterval(() => {
//     console.log(wf.getValue())
// }, 100)

// setTimeout(() => {
//     clearInterval(myTimer)
// }, 2000)
