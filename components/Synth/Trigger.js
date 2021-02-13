import React, { useState } from 'react'
import * as Tone from 'tone'

export default function Trigger(props) {

    //determines whether button is active (very brief just to show animation)
    const [active, setActive] = useState(false)

    //make button blink, then fire patch()
    const handleClick = (e) => {
        if (!active){
            setActive(true)
            setTimeout(() => {setActive(false)}, 200)
            patch()
        }
    }

    //compile all data to make final sound
    function patch(){
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


        //if there are no effects, send the audio directly to destination
        if (props.synth.length === 0){
            synth.connect(Tone.getDestination())
        }

        //following conditionals test to see if corresponding effect is in synth state, if it is, create that module and add it to the chain
        if (props.synth.includes('reverb')){
            console.log('contains reverb!')
            const reverb = new Tone.Reverb("2").toDestination()
            synth.connect(reverb)
        }

        if (props.synth.includes('filter')){
            console.log('props.filter: ', props.filter)
            let filter
            if (props.filter === 'lowpass'){
                filter = new Tone.OnePoleFilter('300', 'lowpass').toDestination()
            } else if (props.filter === 'highpass'){
                filter = new Tone.OnePoleFilter('1200', 'highpass').toDestination()
            }
            synth.connect(filter)
        }  

        if (props.synth.includes('phaser')){
            const phaser = new Tone.Phaser({
            "frequency" : 15,
            "octaves" : 6,
            "baseFrequency" : 1000})
            .toDestination()
            synth.connect(phaser)
        }

        if (props.synth.includes('delay')){
            const delay = new Tone.FeedbackDelay("8n", 0.5).toDestination()
            synth.connect(delay)
        }
        //trigger a note for a specified duration
        // synth.triggerAttackRelease("C4", "8n")
        synth.triggerAttackRelease("D2", "8n")
    }


    return (
        //this just fires off a quick flash to indicate that the button was clicked
        <div className={active ? 'act-trig' : 'inac-trig'} onClick={handleClick}>
            
        </div>
    )
}