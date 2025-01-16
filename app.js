//https://github.com/martinlaxenaire/curtainsjs/blob/master/examples/multiple-textures/js/multiple.textures.setup.js
const parceled = true
import { getGPUTier } from 'detect-gpu'

import anime from 'animejs/lib/anime.es.js'
import _, { clamp } from 'lodash'
import ThreeD from './threejs/ThreeD.js'
import scrollToId from './threejs/scrollToId.js'
import animTimeline from './threejs/timeline.js'

import contactTabClick from '/animations/contactTabClick.js'
import formTab from '/animations/formTab.js'
import preloaderAnime from '/animations/preloader.js'
import smoothScroll from '/animations/smoothScroll.js'
import btnHover from '/animations/btnHover.js'
import titleFadeIn from '/animations/titleFadeIn.js'
import articleClick from '/animations/articleClick.js'
import gradientHeight from '/animations/gradientHeight.js'

class App {
    constructor(tier) {
        this.timeline = new animTimeline()
        this.tier = tier
        this.mouse = { x: 0.5, y: 0.5 }
        this.mse = { x: 0, y: 0 }
        this.container = document.querySelector('.scrolldom')
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
        this.timeline.init()
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
        this.timeline.init()
        this.scroll.value = this.normY * (this.contHeight - this.height)
        this.y = this.scroll.value
        this.container.scrollTop = this.scroll.value
        this.onScroll()
    }

    onLoaded() {
        //this.container.style.height = '100%'
        //this.container.style.overflow = 'hidden'

        // this.stats = new Stats();
        // this.stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
        // this.stats.dom.classList.add('stats');
        // document.body.appendChild( this.stats.dom );
        this.timeline.init()

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

        //    this.threeD.setPos(this.origin)

        window.addEventListener('resize', () => {
            _resize()
        })

        window.visualViewport.addEventListener('resize', () => {
            _resize()
        })

        // let observer = new ResizeObserver(() => {
        //     _resize()
        // })

        //REMOVED stores location when changing pages
        // window.addEventListener('popstate', (event) => {
        //     this.storeScroll()
        // })

        // document.querySelectorAll('a').forEach((e) => {
        //     e.addEventListener('mouseenter', ()=>{
        //         this.impulses.morph = 1.5
        //     })

        //     e.addEventListener('mouseleave', () =>{
        //         this.impulses.morph = 1
        //     } )
        // })
    }

    // storeScroll() {
    //     let slug = window.location.pathname
    //     sessionStorage.setItem(`scroll-${slug}`, this.container.scrollTop)
    // }

    // monitorPerformance(delta) {
    //     //this.frames[this.frames.length] = delta
    //     this.frames.push(delta)
    //     if (this.frames.length >= 45) {
    //         let total = this.frames.reduce((acc, val) => acc + val)
    //         if (total / 45 > 1 / 30 && this.pixelRatio > 0.8) {
    //             let minus = total / 45 > 1 / 15 ? 0.15 : 0.1
    //             this.pixelRatio = this.pixelRatio - minus
    //             this.threeD.setPixelRatio(this.pixelRatio)
    //         }

    //         if (this.pixelRatio < 0.85 && this.hasText) {
    //             this.removeText()
    //         }

    //         this.frames = []
    //     }
    // }

    // getDelta() {
    //     let delta = (performance.now() - this.lastFrame) / 1000
    //     delta = delta > 1.0 ? 1.0 : delta
    //     this.lastFrame = performance.now()
    //     this.monitorPerformance(delta)
    //     return delta
    // }

    onScroll(e) {
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

const onLoading = () => {
    gradientHeight()
}

const onReady = async () => {
    preloaderAnime()
    contactTabClick()
    formTab()
    smoothScroll()
    btnHover()
    titleFadeIn()
    articleClick()

    let GPUTier = await getGPUTier()

    //GPUTier.tier = 0

    if (GPUTier.tier > 0) {
        // create curtains instance
        const app = new App(GPUTier)
        app.init()
    } else {
        //scrollToId()
    }
}

if (document.readyState !== 'loading') {
    onReady()
} else {
    //window.addEventListener("load", onReady);
    document.addEventListener('DOMContentLoaded', onLoading)
    document.addEventListener('DOMContentLoaded', onReady)
}
