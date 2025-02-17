//https://github.com/martinlaxenaire/curtainsjs/blob/master/examples/multiple-textures/js/multiple.textures.setup.js
const parceled = true
import './styles/app.css'
import { getGPUTier } from 'detect-gpu'

import anime from 'animejs/lib/anime.es.js'
import _, { clamp } from 'lodash'
import ThreeD from './threejs/ThreeD.js'
import animTimeline from './threejs/timeline.js'

import initWebflowFunctions from './webflow/main.js'
import preloaderAnime from './webflow/animations/preloader.js'


class App {
    constructor(tier) {
        this.timeline = new animTimeline()
        this.tier = tier
        this.mouse = { x: 0.5, y: 0.5 }
        this.mse = { x: 0, y: 0 }
        //this.container = document.querySelector('#scrolldom')
        this.container = document.documentElement
        this.canvasContainer = document.querySelector('#canvas')
        this.contHeight = this.container.scrollHeight
        this.y = 0
        this.normY = 0
        this.canScroll = true
        this.height = window.innerHeight
        this.width = window.innerWidth

        // track scroll values
        this.scroll = {
            value: 0,
            lastValue: 0,
            effect: 0,
            delta: 0,
        }

        this.pixelRatio = Math.min(
            this.tier.tier > 1 ? 1 + this.tier.tier / 2 : 1,
            window.devicePixelRatio
        )
        this.maxRatio = window.devicePixelRatio
        this.threeD = new ThreeD(this.pixelRatio, this.tier, this)
    }

    init() {
        this.timeline.init(this.contHeight, this.height)
        this.onScroll()
        this.canvasContainer.style.height = `${this.height}px`
        this.threeD.init()
        this.onLoaded()
    }

    onResize() {
        this.height = window.innerHeight
        this.contHeight = this.container.scrollHeight
        this.width = window.innerWidth
        document.querySelector('#canvas').style.height = `${this.height}px`
        anime.set({
            targets: this.container,
            opacity: 1,
        })
        this.y = 0
        this.scroll.value = 0
        this.container.scrollTop = this.scroll.value
        this.threeD.onWindowResize()
        this.timeline.init(this.contHeight, this.height)
        this.scroll.value = this.normY * (this.contHeight - this.height)
        this.y = this.scroll.value
        this.container.scrollTop = this.scroll.value
        this.onScroll()
    }

    onLoaded() {
        this.timeline.init(this.contHeight, this.height)

        let _mouse = _.throttle(this.mouseEvent.bind(this), 16, {
            trailing: true,
            leading: true,
        })
        let _resize = _.debounce(() => this.onResize(), 100, { trailing: true })
        let _scroll = _.throttle(this.onScroll.bind(this), 16, {
            trailing: true,
            leading: true,
        })

        document.addEventListener('mousemove', _mouse.bind(this), false)
        window.addEventListener('scroll', _scroll.bind(this), false)

        window.addEventListener('resize', () => {
            _resize()
        })

        window.visualViewport.addEventListener('resize', () => {
            _resize()
        })
    }

    onScroll() {
        if (this.canScroll) {
            this.y = document.documentElement.scrollTop || window.scrollY
            this.y = clamp(this.y, 0, this.contHeight - this.height)
        }
    }

    getTimelineValues() {
        this.normY = this.y / (this.contHeight - this.height)
        return this.timeline.getVals(this.normY)
    }

    mouseEvent(event) {
        //event.preventDefault();
        this.mouse.x = (event.clientX / this.width) * 2 - 1
        this.mouse.y = -(event.clientY / this.height) * 2 + 1
        this.mse.x = event.clientX
        this.mse.y = event.clientY
        this.threeD.onMouseMove(this.mouse.x, this.mouse.y)
    }
}

// function isIpadPro() {
//     return (
//         /iPad|Macintosh/.test(navigator.userAgent) &&
//         'ontouchend' in document &&
//         screen.width >= 991
//     )
// }

const onReady = async () => {
    //Initialize all custom js functions used in webflow
    initWebflowFunctions()
    window.addEventListener('resize', preloaderAnime);

    let GPUTier = await getGPUTier()

    // Turns on canvas for all devices
    const app = new App(GPUTier)
    app.init()

    // Turns on canvas only for desktop & ipad pro
    // if (
    //     (GPUTier.tier > 0 && !GPUTier.isMobile) || isIpadPro())
    // ) {
    //     // create curtains instance
    //     const app = new App(GPUTier)
    //     app.init()
    // } else {
    //     console.log("You've a ** machine. Upgrade now")
    // }
}

if (document.readyState !== 'loading') {
    onReady()
} else {
    document.addEventListener('DOMContentLoaded', onReady)

}
