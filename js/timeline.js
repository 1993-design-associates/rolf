import { getCoord } from "./utils"
import anime from "animejs"

class animTimeline {
    constructor() {
        this.axes = {
            x: 0,
            y: 0,
            size: 0,
            step: 0,
            opacity: 0
        }
    }

    init(){
        
        let frames = [...document.querySelectorAll('[step]')].map(el => {
            return {el: el, coord: getCoord(el)}
        })
        this.axes = frames[0] ? {
            x: frames[0].coord.x,
            y: frames[0].coord.y,
            size: frames[0].coord.size,
            step: frames[0].coord.step,
            opacity: frames[0].coord.opacity,
        } : this.axes

        let timeline = anime.timeline({
            targets: this.axes,
            easing: "linear",
            autoplay:false,
            loop: false
        })


        frames.length > 0 && frames.forEach((frame, index)=>{

            let previousTime = index > 0 ? frames[index - 1].coord.keyframe : 0
            let duration = index > 0 ? frame.coord.keyframe - frames[index - 1].coord.keyframe : 0.00001
            timeline.add({
                x: frame.coord.x,
                y: frame.coord.y,
                size: frame.coord.size,
                step: frame.coord.step,
                opacity: frame?.coord?.opacity || 0,
                duration: duration,
                easing: frame.coord.easing
            }, previousTime)
        })

        timeline.add({
            duration: 0.00001
        }, this.contHeight - this.height - 0.00001)
        this.timeline = timeline
    }

    getVals(yScroll){
        if(!this.timeline) return this.axes
        this.timeline.seek(this.timeline.duration * yScroll)
        return this.axes
    }
}

export default animTimeline