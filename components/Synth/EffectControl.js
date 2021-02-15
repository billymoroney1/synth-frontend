
export default function EffectControl(props) {
    
    //toggle effect on off
    const handleClick = (e) => {
        props.onOff(props.name)
    }
    
    //toggles classes for style
    return (
        <div className={props.status ? 'on-effect' : 'off-effect'} onClick={handleClick}>
            <p>{props.name}</p>
        </div>
    )
}