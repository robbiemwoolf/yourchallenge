import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import './goal.css'
import challenges from './challenges'
import { OneHook, TwoHook, ThreeHook, FourHook, FiveHook, SixHook, StreakHook, BaseOneHook, ChoiceOneHook, TextOneHook, BaseTwoHook, ChoiceTwoHook, TextTwoHook, BaseThreeHook, ChoiceThreeHook, TextThreeHook, BaseFourHook, ChoiceFourHook, TextFourHook, BaseFiveHook, ChoiceFiveHook, TextFiveHook, BaseSixHook, ChoiceSixHook, TextSixHook } from './states'

// minified confetti code resource Coding Fire on YouTube (https://www.youtube.com/watch?v=quSR_ZrVz6Y)
// replace with custom confetti soon
let confetti={maxCount:150,speed:2,frameInterval:15,alpha:1,gradient:!1,start:null,stop:null,toggle:null,pause:null,resume:null,togglePause:null,remove:null,isPaused:null,isRunning:null};!function(){confetti.start=s,confetti.stop=w,confetti.toggle=function(){e?w():s()},confetti.pause=u,confetti.resume=m,confetti.togglePause=function(){i?m():u()},confetti.isPaused=function(){return i},confetti.remove=function(){stop(),i=!1,a=[]},confetti.isRunning=function(){return e};var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,n=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],e=!1,i=!1,o=Date.now(),a=[],r=0,l=null;function d(t,e,i){return t.color=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.color2=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.x=Math.random()*e,t.y=Math.random()*i-i,t.diameter=10*Math.random()+5,t.tilt=10*Math.random()-10,t.tiltAngleIncrement=.07*Math.random()+.05,t.tiltAngle=Math.random()*Math.PI,t}function u(){i=!0}function m(){i=!1,c()}function c(){if(!i)if(0===a.length)l.clearRect(0,0,window.innerWidth,window.innerHeight),null;else{var n=Date.now(),u=n-o;(!t||u>confetti.frameInterval)&&(l.clearRect(0,0,window.innerWidth,window.innerHeight),function(){var t,n=window.innerWidth,i=window.innerHeight;r+=.01;for(var o=0;o<a.length;o++)t=a[o],!e&&t.y<-15?t.y=i+100:(t.tiltAngle+=t.tiltAngleIncrement,t.x+=Math.sin(r)-.5,t.y+=.5*(Math.cos(r)+t.diameter+confetti.speed),t.tilt=15*Math.sin(t.tiltAngle)),(t.x>n+20||t.x<-20||t.y>i)&&(e&&a.length<=confetti.maxCount?d(t,n,i):(a.splice(o,1),o--))}(),function(t){for(var n,e,i,o,r=0;r<a.length;r++){if(n=a[r],t.beginPath(),t.lineWidth=n.diameter,i=n.x+n.tilt,e=i+n.diameter/2,o=n.y+n.tilt+n.diameter/2,confetti.gradient){var l=t.createLinearGradient(e,n.y,i,o);l.addColorStop("0",n.color),l.addColorStop("1.0",n.color2),t.strokeStyle=l}else t.strokeStyle=n.color;t.moveTo(e,n.y),t.lineTo(i,o),t.stroke()}}(l),o=n-u%confetti.frameInterval),requestAnimationFrame(c)}}function s(t,n,o){var r=window.innerWidth,u=window.innerHeight;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,confetti.frameInterval)};var m=document.getElementById("confetti-canvas");null===m?((m=document.createElement("canvas")).setAttribute("id","confetti-canvas"),m.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(m),m.width=r,m.height=u,window.addEventListener("resize",function(){m.width=window.innerWidth,m.height=window.innerHeight},!0),l=m.getContext("2d")):null===l&&(l=m.getContext("2d"));var s=confetti.maxCount;if(n)if(o)if(n==o)s=a.length+o;else{if(n>o){var f=n;n=o,o=f}s=a.length+(Math.random()*(o-n)+n|0)}else s=a.length+n;else o&&(s=a.length+o);for(;a.length<s;)a.push(d({},r,u));e=!0,i=!1,c(),t&&window.setTimeout(w,t)}function w(){e=!1}}();

function ChoiceOne({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}
function ChoiceTwo({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}
function ChoiceThree({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}
function ChoiceFour({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}
function ChoiceFive({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}
function ChoiceSix({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}



function Body() {
    // states
    const { oneDone, setOneDone } = OneHook()
    const { twoDone, setTwoDone } = TwoHook()
    const { threeDone, setThreeDone } = ThreeHook()
    const { fourDone, setFourDone } = FourHook()
    const { fiveDone, setFiveDone } = FiveHook()
    const { sixDone, setSixDone } = SixHook()
    const { streak, setStreak } = StreakHook()
    const { displayOne, setDisplayOne } = BaseOneHook()
    const { displayChoiceOne, setDisplayChoiceOne } = ChoiceOneHook()
    const { textOne, setTextOne } = TextOneHook()
    const { displayTwo, setDisplayTwo } = BaseTwoHook()
    const { displayChoiceTwo, setDisplayChoiceTwo } = ChoiceTwoHook()
    const { textTwo, setTextTwo } = TextTwoHook()
    const { displayThree, setDisplayThree } = BaseThreeHook()
    const { displayChoiceThree, setDisplayChoiceThree } = ChoiceThreeHook()
    const { textThree, setTextThree } = TextThreeHook()
    const { displayFour, setDisplayFour } = BaseFourHook()
    const { displayChoiceFour, setDisplayChoiceFour } = ChoiceFourHook()
    const { textFour, setTextFour } = TextFourHook()
    const { displayFive, setDisplayFive } = BaseFiveHook()
    const { displayChoiceFive, setDisplayChoiceFive } = ChoiceFiveHook()
    const { textFive, setTextFive } = TextFiveHook()
    const { displaySix, setDisplaySix } = BaseSixHook()
    const { displayChoiceSix, setDisplayChoiceSix } = ChoiceSixHook()
    const { textSix, setTextSix } = TextSixHook()

    // increase streak total and reset goal states
    const incCounter = () => {
        if (oneDone && twoDone && threeDone && fourDone && fiveDone && sixDone) {
            console.log('All goals complete! Increasing streak!')
            
            confetti.stop()

            setStreak((streak) => streak + 1)
            setOneDone(false)
            setTwoDone(false)
            setThreeDone(false)
            setFourDone(false)
            setFiveDone(false)
            setSixDone(false)
        }
    }

    // setItem
    useEffect(() => {
        window.localStorage.setItem('oneDone', JSON.stringify(oneDone))
    }, [oneDone])
    useEffect(() => {
        window.localStorage.setItem('twoDone', JSON.stringify(twoDone))
    }, [twoDone])
    useEffect(() => {
        window.localStorage.setItem('threeDone', JSON.stringify(threeDone))
    }, [threeDone])
    useEffect(() => {
        window.localStorage.setItem('fourDone', JSON.stringify(fourDone))
    }, [fourDone])
    useEffect(() => {
        window.localStorage.setItem('fiveDone', JSON.stringify(fiveDone))
    }, [fiveDone])
    useEffect(() => {
        window.localStorage.setItem('sixDone', JSON.stringify(sixDone))
    }, [sixDone])
    useEffect(() => {
        window.localStorage.setItem('streak', JSON.stringify(streak))
    }, [streak])

    // click handlers
    const handleCounterOnClick = () => {
        console.log('path: ', window.location.pathname)
        console.log('Clicked header button to attempt increase in streak total.')
        incCounter()
    }

    const handleBaseOneClick = () => {
        setDisplayOne(false)
        setDisplayChoiceOne(true)
    }
    const handleBaseTwoClick = () => {
        setDisplayTwo(false)
        setDisplayChoiceTwo(true)
    }
    const handleBaseThreeClick = () => {
        setDisplayThree(false)
        setDisplayChoiceThree(true)
    }
    const handleBaseFourClick = () => {
        setDisplayFour(false)
        setDisplayChoiceFour(true)
    }
    const handleBaseFiveClick = () => {
        setDisplayFive(false)
        setDisplayChoiceFive(true)
    }
    const handleBaseSixClick = () => {
        setDisplaySix(false)
        setDisplayChoiceSix(true)
    }

    // show rule handlers
    function handleRuleOneClick() {
        setTextOne(challenges[0].rules[0].description)
        setDisplayChoiceOne(false)
        setDisplayOne(true)
    }
    function handleRuleTwoClick() {
        setTextTwo(challenges[0].rules[1].description)
        setDisplayChoiceTwo(false)
        setDisplayTwo(true)
    }
    function handleRuleThreeClick() {
        setTextThree(challenges[0].rules[2].description)
        setDisplayChoiceThree(false)
        setDisplayThree(true)
    }
    function handleRuleFourClick() {
        setTextFour(challenges[0].rules[3].description)
        setDisplayChoiceFour(false)
        setDisplayFour(true)
    }
    function handleRuleFiveClick() {
        setTextFive(challenges[0].rules[4].description)
        setDisplayChoiceFive(false)
        setDisplayFive(true)
    }
    function handleRuleSixClick() {
        setTextSix(challenges[0].rules[5].description)
        setDisplayChoiceSix(false)
        setDisplaySix(true)
    }
    
    // cancels
    function handleCancelOne() {
        setOneDone(false)
        setTextOne("")
        setDisplayChoiceOne(false)
        setDisplayOne(true)
    }
    function handleCancelTwo() {
        setTwoDone(false)
        setTextTwo("")
        setDisplayChoiceTwo(false)
        setDisplayTwo(true)
    }
    function handleCancelThree() {
        setThreeDone(false)
        setTextThree("")
        setDisplayChoiceThree(false)
        setDisplayThree(true)
    }
    function handleCancelFour() {
        setFourDone(false)
        setTextFour("")
        setDisplayChoiceFour(false)
        setDisplayFour(true)
    }
    function handleCancelFive() {
        setFiveDone(false)
        setTextFive("")
        setDisplayChoiceFive(false)
        setDisplayFive(true)
    }
    function handleCancelSix() {
        setSixDone(false)
        setTextSix("")
        setDisplayChoiceSix(false)
        setDisplaySix(true)
    }
    

    // completes
    function handleOneCompleted() {
        setOneDone(true)
        setTextOne("")
        setDisplayChoiceOne(false)
        setDisplayOne(true)
    }
    function handleTwoCompleted() {
        setTwoDone(true)
        setTextTwo("")
        setDisplayChoiceTwo(false)
        setDisplayTwo(true)
    }
    function handleThreeCompleted() {
        setThreeDone(true)
        setTextThree("")
        setDisplayChoiceThree(false)
        setDisplayThree(true)
    }
    function handleFourCompleted() {
        setFourDone(true)
        setTextFour("")
        setDisplayChoiceFour(false)
        setDisplayFour(true)
    }
    function handleFiveCompleted() {
        setFiveDone(true)
        setTextFive("")
        setDisplayChoiceFive(false)
        setDisplayFive(true)
    }
    function handleSixCompleted() {
        setSixDone(true)
        setTextSix("")
        setDisplayChoiceSix(false)
        setDisplaySix(true)
    }

    if (oneDone && twoDone && threeDone && fourDone && fiveDone && sixDone) {
        confetti.start()
    }

    // toggle streak animation
    const streakToggle = (oneDone && twoDone && threeDone && fourDone && fiveDone && sixDone) ? 'inc' : null

    // toggle 'done' class
    const toggleOne = oneDone ? 'done' : null
    const toggleTwo = twoDone ? 'done' : null
    const toggleThree = threeDone ? 'done' : null
    const toggleFour = fourDone ? 'done' : null
    const toggleFive = fiveDone ? 'done' : null
    const toggleSix = sixDone ? 'done' : null

    // toggle 'ruleText' class
    const toggleRuleOne = textOne ? 'ruleText' : null
    const toggleRuleTwo = textTwo ? 'ruleText' : null
    const toggleRuleThree = textThree ? 'ruleText' : null
    const toggleRuleFour = textFour ? 'ruleText' : null
    const toggleRuleFive = textFive ? 'ruleText' : null
    const toggleRuleSix = textSix ? 'ruleText' : null

    const handleReset = () => {
        if ( window.confirm("You are about to reset your streak total.")) {
            setOneDone(false)
            setTwoDone(false)
            setThreeDone(false)
            setFourDone(false)
            setFiveDone(false)
            setSixDone(false)
            setStreak(1)
            console.log('streak reset')
        } else {
            console.log('cancelled reset')
        }
    }

    return (
        <>
            <Link to={`/`} style={{ textDecoration: 'none' }} onClick={handleCounterOnClick}>
                <button className={`header ${streakToggle}`}>Your Challenge<br />{streak}/{challenges[0].length}</button>
            </Link>
            <div className='body'>
                <div>
                    {displayOne ? 
                    <button className={`base oneLogo ${toggleOne}`} onClick={handleBaseOneClick}><p className={`${toggleRuleOne}`}>{textOne}</p></button> 
                    : null}
                    {displayChoiceOne ? <ChoiceOne handleRuleClick={handleRuleOneClick} handleClick={handleOneCompleted} handleCancel={handleCancelOne} /> : null}
                </div>
                <div>
                    {displayTwo ? 
                    <button className={`base twoLogo ${toggleTwo}`} onClick={handleBaseTwoClick}><p className={`${toggleRuleTwo}`}>{textTwo}</p></button> 
                    : null}
                    {displayChoiceTwo ? <ChoiceTwo handleRuleClick={handleRuleTwoClick} handleClick={handleTwoCompleted} handleCancel={handleCancelTwo} /> : null}
                </div>
                <div>
                    {displayThree ? 
                    <button className={`base threeLogo ${toggleThree}`} onClick={handleBaseThreeClick}><p className={`${toggleRuleThree}`}>{textThree}</p></button> 
                    : null}
                    {displayChoiceThree ? <ChoiceThree handleRuleClick={handleRuleThreeClick} handleClick={handleThreeCompleted} handleCancel={handleCancelThree} /> : null}
                </div>
                <div>
                    {displayFour ? 
                    <button className={`base fourLogo ${toggleFour}`} onClick={handleBaseFourClick}><p className={`${toggleRuleFour}`}>{textFour}</p></button> 
                    : null}
                    {displayChoiceFour ? <ChoiceFour handleRuleClick={handleRuleFourClick} handleClick={handleFourCompleted} handleCancel={handleCancelFour} /> : null}
                </div>
                <div>
                    {displayFive ? 
                    <button className={`base fiveLogo ${toggleFive}`} onClick={handleBaseFiveClick}><p className={`${toggleRuleFive}`}>{textFive}</p></button> 
                    : null}
                    {displayChoiceFive ? <ChoiceFive handleRuleClick={handleRuleFiveClick} handleClick={handleFiveCompleted} handleCancel={handleCancelFive} /> : null}
                </div>
                <div>
                    {displaySix ? 
                    <button className={`base sixLogo ${toggleSix}`} onClick={handleBaseSixClick}><p className={`${toggleRuleSix}`}>{textSix}</p></button> 
                    : null}
                    {displayChoiceSix ? <ChoiceSix handleRuleClick={handleRuleSixClick} handleClick={handleSixCompleted} handleCancel={handleCancelSix} /> : null}
                </div>
            </div>
            <div className='footer'>
                <button className='reset' onClick={handleReset}>Reset</button>
                <Link to={`rules`} className='navRulePage' style={{ textDecoration: 'none' }}><button className="rulePage">Rules</button></Link>
            </div>
        </>
    )
}

export default Body