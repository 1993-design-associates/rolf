// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

;(function (modules, entry, mainEntry, parcelRequireName, globalName) {
    /* eslint-disable no-undef */
    var globalObject =
        typeof globalThis !== 'undefined'
            ? globalThis
            : typeof self !== 'undefined'
              ? self
              : typeof window !== 'undefined'
                ? window
                : typeof global !== 'undefined'
                  ? global
                  : {}
    /* eslint-enable no-undef */

    // Save the require from previous bundle to this closure if any
    var previousRequire =
        typeof globalObject[parcelRequireName] === 'function' &&
        globalObject[parcelRequireName]

    var cache = previousRequire.cache || {}
    // Do not use `require` to prevent Webpack from trying to bundle this call
    var nodeRequire =
        typeof module !== 'undefined' &&
        typeof module.require === 'function' &&
        module.require.bind(module)

    function newRequire(name, jumped) {
        if (!cache[name]) {
            if (!modules[name]) {
                // if we cannot find the module within our internal map or
                // cache jump to the current global require ie. the last bundle
                // that was added to the page.
                var currentRequire =
                    typeof globalObject[parcelRequireName] === 'function' &&
                    globalObject[parcelRequireName]
                if (!jumped && currentRequire) {
                    return currentRequire(name, true)
                }

                // If there are other bundles on this page the require from the
                // previous one is saved to 'previousRequire'. Repeat this as
                // many times as there are bundles until the module is found or
                // we exhaust the require chain.
                if (previousRequire) {
                    return previousRequire(name, true)
                }

                // Try the node require function if it exists.
                if (nodeRequire && typeof name === 'string') {
                    return nodeRequire(name)
                }

                var err = new Error("Cannot find module '" + name + "'")
                err.code = 'MODULE_NOT_FOUND'
                throw err
            }

            localRequire.resolve = resolve
            localRequire.cache = {}

            var module = (cache[name] = new newRequire.Module(name))

            modules[name][0].call(
                module.exports,
                localRequire,
                module,
                module.exports,
                globalObject
            )
        }

        return cache[name].exports

        function localRequire(x) {
            var res = localRequire.resolve(x)
            return res === false ? {} : newRequire(res)
        }

        function resolve(x) {
            var id = modules[name][1][x]
            return id != null ? id : x
        }
    }

    function Module(moduleName) {
        this.id = moduleName
        this.bundle = newRequire
        this.exports = {}
    }

    newRequire.isParcelRequire = true
    newRequire.Module = Module
    newRequire.modules = modules
    newRequire.cache = cache
    newRequire.parent = previousRequire
    newRequire.register = function (id, exports) {
        modules[id] = [
            function (require, module) {
                module.exports = exports
            },
            {},
        ]
    }

    Object.defineProperty(newRequire, 'root', {
        get: function () {
            return globalObject[parcelRequireName]
        },
    })

    globalObject[parcelRequireName] = newRequire

    for (var i = 0; i < entry.length; i++) {
        newRequire(entry[i])
    }

    if (mainEntry) {
        // Expose entry point to Node, AMD or browser globals
        // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        var mainExports = newRequire(mainEntry)

        // CommonJS
        if (typeof exports === 'object' && typeof module !== 'undefined') {
            module.exports = mainExports

            // RequireJS
        } else if (typeof define === 'function' && define.amd) {
            define(function () {
                return mainExports
            })

            // <script>
        } else if (globalName) {
            this[globalName] = mainExports
        }
    }
})(
    {
        cKO3M: [
            function (require, module, exports, __globalThis) {
                var global = arguments[3]
                var HMR_HOST = null
                var HMR_PORT = 50619
                var HMR_SECURE = false
                var HMR_ENV_HASH = 'd6ea1d42532a7575'
                var HMR_USE_SSE = false
                module.bundle.HMR_BUNDLE_ID = '85e6079917787fcb'
                ;('use strict')
                /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__'
                var OldModule = module.bundle.Module
                function Module(moduleName) {
                    OldModule.call(this, moduleName)
                    this.hot = {
                        data: module.bundle.hotData[moduleName],
                        _acceptCallbacks: [],
                        _disposeCallbacks: [],
                        accept: function (fn) {
                            this._acceptCallbacks.push(fn || function () {})
                        },
                        dispose: function (fn) {
                            this._disposeCallbacks.push(fn)
                        },
                    }
                    module.bundle.hotData[moduleName] = undefined
                }
                module.bundle.Module = Module
                module.bundle.hotData = {}
                var checkedAssets /*: {|[string]: boolean|} */,
                    disposedAssets /*: {|[string]: boolean|} */,
                    assetsToDispose /*: Array<[ParcelRequire, string]> */,
                    assetsToAccept /*: Array<[ParcelRequire, string]> */
                function getHostname() {
                    return (
                        HMR_HOST ||
                        (location.protocol.indexOf('http') === 0
                            ? location.hostname
                            : 'localhost')
                    )
                }
                function getPort() {
                    return HMR_PORT || location.port
                }
                // eslint-disable-next-line no-redeclare
                var parent = module.bundle.parent
                if (
                    (!parent || !parent.isParcelRequire) &&
                    typeof WebSocket !== 'undefined'
                ) {
                    var hostname = getHostname()
                    var port = getPort()
                    var protocol =
                        HMR_SECURE ||
                        (location.protocol == 'https:' &&
                            !['localhost', '127.0.0.1', '0.0.0.0'].includes(
                                hostname
                            ))
                            ? 'wss'
                            : 'ws'
                    var ws
                    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr')
                    else
                        try {
                            ws = new WebSocket(
                                protocol +
                                    '://' +
                                    hostname +
                                    (port ? ':' + port : '') +
                                    '/'
                            )
                        } catch (err) {
                            if (err.message) console.error(err.message)
                            ws = {}
                        }
                    // Web extension context
                    var extCtx =
                        typeof browser === 'undefined'
                            ? typeof chrome === 'undefined'
                                ? null
                                : chrome
                            : browser
                    // Safari doesn't support sourceURL in error stacks.
                    // eval may also be disabled via CSP, so do a quick check.
                    var supportsSourceURL = false
                    try {
                        ;(0, eval)(
                            'throw new Error("test"); //# sourceURL=test.js'
                        )
                    } catch (err) {
                        supportsSourceURL = err.stack.includes('test.js')
                    }
                    // $FlowFixMe
                    ws.onmessage = async function (
                        event /*: {data: string, ...} */
                    ) {
                        checkedAssets = {} /*: {|[string]: boolean|} */
                        disposedAssets = {} /*: {|[string]: boolean|} */
                        assetsToAccept = []
                        assetsToDispose = []
                        var data /*: HMRMessage */ = JSON.parse(event.data)
                        if (data.type === 'reload') fullReload()
                        else if (data.type === 'update') {
                            // Remove error overlay if there is one
                            if (typeof document !== 'undefined')
                                removeErrorOverlay()
                            let assets = data.assets.filter(
                                (asset) => asset.envHash === HMR_ENV_HASH
                            )
                            // Handle HMR Update
                            let handled = assets.every((asset) => {
                                return (
                                    asset.type === 'css' ||
                                    (asset.type === 'js' &&
                                        hmrAcceptCheck(
                                            module.bundle.root,
                                            asset.id,
                                            asset.depsByBundle
                                        ))
                                )
                            })
                            if (handled) {
                                console.clear()
                                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                                if (
                                    typeof window !== 'undefined' &&
                                    typeof CustomEvent !== 'undefined'
                                )
                                    window.dispatchEvent(
                                        new CustomEvent('parcelhmraccept')
                                    )
                                await hmrApplyUpdates(assets)
                                hmrDisposeQueue()
                                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                                let processedAssets = {}
                                for (
                                    let i = 0;
                                    i < assetsToAccept.length;
                                    i++
                                ) {
                                    let id = assetsToAccept[i][1]
                                    if (!processedAssets[id]) {
                                        hmrAccept(assetsToAccept[i][0], id)
                                        processedAssets[id] = true
                                    }
                                }
                            } else fullReload()
                        }
                        if (data.type === 'error') {
                            // Log parcel errors to console
                            for (let ansiDiagnostic of data.diagnostics.ansi) {
                                let stack = ansiDiagnostic.codeframe
                                    ? ansiDiagnostic.codeframe
                                    : ansiDiagnostic.stack
                                console.error(
                                    '\uD83D\uDEA8 [parcel]: ' +
                                        ansiDiagnostic.message +
                                        '\n' +
                                        stack +
                                        '\n\n' +
                                        ansiDiagnostic.hints.join('\n')
                                )
                            }
                            if (typeof document !== 'undefined') {
                                // Render the fancy html overlay
                                removeErrorOverlay()
                                var overlay = createErrorOverlay(
                                    data.diagnostics.html
                                )
                                // $FlowFixMe
                                document.body.appendChild(overlay)
                            }
                        }
                    }
                    if (ws instanceof WebSocket) {
                        ws.onerror = function (e) {
                            if (e.message) console.error(e.message)
                        }
                        ws.onclose = function () {
                            console.warn(
                                '[parcel] \uD83D\uDEA8 Connection to the HMR server was lost'
                            )
                        }
                    }
                }
                function removeErrorOverlay() {
                    var overlay = document.getElementById(OVERLAY_ID)
                    if (overlay) {
                        overlay.remove()
                        console.log('[parcel] \u2728 Error resolved')
                    }
                }
                function createErrorOverlay(diagnostics) {
                    var overlay = document.createElement('div')
                    overlay.id = OVERLAY_ID
                    let errorHTML =
                        '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">'
                    for (let diagnostic of diagnostics) {
                        let stack = diagnostic.frames.length
                            ? diagnostic.frames.reduce((p, frame) => {
                                  return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`
                              }, '')
                            : diagnostic.stack
                        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint) => '<div>\uD83D\uDCA1 ' + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `
                    }
                    errorHTML += '</div>'
                    overlay.innerHTML = errorHTML
                    return overlay
                }
                function fullReload() {
                    if ('reload' in location) location.reload()
                    else if (extCtx && extCtx.runtime && extCtx.runtime.reload)
                        extCtx.runtime.reload()
                }
                function getParents(
                    bundle,
                    id
                ) /*: Array<[ParcelRequire, string]> */ {
                    var modules = bundle.modules
                    if (!modules) return []
                    var parents = []
                    var k, d, dep
                    for (k in modules)
                        for (d in modules[k][1]) {
                            dep = modules[k][1][d]
                            if (
                                dep === id ||
                                (Array.isArray(dep) &&
                                    dep[dep.length - 1] === id)
                            )
                                parents.push([bundle, k])
                        }
                    if (bundle.parent)
                        parents = parents.concat(getParents(bundle.parent, id))
                    return parents
                }
                function updateLink(link) {
                    var href = link.getAttribute('href')
                    if (!href) return
                    var newLink = link.cloneNode()
                    newLink.onload = function () {
                        if (link.parentNode !== null)
                            // $FlowFixMe
                            link.parentNode.removeChild(link)
                    }
                    newLink.setAttribute(
                        'href', // $FlowFixMe
                        href.split('?')[0] + '?' + Date.now()
                    )
                    // $FlowFixMe
                    link.parentNode.insertBefore(newLink, link.nextSibling)
                }
                var cssTimeout = null
                function reloadCSS() {
                    if (cssTimeout) return
                    cssTimeout = setTimeout(function () {
                        var links = document.querySelectorAll(
                            'link[rel="stylesheet"]'
                        )
                        for (var i = 0; i < links.length; i++) {
                            // $FlowFixMe[incompatible-type]
                            var href /*: string */ =
                                links[i].getAttribute('href')
                            var hostname = getHostname()
                            var servedFromHMRServer =
                                hostname === 'localhost'
                                    ? new RegExp(
                                          '^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' +
                                              getPort()
                                      ).test(href)
                                    : href.indexOf(hostname + ':' + getPort())
                            var absolute =
                                /^https?:\/\//i.test(href) &&
                                href.indexOf(location.origin) !== 0 &&
                                !servedFromHMRServer
                            if (!absolute) updateLink(links[i])
                        }
                        cssTimeout = null
                    }, 50)
                }
                function hmrDownload(asset) {
                    if (asset.type === 'js') {
                        if (typeof document !== 'undefined') {
                            let script = document.createElement('script')
                            script.src = asset.url + '?t=' + Date.now()
                            if (asset.outputFormat === 'esmodule')
                                script.type = 'module'
                            return new Promise((resolve, reject) => {
                                var _document$head
                                script.onload = () => resolve(script)
                                script.onerror = reject
                                ;(_document$head = document.head) === null ||
                                    _document$head === void 0 ||
                                    _document$head.appendChild(script)
                            })
                        } else if (typeof importScripts === 'function') {
                            // Worker scripts
                            if (asset.outputFormat === 'esmodule')
                                return import(asset.url + '?t=' + Date.now())
                            else
                                return new Promise((resolve, reject) => {
                                    try {
                                        importScripts(
                                            asset.url + '?t=' + Date.now()
                                        )
                                        resolve()
                                    } catch (err) {
                                        reject(err)
                                    }
                                })
                        }
                    }
                }
                async function hmrApplyUpdates(assets) {
                    global.parcelHotUpdate = Object.create(null)
                    let scriptsToRemove
                    try {
                        // If sourceURL comments aren't supported in eval, we need to load
                        // the update from the dev server over HTTP so that stack traces
                        // are correct in errors/logs. This is much slower than eval, so
                        // we only do it if needed (currently just Safari).
                        // https://bugs.webkit.org/show_bug.cgi?id=137297
                        // This path is also taken if a CSP disallows eval.
                        if (!supportsSourceURL) {
                            let promises = assets.map((asset) => {
                                var _hmrDownload
                                return (_hmrDownload = hmrDownload(asset)) ===
                                    null || _hmrDownload === void 0
                                    ? void 0
                                    : _hmrDownload.catch((err) => {
                                          // Web extension fix
                                          if (
                                              extCtx &&
                                              extCtx.runtime &&
                                              extCtx.runtime.getManifest()
                                                  .manifest_version == 3 &&
                                              typeof ServiceWorkerGlobalScope !=
                                                  'undefined' &&
                                              global instanceof
                                                  ServiceWorkerGlobalScope
                                          ) {
                                              extCtx.runtime.reload()
                                              return
                                          }
                                          throw err
                                      })
                            })
                            scriptsToRemove = await Promise.all(promises)
                        }
                        assets.forEach(function (asset) {
                            hmrApply(module.bundle.root, asset)
                        })
                    } finally {
                        delete global.parcelHotUpdate
                        if (scriptsToRemove)
                            scriptsToRemove.forEach((script) => {
                                if (script) {
                                    var _document$head2
                                    ;(_document$head2 = document.head) ===
                                        null ||
                                        _document$head2 === void 0 ||
                                        _document$head2.removeChild(script)
                                }
                            })
                    }
                }
                function hmrApply(
                    bundle /*: ParcelRequire */,
                    asset /*:  HMRAsset */
                ) {
                    var modules = bundle.modules
                    if (!modules) return
                    if (asset.type === 'css') reloadCSS()
                    else if (asset.type === 'js') {
                        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID]
                        if (deps) {
                            if (modules[asset.id]) {
                                // Remove dependencies that are removed and will become orphaned.
                                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                                let oldDeps = modules[asset.id][1]
                                for (let dep in oldDeps)
                                    if (
                                        !deps[dep] ||
                                        deps[dep] !== oldDeps[dep]
                                    ) {
                                        let id = oldDeps[dep]
                                        let parents = getParents(
                                            module.bundle.root,
                                            id
                                        )
                                        if (parents.length === 1)
                                            hmrDelete(module.bundle.root, id)
                                    }
                            }
                            if (supportsSourceURL)
                                // Global eval. We would use `new Function` here but browser
                                // support for source maps is better with eval.
                                (0, eval)(asset.output)
                            // $FlowFixMe
                            let fn = global.parcelHotUpdate[asset.id]
                            modules[asset.id] = [fn, deps]
                        }
                        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
                        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
                        if (bundle.parent) hmrApply(bundle.parent, asset)
                    }
                }
                function hmrDelete(bundle, id) {
                    let modules = bundle.modules
                    if (!modules) return
                    if (modules[id]) {
                        // Collect dependencies that will become orphaned when this module is deleted.
                        let deps = modules[id][1]
                        let orphans = []
                        for (let dep in deps) {
                            let parents = getParents(
                                module.bundle.root,
                                deps[dep]
                            )
                            if (parents.length === 1) orphans.push(deps[dep])
                        }
                        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
                        delete modules[id]
                        delete bundle.cache[id]
                        // Now delete the orphans.
                        orphans.forEach((id) => {
                            hmrDelete(module.bundle.root, id)
                        })
                    } else if (bundle.parent) hmrDelete(bundle.parent, id)
                }
                function hmrAcceptCheck(
                    bundle /*: ParcelRequire */,
                    id /*: string */,
                    depsByBundle /*: ?{ [string]: { [string]: string } }*/
                ) {
                    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true
                    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
                    let parents = getParents(module.bundle.root, id)
                    let accepted = false
                    while (parents.length > 0) {
                        let v = parents.shift()
                        let a = hmrAcceptCheckOne(v[0], v[1], null)
                        if (a)
                            // If this parent accepts, stop traversing upward, but still consider siblings.
                            accepted = true
                        else {
                            // Otherwise, queue the parents in the next level upward.
                            let p = getParents(module.bundle.root, v[1])
                            if (p.length === 0) {
                                // If there are no parents, then we've reached an entry without accepting. Reload.
                                accepted = false
                                break
                            }
                            parents.push(...p)
                        }
                    }
                    return accepted
                }
                function hmrAcceptCheckOne(
                    bundle /*: ParcelRequire */,
                    id /*: string */,
                    depsByBundle /*: ?{ [string]: { [string]: string } }*/
                ) {
                    var modules = bundle.modules
                    if (!modules) return
                    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
                        // If we reached the root bundle without finding where the asset should go,
                        // there's nothing to do. Mark as "accepted" so we don't reload the page.
                        if (!bundle.parent) return true
                        return hmrAcceptCheck(bundle.parent, id, depsByBundle)
                    }
                    if (checkedAssets[id]) return true
                    checkedAssets[id] = true
                    var cached = bundle.cache[id]
                    assetsToDispose.push([bundle, id])
                    if (
                        !cached ||
                        (cached.hot && cached.hot._acceptCallbacks.length)
                    ) {
                        assetsToAccept.push([bundle, id])
                        return true
                    }
                }
                function hmrDisposeQueue() {
                    // Dispose all old assets.
                    for (let i = 0; i < assetsToDispose.length; i++) {
                        let id = assetsToDispose[i][1]
                        if (!disposedAssets[id]) {
                            hmrDispose(assetsToDispose[i][0], id)
                            disposedAssets[id] = true
                        }
                    }
                    assetsToDispose = []
                }
                function hmrDispose(
                    bundle /*: ParcelRequire */,
                    id /*: string */
                ) {
                    var cached = bundle.cache[id]
                    bundle.hotData[id] = {}
                    if (cached && cached.hot)
                        cached.hot.data = bundle.hotData[id]
                    if (
                        cached &&
                        cached.hot &&
                        cached.hot._disposeCallbacks.length
                    )
                        cached.hot._disposeCallbacks.forEach(function (cb) {
                            cb(bundle.hotData[id])
                        })
                    delete bundle.cache[id]
                }
                function hmrAccept(
                    bundle /*: ParcelRequire */,
                    id /*: string */
                ) {
                    // Execute the module.
                    bundle(id)
                    // Run the accept callbacks in the new version of the module.
                    var cached = bundle.cache[id]
                    if (
                        cached &&
                        cached.hot &&
                        cached.hot._acceptCallbacks.length
                    ) {
                        let assetsToAlsoAccept = []
                        cached.hot._acceptCallbacks.forEach(function (cb) {
                            let additionalAssets = cb(function () {
                                return getParents(module.bundle.root, id)
                            })
                            if (
                                Array.isArray(additionalAssets) &&
                                additionalAssets.length
                            )
                                assetsToAlsoAccept.push(...additionalAssets)
                        })
                        if (assetsToAlsoAccept.length) {
                            let handled = assetsToAlsoAccept.every(
                                function (a) {
                                    return hmrAcceptCheck(a[0], a[1])
                                }
                            )
                            if (!handled) return fullReload()
                            hmrDisposeQueue()
                        }
                    }
                }
            },
            {},
        ],
        k4aFc: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                var _exports = require('./exports')
                parcelHelpers.exportAll(_exports, exports)
                exports.default = _exports
            },
            {
                './exports': '30sYn',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '30sYn': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(exports, 'version', () => version)
                var _raw = require('./raw')
                var _math = require('./math')
                parcelHelpers.exportAll(_math, exports)
                var _dynamics = require('./dynamics')
                parcelHelpers.exportAll(_dynamics, exports)
                var _geometry = require('./geometry')
                parcelHelpers.exportAll(_geometry, exports)
                var _pipeline = require('./pipeline')
                parcelHelpers.exportAll(_pipeline, exports)
                var _init = require('./init')
                parcelHelpers.exportAll(_init, exports)
                var _control = require('./control')
                parcelHelpers.exportAll(_control, exports)
                function version() {
                    return (0, _raw.version)()
                }
            },
            {
                './raw': '7Eciy',
                './math': 'jE0Bx',
                './dynamics': 'gdK69',
                './geometry': 'emjBd',
                './pipeline': 'f2JEw',
                './init': '9JgNA',
                './control': '1ULl9',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '7Eciy': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                var _rapierWasm3D = require('./rapier_wasm3d')
                parcelHelpers.exportAll(_rapierWasm3D, exports)
            },
            {
                './rapier_wasm3d': 'iJvG8',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        iJvG8: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                var _rapierWasm3DBgWasm = require('./rapier_wasm3d_bg.wasm')
                var _rapierWasm3DBgJs = require('./rapier_wasm3d_bg.js')
                parcelHelpers.exportAll(_rapierWasm3DBgJs, exports)
                ;(0, _rapierWasm3DBgJs.__wbg_set_wasm)(_rapierWasm3DBgWasm)
            },
            {
                './rapier_wasm3d_bg.wasm': 'bDtEP',
                './rapier_wasm3d_bg.js': 'jcCPp',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        bDtEP: [
            function (require, module, exports, __globalThis) {
                module.exports =
                    require('c710b79d4fa1f587').getBundleURL('buJOa') +
                    'rapier_wasm3d_bg.c44a416b.wasm' +
                    '?' +
                    Date.now()
            },
            { c710b79d4fa1f587: 'lgJ39' },
        ],
        jcCPp: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(
                    exports,
                    '__wbg_set_wasm',
                    () => __wbg_set_wasm
                )
                /**
                 * @returns {string}
                 */ parcelHelpers.export(exports, 'version', () => version)
                parcelHelpers.export(
                    exports,
                    'RawFeatureType',
                    () => RawFeatureType
                )
                parcelHelpers.export(
                    exports,
                    'RawShapeType',
                    () => RawShapeType
                )
                parcelHelpers.export(
                    exports,
                    'RawJointAxis',
                    () => RawJointAxis
                )
                parcelHelpers.export(
                    exports,
                    'RawRigidBodyType',
                    () => RawRigidBodyType
                )
                parcelHelpers.export(
                    exports,
                    'RawMotorModel',
                    () => RawMotorModel
                )
                parcelHelpers.export(
                    exports,
                    'RawJointType',
                    () => RawJointType
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawBroadPhase',
                    () => RawBroadPhase
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawCCDSolver',
                    () => RawCCDSolver
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawCharacterCollision',
                    () => RawCharacterCollision
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawColliderSet',
                    () => RawColliderSet
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawColliderShapeCastHit',
                    () => RawColliderShapeCastHit
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawContactForceEvent',
                    () => RawContactForceEvent
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawContactManifold',
                    () => RawContactManifold
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawContactPair',
                    () => RawContactPair
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawDebugRenderPipeline',
                    () => RawDebugRenderPipeline
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawDeserializedWorld',
                    () => RawDeserializedWorld
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawDynamicRayCastVehicleController',
                    () => RawDynamicRayCastVehicleController
                )
                /**
                 * A structure responsible for collecting events generated
                 * by the physics engine.
                 */ parcelHelpers.export(
                    exports,
                    'RawEventQueue',
                    () => RawEventQueue
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawGenericJoint',
                    () => RawGenericJoint
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawImpulseJointSet',
                    () => RawImpulseJointSet
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawIntegrationParameters',
                    () => RawIntegrationParameters
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawIslandManager',
                    () => RawIslandManager
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawKinematicCharacterController',
                    () => RawKinematicCharacterController
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawMultibodyJointSet',
                    () => RawMultibodyJointSet
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawNarrowPhase',
                    () => RawNarrowPhase
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawPhysicsPipeline',
                    () => RawPhysicsPipeline
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawPointColliderProjection',
                    () => RawPointColliderProjection
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawPointProjection',
                    () => RawPointProjection
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawQueryPipeline',
                    () => RawQueryPipeline
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawRayColliderHit',
                    () => RawRayColliderHit
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawRayColliderIntersection',
                    () => RawRayColliderIntersection
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawRayIntersection',
                    () => RawRayIntersection
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawRigidBodySet',
                    () => RawRigidBodySet
                )
                /**
                 * A rotation quaternion.
                 */ parcelHelpers.export(
                    exports,
                    'RawRotation',
                    () => RawRotation
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawSdpMatrix3',
                    () => RawSdpMatrix3
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawSerializationPipeline',
                    () => RawSerializationPipeline
                )
                /**
                 */ parcelHelpers.export(exports, 'RawShape', () => RawShape)
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawShapeCastHit',
                    () => RawShapeCastHit
                )
                /**
                 */ parcelHelpers.export(
                    exports,
                    'RawShapeContact',
                    () => RawShapeContact
                )
                /**
                 * A vector.
                 */ parcelHelpers.export(exports, 'RawVector', () => RawVector)
                parcelHelpers.export(
                    exports,
                    '__wbindgen_number_new',
                    () => __wbindgen_number_new
                )
                parcelHelpers.export(
                    exports,
                    '__wbindgen_boolean_get',
                    () => __wbindgen_boolean_get
                )
                parcelHelpers.export(
                    exports,
                    '__wbindgen_object_drop_ref',
                    () => __wbindgen_object_drop_ref
                )
                parcelHelpers.export(
                    exports,
                    '__wbindgen_number_get',
                    () => __wbindgen_number_get
                )
                parcelHelpers.export(
                    exports,
                    '__wbindgen_is_function',
                    () => __wbindgen_is_function
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_rawraycolliderintersection_new',
                    () => __wbg_rawraycolliderintersection_new
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_rawcontactforceevent_new',
                    () => __wbg_rawcontactforceevent_new
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_call_b3ca7c6051f9bec1',
                    () => __wbg_call_b3ca7c6051f9bec1
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_call_8e7cb608789c2528',
                    () => __wbg_call_8e7cb608789c2528
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_call_938992c832f74314',
                    () => __wbg_call_938992c832f74314
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_bind_4d857b598695205e',
                    () => __wbg_bind_4d857b598695205e
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_buffer_12d079cc21e14bdb',
                    () => __wbg_buffer_12d079cc21e14bdb
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb',
                    () => __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_new_63b92bc8671ed464',
                    () => __wbg_new_63b92bc8671ed464
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_set_a47bac70306a19a7',
                    () => __wbg_set_a47bac70306a19a7
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_length_c20a40f15020d68a',
                    () => __wbg_length_c20a40f15020d68a
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_newwithbyteoffsetandlength_4a659d079a1650e0',
                    () => __wbg_newwithbyteoffsetandlength_4a659d079a1650e0
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_set_bd975934d1b1fddb',
                    () => __wbg_set_bd975934d1b1fddb
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_length_d25bbcbc3367f684',
                    () => __wbg_length_d25bbcbc3367f684
                )
                parcelHelpers.export(
                    exports,
                    '__wbg_newwithlength_1e8b839a06de01c5',
                    () => __wbg_newwithlength_1e8b839a06de01c5
                )
                parcelHelpers.export(
                    exports,
                    '__wbindgen_throw',
                    () => __wbindgen_throw
                )
                parcelHelpers.export(
                    exports,
                    '__wbindgen_memory',
                    () => __wbindgen_memory
                )
                let wasm
                function __wbg_set_wasm(val) {
                    wasm = val
                }
                const heap = new Array(128).fill(undefined)
                heap.push(undefined, null, true, false)
                let heap_next = heap.length
                function addHeapObject(obj) {
                    if (heap_next === heap.length) heap.push(heap.length + 1)
                    const idx = heap_next
                    heap_next = heap[idx]
                    heap[idx] = obj
                    return idx
                }
                function getObject(idx) {
                    return heap[idx]
                }
                function dropObject(idx) {
                    if (idx < 132) return
                    heap[idx] = heap_next
                    heap_next = idx
                }
                function takeObject(idx) {
                    const ret = getObject(idx)
                    dropObject(idx)
                    return ret
                }
                function isLikeNone(x) {
                    return x === undefined || x === null
                }
                let cachedFloat64Memory0 = null
                function getFloat64Memory0() {
                    if (
                        cachedFloat64Memory0 === null ||
                        cachedFloat64Memory0.byteLength === 0
                    )
                        cachedFloat64Memory0 = new Float64Array(
                            wasm.memory.buffer
                        )
                    return cachedFloat64Memory0
                }
                let cachedInt32Memory0 = null
                function getInt32Memory0() {
                    if (
                        cachedInt32Memory0 === null ||
                        cachedInt32Memory0.byteLength === 0
                    )
                        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer)
                    return cachedInt32Memory0
                }
                const lTextDecoder =
                    typeof TextDecoder === 'undefined'
                        ? (0, module.require)('util').TextDecoder
                        : TextDecoder
                let cachedTextDecoder = new lTextDecoder('utf-8', {
                    ignoreBOM: true,
                    fatal: true,
                })
                cachedTextDecoder.decode()
                let cachedUint8Memory0 = null
                function getUint8Memory0() {
                    if (
                        cachedUint8Memory0 === null ||
                        cachedUint8Memory0.byteLength === 0
                    )
                        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer)
                    return cachedUint8Memory0
                }
                function getStringFromWasm0(ptr, len) {
                    ptr = ptr >>> 0
                    return cachedTextDecoder.decode(
                        getUint8Memory0().subarray(ptr, ptr + len)
                    )
                }
                function version() {
                    let deferred1_0
                    let deferred1_1
                    try {
                        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16)
                        wasm.version(retptr)
                        var r0 = getInt32Memory0()[retptr / 4 + 0]
                        var r1 = getInt32Memory0()[retptr / 4 + 1]
                        deferred1_0 = r0
                        deferred1_1 = r1
                        return getStringFromWasm0(r0, r1)
                    } finally {
                        wasm.__wbindgen_add_to_stack_pointer(16)
                        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1)
                    }
                }
                function _assertClass(instance, klass) {
                    if (!(instance instanceof klass))
                        throw new Error(`expected instance of ${klass.name}`)
                    return instance.ptr
                }
                let cachedFloat32Memory0 = null
                function getFloat32Memory0() {
                    if (
                        cachedFloat32Memory0 === null ||
                        cachedFloat32Memory0.byteLength === 0
                    )
                        cachedFloat32Memory0 = new Float32Array(
                            wasm.memory.buffer
                        )
                    return cachedFloat32Memory0
                }
                let stack_pointer = 128
                function addBorrowedObject(obj) {
                    if (stack_pointer == 1) throw new Error('out of js stack')
                    heap[--stack_pointer] = obj
                    return stack_pointer
                }
                function getArrayF32FromWasm0(ptr, len) {
                    ptr = ptr >>> 0
                    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len)
                }
                let cachedUint32Memory0 = null
                function getUint32Memory0() {
                    if (
                        cachedUint32Memory0 === null ||
                        cachedUint32Memory0.byteLength === 0
                    )
                        cachedUint32Memory0 = new Uint32Array(
                            wasm.memory.buffer
                        )
                    return cachedUint32Memory0
                }
                function getArrayU32FromWasm0(ptr, len) {
                    ptr = ptr >>> 0
                    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len)
                }
                let WASM_VECTOR_LEN = 0
                function passArrayF32ToWasm0(arg, malloc) {
                    const ptr = malloc(arg.length * 4, 4) >>> 0
                    getFloat32Memory0().set(arg, ptr / 4)
                    WASM_VECTOR_LEN = arg.length
                    return ptr
                }
                function passArray32ToWasm0(arg, malloc) {
                    const ptr = malloc(arg.length * 4, 4) >>> 0
                    getUint32Memory0().set(arg, ptr / 4)
                    WASM_VECTOR_LEN = arg.length
                    return ptr
                }
                function handleError(f, args) {
                    try {
                        return f.apply(this, args)
                    } catch (e) {
                        wasm.__wbindgen_exn_store(addHeapObject(e))
                    }
                }
                const RawFeatureType = Object.freeze({
                    Vertex: 0,
                    0: 'Vertex',
                    Edge: 1,
                    1: 'Edge',
                    Face: 2,
                    2: 'Face',
                    Unknown: 3,
                    3: 'Unknown',
                })
                const RawShapeType = Object.freeze({
                    Ball: 0,
                    0: 'Ball',
                    Cuboid: 1,
                    1: 'Cuboid',
                    Capsule: 2,
                    2: 'Capsule',
                    Segment: 3,
                    3: 'Segment',
                    Polyline: 4,
                    4: 'Polyline',
                    Triangle: 5,
                    5: 'Triangle',
                    TriMesh: 6,
                    6: 'TriMesh',
                    HeightField: 7,
                    7: 'HeightField',
                    Compound: 8,
                    8: 'Compound',
                    ConvexPolyhedron: 9,
                    9: 'ConvexPolyhedron',
                    Cylinder: 10,
                    10: 'Cylinder',
                    Cone: 11,
                    11: 'Cone',
                    RoundCuboid: 12,
                    12: 'RoundCuboid',
                    RoundTriangle: 13,
                    13: 'RoundTriangle',
                    RoundCylinder: 14,
                    14: 'RoundCylinder',
                    RoundCone: 15,
                    15: 'RoundCone',
                    RoundConvexPolyhedron: 16,
                    16: 'RoundConvexPolyhedron',
                    HalfSpace: 17,
                    17: 'HalfSpace',
                })
                const RawJointAxis = Object.freeze({
                    LinX: 0,
                    0: 'LinX',
                    LinY: 1,
                    1: 'LinY',
                    LinZ: 2,
                    2: 'LinZ',
                    AngX: 3,
                    3: 'AngX',
                    AngY: 4,
                    4: 'AngY',
                    AngZ: 5,
                    5: 'AngZ',
                })
                const RawRigidBodyType = Object.freeze({
                    Dynamic: 0,
                    0: 'Dynamic',
                    Fixed: 1,
                    1: 'Fixed',
                    KinematicPositionBased: 2,
                    2: 'KinematicPositionBased',
                    KinematicVelocityBased: 3,
                    3: 'KinematicVelocityBased',
                })
                const RawMotorModel = Object.freeze({
                    AccelerationBased: 0,
                    0: 'AccelerationBased',
                    ForceBased: 1,
                    1: 'ForceBased',
                })
                const RawJointType = Object.freeze({
                    Revolute: 0,
                    0: 'Revolute',
                    Fixed: 1,
                    1: 'Fixed',
                    Prismatic: 2,
                    2: 'Prismatic',
                    Rope: 3,
                    3: 'Rope',
                    Spring: 4,
                    4: 'Spring',
                    Spherical: 5,
                    5: 'Spherical',
                    Generic: 6,
                    6: 'Generic',
                })
                const RawBroadPhaseFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawbroadphase_free(ptr >>> 0)
                          )
                class RawBroadPhase {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawBroadPhase.prototype)
                        obj.__wbg_ptr = ptr
                        RawBroadPhaseFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawBroadPhaseFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawbroadphase_free(ptr)
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawbroadphase_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                }
                const RawCCDSolverFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawccdsolver_free(ptr >>> 0)
                          )
                class RawCCDSolver {
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawCCDSolverFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawccdsolver_free(ptr)
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawccdsolver_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                }
                const RawCharacterCollisionFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawcharactercollision_free(ptr >>> 0)
                          )
                class RawCharacterCollision {
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawCharacterCollisionFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawcharactercollision_free(ptr)
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawcharactercollision_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @returns {number}
                     */ handle() {
                        const ret = wasm.rawcharactercollision_handle(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {RawVector}
                     */ translationDeltaApplied() {
                        const ret =
                            wasm.rawcharactercollision_translationDeltaApplied(
                                this.__wbg_ptr
                            )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ translationDeltaRemaining() {
                        const ret =
                            wasm.rawcharactercollision_translationDeltaRemaining(
                                this.__wbg_ptr
                            )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {number}
                     */ toi() {
                        const ret = wasm.rawcharactercollision_toi(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {RawVector}
                     */ worldWitness1() {
                        const ret = wasm.rawcharactercollision_worldWitness1(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ worldWitness2() {
                        const ret = wasm.rawcharactercollision_worldWitness2(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ worldNormal1() {
                        const ret = wasm.rawcharactercollision_worldNormal1(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ worldNormal2() {
                        const ret = wasm.rawcharactercollision_worldNormal2(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                }
                const RawColliderSetFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawcolliderset_free(ptr >>> 0)
                          )
                class RawColliderSet {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawColliderSet.prototype)
                        obj.__wbg_ptr = ptr
                        RawColliderSetFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawColliderSetFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawcolliderset_free(ptr)
                    }
                    /**
                     * The world-space translation of this collider.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ coTranslation(handle) {
                        const ret = wasm.rawcolliderset_coTranslation(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The world-space orientation of this collider.
                     * @param {number} handle
                     * @returns {RawRotation}
                     */ coRotation(handle) {
                        const ret = wasm.rawcolliderset_coRotation(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawRotation.__wrap(ret)
                    }
                    /**
                     * Sets the translation of this collider.
                     *
                     * # Parameters
                     * - `x`: the world-space position of the collider along the `x` axis.
                     * - `y`: the world-space position of the collider along the `y` axis.
                     * - `z`: the world-space position of the collider along the `z` axis.
                     * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
                     * wasn't moving before modifying its position.
                     * @param {number} handle
                     * @param {number} x
                     * @param {number} y
                     * @param {number} z
                     */ coSetTranslation(handle, x, y, z) {
                        wasm.rawcolliderset_coSetTranslation(
                            this.__wbg_ptr,
                            handle,
                            x,
                            y,
                            z
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} x
                     * @param {number} y
                     * @param {number} z
                     */ coSetTranslationWrtParent(handle, x, y, z) {
                        wasm.rawcolliderset_coSetTranslationWrtParent(
                            this.__wbg_ptr,
                            handle,
                            x,
                            y,
                            z
                        )
                    }
                    /**
                     * Sets the rotation quaternion of this collider.
                     *
                     * This does nothing if a zero quaternion is provided.
                     *
                     * # Parameters
                     * - `x`: the first vector component of the quaternion.
                     * - `y`: the second vector component of the quaternion.
                     * - `z`: the third vector component of the quaternion.
                     * - `w`: the scalar component of the quaternion.
                     * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
                     * wasn't moving before modifying its position.
                     * @param {number} handle
                     * @param {number} x
                     * @param {number} y
                     * @param {number} z
                     * @param {number} w
                     */ coSetRotation(handle, x, y, z, w) {
                        wasm.rawcolliderset_coSetRotation(
                            this.__wbg_ptr,
                            handle,
                            x,
                            y,
                            z,
                            w
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} x
                     * @param {number} y
                     * @param {number} z
                     * @param {number} w
                     */ coSetRotationWrtParent(handle, x, y, z, w) {
                        wasm.rawcolliderset_coSetRotationWrtParent(
                            this.__wbg_ptr,
                            handle,
                            x,
                            y,
                            z,
                            w
                        )
                    }
                    /**
                     * Is this collider a sensor?
                     * @param {number} handle
                     * @returns {boolean}
                     */ coIsSensor(handle) {
                        const ret = wasm.rawcolliderset_coIsSensor(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * The type of the shape of this collider.
                     * @param {number} handle
                     * @returns {RawShapeType}
                     */ coShapeType(handle) {
                        const ret = wasm.rawcolliderset_coShapeType(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * @param {number} handle
                     * @returns {RawVector | undefined}
                     */ coHalfspaceNormal(handle) {
                        const ret = wasm.rawcolliderset_coHalfspaceNormal(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * The half-extents of this collider if it is has a cuboid shape.
                     * @param {number} handle
                     * @returns {RawVector | undefined}
                     */ coHalfExtents(handle) {
                        const ret = wasm.rawcolliderset_coHalfExtents(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * Set the half-extents of this collider if it has a cuboid shape.
                     * @param {number} handle
                     * @param {RawVector} newHalfExtents
                     */ coSetHalfExtents(handle, newHalfExtents) {
                        _assertClass(newHalfExtents, RawVector)
                        wasm.rawcolliderset_coSetHalfExtents(
                            this.__wbg_ptr,
                            handle,
                            newHalfExtents.__wbg_ptr
                        )
                    }
                    /**
                     * The radius of this collider if it is a ball, capsule, cylinder, or cone shape.
                     * @param {number} handle
                     * @returns {number | undefined}
                     */ coRadius(handle) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawcolliderset_coRadius(
                                retptr,
                                this.__wbg_ptr,
                                handle
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * Set the radius of this collider if it is a ball, capsule, cylinder, or cone shape.
                     * @param {number} handle
                     * @param {number} newRadius
                     */ coSetRadius(handle, newRadius) {
                        wasm.rawcolliderset_coSetRadius(
                            this.__wbg_ptr,
                            handle,
                            newRadius
                        )
                    }
                    /**
                     * The half height of this collider if it is a capsule, cylinder, or cone shape.
                     * @param {number} handle
                     * @returns {number | undefined}
                     */ coHalfHeight(handle) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawcolliderset_coHalfHeight(
                                retptr,
                                this.__wbg_ptr,
                                handle
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * Set the half height of this collider if it is a capsule, cylinder, or cone shape.
                     * @param {number} handle
                     * @param {number} newHalfheight
                     */ coSetHalfHeight(handle, newHalfheight) {
                        wasm.rawcolliderset_coSetHalfHeight(
                            this.__wbg_ptr,
                            handle,
                            newHalfheight
                        )
                    }
                    /**
                     * The radius of the round edges of this collider.
                     * @param {number} handle
                     * @returns {number | undefined}
                     */ coRoundRadius(handle) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawcolliderset_coRoundRadius(
                                retptr,
                                this.__wbg_ptr,
                                handle
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * Set the radius of the round edges of this collider.
                     * @param {number} handle
                     * @param {number} newBorderRadius
                     */ coSetRoundRadius(handle, newBorderRadius) {
                        wasm.rawcolliderset_coSetRoundRadius(
                            this.__wbg_ptr,
                            handle,
                            newBorderRadius
                        )
                    }
                    /**
                     * The vertices of this triangle mesh, polyline, convex polyhedron, segment, triangle or convex polyhedron, if it is one.
                     * @param {number} handle
                     * @returns {Float32Array | undefined}
                     */ coVertices(handle) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawcolliderset_coVertices(
                                retptr,
                                this.__wbg_ptr,
                                handle
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getInt32Memory0()[retptr / 4 + 1]
                            let v1
                            if (r0 !== 0) {
                                v1 = getArrayF32FromWasm0(r0, r1).slice()
                                wasm.__wbindgen_free(r0, r1 * 4, 4)
                            }
                            return v1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * The indices of this triangle mesh, polyline, or convex polyhedron, if it is one.
                     * @param {number} handle
                     * @returns {Uint32Array | undefined}
                     */ coIndices(handle) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawcolliderset_coIndices(
                                retptr,
                                this.__wbg_ptr,
                                handle
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getInt32Memory0()[retptr / 4 + 1]
                            let v1
                            if (r0 !== 0) {
                                v1 = getArrayU32FromWasm0(r0, r1).slice()
                                wasm.__wbindgen_free(r0, r1 * 4, 4)
                            }
                            return v1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} handle
                     * @returns {number | undefined}
                     */ coTriMeshFlags(handle) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawcolliderset_coTriMeshFlags(
                                retptr,
                                this.__wbg_ptr,
                                handle
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getInt32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1 >>> 0
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} handle
                     * @returns {number | undefined}
                     */ coHeightFieldFlags(handle) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawcolliderset_coHeightFieldFlags(
                                retptr,
                                this.__wbg_ptr,
                                handle
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getInt32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1 >>> 0
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * The height of this heightfield if it is one.
                     * @param {number} handle
                     * @returns {Float32Array | undefined}
                     */ coHeightfieldHeights(handle) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawcolliderset_coHeightfieldHeights(
                                retptr,
                                this.__wbg_ptr,
                                handle
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getInt32Memory0()[retptr / 4 + 1]
                            let v1
                            if (r0 !== 0) {
                                v1 = getArrayF32FromWasm0(r0, r1).slice()
                                wasm.__wbindgen_free(r0, r1 * 4, 4)
                            }
                            return v1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * The scaling factor applied of this heightfield if it is one.
                     * @param {number} handle
                     * @returns {RawVector | undefined}
                     */ coHeightfieldScale(handle) {
                        const ret = wasm.rawcolliderset_coHeightfieldScale(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * The number of rows on this heightfield's height matrix, if it is one.
                     * @param {number} handle
                     * @returns {number | undefined}
                     */ coHeightfieldNRows(handle) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawcolliderset_coHeightfieldNRows(
                                retptr,
                                this.__wbg_ptr,
                                handle
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getInt32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1 >>> 0
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * The number of columns on this heightfield's height matrix, if it is one.
                     * @param {number} handle
                     * @returns {number | undefined}
                     */ coHeightfieldNCols(handle) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawcolliderset_coHeightfieldNCols(
                                retptr,
                                this.__wbg_ptr,
                                handle
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getInt32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1 >>> 0
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * The unique integer identifier of the collider this collider is attached to.
                     * @param {number} handle
                     * @returns {number | undefined}
                     */ coParent(handle) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawcolliderset_coParent(
                                retptr,
                                this.__wbg_ptr,
                                handle
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r2 = getFloat64Memory0()[retptr / 8 + 1]
                            return r0 === 0 ? undefined : r2
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} handle
                     * @param {boolean} enabled
                     */ coSetEnabled(handle, enabled) {
                        wasm.rawcolliderset_coSetEnabled(
                            this.__wbg_ptr,
                            handle,
                            enabled
                        )
                    }
                    /**
                     * @param {number} handle
                     * @returns {boolean}
                     */ coIsEnabled(handle) {
                        const ret = wasm.rawcolliderset_coIsEnabled(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * @param {number} handle
                     * @param {number} contact_skin
                     */ coSetContactSkin(handle, contact_skin) {
                        wasm.rawcolliderset_coSetContactSkin(
                            this.__wbg_ptr,
                            handle,
                            contact_skin
                        )
                    }
                    /**
                     * @param {number} handle
                     * @returns {number}
                     */ coContactSkin(handle) {
                        const ret = wasm.rawcolliderset_coContactSkin(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The friction coefficient of this collider.
                     * @param {number} handle
                     * @returns {number}
                     */ coFriction(handle) {
                        const ret = wasm.rawcolliderset_coFriction(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The restitution coefficient of this collider.
                     * @param {number} handle
                     * @returns {number}
                     */ coRestitution(handle) {
                        const ret = wasm.rawcolliderset_coRestitution(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The density of this collider.
                     * @param {number} handle
                     * @returns {number}
                     */ coDensity(handle) {
                        const ret = wasm.rawcolliderset_coDensity(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The mass of this collider.
                     * @param {number} handle
                     * @returns {number}
                     */ coMass(handle) {
                        const ret = wasm.rawcolliderset_coMass(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The volume of this collider.
                     * @param {number} handle
                     * @returns {number}
                     */ coVolume(handle) {
                        const ret = wasm.rawcolliderset_coVolume(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The collision groups of this collider.
                     * @param {number} handle
                     * @returns {number}
                     */ coCollisionGroups(handle) {
                        const ret = wasm.rawcolliderset_coCollisionGroups(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret >>> 0
                    }
                    /**
                     * The solver groups of this collider.
                     * @param {number} handle
                     * @returns {number}
                     */ coSolverGroups(handle) {
                        const ret = wasm.rawcolliderset_coSolverGroups(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret >>> 0
                    }
                    /**
                     * The physics hooks enabled for this collider.
                     * @param {number} handle
                     * @returns {number}
                     */ coActiveHooks(handle) {
                        const ret = wasm.rawcolliderset_coActiveHooks(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret >>> 0
                    }
                    /**
                     * The collision types enabled for this collider.
                     * @param {number} handle
                     * @returns {number}
                     */ coActiveCollisionTypes(handle) {
                        const ret = wasm.rawcolliderset_coActiveCollisionTypes(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The events enabled for this collider.
                     * @param {number} handle
                     * @returns {number}
                     */ coActiveEvents(handle) {
                        const ret = wasm.rawcolliderset_coActiveEvents(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret >>> 0
                    }
                    /**
                     * The total force magnitude beyond which a contact force event can be emitted.
                     * @param {number} handle
                     * @returns {number}
                     */ coContactForceEventThreshold(handle) {
                        const ret =
                            wasm.rawcolliderset_coContactForceEventThreshold(
                                this.__wbg_ptr,
                                handle
                            )
                        return ret
                    }
                    /**
                     * @param {number} handle
                     * @param {RawVector} point
                     * @returns {boolean}
                     */ coContainsPoint(handle, point) {
                        _assertClass(point, RawVector)
                        const ret = wasm.rawcolliderset_coContainsPoint(
                            this.__wbg_ptr,
                            handle,
                            point.__wbg_ptr
                        )
                        return ret !== 0
                    }
                    /**
                     * @param {number} handle
                     * @param {RawVector} colliderVel
                     * @param {RawShape} shape2
                     * @param {RawVector} shape2Pos
                     * @param {RawRotation} shape2Rot
                     * @param {RawVector} shape2Vel
                     * @param {number} target_distance
                     * @param {number} maxToi
                     * @param {boolean} stop_at_penetration
                     * @returns {RawShapeCastHit | undefined}
                     */ coCastShape(
                        handle,
                        colliderVel,
                        shape2,
                        shape2Pos,
                        shape2Rot,
                        shape2Vel,
                        target_distance,
                        maxToi,
                        stop_at_penetration
                    ) {
                        _assertClass(colliderVel, RawVector)
                        _assertClass(shape2, RawShape)
                        _assertClass(shape2Pos, RawVector)
                        _assertClass(shape2Rot, RawRotation)
                        _assertClass(shape2Vel, RawVector)
                        const ret = wasm.rawcolliderset_coCastShape(
                            this.__wbg_ptr,
                            handle,
                            colliderVel.__wbg_ptr,
                            shape2.__wbg_ptr,
                            shape2Pos.__wbg_ptr,
                            shape2Rot.__wbg_ptr,
                            shape2Vel.__wbg_ptr,
                            target_distance,
                            maxToi,
                            stop_at_penetration
                        )
                        return ret === 0
                            ? undefined
                            : RawShapeCastHit.__wrap(ret)
                    }
                    /**
                     * @param {number} handle
                     * @param {RawVector} collider1Vel
                     * @param {number} collider2handle
                     * @param {RawVector} collider2Vel
                     * @param {number} target_distance
                     * @param {number} max_toi
                     * @param {boolean} stop_at_penetration
                     * @returns {RawColliderShapeCastHit | undefined}
                     */ coCastCollider(
                        handle,
                        collider1Vel,
                        collider2handle,
                        collider2Vel,
                        target_distance,
                        max_toi,
                        stop_at_penetration
                    ) {
                        _assertClass(collider1Vel, RawVector)
                        _assertClass(collider2Vel, RawVector)
                        const ret = wasm.rawcolliderset_coCastCollider(
                            this.__wbg_ptr,
                            handle,
                            collider1Vel.__wbg_ptr,
                            collider2handle,
                            collider2Vel.__wbg_ptr,
                            target_distance,
                            max_toi,
                            stop_at_penetration
                        )
                        return ret === 0
                            ? undefined
                            : RawColliderShapeCastHit.__wrap(ret)
                    }
                    /**
                     * @param {number} handle
                     * @param {RawShape} shape2
                     * @param {RawVector} shapePos2
                     * @param {RawRotation} shapeRot2
                     * @returns {boolean}
                     */ coIntersectsShape(
                        handle,
                        shape2,
                        shapePos2,
                        shapeRot2
                    ) {
                        _assertClass(shape2, RawShape)
                        _assertClass(shapePos2, RawVector)
                        _assertClass(shapeRot2, RawRotation)
                        const ret = wasm.rawcolliderset_coIntersectsShape(
                            this.__wbg_ptr,
                            handle,
                            shape2.__wbg_ptr,
                            shapePos2.__wbg_ptr,
                            shapeRot2.__wbg_ptr
                        )
                        return ret !== 0
                    }
                    /**
                     * @param {number} handle
                     * @param {RawShape} shape2
                     * @param {RawVector} shapePos2
                     * @param {RawRotation} shapeRot2
                     * @param {number} prediction
                     * @returns {RawShapeContact | undefined}
                     */ coContactShape(
                        handle,
                        shape2,
                        shapePos2,
                        shapeRot2,
                        prediction
                    ) {
                        _assertClass(shape2, RawShape)
                        _assertClass(shapePos2, RawVector)
                        _assertClass(shapeRot2, RawRotation)
                        const ret = wasm.rawcolliderset_coContactShape(
                            this.__wbg_ptr,
                            handle,
                            shape2.__wbg_ptr,
                            shapePos2.__wbg_ptr,
                            shapeRot2.__wbg_ptr,
                            prediction
                        )
                        return ret === 0
                            ? undefined
                            : RawShapeContact.__wrap(ret)
                    }
                    /**
                     * @param {number} handle
                     * @param {number} collider2handle
                     * @param {number} prediction
                     * @returns {RawShapeContact | undefined}
                     */ coContactCollider(handle, collider2handle, prediction) {
                        const ret = wasm.rawcolliderset_coContactCollider(
                            this.__wbg_ptr,
                            handle,
                            collider2handle,
                            prediction
                        )
                        return ret === 0
                            ? undefined
                            : RawShapeContact.__wrap(ret)
                    }
                    /**
                     * @param {number} handle
                     * @param {RawVector} point
                     * @param {boolean} solid
                     * @returns {RawPointProjection}
                     */ coProjectPoint(handle, point, solid) {
                        _assertClass(point, RawVector)
                        const ret = wasm.rawcolliderset_coProjectPoint(
                            this.__wbg_ptr,
                            handle,
                            point.__wbg_ptr,
                            solid
                        )
                        return RawPointProjection.__wrap(ret)
                    }
                    /**
                     * @param {number} handle
                     * @param {RawVector} rayOrig
                     * @param {RawVector} rayDir
                     * @param {number} maxToi
                     * @returns {boolean}
                     */ coIntersectsRay(handle, rayOrig, rayDir, maxToi) {
                        _assertClass(rayOrig, RawVector)
                        _assertClass(rayDir, RawVector)
                        const ret = wasm.rawcolliderset_coIntersectsRay(
                            this.__wbg_ptr,
                            handle,
                            rayOrig.__wbg_ptr,
                            rayDir.__wbg_ptr,
                            maxToi
                        )
                        return ret !== 0
                    }
                    /**
                     * @param {number} handle
                     * @param {RawVector} rayOrig
                     * @param {RawVector} rayDir
                     * @param {number} maxToi
                     * @param {boolean} solid
                     * @returns {number}
                     */ coCastRay(handle, rayOrig, rayDir, maxToi, solid) {
                        _assertClass(rayOrig, RawVector)
                        _assertClass(rayDir, RawVector)
                        const ret = wasm.rawcolliderset_coCastRay(
                            this.__wbg_ptr,
                            handle,
                            rayOrig.__wbg_ptr,
                            rayDir.__wbg_ptr,
                            maxToi,
                            solid
                        )
                        return ret
                    }
                    /**
                     * @param {number} handle
                     * @param {RawVector} rayOrig
                     * @param {RawVector} rayDir
                     * @param {number} maxToi
                     * @param {boolean} solid
                     * @returns {RawRayIntersection | undefined}
                     */ coCastRayAndGetNormal(
                        handle,
                        rayOrig,
                        rayDir,
                        maxToi,
                        solid
                    ) {
                        _assertClass(rayOrig, RawVector)
                        _assertClass(rayDir, RawVector)
                        const ret = wasm.rawcolliderset_coCastRayAndGetNormal(
                            this.__wbg_ptr,
                            handle,
                            rayOrig.__wbg_ptr,
                            rayDir.__wbg_ptr,
                            maxToi,
                            solid
                        )
                        return ret === 0
                            ? undefined
                            : RawRayIntersection.__wrap(ret)
                    }
                    /**
                     * @param {number} handle
                     * @param {boolean} is_sensor
                     */ coSetSensor(handle, is_sensor) {
                        wasm.rawcolliderset_coSetSensor(
                            this.__wbg_ptr,
                            handle,
                            is_sensor
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} restitution
                     */ coSetRestitution(handle, restitution) {
                        wasm.rawcolliderset_coSetRestitution(
                            this.__wbg_ptr,
                            handle,
                            restitution
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} friction
                     */ coSetFriction(handle, friction) {
                        wasm.rawcolliderset_coSetFriction(
                            this.__wbg_ptr,
                            handle,
                            friction
                        )
                    }
                    /**
                     * @param {number} handle
                     * @returns {number}
                     */ coFrictionCombineRule(handle) {
                        const ret = wasm.rawcolliderset_coFrictionCombineRule(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} handle
                     * @param {number} rule
                     */ coSetFrictionCombineRule(handle, rule) {
                        wasm.rawcolliderset_coSetFrictionCombineRule(
                            this.__wbg_ptr,
                            handle,
                            rule
                        )
                    }
                    /**
                     * @param {number} handle
                     * @returns {number}
                     */ coRestitutionCombineRule(handle) {
                        const ret =
                            wasm.rawcolliderset_coRestitutionCombineRule(
                                this.__wbg_ptr,
                                handle
                            )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} handle
                     * @param {number} rule
                     */ coSetRestitutionCombineRule(handle, rule) {
                        wasm.rawcolliderset_coSetRestitutionCombineRule(
                            this.__wbg_ptr,
                            handle,
                            rule
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} groups
                     */ coSetCollisionGroups(handle, groups) {
                        wasm.rawcolliderset_coSetCollisionGroups(
                            this.__wbg_ptr,
                            handle,
                            groups
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} groups
                     */ coSetSolverGroups(handle, groups) {
                        wasm.rawcolliderset_coSetSolverGroups(
                            this.__wbg_ptr,
                            handle,
                            groups
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} hooks
                     */ coSetActiveHooks(handle, hooks) {
                        wasm.rawcolliderset_coSetActiveHooks(
                            this.__wbg_ptr,
                            handle,
                            hooks
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} events
                     */ coSetActiveEvents(handle, events) {
                        wasm.rawcolliderset_coSetActiveEvents(
                            this.__wbg_ptr,
                            handle,
                            events
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} types
                     */ coSetActiveCollisionTypes(handle, types) {
                        wasm.rawcolliderset_coSetActiveCollisionTypes(
                            this.__wbg_ptr,
                            handle,
                            types
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {RawShape} shape
                     */ coSetShape(handle, shape) {
                        _assertClass(shape, RawShape)
                        wasm.rawcolliderset_coSetShape(
                            this.__wbg_ptr,
                            handle,
                            shape.__wbg_ptr
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} threshold
                     */ coSetContactForceEventThreshold(handle, threshold) {
                        wasm.rawcolliderset_coSetContactForceEventThreshold(
                            this.__wbg_ptr,
                            handle,
                            threshold
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} density
                     */ coSetDensity(handle, density) {
                        wasm.rawcolliderset_coSetDensity(
                            this.__wbg_ptr,
                            handle,
                            density
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} mass
                     */ coSetMass(handle, mass) {
                        wasm.rawcolliderset_coSetMass(
                            this.__wbg_ptr,
                            handle,
                            mass
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} mass
                     * @param {RawVector} centerOfMass
                     * @param {RawVector} principalAngularInertia
                     * @param {RawRotation} angularInertiaFrame
                     */ coSetMassProperties(
                        handle,
                        mass,
                        centerOfMass,
                        principalAngularInertia,
                        angularInertiaFrame
                    ) {
                        _assertClass(centerOfMass, RawVector)
                        _assertClass(principalAngularInertia, RawVector)
                        _assertClass(angularInertiaFrame, RawRotation)
                        wasm.rawcolliderset_coSetMassProperties(
                            this.__wbg_ptr,
                            handle,
                            mass,
                            centerOfMass.__wbg_ptr,
                            principalAngularInertia.__wbg_ptr,
                            angularInertiaFrame.__wbg_ptr
                        )
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawcolliderset_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @returns {number}
                     */ len() {
                        const ret = wasm.rawcolliderset_len(this.__wbg_ptr)
                        return ret >>> 0
                    }
                    /**
                     * @param {number} handle
                     * @returns {boolean}
                     */ contains(handle) {
                        const ret = wasm.rawcolliderset_contains(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * @param {boolean} enabled
                     * @param {RawShape} shape
                     * @param {RawVector} translation
                     * @param {RawRotation} rotation
                     * @param {number} massPropsMode
                     * @param {number} mass
                     * @param {RawVector} centerOfMass
                     * @param {RawVector} principalAngularInertia
                     * @param {RawRotation} angularInertiaFrame
                     * @param {number} density
                     * @param {number} friction
                     * @param {number} restitution
                     * @param {number} frictionCombineRule
                     * @param {number} restitutionCombineRule
                     * @param {boolean} isSensor
                     * @param {number} collisionGroups
                     * @param {number} solverGroups
                     * @param {number} activeCollisionTypes
                     * @param {number} activeHooks
                     * @param {number} activeEvents
                     * @param {number} contactForceEventThreshold
                     * @param {number} contactSkin
                     * @param {boolean} hasParent
                     * @param {number} parent
                     * @param {RawRigidBodySet} bodies
                     * @returns {number | undefined}
                     */ createCollider(
                        enabled,
                        shape,
                        translation,
                        rotation,
                        massPropsMode,
                        mass,
                        centerOfMass,
                        principalAngularInertia,
                        angularInertiaFrame,
                        density,
                        friction,
                        restitution,
                        frictionCombineRule,
                        restitutionCombineRule,
                        isSensor,
                        collisionGroups,
                        solverGroups,
                        activeCollisionTypes,
                        activeHooks,
                        activeEvents,
                        contactForceEventThreshold,
                        contactSkin,
                        hasParent,
                        parent,
                        bodies
                    ) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            _assertClass(shape, RawShape)
                            _assertClass(translation, RawVector)
                            _assertClass(rotation, RawRotation)
                            _assertClass(centerOfMass, RawVector)
                            _assertClass(principalAngularInertia, RawVector)
                            _assertClass(angularInertiaFrame, RawRotation)
                            _assertClass(bodies, RawRigidBodySet)
                            wasm.rawcolliderset_createCollider(
                                retptr,
                                this.__wbg_ptr,
                                enabled,
                                shape.__wbg_ptr,
                                translation.__wbg_ptr,
                                rotation.__wbg_ptr,
                                massPropsMode,
                                mass,
                                centerOfMass.__wbg_ptr,
                                principalAngularInertia.__wbg_ptr,
                                angularInertiaFrame.__wbg_ptr,
                                density,
                                friction,
                                restitution,
                                frictionCombineRule,
                                restitutionCombineRule,
                                isSensor,
                                collisionGroups,
                                solverGroups,
                                activeCollisionTypes,
                                activeHooks,
                                activeEvents,
                                contactForceEventThreshold,
                                contactSkin,
                                hasParent,
                                parent,
                                bodies.__wbg_ptr
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r2 = getFloat64Memory0()[retptr / 8 + 1]
                            return r0 === 0 ? undefined : r2
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * Removes a collider from this set and wake-up the rigid-body it is attached to.
                     * @param {number} handle
                     * @param {RawIslandManager} islands
                     * @param {RawRigidBodySet} bodies
                     * @param {boolean} wakeUp
                     */ remove(handle, islands, bodies, wakeUp) {
                        _assertClass(islands, RawIslandManager)
                        _assertClass(bodies, RawRigidBodySet)
                        wasm.rawcolliderset_remove(
                            this.__wbg_ptr,
                            handle,
                            islands.__wbg_ptr,
                            bodies.__wbg_ptr,
                            wakeUp
                        )
                    }
                    /**
                     * Checks if a collider with the given integer handle exists.
                     * @param {number} handle
                     * @returns {boolean}
                     */ isHandleValid(handle) {
                        const ret = wasm.rawcolliderset_contains(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * Applies the given JavaScript function to the integer handle of each collider managed by this collider set.
                     *
                     * # Parameters
                     * - `f(handle)`: the function to apply to the integer handle of each collider managed by this collider set. Called as `f(handle)`.
                     * @param {Function} f
                     */ forEachColliderHandle(f) {
                        try {
                            wasm.rawcolliderset_forEachColliderHandle(
                                this.__wbg_ptr,
                                addBorrowedObject(f)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                }
                const RawColliderShapeCastHitFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawcollidershapecasthit_free(ptr >>> 0)
                          )
                class RawColliderShapeCastHit {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(
                            RawColliderShapeCastHit.prototype
                        )
                        obj.__wbg_ptr = ptr
                        RawColliderShapeCastHitFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawColliderShapeCastHitFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawcollidershapecasthit_free(ptr)
                    }
                    /**
                     * @returns {number}
                     */ colliderHandle() {
                        const ret = wasm.rawcharactercollision_handle(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {number}
                     */ time_of_impact() {
                        const ret = wasm.rawcollidershapecasthit_time_of_impact(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {RawVector}
                     */ witness1() {
                        const ret = wasm.rawcollidershapecasthit_witness1(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ witness2() {
                        const ret = wasm.rawcollidershapecasthit_witness2(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ normal1() {
                        const ret =
                            wasm.rawcharactercollision_translationDeltaApplied(
                                this.__wbg_ptr
                            )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ normal2() {
                        const ret =
                            wasm.rawcharactercollision_translationDeltaRemaining(
                                this.__wbg_ptr
                            )
                        return RawVector.__wrap(ret)
                    }
                }
                const RawContactForceEventFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawcontactforceevent_free(ptr >>> 0)
                          )
                class RawContactForceEvent {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(
                            RawContactForceEvent.prototype
                        )
                        obj.__wbg_ptr = ptr
                        RawContactForceEventFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawContactForceEventFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawcontactforceevent_free(ptr)
                    }
                    /**
                     * The first collider involved in the contact.
                     * @returns {number}
                     */ collider1() {
                        const ret = wasm.rawcharactercollision_handle(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * The second collider involved in the contact.
                     * @returns {number}
                     */ collider2() {
                        const ret = wasm.rawcontactforceevent_collider2(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * The sum of all the forces between the two colliders.
                     * @returns {RawVector}
                     */ total_force() {
                        const ret = wasm.rawcontactforceevent_total_force(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The sum of the magnitudes of each force between the two colliders.
                     *
                     * Note that this is **not** the same as the magnitude of `self.total_force`.
                     * Here we are summing the magnitude of all the forces, instead of taking
                     * the magnitude of their sum.
                     * @returns {number}
                     */ total_force_magnitude() {
                        const ret =
                            wasm.rawcontactforceevent_total_force_magnitude(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                    /**
                     * The world-space (unit) direction of the force with strongest magnitude.
                     * @returns {RawVector}
                     */ max_force_direction() {
                        const ret =
                            wasm.rawcontactforceevent_max_force_direction(
                                this.__wbg_ptr
                            )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The magnitude of the largest force at a contact point of this contact pair.
                     * @returns {number}
                     */ max_force_magnitude() {
                        const ret =
                            wasm.rawcontactforceevent_max_force_magnitude(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                }
                const RawContactManifoldFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawcontactmanifold_free(ptr >>> 0)
                          )
                class RawContactManifold {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawContactManifold.prototype)
                        obj.__wbg_ptr = ptr
                        RawContactManifoldFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawContactManifoldFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawcontactmanifold_free(ptr)
                    }
                    /**
                     * @returns {RawVector}
                     */ normal() {
                        const ret = wasm.rawcontactmanifold_normal(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ local_n1() {
                        const ret = wasm.rawcontactmanifold_local_n1(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ local_n2() {
                        const ret = wasm.rawcontactmanifold_local_n2(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {number}
                     */ subshape1() {
                        const ret = wasm.rawcontactmanifold_subshape1(
                            this.__wbg_ptr
                        )
                        return ret >>> 0
                    }
                    /**
                     * @returns {number}
                     */ subshape2() {
                        const ret = wasm.rawcontactmanifold_subshape2(
                            this.__wbg_ptr
                        )
                        return ret >>> 0
                    }
                    /**
                     * @returns {number}
                     */ num_contacts() {
                        const ret = wasm.rawcontactmanifold_num_contacts(
                            this.__wbg_ptr
                        )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} i
                     * @returns {RawVector | undefined}
                     */ contact_local_p1(i) {
                        const ret = wasm.rawcontactmanifold_contact_local_p1(
                            this.__wbg_ptr,
                            i
                        )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * @param {number} i
                     * @returns {RawVector | undefined}
                     */ contact_local_p2(i) {
                        const ret = wasm.rawcontactmanifold_contact_local_p2(
                            this.__wbg_ptr,
                            i
                        )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * @param {number} i
                     * @returns {number}
                     */ contact_dist(i) {
                        const ret = wasm.rawcontactmanifold_contact_dist(
                            this.__wbg_ptr,
                            i
                        )
                        return ret
                    }
                    /**
                     * @param {number} i
                     * @returns {number}
                     */ contact_fid1(i) {
                        const ret = wasm.rawcontactmanifold_contact_fid1(
                            this.__wbg_ptr,
                            i
                        )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} i
                     * @returns {number}
                     */ contact_fid2(i) {
                        const ret = wasm.rawcontactmanifold_contact_fid2(
                            this.__wbg_ptr,
                            i
                        )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} i
                     * @returns {number}
                     */ contact_impulse(i) {
                        const ret = wasm.rawcontactmanifold_contact_impulse(
                            this.__wbg_ptr,
                            i
                        )
                        return ret
                    }
                    /**
                     * @param {number} i
                     * @returns {number}
                     */ contact_tangent_impulse_x(i) {
                        const ret =
                            wasm.rawcontactmanifold_contact_tangent_impulse_x(
                                this.__wbg_ptr,
                                i
                            )
                        return ret
                    }
                    /**
                     * @param {number} i
                     * @returns {number}
                     */ contact_tangent_impulse_y(i) {
                        const ret =
                            wasm.rawcontactmanifold_contact_tangent_impulse_y(
                                this.__wbg_ptr,
                                i
                            )
                        return ret
                    }
                    /**
                     * @returns {number}
                     */ num_solver_contacts() {
                        const ret = wasm.rawcontactmanifold_num_solver_contacts(
                            this.__wbg_ptr
                        )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} i
                     * @returns {RawVector | undefined}
                     */ solver_contact_point(i) {
                        const ret =
                            wasm.rawcontactmanifold_solver_contact_point(
                                this.__wbg_ptr,
                                i
                            )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * @param {number} i
                     * @returns {number}
                     */ solver_contact_dist(i) {
                        const ret = wasm.rawcontactmanifold_solver_contact_dist(
                            this.__wbg_ptr,
                            i
                        )
                        return ret
                    }
                    /**
                     * @param {number} i
                     * @returns {number}
                     */ solver_contact_friction(i) {
                        const ret =
                            wasm.rawcontactmanifold_solver_contact_friction(
                                this.__wbg_ptr,
                                i
                            )
                        return ret
                    }
                    /**
                     * @param {number} i
                     * @returns {number}
                     */ solver_contact_restitution(i) {
                        const ret =
                            wasm.rawcontactmanifold_solver_contact_restitution(
                                this.__wbg_ptr,
                                i
                            )
                        return ret
                    }
                    /**
                     * @param {number} i
                     * @returns {RawVector}
                     */ solver_contact_tangent_velocity(i) {
                        const ret =
                            wasm.rawcontactmanifold_solver_contact_tangent_velocity(
                                this.__wbg_ptr,
                                i
                            )
                        return RawVector.__wrap(ret)
                    }
                }
                const RawContactPairFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawcontactpair_free(ptr >>> 0)
                          )
                class RawContactPair {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawContactPair.prototype)
                        obj.__wbg_ptr = ptr
                        RawContactPairFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawContactPairFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawcontactpair_free(ptr)
                    }
                    /**
                     * @returns {number}
                     */ collider1() {
                        const ret = wasm.rawcontactpair_collider1(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {number}
                     */ collider2() {
                        const ret = wasm.rawcontactpair_collider2(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {number}
                     */ numContactManifolds() {
                        const ret = wasm.rawcontactpair_numContactManifolds(
                            this.__wbg_ptr
                        )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} i
                     * @returns {RawContactManifold | undefined}
                     */ contactManifold(i) {
                        const ret = wasm.rawcontactpair_contactManifold(
                            this.__wbg_ptr,
                            i
                        )
                        return ret === 0
                            ? undefined
                            : RawContactManifold.__wrap(ret)
                    }
                }
                const RawDebugRenderPipelineFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawdebugrenderpipeline_free(ptr >>> 0)
                          )
                class RawDebugRenderPipeline {
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawDebugRenderPipelineFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawdebugrenderpipeline_free(ptr)
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawdebugrenderpipeline_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @returns {Float32Array}
                     */ vertices() {
                        const ret = wasm.rawdebugrenderpipeline_vertices(
                            this.__wbg_ptr
                        )
                        return takeObject(ret)
                    }
                    /**
                     * @returns {Float32Array}
                     */ colors() {
                        const ret = wasm.rawdebugrenderpipeline_colors(
                            this.__wbg_ptr
                        )
                        return takeObject(ret)
                    }
                    /**
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawImpulseJointSet} impulse_joints
                     * @param {RawMultibodyJointSet} multibody_joints
                     * @param {RawNarrowPhase} narrow_phase
                     */ render(
                        bodies,
                        colliders,
                        impulse_joints,
                        multibody_joints,
                        narrow_phase
                    ) {
                        _assertClass(bodies, RawRigidBodySet)
                        _assertClass(colliders, RawColliderSet)
                        _assertClass(impulse_joints, RawImpulseJointSet)
                        _assertClass(multibody_joints, RawMultibodyJointSet)
                        _assertClass(narrow_phase, RawNarrowPhase)
                        wasm.rawdebugrenderpipeline_render(
                            this.__wbg_ptr,
                            bodies.__wbg_ptr,
                            colliders.__wbg_ptr,
                            impulse_joints.__wbg_ptr,
                            multibody_joints.__wbg_ptr,
                            narrow_phase.__wbg_ptr
                        )
                    }
                }
                const RawDeserializedWorldFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawdeserializedworld_free(ptr >>> 0)
                          )
                class RawDeserializedWorld {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(
                            RawDeserializedWorld.prototype
                        )
                        obj.__wbg_ptr = ptr
                        RawDeserializedWorldFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawDeserializedWorldFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawdeserializedworld_free(ptr)
                    }
                    /**
                     * @returns {RawVector | undefined}
                     */ takeGravity() {
                        const ret = wasm.rawdeserializedworld_takeGravity(
                            this.__wbg_ptr
                        )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawIntegrationParameters | undefined}
                     */ takeIntegrationParameters() {
                        const ret =
                            wasm.rawdeserializedworld_takeIntegrationParameters(
                                this.__wbg_ptr
                            )
                        return ret === 0
                            ? undefined
                            : RawIntegrationParameters.__wrap(ret)
                    }
                    /**
                     * @returns {RawIslandManager | undefined}
                     */ takeIslandManager() {
                        const ret = wasm.rawdeserializedworld_takeIslandManager(
                            this.__wbg_ptr
                        )
                        return ret === 0
                            ? undefined
                            : RawIslandManager.__wrap(ret)
                    }
                    /**
                     * @returns {RawBroadPhase | undefined}
                     */ takeBroadPhase() {
                        const ret = wasm.rawdeserializedworld_takeBroadPhase(
                            this.__wbg_ptr
                        )
                        return ret === 0 ? undefined : RawBroadPhase.__wrap(ret)
                    }
                    /**
                     * @returns {RawNarrowPhase | undefined}
                     */ takeNarrowPhase() {
                        const ret = wasm.rawdeserializedworld_takeNarrowPhase(
                            this.__wbg_ptr
                        )
                        return ret === 0
                            ? undefined
                            : RawNarrowPhase.__wrap(ret)
                    }
                    /**
                     * @returns {RawRigidBodySet | undefined}
                     */ takeBodies() {
                        const ret = wasm.rawdeserializedworld_takeBodies(
                            this.__wbg_ptr
                        )
                        return ret === 0
                            ? undefined
                            : RawRigidBodySet.__wrap(ret)
                    }
                    /**
                     * @returns {RawColliderSet | undefined}
                     */ takeColliders() {
                        const ret = wasm.rawdeserializedworld_takeColliders(
                            this.__wbg_ptr
                        )
                        return ret === 0
                            ? undefined
                            : RawColliderSet.__wrap(ret)
                    }
                    /**
                     * @returns {RawImpulseJointSet | undefined}
                     */ takeImpulseJoints() {
                        const ret = wasm.rawdeserializedworld_takeImpulseJoints(
                            this.__wbg_ptr
                        )
                        return ret === 0
                            ? undefined
                            : RawImpulseJointSet.__wrap(ret)
                    }
                    /**
                     * @returns {RawMultibodyJointSet | undefined}
                     */ takeMultibodyJoints() {
                        const ret =
                            wasm.rawdeserializedworld_takeMultibodyJoints(
                                this.__wbg_ptr
                            )
                        return ret === 0
                            ? undefined
                            : RawMultibodyJointSet.__wrap(ret)
                    }
                }
                const RawDynamicRayCastVehicleControllerFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawdynamicraycastvehiclecontroller_free(
                                  ptr >>> 0
                              )
                          )
                class RawDynamicRayCastVehicleController {
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawDynamicRayCastVehicleControllerFinalization.unregister(
                            this
                        )
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawdynamicraycastvehiclecontroller_free(ptr)
                    }
                    /**
                     * @param {number} chassis
                     */ constructor(chassis) {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_new(chassis)
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @returns {number}
                     */ current_vehicle_speed() {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_current_vehicle_speed(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                    /**
                     * @returns {number}
                     */ chassis() {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_chassis(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                    /**
                     * @returns {number}
                     */ index_up_axis() {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_index_up_axis(
                                this.__wbg_ptr
                            )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} axis
                     */ set_index_up_axis(axis) {
                        wasm.rawdynamicraycastvehiclecontroller_set_index_up_axis(
                            this.__wbg_ptr,
                            axis
                        )
                    }
                    /**
                     * @returns {number}
                     */ index_forward_axis() {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_index_forward_axis(
                                this.__wbg_ptr
                            )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} axis
                     */ set_index_forward_axis(axis) {
                        wasm.rawdynamicraycastvehiclecontroller_set_index_forward_axis(
                            this.__wbg_ptr,
                            axis
                        )
                    }
                    /**
                     * @param {RawVector} chassis_connection_cs
                     * @param {RawVector} direction_cs
                     * @param {RawVector} axle_cs
                     * @param {number} suspension_rest_length
                     * @param {number} radius
                     */ add_wheel(
                        chassis_connection_cs,
                        direction_cs,
                        axle_cs,
                        suspension_rest_length,
                        radius
                    ) {
                        _assertClass(chassis_connection_cs, RawVector)
                        _assertClass(direction_cs, RawVector)
                        _assertClass(axle_cs, RawVector)
                        wasm.rawdynamicraycastvehiclecontroller_add_wheel(
                            this.__wbg_ptr,
                            chassis_connection_cs.__wbg_ptr,
                            direction_cs.__wbg_ptr,
                            axle_cs.__wbg_ptr,
                            suspension_rest_length,
                            radius
                        )
                    }
                    /**
                     * @returns {number}
                     */ num_wheels() {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_num_wheels(
                                this.__wbg_ptr
                            )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} dt
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawQueryPipeline} queries
                     * @param {number} filter_flags
                     * @param {number | undefined} filter_groups
                     * @param {Function} filter_predicate
                     */ update_vehicle(
                        dt,
                        bodies,
                        colliders,
                        queries,
                        filter_flags,
                        filter_groups,
                        filter_predicate
                    ) {
                        try {
                            _assertClass(bodies, RawRigidBodySet)
                            _assertClass(colliders, RawColliderSet)
                            _assertClass(queries, RawQueryPipeline)
                            wasm.rawdynamicraycastvehiclecontroller_update_vehicle(
                                this.__wbg_ptr,
                                dt,
                                bodies.__wbg_ptr,
                                colliders.__wbg_ptr,
                                queries.__wbg_ptr,
                                filter_flags,
                                !isLikeNone(filter_groups),
                                isLikeNone(filter_groups) ? 0 : filter_groups,
                                addBorrowedObject(filter_predicate)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {number} i
                     * @returns {RawVector | undefined}
                     */ wheel_chassis_connection_point_cs(i) {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(
                                this.__wbg_ptr,
                                i
                            )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * @param {number} i
                     * @param {RawVector} value
                     */ set_wheel_chassis_connection_point_cs(i, value) {
                        _assertClass(value, RawVector)
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(
                            this.__wbg_ptr,
                            i,
                            value.__wbg_ptr
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_suspension_rest_length(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} value
                     */ set_wheel_suspension_rest_length(i, value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(
                            this.__wbg_ptr,
                            i,
                            value
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_max_suspension_travel(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} value
                     */ set_wheel_max_suspension_travel(i, value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(
                            this.__wbg_ptr,
                            i,
                            value
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_radius(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_radius(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} value
                     */ set_wheel_radius(i, value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_radius(
                            this.__wbg_ptr,
                            i,
                            value
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_suspension_stiffness(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} value
                     */ set_wheel_suspension_stiffness(i, value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(
                            this.__wbg_ptr,
                            i,
                            value
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_suspension_compression(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} value
                     */ set_wheel_suspension_compression(i, value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(
                            this.__wbg_ptr,
                            i,
                            value
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_suspension_relaxation(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} value
                     */ set_wheel_suspension_relaxation(i, value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(
                            this.__wbg_ptr,
                            i,
                            value
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_max_suspension_force(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} value
                     */ set_wheel_max_suspension_force(i, value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(
                            this.__wbg_ptr,
                            i,
                            value
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_brake(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_brake(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} value
                     */ set_wheel_brake(i, value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_brake(
                            this.__wbg_ptr,
                            i,
                            value
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_steering(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_steering(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} value
                     */ set_wheel_steering(i, value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_steering(
                            this.__wbg_ptr,
                            i,
                            value
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_engine_force(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_engine_force(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} value
                     */ set_wheel_engine_force(i, value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(
                            this.__wbg_ptr,
                            i,
                            value
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {RawVector | undefined}
                     */ wheel_direction_cs(i) {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_wheel_direction_cs(
                                this.__wbg_ptr,
                                i
                            )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * @param {number} i
                     * @param {RawVector} value
                     */ set_wheel_direction_cs(i, value) {
                        _assertClass(value, RawVector)
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(
                            this.__wbg_ptr,
                            i,
                            value.__wbg_ptr
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {RawVector | undefined}
                     */ wheel_axle_cs(i) {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_wheel_axle_cs(
                                this.__wbg_ptr,
                                i
                            )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * @param {number} i
                     * @param {RawVector} value
                     */ set_wheel_axle_cs(i, value) {
                        _assertClass(value, RawVector)
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(
                            this.__wbg_ptr,
                            i,
                            value.__wbg_ptr
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_friction_slip(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_friction_slip(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} value
                     */ set_wheel_friction_slip(i, value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(
                            this.__wbg_ptr,
                            i,
                            value
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_side_friction_stiffness(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @param {number} stiffness
                     */ set_wheel_side_friction_stiffness(i, stiffness) {
                        wasm.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(
                            this.__wbg_ptr,
                            i,
                            stiffness
                        )
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_rotation(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_rotation(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_forward_impulse(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_side_impulse(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_side_impulse(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_suspension_force(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_suspension_force(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @returns {RawVector | undefined}
                     */ wheel_contact_normal_ws(i) {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(
                                this.__wbg_ptr,
                                i
                            )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * @param {number} i
                     * @returns {RawVector | undefined}
                     */ wheel_contact_point_ws(i) {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(
                                this.__wbg_ptr,
                                i
                            )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_suspension_length(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_suspension_length(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} i
                     * @returns {RawVector | undefined}
                     */ wheel_hard_point_ws(i) {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(
                                this.__wbg_ptr,
                                i
                            )
                        return ret === 0 ? undefined : RawVector.__wrap(ret)
                    }
                    /**
                     * @param {number} i
                     * @returns {boolean}
                     */ wheel_is_in_contact(i) {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(
                                this.__wbg_ptr,
                                i
                            )
                        return ret !== 0
                    }
                    /**
                     * @param {number} i
                     * @returns {number | undefined}
                     */ wheel_ground_object(i) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawdynamicraycastvehiclecontroller_wheel_ground_object(
                                retptr,
                                this.__wbg_ptr,
                                i
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r2 = getFloat64Memory0()[retptr / 8 + 1]
                            return r0 === 0 ? undefined : r2
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                }
                const RawEventQueueFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_raweventqueue_free(ptr >>> 0)
                          )
                class RawEventQueue {
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawEventQueueFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_raweventqueue_free(ptr)
                    }
                    /**
                     * Creates a new event collector.
                     *
                     * # Parameters
                     * - `autoDrain`: setting this to `true` is strongly recommended. If true, the collector will
                     * be automatically drained before each `world.step(collector)`. If false, the collector will
                     * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
                     * RAM if no drain is performed.
                     * @param {boolean} autoDrain
                     */ constructor(autoDrain) {
                        const ret = wasm.raweventqueue_new(autoDrain)
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * Applies the given javascript closure on each collision event of this collector, then clear
                     * the internal collision event buffer.
                     *
                     * # Parameters
                     * - `f(handle1, handle2, started)`:  JavaScript closure applied to each collision event. The
                     * closure should take three arguments: two integers representing the handles of the colliders
                     * involved in the collision, and a boolean indicating if the collision started (true) or stopped
                     * (false).
                     * @param {Function} f
                     */ drainCollisionEvents(f) {
                        try {
                            wasm.raweventqueue_drainCollisionEvents(
                                this.__wbg_ptr,
                                addBorrowedObject(f)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {Function} f
                     */ drainContactForceEvents(f) {
                        try {
                            wasm.raweventqueue_drainContactForceEvents(
                                this.__wbg_ptr,
                                addBorrowedObject(f)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * Removes all events contained by this collector.
                     */ clear() {
                        wasm.raweventqueue_clear(this.__wbg_ptr)
                    }
                }
                const RawGenericJointFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawgenericjoint_free(ptr >>> 0)
                          )
                class RawGenericJoint {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawGenericJoint.prototype)
                        obj.__wbg_ptr = ptr
                        RawGenericJointFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawGenericJointFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawgenericjoint_free(ptr)
                    }
                    /**
                     * Creates a new joint descriptor that builds generic joints.
                     *
                     * Generic joints allow arbitrary axes of freedom to be selected
                     * for the joint from the available 6 degrees of freedom.
                     * @param {RawVector} anchor1
                     * @param {RawVector} anchor2
                     * @param {RawVector} axis
                     * @param {number} lockedAxes
                     * @returns {RawGenericJoint | undefined}
                     */ static generic(anchor1, anchor2, axis, lockedAxes) {
                        _assertClass(anchor1, RawVector)
                        _assertClass(anchor2, RawVector)
                        _assertClass(axis, RawVector)
                        const ret = wasm.rawgenericjoint_generic(
                            anchor1.__wbg_ptr,
                            anchor2.__wbg_ptr,
                            axis.__wbg_ptr,
                            lockedAxes
                        )
                        return ret === 0
                            ? undefined
                            : RawGenericJoint.__wrap(ret)
                    }
                    /**
                     * @param {number} rest_length
                     * @param {number} stiffness
                     * @param {number} damping
                     * @param {RawVector} anchor1
                     * @param {RawVector} anchor2
                     * @returns {RawGenericJoint}
                     */ static spring(
                        rest_length,
                        stiffness,
                        damping,
                        anchor1,
                        anchor2
                    ) {
                        _assertClass(anchor1, RawVector)
                        _assertClass(anchor2, RawVector)
                        const ret = wasm.rawgenericjoint_spring(
                            rest_length,
                            stiffness,
                            damping,
                            anchor1.__wbg_ptr,
                            anchor2.__wbg_ptr
                        )
                        return RawGenericJoint.__wrap(ret)
                    }
                    /**
                     * @param {number} length
                     * @param {RawVector} anchor1
                     * @param {RawVector} anchor2
                     * @returns {RawGenericJoint}
                     */ static rope(length, anchor1, anchor2) {
                        _assertClass(anchor1, RawVector)
                        _assertClass(anchor2, RawVector)
                        const ret = wasm.rawgenericjoint_rope(
                            length,
                            anchor1.__wbg_ptr,
                            anchor2.__wbg_ptr
                        )
                        return RawGenericJoint.__wrap(ret)
                    }
                    /**
                     * Create a new joint descriptor that builds spherical joints.
                     *
                     * A spherical joints allows three relative rotational degrees of freedom
                     * by preventing any relative translation between the anchors of the
                     * two attached rigid-bodies.
                     * @param {RawVector} anchor1
                     * @param {RawVector} anchor2
                     * @returns {RawGenericJoint}
                     */ static spherical(anchor1, anchor2) {
                        _assertClass(anchor1, RawVector)
                        _assertClass(anchor2, RawVector)
                        const ret = wasm.rawgenericjoint_spherical(
                            anchor1.__wbg_ptr,
                            anchor2.__wbg_ptr
                        )
                        return RawGenericJoint.__wrap(ret)
                    }
                    /**
                     * Creates a new joint descriptor that builds a Prismatic joint.
                     *
                     * A prismatic joint removes all the degrees of freedom between the
                     * affected bodies, except for the translation along one axis.
                     *
                     * Returns `None` if any of the provided axes cannot be normalized.
                     * @param {RawVector} anchor1
                     * @param {RawVector} anchor2
                     * @param {RawVector} axis
                     * @param {boolean} limitsEnabled
                     * @param {number} limitsMin
                     * @param {number} limitsMax
                     * @returns {RawGenericJoint | undefined}
                     */ static prismatic(
                        anchor1,
                        anchor2,
                        axis,
                        limitsEnabled,
                        limitsMin,
                        limitsMax
                    ) {
                        _assertClass(anchor1, RawVector)
                        _assertClass(anchor2, RawVector)
                        _assertClass(axis, RawVector)
                        const ret = wasm.rawgenericjoint_prismatic(
                            anchor1.__wbg_ptr,
                            anchor2.__wbg_ptr,
                            axis.__wbg_ptr,
                            limitsEnabled,
                            limitsMin,
                            limitsMax
                        )
                        return ret === 0
                            ? undefined
                            : RawGenericJoint.__wrap(ret)
                    }
                    /**
                     * Creates a new joint descriptor that builds a Fixed joint.
                     *
                     * A fixed joint removes all the degrees of freedom between the affected bodies.
                     * @param {RawVector} anchor1
                     * @param {RawRotation} axes1
                     * @param {RawVector} anchor2
                     * @param {RawRotation} axes2
                     * @returns {RawGenericJoint}
                     */ static fixed(anchor1, axes1, anchor2, axes2) {
                        _assertClass(anchor1, RawVector)
                        _assertClass(axes1, RawRotation)
                        _assertClass(anchor2, RawVector)
                        _assertClass(axes2, RawRotation)
                        const ret = wasm.rawgenericjoint_fixed(
                            anchor1.__wbg_ptr,
                            axes1.__wbg_ptr,
                            anchor2.__wbg_ptr,
                            axes2.__wbg_ptr
                        )
                        return RawGenericJoint.__wrap(ret)
                    }
                    /**
                     * Create a new joint descriptor that builds Revolute joints.
                     *
                     * A revolute joint removes all degrees of freedom between the affected
                     * bodies except for the rotation along one axis.
                     * @param {RawVector} anchor1
                     * @param {RawVector} anchor2
                     * @param {RawVector} axis
                     * @returns {RawGenericJoint | undefined}
                     */ static revolute(anchor1, anchor2, axis) {
                        _assertClass(anchor1, RawVector)
                        _assertClass(anchor2, RawVector)
                        _assertClass(axis, RawVector)
                        const ret = wasm.rawgenericjoint_revolute(
                            anchor1.__wbg_ptr,
                            anchor2.__wbg_ptr,
                            axis.__wbg_ptr
                        )
                        return ret === 0
                            ? undefined
                            : RawGenericJoint.__wrap(ret)
                    }
                }
                const RawImpulseJointSetFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawimpulsejointset_free(ptr >>> 0)
                          )
                class RawImpulseJointSet {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawImpulseJointSet.prototype)
                        obj.__wbg_ptr = ptr
                        RawImpulseJointSetFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawImpulseJointSetFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawimpulsejointset_free(ptr)
                    }
                    /**
                     * The type of this joint.
                     * @param {number} handle
                     * @returns {RawJointType}
                     */ jointType(handle) {
                        const ret = wasm.rawimpulsejointset_jointType(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The unique integer identifier of the first rigid-body this joint it attached to.
                     * @param {number} handle
                     * @returns {number}
                     */ jointBodyHandle1(handle) {
                        const ret = wasm.rawimpulsejointset_jointBodyHandle1(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The unique integer identifier of the second rigid-body this joint is attached to.
                     * @param {number} handle
                     * @returns {number}
                     */ jointBodyHandle2(handle) {
                        const ret = wasm.rawimpulsejointset_jointBodyHandle2(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
                     * @param {number} handle
                     * @returns {RawRotation}
                     */ jointFrameX1(handle) {
                        const ret = wasm.rawimpulsejointset_jointFrameX1(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawRotation.__wrap(ret)
                    }
                    /**
                     * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
                     * @param {number} handle
                     * @returns {RawRotation}
                     */ jointFrameX2(handle) {
                        const ret = wasm.rawimpulsejointset_jointFrameX2(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawRotation.__wrap(ret)
                    }
                    /**
                     * The position of the first anchor of this joint.
                     *
                     * The first anchor gives the position of the points application point on the
                     * local frame of the first rigid-body it is attached to.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ jointAnchor1(handle) {
                        const ret = wasm.rawimpulsejointset_jointAnchor1(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The position of the second anchor of this joint.
                     *
                     * The second anchor gives the position of the points application point on the
                     * local frame of the second rigid-body it is attached to.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ jointAnchor2(handle) {
                        const ret = wasm.rawimpulsejointset_jointAnchor2(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * Sets the position of the first local anchor
                     * @param {number} handle
                     * @param {RawVector} newPos
                     */ jointSetAnchor1(handle, newPos) {
                        _assertClass(newPos, RawVector)
                        wasm.rawimpulsejointset_jointSetAnchor1(
                            this.__wbg_ptr,
                            handle,
                            newPos.__wbg_ptr
                        )
                    }
                    /**
                     * Sets the position of the second local anchor
                     * @param {number} handle
                     * @param {RawVector} newPos
                     */ jointSetAnchor2(handle, newPos) {
                        _assertClass(newPos, RawVector)
                        wasm.rawimpulsejointset_jointSetAnchor2(
                            this.__wbg_ptr,
                            handle,
                            newPos.__wbg_ptr
                        )
                    }
                    /**
                     * Are contacts between the rigid-bodies attached by this joint enabled?
                     * @param {number} handle
                     * @returns {boolean}
                     */ jointContactsEnabled(handle) {
                        const ret =
                            wasm.rawimpulsejointset_jointContactsEnabled(
                                this.__wbg_ptr,
                                handle
                            )
                        return ret !== 0
                    }
                    /**
                     * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
                     * @param {number} handle
                     * @param {boolean} enabled
                     */ jointSetContactsEnabled(handle, enabled) {
                        wasm.rawimpulsejointset_jointSetContactsEnabled(
                            this.__wbg_ptr,
                            handle,
                            enabled
                        )
                    }
                    /**
                     * Are the limits for this joint enabled?
                     * @param {number} handle
                     * @param {RawJointAxis} axis
                     * @returns {boolean}
                     */ jointLimitsEnabled(handle, axis) {
                        const ret = wasm.rawimpulsejointset_jointLimitsEnabled(
                            this.__wbg_ptr,
                            handle,
                            axis
                        )
                        return ret !== 0
                    }
                    /**
                     * Return the lower limit along the given joint axis.
                     * @param {number} handle
                     * @param {RawJointAxis} axis
                     * @returns {number}
                     */ jointLimitsMin(handle, axis) {
                        const ret = wasm.rawimpulsejointset_jointLimitsMin(
                            this.__wbg_ptr,
                            handle,
                            axis
                        )
                        return ret
                    }
                    /**
                     * If this is a prismatic joint, returns its upper limit.
                     * @param {number} handle
                     * @param {RawJointAxis} axis
                     * @returns {number}
                     */ jointLimitsMax(handle, axis) {
                        const ret = wasm.rawimpulsejointset_jointLimitsMax(
                            this.__wbg_ptr,
                            handle,
                            axis
                        )
                        return ret
                    }
                    /**
                     * Enables and sets the joint limits
                     * @param {number} handle
                     * @param {RawJointAxis} axis
                     * @param {number} min
                     * @param {number} max
                     */ jointSetLimits(handle, axis, min, max) {
                        wasm.rawimpulsejointset_jointSetLimits(
                            this.__wbg_ptr,
                            handle,
                            axis,
                            min,
                            max
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {RawJointAxis} axis
                     * @param {RawMotorModel} model
                     */ jointConfigureMotorModel(handle, axis, model) {
                        wasm.rawimpulsejointset_jointConfigureMotorModel(
                            this.__wbg_ptr,
                            handle,
                            axis,
                            model
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {RawJointAxis} axis
                     * @param {number} targetVel
                     * @param {number} factor
                     */ jointConfigureMotorVelocity(
                        handle,
                        axis,
                        targetVel,
                        factor
                    ) {
                        wasm.rawimpulsejointset_jointConfigureMotorVelocity(
                            this.__wbg_ptr,
                            handle,
                            axis,
                            targetVel,
                            factor
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {RawJointAxis} axis
                     * @param {number} targetPos
                     * @param {number} stiffness
                     * @param {number} damping
                     */ jointConfigureMotorPosition(
                        handle,
                        axis,
                        targetPos,
                        stiffness,
                        damping
                    ) {
                        wasm.rawimpulsejointset_jointConfigureMotorPosition(
                            this.__wbg_ptr,
                            handle,
                            axis,
                            targetPos,
                            stiffness,
                            damping
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {RawJointAxis} axis
                     * @param {number} targetPos
                     * @param {number} targetVel
                     * @param {number} stiffness
                     * @param {number} damping
                     */ jointConfigureMotor(
                        handle,
                        axis,
                        targetPos,
                        targetVel,
                        stiffness,
                        damping
                    ) {
                        wasm.rawimpulsejointset_jointConfigureMotor(
                            this.__wbg_ptr,
                            handle,
                            axis,
                            targetPos,
                            targetVel,
                            stiffness,
                            damping
                        )
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawimpulsejointset_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @param {RawGenericJoint} params
                     * @param {number} parent1
                     * @param {number} parent2
                     * @param {boolean} wake_up
                     * @returns {number}
                     */ createJoint(params, parent1, parent2, wake_up) {
                        _assertClass(params, RawGenericJoint)
                        const ret = wasm.rawimpulsejointset_createJoint(
                            this.__wbg_ptr,
                            params.__wbg_ptr,
                            parent1,
                            parent2,
                            wake_up
                        )
                        return ret
                    }
                    /**
                     * @param {number} handle
                     * @param {boolean} wakeUp
                     */ remove(handle, wakeUp) {
                        wasm.rawimpulsejointset_remove(
                            this.__wbg_ptr,
                            handle,
                            wakeUp
                        )
                    }
                    /**
                     * @returns {number}
                     */ len() {
                        const ret = wasm.rawimpulsejointset_len(this.__wbg_ptr)
                        return ret >>> 0
                    }
                    /**
                     * @param {number} handle
                     * @returns {boolean}
                     */ contains(handle) {
                        const ret = wasm.rawimpulsejointset_contains(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
                     *
                     * # Parameters
                     * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
                     * @param {Function} f
                     */ forEachJointHandle(f) {
                        try {
                            wasm.rawimpulsejointset_forEachJointHandle(
                                this.__wbg_ptr,
                                addBorrowedObject(f)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
                     *
                     * # Parameters
                     * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
                     * @param {number} body
                     * @param {Function} f
                     */ forEachJointAttachedToRigidBody(body, f) {
                        try {
                            wasm.rawimpulsejointset_forEachJointAttachedToRigidBody(
                                this.__wbg_ptr,
                                body,
                                addBorrowedObject(f)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                }
                const RawIntegrationParametersFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawintegrationparameters_free(
                                  ptr >>> 0
                              )
                          )
                class RawIntegrationParameters {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(
                            RawIntegrationParameters.prototype
                        )
                        obj.__wbg_ptr = ptr
                        RawIntegrationParametersFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawIntegrationParametersFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawintegrationparameters_free(ptr)
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawintegrationparameters_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @returns {number}
                     */ get dt() {
                        const ret = wasm.rawintegrationparameters_dt(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {number}
                     */ get contact_erp() {
                        const ret = wasm.rawintegrationparameters_contact_erp(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {number}
                     */ get normalizedAllowedLinearError() {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_current_vehicle_speed(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                    /**
                     * @returns {number}
                     */ get normalizedPredictionDistance() {
                        const ret =
                            wasm.rawcontactforceevent_max_force_magnitude(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                    /**
                     * @returns {number}
                     */ get numSolverIterations() {
                        const ret =
                            wasm.rawintegrationparameters_numSolverIterations(
                                this.__wbg_ptr
                            )
                        return ret >>> 0
                    }
                    /**
                     * @returns {number}
                     */ get numAdditionalFrictionIterations() {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_index_up_axis(
                                this.__wbg_ptr
                            )
                        return ret >>> 0
                    }
                    /**
                     * @returns {number}
                     */ get numInternalPgsIterations() {
                        const ret =
                            wasm.rawdynamicraycastvehiclecontroller_index_forward_axis(
                                this.__wbg_ptr
                            )
                        return ret >>> 0
                    }
                    /**
                     * @returns {number}
                     */ get minIslandSize() {
                        const ret = wasm.rawimpulsejointset_len(this.__wbg_ptr)
                        return ret >>> 0
                    }
                    /**
                     * @returns {number}
                     */ get maxCcdSubsteps() {
                        const ret =
                            wasm.rawintegrationparameters_maxCcdSubsteps(
                                this.__wbg_ptr
                            )
                        return ret >>> 0
                    }
                    /**
                     * @returns {number}
                     */ get lengthUnit() {
                        const ret = wasm.rawintegrationparameters_lengthUnit(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @param {number} value
                     */ set dt(value) {
                        wasm.rawintegrationparameters_set_dt(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     * @param {number} value
                     */ set contact_natural_frequency(value) {
                        wasm.rawintegrationparameters_set_contact_natural_frequency(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     * @param {number} value
                     */ set normalizedAllowedLinearError(value) {
                        wasm.rawintegrationparameters_set_normalizedAllowedLinearError(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     * @param {number} value
                     */ set normalizedPredictionDistance(value) {
                        wasm.rawintegrationparameters_set_normalizedPredictionDistance(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     * @param {number} value
                     */ set numSolverIterations(value) {
                        wasm.rawintegrationparameters_set_numSolverIterations(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     * @param {number} value
                     */ set numAdditionalFrictionIterations(value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_index_up_axis(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     * @param {number} value
                     */ set numInternalPgsIterations(value) {
                        wasm.rawdynamicraycastvehiclecontroller_set_index_forward_axis(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     * @param {number} value
                     */ set minIslandSize(value) {
                        wasm.rawintegrationparameters_set_minIslandSize(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     * @param {number} value
                     */ set maxCcdSubsteps(value) {
                        wasm.rawintegrationparameters_set_maxCcdSubsteps(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     * @param {number} value
                     */ set lengthUnit(value) {
                        wasm.rawintegrationparameters_set_lengthUnit(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     */ switchToStandardPgsSolver() {
                        wasm.rawintegrationparameters_switchToStandardPgsSolver(
                            this.__wbg_ptr
                        )
                    }
                    /**
                     */ switchToSmallStepsPgsSolver() {
                        wasm.rawintegrationparameters_switchToSmallStepsPgsSolver(
                            this.__wbg_ptr
                        )
                    }
                    /**
                     */ switchToSmallStepsPgsSolverWithoutWarmstart() {
                        wasm.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(
                            this.__wbg_ptr
                        )
                    }
                }
                const RawIslandManagerFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawislandmanager_free(ptr >>> 0)
                          )
                class RawIslandManager {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawIslandManager.prototype)
                        obj.__wbg_ptr = ptr
                        RawIslandManagerFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawIslandManagerFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawislandmanager_free(ptr)
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawislandmanager_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * Applies the given JavaScript function to the integer handle of each active rigid-body
                     * managed by this island manager.
                     *
                     * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
                     * the physics engine in order to save computational power. A sleeping rigid-body never moves
                     * unless it is moved manually by the user.
                     *
                     * # Parameters
                     * - `f(handle)`: the function to apply to the integer handle of each active rigid-body managed by this
                     *   set. Called as `f(collider)`.
                     * @param {Function} f
                     */ forEachActiveRigidBodyHandle(f) {
                        try {
                            wasm.rawislandmanager_forEachActiveRigidBodyHandle(
                                this.__wbg_ptr,
                                addBorrowedObject(f)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                }
                const RawKinematicCharacterControllerFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawkinematiccharactercontroller_free(
                                  ptr >>> 0
                              )
                          )
                class RawKinematicCharacterController {
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawKinematicCharacterControllerFinalization.unregister(
                            this
                        )
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawkinematiccharactercontroller_free(ptr)
                    }
                    /**
                     * @param {number} offset
                     */ constructor(offset) {
                        const ret =
                            wasm.rawkinematiccharactercontroller_new(offset)
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @returns {RawVector}
                     */ up() {
                        const ret =
                            wasm.rawcharactercollision_translationDeltaApplied(
                                this.__wbg_ptr
                            )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @param {RawVector} vector
                     */ setUp(vector) {
                        _assertClass(vector, RawVector)
                        wasm.rawkinematiccharactercontroller_setUp(
                            this.__wbg_ptr,
                            vector.__wbg_ptr
                        )
                    }
                    /**
                     * @returns {number}
                     */ normalNudgeFactor() {
                        const ret =
                            wasm.rawkinematiccharactercontroller_normalNudgeFactor(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                    /**
                     * @param {number} value
                     */ setNormalNudgeFactor(value) {
                        wasm.rawkinematiccharactercontroller_setNormalNudgeFactor(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     * @returns {number}
                     */ offset() {
                        const ret = wasm.rawintegrationparameters_dt(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @param {number} value
                     */ setOffset(value) {
                        wasm.rawkinematiccharactercontroller_setOffset(
                            this.__wbg_ptr,
                            value
                        )
                    }
                    /**
                     * @returns {boolean}
                     */ slideEnabled() {
                        const ret =
                            wasm.rawkinematiccharactercontroller_slideEnabled(
                                this.__wbg_ptr
                            )
                        return ret !== 0
                    }
                    /**
                     * @param {boolean} enabled
                     */ setSlideEnabled(enabled) {
                        wasm.rawkinematiccharactercontroller_setSlideEnabled(
                            this.__wbg_ptr,
                            enabled
                        )
                    }
                    /**
                     * @returns {number | undefined}
                     */ autostepMaxHeight() {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawkinematiccharactercontroller_autostepMaxHeight(
                                retptr,
                                this.__wbg_ptr
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @returns {number | undefined}
                     */ autostepMinWidth() {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawkinematiccharactercontroller_autostepMinWidth(
                                retptr,
                                this.__wbg_ptr
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @returns {boolean | undefined}
                     */ autostepIncludesDynamicBodies() {
                        const ret =
                            wasm.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(
                                this.__wbg_ptr
                            )
                        return ret === 0xffffff ? undefined : ret !== 0
                    }
                    /**
                     * @returns {boolean}
                     */ autostepEnabled() {
                        const ret =
                            wasm.rawkinematiccharactercontroller_autostepEnabled(
                                this.__wbg_ptr
                            )
                        return ret !== 0
                    }
                    /**
                     * @param {number} maxHeight
                     * @param {number} minWidth
                     * @param {boolean} includeDynamicBodies
                     */ enableAutostep(
                        maxHeight,
                        minWidth,
                        includeDynamicBodies
                    ) {
                        wasm.rawkinematiccharactercontroller_enableAutostep(
                            this.__wbg_ptr,
                            maxHeight,
                            minWidth,
                            includeDynamicBodies
                        )
                    }
                    /**
                     */ disableAutostep() {
                        wasm.rawkinematiccharactercontroller_disableAutostep(
                            this.__wbg_ptr
                        )
                    }
                    /**
                     * @returns {number}
                     */ maxSlopeClimbAngle() {
                        const ret =
                            wasm.rawkinematiccharactercontroller_maxSlopeClimbAngle(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                    /**
                     * @param {number} angle
                     */ setMaxSlopeClimbAngle(angle) {
                        wasm.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(
                            this.__wbg_ptr,
                            angle
                        )
                    }
                    /**
                     * @returns {number}
                     */ minSlopeSlideAngle() {
                        const ret =
                            wasm.rawkinematiccharactercontroller_minSlopeSlideAngle(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                    /**
                     * @param {number} angle
                     */ setMinSlopeSlideAngle(angle) {
                        wasm.rawkinematiccharactercontroller_setMinSlopeSlideAngle(
                            this.__wbg_ptr,
                            angle
                        )
                    }
                    /**
                     * @returns {number | undefined}
                     */ snapToGroundDistance() {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawkinematiccharactercontroller_snapToGroundDistance(
                                retptr,
                                this.__wbg_ptr
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getFloat32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                    /**
                     * @param {number} distance
                     */ enableSnapToGround(distance) {
                        wasm.rawkinematiccharactercontroller_enableSnapToGround(
                            this.__wbg_ptr,
                            distance
                        )
                    }
                    /**
                     */ disableSnapToGround() {
                        wasm.rawkinematiccharactercontroller_disableSnapToGround(
                            this.__wbg_ptr
                        )
                    }
                    /**
                     * @returns {boolean}
                     */ snapToGroundEnabled() {
                        const ret =
                            wasm.rawkinematiccharactercontroller_snapToGroundEnabled(
                                this.__wbg_ptr
                            )
                        return ret !== 0
                    }
                    /**
                     * @param {number} dt
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawQueryPipeline} queries
                     * @param {number} collider_handle
                     * @param {RawVector} desired_translation_delta
                     * @param {boolean} apply_impulses_to_dynamic_bodies
                     * @param {number | undefined} character_mass
                     * @param {number} filter_flags
                     * @param {number | undefined} filter_groups
                     * @param {Function} filter_predicate
                     */ computeColliderMovement(
                        dt,
                        bodies,
                        colliders,
                        queries,
                        collider_handle,
                        desired_translation_delta,
                        apply_impulses_to_dynamic_bodies,
                        character_mass,
                        filter_flags,
                        filter_groups,
                        filter_predicate
                    ) {
                        try {
                            _assertClass(bodies, RawRigidBodySet)
                            _assertClass(colliders, RawColliderSet)
                            _assertClass(queries, RawQueryPipeline)
                            _assertClass(desired_translation_delta, RawVector)
                            wasm.rawkinematiccharactercontroller_computeColliderMovement(
                                this.__wbg_ptr,
                                dt,
                                bodies.__wbg_ptr,
                                colliders.__wbg_ptr,
                                queries.__wbg_ptr,
                                collider_handle,
                                desired_translation_delta.__wbg_ptr,
                                apply_impulses_to_dynamic_bodies,
                                !isLikeNone(character_mass),
                                isLikeNone(character_mass) ? 0 : character_mass,
                                filter_flags,
                                !isLikeNone(filter_groups),
                                isLikeNone(filter_groups) ? 0 : filter_groups,
                                addBorrowedObject(filter_predicate)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @returns {RawVector}
                     */ computedMovement() {
                        const ret =
                            wasm.rawkinematiccharactercontroller_computedMovement(
                                this.__wbg_ptr
                            )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {boolean}
                     */ computedGrounded() {
                        const ret =
                            wasm.rawkinematiccharactercontroller_computedGrounded(
                                this.__wbg_ptr
                            )
                        return ret !== 0
                    }
                    /**
                     * @returns {number}
                     */ numComputedCollisions() {
                        const ret =
                            wasm.rawkinematiccharactercontroller_numComputedCollisions(
                                this.__wbg_ptr
                            )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} i
                     * @param {RawCharacterCollision} collision
                     * @returns {boolean}
                     */ computedCollision(i, collision) {
                        _assertClass(collision, RawCharacterCollision)
                        const ret =
                            wasm.rawkinematiccharactercontroller_computedCollision(
                                this.__wbg_ptr,
                                i,
                                collision.__wbg_ptr
                            )
                        return ret !== 0
                    }
                }
                const RawMultibodyJointSetFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawmultibodyjointset_free(ptr >>> 0)
                          )
                class RawMultibodyJointSet {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(
                            RawMultibodyJointSet.prototype
                        )
                        obj.__wbg_ptr = ptr
                        RawMultibodyJointSetFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawMultibodyJointSetFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawmultibodyjointset_free(ptr)
                    }
                    /**
                     * The type of this joint.
                     * @param {number} handle
                     * @returns {RawJointType}
                     */ jointType(handle) {
                        const ret = wasm.rawmultibodyjointset_jointType(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
                     * @param {number} handle
                     * @returns {RawRotation}
                     */ jointFrameX1(handle) {
                        const ret = wasm.rawmultibodyjointset_jointFrameX1(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawRotation.__wrap(ret)
                    }
                    /**
                     * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
                     * @param {number} handle
                     * @returns {RawRotation}
                     */ jointFrameX2(handle) {
                        const ret = wasm.rawmultibodyjointset_jointFrameX2(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawRotation.__wrap(ret)
                    }
                    /**
                     * The position of the first anchor of this joint.
                     *
                     * The first anchor gives the position of the points application point on the
                     * local frame of the first rigid-body it is attached to.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ jointAnchor1(handle) {
                        const ret = wasm.rawmultibodyjointset_jointAnchor1(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The position of the second anchor of this joint.
                     *
                     * The second anchor gives the position of the points application point on the
                     * local frame of the second rigid-body it is attached to.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ jointAnchor2(handle) {
                        const ret = wasm.rawmultibodyjointset_jointAnchor2(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * Are contacts between the rigid-bodies attached by this joint enabled?
                     * @param {number} handle
                     * @returns {boolean}
                     */ jointContactsEnabled(handle) {
                        const ret =
                            wasm.rawmultibodyjointset_jointContactsEnabled(
                                this.__wbg_ptr,
                                handle
                            )
                        return ret !== 0
                    }
                    /**
                     * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
                     * @param {number} handle
                     * @param {boolean} enabled
                     */ jointSetContactsEnabled(handle, enabled) {
                        wasm.rawmultibodyjointset_jointSetContactsEnabled(
                            this.__wbg_ptr,
                            handle,
                            enabled
                        )
                    }
                    /**
                     * Are the limits for this joint enabled?
                     * @param {number} handle
                     * @param {RawJointAxis} axis
                     * @returns {boolean}
                     */ jointLimitsEnabled(handle, axis) {
                        const ret =
                            wasm.rawmultibodyjointset_jointLimitsEnabled(
                                this.__wbg_ptr,
                                handle,
                                axis
                            )
                        return ret !== 0
                    }
                    /**
                     * Return the lower limit along the given joint axis.
                     * @param {number} handle
                     * @param {RawJointAxis} axis
                     * @returns {number}
                     */ jointLimitsMin(handle, axis) {
                        const ret = wasm.rawmultibodyjointset_jointLimitsMin(
                            this.__wbg_ptr,
                            handle,
                            axis
                        )
                        return ret
                    }
                    /**
                     * If this is a prismatic joint, returns its upper limit.
                     * @param {number} handle
                     * @param {RawJointAxis} axis
                     * @returns {number}
                     */ jointLimitsMax(handle, axis) {
                        const ret = wasm.rawmultibodyjointset_jointLimitsMax(
                            this.__wbg_ptr,
                            handle,
                            axis
                        )
                        return ret
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawmultibodyjointset_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @param {RawGenericJoint} params
                     * @param {number} parent1
                     * @param {number} parent2
                     * @param {boolean} wakeUp
                     * @returns {number}
                     */ createJoint(params, parent1, parent2, wakeUp) {
                        _assertClass(params, RawGenericJoint)
                        const ret = wasm.rawmultibodyjointset_createJoint(
                            this.__wbg_ptr,
                            params.__wbg_ptr,
                            parent1,
                            parent2,
                            wakeUp
                        )
                        return ret
                    }
                    /**
                     * @param {number} handle
                     * @param {boolean} wakeUp
                     */ remove(handle, wakeUp) {
                        wasm.rawmultibodyjointset_remove(
                            this.__wbg_ptr,
                            handle,
                            wakeUp
                        )
                    }
                    /**
                     * @param {number} handle
                     * @returns {boolean}
                     */ contains(handle) {
                        const ret = wasm.rawmultibodyjointset_contains(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
                     *
                     * # Parameters
                     * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
                     * @param {Function} f
                     */ forEachJointHandle(f) {
                        try {
                            wasm.rawmultibodyjointset_forEachJointHandle(
                                this.__wbg_ptr,
                                addBorrowedObject(f)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
                     *
                     * # Parameters
                     * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
                     * @param {number} body
                     * @param {Function} f
                     */ forEachJointAttachedToRigidBody(body, f) {
                        try {
                            wasm.rawmultibodyjointset_forEachJointAttachedToRigidBody(
                                this.__wbg_ptr,
                                body,
                                addBorrowedObject(f)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                }
                const RawNarrowPhaseFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawnarrowphase_free(ptr >>> 0)
                          )
                class RawNarrowPhase {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawNarrowPhase.prototype)
                        obj.__wbg_ptr = ptr
                        RawNarrowPhaseFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawNarrowPhaseFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawnarrowphase_free(ptr)
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawnarrowphase_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @param {number} handle1
                     * @param {Function} f
                     */ contact_pairs_with(handle1, f) {
                        wasm.rawnarrowphase_contact_pairs_with(
                            this.__wbg_ptr,
                            handle1,
                            addHeapObject(f)
                        )
                    }
                    /**
                     * @param {number} handle1
                     * @param {number} handle2
                     * @returns {RawContactPair | undefined}
                     */ contact_pair(handle1, handle2) {
                        const ret = wasm.rawnarrowphase_contact_pair(
                            this.__wbg_ptr,
                            handle1,
                            handle2
                        )
                        return ret === 0
                            ? undefined
                            : RawContactPair.__wrap(ret)
                    }
                    /**
                     * @param {number} handle1
                     * @param {Function} f
                     */ intersection_pairs_with(handle1, f) {
                        wasm.rawnarrowphase_intersection_pairs_with(
                            this.__wbg_ptr,
                            handle1,
                            addHeapObject(f)
                        )
                    }
                    /**
                     * @param {number} handle1
                     * @param {number} handle2
                     * @returns {boolean}
                     */ intersection_pair(handle1, handle2) {
                        const ret = wasm.rawnarrowphase_intersection_pair(
                            this.__wbg_ptr,
                            handle1,
                            handle2
                        )
                        return ret !== 0
                    }
                }
                const RawPhysicsPipelineFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawphysicspipeline_free(ptr >>> 0)
                          )
                class RawPhysicsPipeline {
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawPhysicsPipelineFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawphysicspipeline_free(ptr)
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawphysicspipeline_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @param {RawVector} gravity
                     * @param {RawIntegrationParameters} integrationParameters
                     * @param {RawIslandManager} islands
                     * @param {RawBroadPhase} broadPhase
                     * @param {RawNarrowPhase} narrowPhase
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawImpulseJointSet} joints
                     * @param {RawMultibodyJointSet} articulations
                     * @param {RawCCDSolver} ccd_solver
                     */ step(
                        gravity,
                        integrationParameters,
                        islands,
                        broadPhase,
                        narrowPhase,
                        bodies,
                        colliders,
                        joints,
                        articulations,
                        ccd_solver
                    ) {
                        _assertClass(gravity, RawVector)
                        _assertClass(
                            integrationParameters,
                            RawIntegrationParameters
                        )
                        _assertClass(islands, RawIslandManager)
                        _assertClass(broadPhase, RawBroadPhase)
                        _assertClass(narrowPhase, RawNarrowPhase)
                        _assertClass(bodies, RawRigidBodySet)
                        _assertClass(colliders, RawColliderSet)
                        _assertClass(joints, RawImpulseJointSet)
                        _assertClass(articulations, RawMultibodyJointSet)
                        _assertClass(ccd_solver, RawCCDSolver)
                        wasm.rawphysicspipeline_step(
                            this.__wbg_ptr,
                            gravity.__wbg_ptr,
                            integrationParameters.__wbg_ptr,
                            islands.__wbg_ptr,
                            broadPhase.__wbg_ptr,
                            narrowPhase.__wbg_ptr,
                            bodies.__wbg_ptr,
                            colliders.__wbg_ptr,
                            joints.__wbg_ptr,
                            articulations.__wbg_ptr,
                            ccd_solver.__wbg_ptr
                        )
                    }
                    /**
                     * @param {RawVector} gravity
                     * @param {RawIntegrationParameters} integrationParameters
                     * @param {RawIslandManager} islands
                     * @param {RawBroadPhase} broadPhase
                     * @param {RawNarrowPhase} narrowPhase
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawImpulseJointSet} joints
                     * @param {RawMultibodyJointSet} articulations
                     * @param {RawCCDSolver} ccd_solver
                     * @param {RawEventQueue} eventQueue
                     * @param {object} hookObject
                     * @param {Function} hookFilterContactPair
                     * @param {Function} hookFilterIntersectionPair
                     */ stepWithEvents(
                        gravity,
                        integrationParameters,
                        islands,
                        broadPhase,
                        narrowPhase,
                        bodies,
                        colliders,
                        joints,
                        articulations,
                        ccd_solver,
                        eventQueue,
                        hookObject,
                        hookFilterContactPair,
                        hookFilterIntersectionPair
                    ) {
                        _assertClass(gravity, RawVector)
                        _assertClass(
                            integrationParameters,
                            RawIntegrationParameters
                        )
                        _assertClass(islands, RawIslandManager)
                        _assertClass(broadPhase, RawBroadPhase)
                        _assertClass(narrowPhase, RawNarrowPhase)
                        _assertClass(bodies, RawRigidBodySet)
                        _assertClass(colliders, RawColliderSet)
                        _assertClass(joints, RawImpulseJointSet)
                        _assertClass(articulations, RawMultibodyJointSet)
                        _assertClass(ccd_solver, RawCCDSolver)
                        _assertClass(eventQueue, RawEventQueue)
                        wasm.rawphysicspipeline_stepWithEvents(
                            this.__wbg_ptr,
                            gravity.__wbg_ptr,
                            integrationParameters.__wbg_ptr,
                            islands.__wbg_ptr,
                            broadPhase.__wbg_ptr,
                            narrowPhase.__wbg_ptr,
                            bodies.__wbg_ptr,
                            colliders.__wbg_ptr,
                            joints.__wbg_ptr,
                            articulations.__wbg_ptr,
                            ccd_solver.__wbg_ptr,
                            eventQueue.__wbg_ptr,
                            addHeapObject(hookObject),
                            addHeapObject(hookFilterContactPair),
                            addHeapObject(hookFilterIntersectionPair)
                        )
                    }
                }
                const RawPointColliderProjectionFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawpointcolliderprojection_free(
                                  ptr >>> 0
                              )
                          )
                class RawPointColliderProjection {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(
                            RawPointColliderProjection.prototype
                        )
                        obj.__wbg_ptr = ptr
                        RawPointColliderProjectionFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawPointColliderProjectionFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawpointcolliderprojection_free(ptr)
                    }
                    /**
                     * @returns {number}
                     */ colliderHandle() {
                        const ret =
                            wasm.rawpointcolliderprojection_colliderHandle(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                    /**
                     * @returns {RawVector}
                     */ point() {
                        const ret = wasm.rawpointcolliderprojection_point(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {boolean}
                     */ isInside() {
                        const ret = wasm.rawpointcolliderprojection_isInside(
                            this.__wbg_ptr
                        )
                        return ret !== 0
                    }
                    /**
                     * @returns {RawFeatureType}
                     */ featureType() {
                        const ret = wasm.rawpointcolliderprojection_featureType(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {number | undefined}
                     */ featureId() {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawpointcolliderprojection_featureId(
                                retptr,
                                this.__wbg_ptr
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getInt32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1 >>> 0
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                }
                const RawPointProjectionFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawpointprojection_free(ptr >>> 0)
                          )
                class RawPointProjection {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawPointProjection.prototype)
                        obj.__wbg_ptr = ptr
                        RawPointProjectionFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawPointProjectionFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawpointprojection_free(ptr)
                    }
                    /**
                     * @returns {RawVector}
                     */ point() {
                        const ret = wasm.rawpointprojection_point(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {boolean}
                     */ isInside() {
                        const ret = wasm.rawpointprojection_isInside(
                            this.__wbg_ptr
                        )
                        return ret !== 0
                    }
                }
                const RawQueryPipelineFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawquerypipeline_free(ptr >>> 0)
                          )
                class RawQueryPipeline {
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawQueryPipelineFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawquerypipeline_free(ptr)
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawquerypipeline_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @param {RawColliderSet} colliders
                     */ update(colliders) {
                        _assertClass(colliders, RawColliderSet)
                        wasm.rawquerypipeline_update(
                            this.__wbg_ptr,
                            colliders.__wbg_ptr
                        )
                    }
                    /**
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawVector} rayOrig
                     * @param {RawVector} rayDir
                     * @param {number} maxToi
                     * @param {boolean} solid
                     * @param {number} filter_flags
                     * @param {number | undefined} filter_groups
                     * @param {number | undefined} filter_exclude_collider
                     * @param {number | undefined} filter_exclude_rigid_body
                     * @param {Function} filter_predicate
                     * @returns {RawRayColliderHit | undefined}
                     */ castRay(
                        bodies,
                        colliders,
                        rayOrig,
                        rayDir,
                        maxToi,
                        solid,
                        filter_flags,
                        filter_groups,
                        filter_exclude_collider,
                        filter_exclude_rigid_body,
                        filter_predicate
                    ) {
                        try {
                            _assertClass(bodies, RawRigidBodySet)
                            _assertClass(colliders, RawColliderSet)
                            _assertClass(rayOrig, RawVector)
                            _assertClass(rayDir, RawVector)
                            const ret = wasm.rawquerypipeline_castRay(
                                this.__wbg_ptr,
                                bodies.__wbg_ptr,
                                colliders.__wbg_ptr,
                                rayOrig.__wbg_ptr,
                                rayDir.__wbg_ptr,
                                maxToi,
                                solid,
                                filter_flags,
                                !isLikeNone(filter_groups),
                                isLikeNone(filter_groups) ? 0 : filter_groups,
                                !isLikeNone(filter_exclude_collider),
                                isLikeNone(filter_exclude_collider)
                                    ? 0
                                    : filter_exclude_collider,
                                !isLikeNone(filter_exclude_rigid_body),
                                isLikeNone(filter_exclude_rigid_body)
                                    ? 0
                                    : filter_exclude_rigid_body,
                                addBorrowedObject(filter_predicate)
                            )
                            return ret === 0
                                ? undefined
                                : RawRayColliderHit.__wrap(ret)
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawVector} rayOrig
                     * @param {RawVector} rayDir
                     * @param {number} maxToi
                     * @param {boolean} solid
                     * @param {number} filter_flags
                     * @param {number | undefined} filter_groups
                     * @param {number | undefined} filter_exclude_collider
                     * @param {number | undefined} filter_exclude_rigid_body
                     * @param {Function} filter_predicate
                     * @returns {RawRayColliderIntersection | undefined}
                     */ castRayAndGetNormal(
                        bodies,
                        colliders,
                        rayOrig,
                        rayDir,
                        maxToi,
                        solid,
                        filter_flags,
                        filter_groups,
                        filter_exclude_collider,
                        filter_exclude_rigid_body,
                        filter_predicate
                    ) {
                        try {
                            _assertClass(bodies, RawRigidBodySet)
                            _assertClass(colliders, RawColliderSet)
                            _assertClass(rayOrig, RawVector)
                            _assertClass(rayDir, RawVector)
                            const ret =
                                wasm.rawquerypipeline_castRayAndGetNormal(
                                    this.__wbg_ptr,
                                    bodies.__wbg_ptr,
                                    colliders.__wbg_ptr,
                                    rayOrig.__wbg_ptr,
                                    rayDir.__wbg_ptr,
                                    maxToi,
                                    solid,
                                    filter_flags,
                                    !isLikeNone(filter_groups),
                                    isLikeNone(filter_groups)
                                        ? 0
                                        : filter_groups,
                                    !isLikeNone(filter_exclude_collider),
                                    isLikeNone(filter_exclude_collider)
                                        ? 0
                                        : filter_exclude_collider,
                                    !isLikeNone(filter_exclude_rigid_body),
                                    isLikeNone(filter_exclude_rigid_body)
                                        ? 0
                                        : filter_exclude_rigid_body,
                                    addBorrowedObject(filter_predicate)
                                )
                            return ret === 0
                                ? undefined
                                : RawRayColliderIntersection.__wrap(ret)
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawVector} rayOrig
                     * @param {RawVector} rayDir
                     * @param {number} maxToi
                     * @param {boolean} solid
                     * @param {Function} callback
                     * @param {number} filter_flags
                     * @param {number | undefined} filter_groups
                     * @param {number | undefined} filter_exclude_collider
                     * @param {number | undefined} filter_exclude_rigid_body
                     * @param {Function} filter_predicate
                     */ intersectionsWithRay(
                        bodies,
                        colliders,
                        rayOrig,
                        rayDir,
                        maxToi,
                        solid,
                        callback,
                        filter_flags,
                        filter_groups,
                        filter_exclude_collider,
                        filter_exclude_rigid_body,
                        filter_predicate
                    ) {
                        try {
                            _assertClass(bodies, RawRigidBodySet)
                            _assertClass(colliders, RawColliderSet)
                            _assertClass(rayOrig, RawVector)
                            _assertClass(rayDir, RawVector)
                            wasm.rawquerypipeline_intersectionsWithRay(
                                this.__wbg_ptr,
                                bodies.__wbg_ptr,
                                colliders.__wbg_ptr,
                                rayOrig.__wbg_ptr,
                                rayDir.__wbg_ptr,
                                maxToi,
                                solid,
                                addBorrowedObject(callback),
                                filter_flags,
                                !isLikeNone(filter_groups),
                                isLikeNone(filter_groups) ? 0 : filter_groups,
                                !isLikeNone(filter_exclude_collider),
                                isLikeNone(filter_exclude_collider)
                                    ? 0
                                    : filter_exclude_collider,
                                !isLikeNone(filter_exclude_rigid_body),
                                isLikeNone(filter_exclude_rigid_body)
                                    ? 0
                                    : filter_exclude_rigid_body,
                                addBorrowedObject(filter_predicate)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawVector} shapePos
                     * @param {RawRotation} shapeRot
                     * @param {RawShape} shape
                     * @param {number} filter_flags
                     * @param {number | undefined} filter_groups
                     * @param {number | undefined} filter_exclude_collider
                     * @param {number | undefined} filter_exclude_rigid_body
                     * @param {Function} filter_predicate
                     * @returns {number | undefined}
                     */ intersectionWithShape(
                        bodies,
                        colliders,
                        shapePos,
                        shapeRot,
                        shape,
                        filter_flags,
                        filter_groups,
                        filter_exclude_collider,
                        filter_exclude_rigid_body,
                        filter_predicate
                    ) {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            _assertClass(bodies, RawRigidBodySet)
                            _assertClass(colliders, RawColliderSet)
                            _assertClass(shapePos, RawVector)
                            _assertClass(shapeRot, RawRotation)
                            _assertClass(shape, RawShape)
                            wasm.rawquerypipeline_intersectionWithShape(
                                retptr,
                                this.__wbg_ptr,
                                bodies.__wbg_ptr,
                                colliders.__wbg_ptr,
                                shapePos.__wbg_ptr,
                                shapeRot.__wbg_ptr,
                                shape.__wbg_ptr,
                                filter_flags,
                                !isLikeNone(filter_groups),
                                isLikeNone(filter_groups) ? 0 : filter_groups,
                                !isLikeNone(filter_exclude_collider),
                                isLikeNone(filter_exclude_collider)
                                    ? 0
                                    : filter_exclude_collider,
                                !isLikeNone(filter_exclude_rigid_body),
                                isLikeNone(filter_exclude_rigid_body)
                                    ? 0
                                    : filter_exclude_rigid_body,
                                addBorrowedObject(filter_predicate)
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r2 = getFloat64Memory0()[retptr / 8 + 1]
                            return r0 === 0 ? undefined : r2
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawVector} point
                     * @param {boolean} solid
                     * @param {number} filter_flags
                     * @param {number | undefined} filter_groups
                     * @param {number | undefined} filter_exclude_collider
                     * @param {number | undefined} filter_exclude_rigid_body
                     * @param {Function} filter_predicate
                     * @returns {RawPointColliderProjection | undefined}
                     */ projectPoint(
                        bodies,
                        colliders,
                        point,
                        solid,
                        filter_flags,
                        filter_groups,
                        filter_exclude_collider,
                        filter_exclude_rigid_body,
                        filter_predicate
                    ) {
                        try {
                            _assertClass(bodies, RawRigidBodySet)
                            _assertClass(colliders, RawColliderSet)
                            _assertClass(point, RawVector)
                            const ret = wasm.rawquerypipeline_projectPoint(
                                this.__wbg_ptr,
                                bodies.__wbg_ptr,
                                colliders.__wbg_ptr,
                                point.__wbg_ptr,
                                solid,
                                filter_flags,
                                !isLikeNone(filter_groups),
                                isLikeNone(filter_groups) ? 0 : filter_groups,
                                !isLikeNone(filter_exclude_collider),
                                isLikeNone(filter_exclude_collider)
                                    ? 0
                                    : filter_exclude_collider,
                                !isLikeNone(filter_exclude_rigid_body),
                                isLikeNone(filter_exclude_rigid_body)
                                    ? 0
                                    : filter_exclude_rigid_body,
                                addBorrowedObject(filter_predicate)
                            )
                            return ret === 0
                                ? undefined
                                : RawPointColliderProjection.__wrap(ret)
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawVector} point
                     * @param {number} filter_flags
                     * @param {number | undefined} filter_groups
                     * @param {number | undefined} filter_exclude_collider
                     * @param {number | undefined} filter_exclude_rigid_body
                     * @param {Function} filter_predicate
                     * @returns {RawPointColliderProjection | undefined}
                     */ projectPointAndGetFeature(
                        bodies,
                        colliders,
                        point,
                        filter_flags,
                        filter_groups,
                        filter_exclude_collider,
                        filter_exclude_rigid_body,
                        filter_predicate
                    ) {
                        try {
                            _assertClass(bodies, RawRigidBodySet)
                            _assertClass(colliders, RawColliderSet)
                            _assertClass(point, RawVector)
                            const ret =
                                wasm.rawquerypipeline_projectPointAndGetFeature(
                                    this.__wbg_ptr,
                                    bodies.__wbg_ptr,
                                    colliders.__wbg_ptr,
                                    point.__wbg_ptr,
                                    filter_flags,
                                    !isLikeNone(filter_groups),
                                    isLikeNone(filter_groups)
                                        ? 0
                                        : filter_groups,
                                    !isLikeNone(filter_exclude_collider),
                                    isLikeNone(filter_exclude_collider)
                                        ? 0
                                        : filter_exclude_collider,
                                    !isLikeNone(filter_exclude_rigid_body),
                                    isLikeNone(filter_exclude_rigid_body)
                                        ? 0
                                        : filter_exclude_rigid_body,
                                    addBorrowedObject(filter_predicate)
                                )
                            return ret === 0
                                ? undefined
                                : RawPointColliderProjection.__wrap(ret)
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawVector} point
                     * @param {Function} callback
                     * @param {number} filter_flags
                     * @param {number | undefined} filter_groups
                     * @param {number | undefined} filter_exclude_collider
                     * @param {number | undefined} filter_exclude_rigid_body
                     * @param {Function} filter_predicate
                     */ intersectionsWithPoint(
                        bodies,
                        colliders,
                        point,
                        callback,
                        filter_flags,
                        filter_groups,
                        filter_exclude_collider,
                        filter_exclude_rigid_body,
                        filter_predicate
                    ) {
                        try {
                            _assertClass(bodies, RawRigidBodySet)
                            _assertClass(colliders, RawColliderSet)
                            _assertClass(point, RawVector)
                            wasm.rawquerypipeline_intersectionsWithPoint(
                                this.__wbg_ptr,
                                bodies.__wbg_ptr,
                                colliders.__wbg_ptr,
                                point.__wbg_ptr,
                                addBorrowedObject(callback),
                                filter_flags,
                                !isLikeNone(filter_groups),
                                isLikeNone(filter_groups) ? 0 : filter_groups,
                                !isLikeNone(filter_exclude_collider),
                                isLikeNone(filter_exclude_collider)
                                    ? 0
                                    : filter_exclude_collider,
                                !isLikeNone(filter_exclude_rigid_body),
                                isLikeNone(filter_exclude_rigid_body)
                                    ? 0
                                    : filter_exclude_rigid_body,
                                addBorrowedObject(filter_predicate)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawVector} shapePos
                     * @param {RawRotation} shapeRot
                     * @param {RawVector} shapeVel
                     * @param {RawShape} shape
                     * @param {number} target_distance
                     * @param {number} maxToi
                     * @param {boolean} stop_at_penetration
                     * @param {number} filter_flags
                     * @param {number | undefined} filter_groups
                     * @param {number | undefined} filter_exclude_collider
                     * @param {number | undefined} filter_exclude_rigid_body
                     * @param {Function} filter_predicate
                     * @returns {RawColliderShapeCastHit | undefined}
                     */ castShape(
                        bodies,
                        colliders,
                        shapePos,
                        shapeRot,
                        shapeVel,
                        shape,
                        target_distance,
                        maxToi,
                        stop_at_penetration,
                        filter_flags,
                        filter_groups,
                        filter_exclude_collider,
                        filter_exclude_rigid_body,
                        filter_predicate
                    ) {
                        try {
                            _assertClass(bodies, RawRigidBodySet)
                            _assertClass(colliders, RawColliderSet)
                            _assertClass(shapePos, RawVector)
                            _assertClass(shapeRot, RawRotation)
                            _assertClass(shapeVel, RawVector)
                            _assertClass(shape, RawShape)
                            const ret = wasm.rawquerypipeline_castShape(
                                this.__wbg_ptr,
                                bodies.__wbg_ptr,
                                colliders.__wbg_ptr,
                                shapePos.__wbg_ptr,
                                shapeRot.__wbg_ptr,
                                shapeVel.__wbg_ptr,
                                shape.__wbg_ptr,
                                target_distance,
                                maxToi,
                                stop_at_penetration,
                                filter_flags,
                                !isLikeNone(filter_groups),
                                isLikeNone(filter_groups) ? 0 : filter_groups,
                                !isLikeNone(filter_exclude_collider),
                                isLikeNone(filter_exclude_collider)
                                    ? 0
                                    : filter_exclude_collider,
                                !isLikeNone(filter_exclude_rigid_body),
                                isLikeNone(filter_exclude_rigid_body)
                                    ? 0
                                    : filter_exclude_rigid_body,
                                addBorrowedObject(filter_predicate)
                            )
                            return ret === 0
                                ? undefined
                                : RawColliderShapeCastHit.__wrap(ret)
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawVector} shapePos
                     * @param {RawRotation} shapeRot
                     * @param {RawShape} shape
                     * @param {Function} callback
                     * @param {number} filter_flags
                     * @param {number | undefined} filter_groups
                     * @param {number | undefined} filter_exclude_collider
                     * @param {number | undefined} filter_exclude_rigid_body
                     * @param {Function} filter_predicate
                     */ intersectionsWithShape(
                        bodies,
                        colliders,
                        shapePos,
                        shapeRot,
                        shape,
                        callback,
                        filter_flags,
                        filter_groups,
                        filter_exclude_collider,
                        filter_exclude_rigid_body,
                        filter_predicate
                    ) {
                        try {
                            _assertClass(bodies, RawRigidBodySet)
                            _assertClass(colliders, RawColliderSet)
                            _assertClass(shapePos, RawVector)
                            _assertClass(shapeRot, RawRotation)
                            _assertClass(shape, RawShape)
                            wasm.rawquerypipeline_intersectionsWithShape(
                                this.__wbg_ptr,
                                bodies.__wbg_ptr,
                                colliders.__wbg_ptr,
                                shapePos.__wbg_ptr,
                                shapeRot.__wbg_ptr,
                                shape.__wbg_ptr,
                                addBorrowedObject(callback),
                                filter_flags,
                                !isLikeNone(filter_groups),
                                isLikeNone(filter_groups) ? 0 : filter_groups,
                                !isLikeNone(filter_exclude_collider),
                                isLikeNone(filter_exclude_collider)
                                    ? 0
                                    : filter_exclude_collider,
                                !isLikeNone(filter_exclude_rigid_body),
                                isLikeNone(filter_exclude_rigid_body)
                                    ? 0
                                    : filter_exclude_rigid_body,
                                addBorrowedObject(filter_predicate)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {RawVector} aabbCenter
                     * @param {RawVector} aabbHalfExtents
                     * @param {Function} callback
                     */ collidersWithAabbIntersectingAabb(
                        aabbCenter,
                        aabbHalfExtents,
                        callback
                    ) {
                        try {
                            _assertClass(aabbCenter, RawVector)
                            _assertClass(aabbHalfExtents, RawVector)
                            wasm.rawquerypipeline_collidersWithAabbIntersectingAabb(
                                this.__wbg_ptr,
                                aabbCenter.__wbg_ptr,
                                aabbHalfExtents.__wbg_ptr,
                                addBorrowedObject(callback)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                }
                const RawRayColliderHitFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawraycolliderhit_free(ptr >>> 0)
                          )
                class RawRayColliderHit {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawRayColliderHit.prototype)
                        obj.__wbg_ptr = ptr
                        RawRayColliderHitFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawRayColliderHitFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawraycolliderhit_free(ptr)
                    }
                    /**
                     * @returns {number}
                     */ colliderHandle() {
                        const ret = wasm.rawcharactercollision_handle(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {number}
                     */ timeOfImpact() {
                        const ret = wasm.rawcollidershapecasthit_time_of_impact(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                }
                const RawRayColliderIntersectionFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawraycolliderintersection_free(
                                  ptr >>> 0
                              )
                          )
                class RawRayColliderIntersection {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(
                            RawRayColliderIntersection.prototype
                        )
                        obj.__wbg_ptr = ptr
                        RawRayColliderIntersectionFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawRayColliderIntersectionFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawraycolliderintersection_free(ptr)
                    }
                    /**
                     * @returns {number}
                     */ colliderHandle() {
                        const ret =
                            wasm.rawpointcolliderprojection_colliderHandle(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                    /**
                     * @returns {RawVector}
                     */ normal() {
                        const ret = wasm.rawcollidershapecasthit_witness1(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {number}
                     */ time_of_impact() {
                        const ret = wasm.rawcollidershapecasthit_time_of_impact(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {RawFeatureType}
                     */ featureType() {
                        const ret = wasm.rawpointcolliderprojection_featureType(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {number | undefined}
                     */ featureId() {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawpointcolliderprojection_featureId(
                                retptr,
                                this.__wbg_ptr
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getInt32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1 >>> 0
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                }
                const RawRayIntersectionFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawrayintersection_free(ptr >>> 0)
                          )
                class RawRayIntersection {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawRayIntersection.prototype)
                        obj.__wbg_ptr = ptr
                        RawRayIntersectionFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawRayIntersectionFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawrayintersection_free(ptr)
                    }
                    /**
                     * @returns {RawVector}
                     */ normal() {
                        const ret = wasm.rawcollidershapecasthit_witness1(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {number}
                     */ time_of_impact() {
                        const ret = wasm.rawcollidershapecasthit_time_of_impact(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {RawFeatureType}
                     */ featureType() {
                        const ret = wasm.rawpointcolliderprojection_featureType(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * @returns {number | undefined}
                     */ featureId() {
                        try {
                            const retptr =
                                wasm.__wbindgen_add_to_stack_pointer(-16)
                            wasm.rawpointcolliderprojection_featureId(
                                retptr,
                                this.__wbg_ptr
                            )
                            var r0 = getInt32Memory0()[retptr / 4 + 0]
                            var r1 = getInt32Memory0()[retptr / 4 + 1]
                            return r0 === 0 ? undefined : r1 >>> 0
                        } finally {
                            wasm.__wbindgen_add_to_stack_pointer(16)
                        }
                    }
                }
                const RawRigidBodySetFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawrigidbodyset_free(ptr >>> 0)
                          )
                class RawRigidBodySet {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawRigidBodySet.prototype)
                        obj.__wbg_ptr = ptr
                        RawRigidBodySetFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawRigidBodySetFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawrigidbodyset_free(ptr)
                    }
                    /**
                     * The world-space translation of this rigid-body.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ rbTranslation(handle) {
                        const ret = wasm.rawrigidbodyset_rbTranslation(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The world-space orientation of this rigid-body.
                     * @param {number} handle
                     * @returns {RawRotation}
                     */ rbRotation(handle) {
                        const ret = wasm.rawrigidbodyset_rbRotation(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawRotation.__wrap(ret)
                    }
                    /**
                     * Put the given rigid-body to sleep.
                     * @param {number} handle
                     */ rbSleep(handle) {
                        wasm.rawrigidbodyset_rbSleep(this.__wbg_ptr, handle)
                    }
                    /**
                     * Is this rigid-body sleeping?
                     * @param {number} handle
                     * @returns {boolean}
                     */ rbIsSleeping(handle) {
                        const ret = wasm.rawrigidbodyset_rbIsSleeping(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * Is the velocity of this rigid-body not zero?
                     * @param {number} handle
                     * @returns {boolean}
                     */ rbIsMoving(handle) {
                        const ret = wasm.rawrigidbodyset_rbIsMoving(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * The world-space predicted translation of this rigid-body.
                     *
                     * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
                     * method and is used for estimating the kinematic body velocity at the next timestep.
                     * For non-kinematic bodies, this value is currently unspecified.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ rbNextTranslation(handle) {
                        const ret = wasm.rawrigidbodyset_rbNextTranslation(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The world-space predicted orientation of this rigid-body.
                     *
                     * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
                     * method and is used for estimating the kinematic body velocity at the next timestep.
                     * For non-kinematic bodies, this value is currently unspecified.
                     * @param {number} handle
                     * @returns {RawRotation}
                     */ rbNextRotation(handle) {
                        const ret = wasm.rawrigidbodyset_rbNextRotation(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawRotation.__wrap(ret)
                    }
                    /**
                     * Sets the translation of this rigid-body.
                     *
                     * # Parameters
                     * - `x`: the world-space position of the rigid-body along the `x` axis.
                     * - `y`: the world-space position of the rigid-body along the `y` axis.
                     * - `z`: the world-space position of the rigid-body along the `z` axis.
                     * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
                     * wasn't moving before modifying its position.
                     * @param {number} handle
                     * @param {number} x
                     * @param {number} y
                     * @param {number} z
                     * @param {boolean} wakeUp
                     */ rbSetTranslation(handle, x, y, z, wakeUp) {
                        wasm.rawrigidbodyset_rbSetTranslation(
                            this.__wbg_ptr,
                            handle,
                            x,
                            y,
                            z,
                            wakeUp
                        )
                    }
                    /**
                     * Sets the rotation quaternion of this rigid-body.
                     *
                     * This does nothing if a zero quaternion is provided.
                     *
                     * # Parameters
                     * - `x`: the first vector component of the quaternion.
                     * - `y`: the second vector component of the quaternion.
                     * - `z`: the third vector component of the quaternion.
                     * - `w`: the scalar component of the quaternion.
                     * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
                     * wasn't moving before modifying its position.
                     * @param {number} handle
                     * @param {number} x
                     * @param {number} y
                     * @param {number} z
                     * @param {number} w
                     * @param {boolean} wakeUp
                     */ rbSetRotation(handle, x, y, z, w, wakeUp) {
                        wasm.rawrigidbodyset_rbSetRotation(
                            this.__wbg_ptr,
                            handle,
                            x,
                            y,
                            z,
                            w,
                            wakeUp
                        )
                    }
                    /**
                     * Sets the linear velocity of this rigid-body.
                     * @param {number} handle
                     * @param {RawVector} linvel
                     * @param {boolean} wakeUp
                     */ rbSetLinvel(handle, linvel, wakeUp) {
                        _assertClass(linvel, RawVector)
                        wasm.rawrigidbodyset_rbSetLinvel(
                            this.__wbg_ptr,
                            handle,
                            linvel.__wbg_ptr,
                            wakeUp
                        )
                    }
                    /**
                     * Sets the angular velocity of this rigid-body.
                     * @param {number} handle
                     * @param {RawVector} angvel
                     * @param {boolean} wakeUp
                     */ rbSetAngvel(handle, angvel, wakeUp) {
                        _assertClass(angvel, RawVector)
                        wasm.rawrigidbodyset_rbSetAngvel(
                            this.__wbg_ptr,
                            handle,
                            angvel.__wbg_ptr,
                            wakeUp
                        )
                    }
                    /**
                     * If this rigid body is kinematic, sets its future translation after the next timestep integration.
                     *
                     * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
                     * interacting with this kinematic body behave as expected. Internally, Rapier will compute
                     * an artificial velocity for this rigid-body from its current position and its next kinematic
                     * position. This velocity will be used to compute forces on dynamic bodies interacting with
                     * this body.
                     *
                     * # Parameters
                     * - `x`: the world-space position of the rigid-body along the `x` axis.
                     * - `y`: the world-space position of the rigid-body along the `y` axis.
                     * - `z`: the world-space position of the rigid-body along the `z` axis.
                     * @param {number} handle
                     * @param {number} x
                     * @param {number} y
                     * @param {number} z
                     */ rbSetNextKinematicTranslation(handle, x, y, z) {
                        wasm.rawrigidbodyset_rbSetNextKinematicTranslation(
                            this.__wbg_ptr,
                            handle,
                            x,
                            y,
                            z
                        )
                    }
                    /**
                     * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
                     *
                     * This should be used instead of `rigidBody.setRotation` to make the dynamic object
                     * interacting with this kinematic body behave as expected. Internally, Rapier will compute
                     * an artificial velocity for this rigid-body from its current position and its next kinematic
                     * position. This velocity will be used to compute forces on dynamic bodies interacting with
                     * this body.
                     *
                     * # Parameters
                     * - `x`: the first vector component of the quaternion.
                     * - `y`: the second vector component of the quaternion.
                     * - `z`: the third vector component of the quaternion.
                     * - `w`: the scalar component of the quaternion.
                     * @param {number} handle
                     * @param {number} x
                     * @param {number} y
                     * @param {number} z
                     * @param {number} w
                     */ rbSetNextKinematicRotation(handle, x, y, z, w) {
                        wasm.rawrigidbodyset_rbSetNextKinematicRotation(
                            this.__wbg_ptr,
                            handle,
                            x,
                            y,
                            z,
                            w
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {RawColliderSet} colliders
                     */ rbRecomputeMassPropertiesFromColliders(
                        handle,
                        colliders
                    ) {
                        _assertClass(colliders, RawColliderSet)
                        wasm.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(
                            this.__wbg_ptr,
                            handle,
                            colliders.__wbg_ptr
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} mass
                     * @param {boolean} wake_up
                     */ rbSetAdditionalMass(handle, mass, wake_up) {
                        wasm.rawrigidbodyset_rbSetAdditionalMass(
                            this.__wbg_ptr,
                            handle,
                            mass,
                            wake_up
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} mass
                     * @param {RawVector} centerOfMass
                     * @param {RawVector} principalAngularInertia
                     * @param {RawRotation} angularInertiaFrame
                     * @param {boolean} wake_up
                     */ rbSetAdditionalMassProperties(
                        handle,
                        mass,
                        centerOfMass,
                        principalAngularInertia,
                        angularInertiaFrame,
                        wake_up
                    ) {
                        _assertClass(centerOfMass, RawVector)
                        _assertClass(principalAngularInertia, RawVector)
                        _assertClass(angularInertiaFrame, RawRotation)
                        wasm.rawrigidbodyset_rbSetAdditionalMassProperties(
                            this.__wbg_ptr,
                            handle,
                            mass,
                            centerOfMass.__wbg_ptr,
                            principalAngularInertia.__wbg_ptr,
                            angularInertiaFrame.__wbg_ptr,
                            wake_up
                        )
                    }
                    /**
                     * The linear velocity of this rigid-body.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ rbLinvel(handle) {
                        const ret = wasm.rawrigidbodyset_rbLinvel(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The angular velocity of this rigid-body.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ rbAngvel(handle) {
                        const ret = wasm.rawrigidbodyset_rbAngvel(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @param {number} handle
                     * @param {boolean} locked
                     * @param {boolean} wake_up
                     */ rbLockTranslations(handle, locked, wake_up) {
                        wasm.rawrigidbodyset_rbLockTranslations(
                            this.__wbg_ptr,
                            handle,
                            locked,
                            wake_up
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {boolean} allow_x
                     * @param {boolean} allow_y
                     * @param {boolean} allow_z
                     * @param {boolean} wake_up
                     */ rbSetEnabledTranslations(
                        handle,
                        allow_x,
                        allow_y,
                        allow_z,
                        wake_up
                    ) {
                        wasm.rawrigidbodyset_rbSetEnabledTranslations(
                            this.__wbg_ptr,
                            handle,
                            allow_x,
                            allow_y,
                            allow_z,
                            wake_up
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {boolean} locked
                     * @param {boolean} wake_up
                     */ rbLockRotations(handle, locked, wake_up) {
                        wasm.rawrigidbodyset_rbLockRotations(
                            this.__wbg_ptr,
                            handle,
                            locked,
                            wake_up
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {boolean} allow_x
                     * @param {boolean} allow_y
                     * @param {boolean} allow_z
                     * @param {boolean} wake_up
                     */ rbSetEnabledRotations(
                        handle,
                        allow_x,
                        allow_y,
                        allow_z,
                        wake_up
                    ) {
                        wasm.rawrigidbodyset_rbSetEnabledRotations(
                            this.__wbg_ptr,
                            handle,
                            allow_x,
                            allow_y,
                            allow_z,
                            wake_up
                        )
                    }
                    /**
                     * @param {number} handle
                     * @returns {number}
                     */ rbDominanceGroup(handle) {
                        const ret = wasm.rawrigidbodyset_rbDominanceGroup(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * @param {number} handle
                     * @param {number} group
                     */ rbSetDominanceGroup(handle, group) {
                        wasm.rawrigidbodyset_rbSetDominanceGroup(
                            this.__wbg_ptr,
                            handle,
                            group
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {boolean} enabled
                     */ rbEnableCcd(handle, enabled) {
                        wasm.rawrigidbodyset_rbEnableCcd(
                            this.__wbg_ptr,
                            handle,
                            enabled
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} prediction
                     */ rbSetSoftCcdPrediction(handle, prediction) {
                        wasm.rawrigidbodyset_rbSetSoftCcdPrediction(
                            this.__wbg_ptr,
                            handle,
                            prediction
                        )
                    }
                    /**
                     * The mass of this rigid-body.
                     * @param {number} handle
                     * @returns {number}
                     */ rbMass(handle) {
                        const ret = wasm.rawrigidbodyset_rbMass(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The inverse of the mass of a rigid-body.
                     *
                     * If this is zero, the rigid-body is assumed to have infinite mass.
                     * @param {number} handle
                     * @returns {number}
                     */ rbInvMass(handle) {
                        const ret = wasm.rawrigidbodyset_rbInvMass(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The inverse mass taking into account translation locking.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ rbEffectiveInvMass(handle) {
                        const ret = wasm.rawrigidbodyset_rbEffectiveInvMass(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The center of mass of a rigid-body expressed in its local-space.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ rbLocalCom(handle) {
                        const ret = wasm.rawrigidbodyset_rbLocalCom(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The world-space center of mass of the rigid-body.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ rbWorldCom(handle) {
                        const ret = wasm.rawrigidbodyset_rbWorldCom(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The inverse of the principal angular inertia of the rigid-body.
                     *
                     * Components set to zero are assumed to be infinite along the corresponding principal axis.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ rbInvPrincipalInertiaSqrt(handle) {
                        const ret =
                            wasm.rawrigidbodyset_rbInvPrincipalInertiaSqrt(
                                this.__wbg_ptr,
                                handle
                            )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The principal vectors of the local angular inertia tensor of the rigid-body.
                     * @param {number} handle
                     * @returns {RawRotation}
                     */ rbPrincipalInertiaLocalFrame(handle) {
                        const ret =
                            wasm.rawrigidbodyset_rbPrincipalInertiaLocalFrame(
                                this.__wbg_ptr,
                                handle
                            )
                        return RawRotation.__wrap(ret)
                    }
                    /**
                     * The angular inertia along the principal inertia axes of the rigid-body.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ rbPrincipalInertia(handle) {
                        const ret = wasm.rawrigidbodyset_rbPrincipalInertia(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * The square-root of the world-space inverse angular inertia tensor of the rigid-body,
                     * taking into account rotation locking.
                     * @param {number} handle
                     * @returns {RawSdpMatrix3}
                     */ rbEffectiveWorldInvInertiaSqrt(handle) {
                        const ret =
                            wasm.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(
                                this.__wbg_ptr,
                                handle
                            )
                        return RawSdpMatrix3.__wrap(ret)
                    }
                    /**
                     * The effective world-space angular inertia (that takes the potential rotation locking into account) of
                     * this rigid-body.
                     * @param {number} handle
                     * @returns {RawSdpMatrix3}
                     */ rbEffectiveAngularInertia(handle) {
                        const ret =
                            wasm.rawrigidbodyset_rbEffectiveAngularInertia(
                                this.__wbg_ptr,
                                handle
                            )
                        return RawSdpMatrix3.__wrap(ret)
                    }
                    /**
                     * Wakes this rigid-body up.
                     *
                     * A dynamic rigid-body that does not move during several consecutive frames will
                     * be put to sleep by the physics engine, i.e., it will stop being simulated in order
                     * to avoid useless computations.
                     * This method forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
                     * the position of a dynamic body so that it is properly simulated afterwards.
                     * @param {number} handle
                     */ rbWakeUp(handle) {
                        wasm.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, handle)
                    }
                    /**
                     * Is Continuous Collision Detection enabled for this rigid-body?
                     * @param {number} handle
                     * @returns {boolean}
                     */ rbIsCcdEnabled(handle) {
                        const ret = wasm.rawrigidbodyset_rbIsCcdEnabled(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * @param {number} handle
                     * @returns {number}
                     */ rbSoftCcdPrediction(handle) {
                        const ret = wasm.rawrigidbodyset_rbSoftCcdPrediction(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The number of colliders attached to this rigid-body.
                     * @param {number} handle
                     * @returns {number}
                     */ rbNumColliders(handle) {
                        const ret = wasm.rawrigidbodyset_rbNumColliders(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret >>> 0
                    }
                    /**
                     * Retrieves the `i-th` collider attached to this rigid-body.
                     *
                     * # Parameters
                     * - `at`: The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
                     *         This index is **not** the same as the unique identifier of the collider.
                     * @param {number} handle
                     * @param {number} at
                     * @returns {number}
                     */ rbCollider(handle, at) {
                        const ret = wasm.rawrigidbodyset_rbCollider(
                            this.__wbg_ptr,
                            handle,
                            at
                        )
                        return ret
                    }
                    /**
                     * The status of this rigid-body: fixed, dynamic, or kinematic.
                     * @param {number} handle
                     * @returns {RawRigidBodyType}
                     */ rbBodyType(handle) {
                        const ret = wasm.rawrigidbodyset_rbBodyType(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * Set a new status for this rigid-body: fixed, dynamic, or kinematic.
                     * @param {number} handle
                     * @param {RawRigidBodyType} status
                     * @param {boolean} wake_up
                     */ rbSetBodyType(handle, status, wake_up) {
                        wasm.rawrigidbodyset_rbSetBodyType(
                            this.__wbg_ptr,
                            handle,
                            status,
                            wake_up
                        )
                    }
                    /**
                     * Is this rigid-body fixed?
                     * @param {number} handle
                     * @returns {boolean}
                     */ rbIsFixed(handle) {
                        const ret = wasm.rawrigidbodyset_rbIsFixed(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * Is this rigid-body kinematic?
                     * @param {number} handle
                     * @returns {boolean}
                     */ rbIsKinematic(handle) {
                        const ret = wasm.rawrigidbodyset_rbIsKinematic(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * Is this rigid-body dynamic?
                     * @param {number} handle
                     * @returns {boolean}
                     */ rbIsDynamic(handle) {
                        const ret = wasm.rawrigidbodyset_rbIsDynamic(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * The linear damping coefficient of this rigid-body.
                     * @param {number} handle
                     * @returns {number}
                     */ rbLinearDamping(handle) {
                        const ret = wasm.rawrigidbodyset_rbLinearDamping(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * The angular damping coefficient of this rigid-body.
                     * @param {number} handle
                     * @returns {number}
                     */ rbAngularDamping(handle) {
                        const ret = wasm.rawrigidbodyset_rbAngularDamping(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * @param {number} handle
                     * @param {number} factor
                     */ rbSetLinearDamping(handle, factor) {
                        wasm.rawrigidbodyset_rbSetLinearDamping(
                            this.__wbg_ptr,
                            handle,
                            factor
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {number} factor
                     */ rbSetAngularDamping(handle, factor) {
                        wasm.rawrigidbodyset_rbSetAngularDamping(
                            this.__wbg_ptr,
                            handle,
                            factor
                        )
                    }
                    /**
                     * @param {number} handle
                     * @param {boolean} enabled
                     */ rbSetEnabled(handle, enabled) {
                        wasm.rawrigidbodyset_rbSetEnabled(
                            this.__wbg_ptr,
                            handle,
                            enabled
                        )
                    }
                    /**
                     * @param {number} handle
                     * @returns {boolean}
                     */ rbIsEnabled(handle) {
                        const ret = wasm.rawrigidbodyset_rbIsEnabled(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * @param {number} handle
                     * @returns {number}
                     */ rbGravityScale(handle) {
                        const ret = wasm.rawrigidbodyset_rbGravityScale(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret
                    }
                    /**
                     * @param {number} handle
                     * @param {number} factor
                     * @param {boolean} wakeUp
                     */ rbSetGravityScale(handle, factor, wakeUp) {
                        wasm.rawrigidbodyset_rbSetGravityScale(
                            this.__wbg_ptr,
                            handle,
                            factor,
                            wakeUp
                        )
                    }
                    /**
                     * Resets to zero all user-added forces added to this rigid-body.
                     * @param {number} handle
                     * @param {boolean} wakeUp
                     */ rbResetForces(handle, wakeUp) {
                        wasm.rawrigidbodyset_rbResetForces(
                            this.__wbg_ptr,
                            handle,
                            wakeUp
                        )
                    }
                    /**
                     * Resets to zero all user-added torques added to this rigid-body.
                     * @param {number} handle
                     * @param {boolean} wakeUp
                     */ rbResetTorques(handle, wakeUp) {
                        wasm.rawrigidbodyset_rbResetTorques(
                            this.__wbg_ptr,
                            handle,
                            wakeUp
                        )
                    }
                    /**
                     * Adds a force at the center-of-mass of this rigid-body.
                     *
                     * # Parameters
                     * - `force`: the world-space force to apply on the rigid-body.
                     * - `wakeUp`: should the rigid-body be automatically woken-up?
                     * @param {number} handle
                     * @param {RawVector} force
                     * @param {boolean} wakeUp
                     */ rbAddForce(handle, force, wakeUp) {
                        _assertClass(force, RawVector)
                        wasm.rawrigidbodyset_rbAddForce(
                            this.__wbg_ptr,
                            handle,
                            force.__wbg_ptr,
                            wakeUp
                        )
                    }
                    /**
                     * Applies an impulse at the center-of-mass of this rigid-body.
                     *
                     * # Parameters
                     * - `impulse`: the world-space impulse to apply on the rigid-body.
                     * - `wakeUp`: should the rigid-body be automatically woken-up?
                     * @param {number} handle
                     * @param {RawVector} impulse
                     * @param {boolean} wakeUp
                     */ rbApplyImpulse(handle, impulse, wakeUp) {
                        _assertClass(impulse, RawVector)
                        wasm.rawrigidbodyset_rbApplyImpulse(
                            this.__wbg_ptr,
                            handle,
                            impulse.__wbg_ptr,
                            wakeUp
                        )
                    }
                    /**
                     * Adds a torque at the center-of-mass of this rigid-body.
                     *
                     * # Parameters
                     * - `torque`: the world-space torque to apply on the rigid-body.
                     * - `wakeUp`: should the rigid-body be automatically woken-up?
                     * @param {number} handle
                     * @param {RawVector} torque
                     * @param {boolean} wakeUp
                     */ rbAddTorque(handle, torque, wakeUp) {
                        _assertClass(torque, RawVector)
                        wasm.rawrigidbodyset_rbAddTorque(
                            this.__wbg_ptr,
                            handle,
                            torque.__wbg_ptr,
                            wakeUp
                        )
                    }
                    /**
                     * Applies an impulsive torque at the center-of-mass of this rigid-body.
                     *
                     * # Parameters
                     * - `torque impulse`: the world-space torque impulse to apply on the rigid-body.
                     * - `wakeUp`: should the rigid-body be automatically woken-up?
                     * @param {number} handle
                     * @param {RawVector} torque_impulse
                     * @param {boolean} wakeUp
                     */ rbApplyTorqueImpulse(handle, torque_impulse, wakeUp) {
                        _assertClass(torque_impulse, RawVector)
                        wasm.rawrigidbodyset_rbApplyTorqueImpulse(
                            this.__wbg_ptr,
                            handle,
                            torque_impulse.__wbg_ptr,
                            wakeUp
                        )
                    }
                    /**
                     * Adds a force at the given world-space point of this rigid-body.
                     *
                     * # Parameters
                     * - `force`: the world-space force to apply on the rigid-body.
                     * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
                     * - `wakeUp`: should the rigid-body be automatically woken-up?
                     * @param {number} handle
                     * @param {RawVector} force
                     * @param {RawVector} point
                     * @param {boolean} wakeUp
                     */ rbAddForceAtPoint(handle, force, point, wakeUp) {
                        _assertClass(force, RawVector)
                        _assertClass(point, RawVector)
                        wasm.rawrigidbodyset_rbAddForceAtPoint(
                            this.__wbg_ptr,
                            handle,
                            force.__wbg_ptr,
                            point.__wbg_ptr,
                            wakeUp
                        )
                    }
                    /**
                     * Applies an impulse at the given world-space point of this rigid-body.
                     *
                     * # Parameters
                     * - `impulse`: the world-space impulse to apply on the rigid-body.
                     * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
                     * - `wakeUp`: should the rigid-body be automatically woken-up?
                     * @param {number} handle
                     * @param {RawVector} impulse
                     * @param {RawVector} point
                     * @param {boolean} wakeUp
                     */ rbApplyImpulseAtPoint(handle, impulse, point, wakeUp) {
                        _assertClass(impulse, RawVector)
                        _assertClass(point, RawVector)
                        wasm.rawrigidbodyset_rbApplyImpulseAtPoint(
                            this.__wbg_ptr,
                            handle,
                            impulse.__wbg_ptr,
                            point.__wbg_ptr,
                            wakeUp
                        )
                    }
                    /**
                     * @param {number} handle
                     * @returns {number}
                     */ rbAdditionalSolverIterations(handle) {
                        const ret =
                            wasm.rawrigidbodyset_rbAdditionalSolverIterations(
                                this.__wbg_ptr,
                                handle
                            )
                        return ret >>> 0
                    }
                    /**
                     * @param {number} handle
                     * @param {number} iters
                     */ rbSetAdditionalSolverIterations(handle, iters) {
                        wasm.rawrigidbodyset_rbSetAdditionalSolverIterations(
                            this.__wbg_ptr,
                            handle,
                            iters
                        )
                    }
                    /**
                     * An arbitrary user-defined 32-bit integer
                     * @param {number} handle
                     * @returns {number}
                     */ rbUserData(handle) {
                        const ret = wasm.rawrigidbodyset_rbUserData(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret >>> 0
                    }
                    /**
                     * Sets the user-defined 32-bit integer of this rigid-body.
                     *
                     * # Parameters
                     * - `data`: an arbitrary user-defined 32-bit integer.
                     * @param {number} handle
                     * @param {number} data
                     */ rbSetUserData(handle, data) {
                        wasm.rawrigidbodyset_rbSetUserData(
                            this.__wbg_ptr,
                            handle,
                            data
                        )
                    }
                    /**
                     * Retrieves the constant force(s) the user added to this rigid-body.
                     * Returns zero if the rigid-body is not dynamic.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ rbUserForce(handle) {
                        const ret = wasm.rawrigidbodyset_rbUserForce(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * Retrieves the constant torque(s) the user added to this rigid-body.
                     * Returns zero if the rigid-body is not dynamic.
                     * @param {number} handle
                     * @returns {RawVector}
                     */ rbUserTorque(handle) {
                        const ret = wasm.rawrigidbodyset_rbUserTorque(
                            this.__wbg_ptr,
                            handle
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawrigidbodyset_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @param {boolean} enabled
                     * @param {RawVector} translation
                     * @param {RawRotation} rotation
                     * @param {number} gravityScale
                     * @param {number} mass
                     * @param {boolean} massOnly
                     * @param {RawVector} centerOfMass
                     * @param {RawVector} linvel
                     * @param {RawVector} angvel
                     * @param {RawVector} principalAngularInertia
                     * @param {RawRotation} angularInertiaFrame
                     * @param {boolean} translationEnabledX
                     * @param {boolean} translationEnabledY
                     * @param {boolean} translationEnabledZ
                     * @param {boolean} rotationEnabledX
                     * @param {boolean} rotationEnabledY
                     * @param {boolean} rotationEnabledZ
                     * @param {number} linearDamping
                     * @param {number} angularDamping
                     * @param {RawRigidBodyType} rb_type
                     * @param {boolean} canSleep
                     * @param {boolean} sleeping
                     * @param {number} softCcdPrediction
                     * @param {boolean} ccdEnabled
                     * @param {number} dominanceGroup
                     * @param {number} additional_solver_iterations
                     * @returns {number}
                     */ createRigidBody(
                        enabled,
                        translation,
                        rotation,
                        gravityScale,
                        mass,
                        massOnly,
                        centerOfMass,
                        linvel,
                        angvel,
                        principalAngularInertia,
                        angularInertiaFrame,
                        translationEnabledX,
                        translationEnabledY,
                        translationEnabledZ,
                        rotationEnabledX,
                        rotationEnabledY,
                        rotationEnabledZ,
                        linearDamping,
                        angularDamping,
                        rb_type,
                        canSleep,
                        sleeping,
                        softCcdPrediction,
                        ccdEnabled,
                        dominanceGroup,
                        additional_solver_iterations
                    ) {
                        _assertClass(translation, RawVector)
                        _assertClass(rotation, RawRotation)
                        _assertClass(centerOfMass, RawVector)
                        _assertClass(linvel, RawVector)
                        _assertClass(angvel, RawVector)
                        _assertClass(principalAngularInertia, RawVector)
                        _assertClass(angularInertiaFrame, RawRotation)
                        const ret = wasm.rawrigidbodyset_createRigidBody(
                            this.__wbg_ptr,
                            enabled,
                            translation.__wbg_ptr,
                            rotation.__wbg_ptr,
                            gravityScale,
                            mass,
                            massOnly,
                            centerOfMass.__wbg_ptr,
                            linvel.__wbg_ptr,
                            angvel.__wbg_ptr,
                            principalAngularInertia.__wbg_ptr,
                            angularInertiaFrame.__wbg_ptr,
                            translationEnabledX,
                            translationEnabledY,
                            translationEnabledZ,
                            rotationEnabledX,
                            rotationEnabledY,
                            rotationEnabledZ,
                            linearDamping,
                            angularDamping,
                            rb_type,
                            canSleep,
                            sleeping,
                            softCcdPrediction,
                            ccdEnabled,
                            dominanceGroup,
                            additional_solver_iterations
                        )
                        return ret
                    }
                    /**
                     * @param {number} handle
                     * @param {RawIslandManager} islands
                     * @param {RawColliderSet} colliders
                     * @param {RawImpulseJointSet} joints
                     * @param {RawMultibodyJointSet} articulations
                     */ remove(
                        handle,
                        islands,
                        colliders,
                        joints,
                        articulations
                    ) {
                        _assertClass(islands, RawIslandManager)
                        _assertClass(colliders, RawColliderSet)
                        _assertClass(joints, RawImpulseJointSet)
                        _assertClass(articulations, RawMultibodyJointSet)
                        wasm.rawrigidbodyset_remove(
                            this.__wbg_ptr,
                            handle,
                            islands.__wbg_ptr,
                            colliders.__wbg_ptr,
                            joints.__wbg_ptr,
                            articulations.__wbg_ptr
                        )
                    }
                    /**
                     * The number of rigid-bodies on this set.
                     * @returns {number}
                     */ len() {
                        const ret = wasm.rawcolliderset_len(this.__wbg_ptr)
                        return ret >>> 0
                    }
                    /**
                     * Checks if a rigid-body with the given integer handle exists.
                     * @param {number} handle
                     * @returns {boolean}
                     */ contains(handle) {
                        const ret = wasm.rawrigidbodyset_contains(
                            this.__wbg_ptr,
                            handle
                        )
                        return ret !== 0
                    }
                    /**
                     * Applies the given JavaScript function to the integer handle of each rigid-body managed by this set.
                     *
                     * # Parameters
                     * - `f(handle)`: the function to apply to the integer handle of each rigid-body managed by this set. Called as `f(collider)`.
                     * @param {Function} f
                     */ forEachRigidBodyHandle(f) {
                        try {
                            wasm.rawrigidbodyset_forEachRigidBodyHandle(
                                this.__wbg_ptr,
                                addBorrowedObject(f)
                            )
                        } finally {
                            heap[stack_pointer++] = undefined
                        }
                    }
                    /**
                     * @param {RawColliderSet} colliders
                     */ propagateModifiedBodyPositionsToColliders(colliders) {
                        _assertClass(colliders, RawColliderSet)
                        wasm.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(
                            this.__wbg_ptr,
                            colliders.__wbg_ptr
                        )
                    }
                }
                const RawRotationFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawrotation_free(ptr >>> 0)
                          )
                class RawRotation {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawRotation.prototype)
                        obj.__wbg_ptr = ptr
                        RawRotationFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawRotationFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawrotation_free(ptr)
                    }
                    /**
                     * @param {number} x
                     * @param {number} y
                     * @param {number} z
                     * @param {number} w
                     */ constructor(x, y, z, w) {
                        const ret = wasm.rawrotation_new(x, y, z, w)
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * The identity quaternion.
                     * @returns {RawRotation}
                     */ static identity() {
                        const ret = wasm.rawrotation_identity()
                        return RawRotation.__wrap(ret)
                    }
                    /**
                     * The `x` component of this quaternion.
                     * @returns {number}
                     */ get x() {
                        const ret = wasm.rawrotation_x(this.__wbg_ptr)
                        return ret
                    }
                    /**
                     * The `y` component of this quaternion.
                     * @returns {number}
                     */ get y() {
                        const ret = wasm.rawintegrationparameters_dt(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * The `z` component of this quaternion.
                     * @returns {number}
                     */ get z() {
                        const ret = wasm.rawcollidershapecasthit_time_of_impact(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * The `w` component of this quaternion.
                     * @returns {number}
                     */ get w() {
                        const ret = wasm.rawrotation_w(this.__wbg_ptr)
                        return ret
                    }
                }
                const RawSdpMatrix3Finalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawsdpmatrix3_free(ptr >>> 0)
                          )
                class RawSdpMatrix3 {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawSdpMatrix3.prototype)
                        obj.__wbg_ptr = ptr
                        RawSdpMatrix3Finalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawSdpMatrix3Finalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawsdpmatrix3_free(ptr)
                    }
                    /**
                     * Row major list of the upper-triangular part of the symmetric matrix.
                     * @returns {Float32Array}
                     */ elements() {
                        const ret = wasm.rawsdpmatrix3_elements(this.__wbg_ptr)
                        return takeObject(ret)
                    }
                }
                const RawSerializationPipelineFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawserializationpipeline_free(
                                  ptr >>> 0
                              )
                          )
                class RawSerializationPipeline {
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawSerializationPipelineFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawserializationpipeline_free(ptr)
                    }
                    /**
                     */ constructor() {
                        const ret = wasm.rawserializationpipeline_new()
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * @param {RawVector} gravity
                     * @param {RawIntegrationParameters} integrationParameters
                     * @param {RawIslandManager} islands
                     * @param {RawBroadPhase} broadPhase
                     * @param {RawNarrowPhase} narrowPhase
                     * @param {RawRigidBodySet} bodies
                     * @param {RawColliderSet} colliders
                     * @param {RawImpulseJointSet} impulse_joints
                     * @param {RawMultibodyJointSet} multibody_joints
                     * @returns {Uint8Array | undefined}
                     */ serializeAll(
                        gravity,
                        integrationParameters,
                        islands,
                        broadPhase,
                        narrowPhase,
                        bodies,
                        colliders,
                        impulse_joints,
                        multibody_joints
                    ) {
                        _assertClass(gravity, RawVector)
                        _assertClass(
                            integrationParameters,
                            RawIntegrationParameters
                        )
                        _assertClass(islands, RawIslandManager)
                        _assertClass(broadPhase, RawBroadPhase)
                        _assertClass(narrowPhase, RawNarrowPhase)
                        _assertClass(bodies, RawRigidBodySet)
                        _assertClass(colliders, RawColliderSet)
                        _assertClass(impulse_joints, RawImpulseJointSet)
                        _assertClass(multibody_joints, RawMultibodyJointSet)
                        const ret = wasm.rawserializationpipeline_serializeAll(
                            this.__wbg_ptr,
                            gravity.__wbg_ptr,
                            integrationParameters.__wbg_ptr,
                            islands.__wbg_ptr,
                            broadPhase.__wbg_ptr,
                            narrowPhase.__wbg_ptr,
                            bodies.__wbg_ptr,
                            colliders.__wbg_ptr,
                            impulse_joints.__wbg_ptr,
                            multibody_joints.__wbg_ptr
                        )
                        return takeObject(ret)
                    }
                    /**
                     * @param {Uint8Array} data
                     * @returns {RawDeserializedWorld | undefined}
                     */ deserializeAll(data) {
                        const ret =
                            wasm.rawserializationpipeline_deserializeAll(
                                this.__wbg_ptr,
                                addHeapObject(data)
                            )
                        return ret === 0
                            ? undefined
                            : RawDeserializedWorld.__wrap(ret)
                    }
                }
                const RawShapeFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawshape_free(ptr >>> 0)
                          )
                class RawShape {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawShape.prototype)
                        obj.__wbg_ptr = ptr
                        RawShapeFinalization.register(obj, obj.__wbg_ptr, obj)
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawShapeFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawshape_free(ptr)
                    }
                    /**
                     * @param {number} hx
                     * @param {number} hy
                     * @param {number} hz
                     * @returns {RawShape}
                     */ static cuboid(hx, hy, hz) {
                        const ret = wasm.rawshape_cuboid(hx, hy, hz)
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {number} hx
                     * @param {number} hy
                     * @param {number} hz
                     * @param {number} borderRadius
                     * @returns {RawShape}
                     */ static roundCuboid(hx, hy, hz, borderRadius) {
                        const ret = wasm.rawshape_roundCuboid(
                            hx,
                            hy,
                            hz,
                            borderRadius
                        )
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {number} radius
                     * @returns {RawShape}
                     */ static ball(radius) {
                        const ret = wasm.rawshape_ball(radius)
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {RawVector} normal
                     * @returns {RawShape}
                     */ static halfspace(normal) {
                        _assertClass(normal, RawVector)
                        const ret = wasm.rawshape_halfspace(normal.__wbg_ptr)
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {number} halfHeight
                     * @param {number} radius
                     * @returns {RawShape}
                     */ static capsule(halfHeight, radius) {
                        const ret = wasm.rawshape_capsule(halfHeight, radius)
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {number} halfHeight
                     * @param {number} radius
                     * @returns {RawShape}
                     */ static cylinder(halfHeight, radius) {
                        const ret = wasm.rawshape_cylinder(halfHeight, radius)
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {number} halfHeight
                     * @param {number} radius
                     * @param {number} borderRadius
                     * @returns {RawShape}
                     */ static roundCylinder(halfHeight, radius, borderRadius) {
                        const ret = wasm.rawshape_roundCylinder(
                            halfHeight,
                            radius,
                            borderRadius
                        )
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {number} halfHeight
                     * @param {number} radius
                     * @returns {RawShape}
                     */ static cone(halfHeight, radius) {
                        const ret = wasm.rawshape_cone(halfHeight, radius)
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {number} halfHeight
                     * @param {number} radius
                     * @param {number} borderRadius
                     * @returns {RawShape}
                     */ static roundCone(halfHeight, radius, borderRadius) {
                        const ret = wasm.rawshape_roundCone(
                            halfHeight,
                            radius,
                            borderRadius
                        )
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {Float32Array} vertices
                     * @param {Uint32Array} indices
                     * @returns {RawShape}
                     */ static polyline(vertices, indices) {
                        const ptr0 = passArrayF32ToWasm0(
                            vertices,
                            wasm.__wbindgen_malloc
                        )
                        const len0 = WASM_VECTOR_LEN
                        const ptr1 = passArray32ToWasm0(
                            indices,
                            wasm.__wbindgen_malloc
                        )
                        const len1 = WASM_VECTOR_LEN
                        const ret = wasm.rawshape_polyline(
                            ptr0,
                            len0,
                            ptr1,
                            len1
                        )
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {Float32Array} vertices
                     * @param {Uint32Array} indices
                     * @param {number} flags
                     * @returns {RawShape}
                     */ static trimesh(vertices, indices, flags) {
                        const ptr0 = passArrayF32ToWasm0(
                            vertices,
                            wasm.__wbindgen_malloc
                        )
                        const len0 = WASM_VECTOR_LEN
                        const ptr1 = passArray32ToWasm0(
                            indices,
                            wasm.__wbindgen_malloc
                        )
                        const len1 = WASM_VECTOR_LEN
                        const ret = wasm.rawshape_trimesh(
                            ptr0,
                            len0,
                            ptr1,
                            len1,
                            flags
                        )
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {number} nrows
                     * @param {number} ncols
                     * @param {Float32Array} heights
                     * @param {RawVector} scale
                     * @param {number} flags
                     * @returns {RawShape}
                     */ static heightfield(
                        nrows,
                        ncols,
                        heights,
                        scale,
                        flags
                    ) {
                        const ptr0 = passArrayF32ToWasm0(
                            heights,
                            wasm.__wbindgen_malloc
                        )
                        const len0 = WASM_VECTOR_LEN
                        _assertClass(scale, RawVector)
                        const ret = wasm.rawshape_heightfield(
                            nrows,
                            ncols,
                            ptr0,
                            len0,
                            scale.__wbg_ptr,
                            flags
                        )
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {RawVector} p1
                     * @param {RawVector} p2
                     * @returns {RawShape}
                     */ static segment(p1, p2) {
                        _assertClass(p1, RawVector)
                        _assertClass(p2, RawVector)
                        const ret = wasm.rawshape_segment(
                            p1.__wbg_ptr,
                            p2.__wbg_ptr
                        )
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {RawVector} p1
                     * @param {RawVector} p2
                     * @param {RawVector} p3
                     * @returns {RawShape}
                     */ static triangle(p1, p2, p3) {
                        _assertClass(p1, RawVector)
                        _assertClass(p2, RawVector)
                        _assertClass(p3, RawVector)
                        const ret = wasm.rawshape_triangle(
                            p1.__wbg_ptr,
                            p2.__wbg_ptr,
                            p3.__wbg_ptr
                        )
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {RawVector} p1
                     * @param {RawVector} p2
                     * @param {RawVector} p3
                     * @param {number} borderRadius
                     * @returns {RawShape}
                     */ static roundTriangle(p1, p2, p3, borderRadius) {
                        _assertClass(p1, RawVector)
                        _assertClass(p2, RawVector)
                        _assertClass(p3, RawVector)
                        const ret = wasm.rawshape_roundTriangle(
                            p1.__wbg_ptr,
                            p2.__wbg_ptr,
                            p3.__wbg_ptr,
                            borderRadius
                        )
                        return RawShape.__wrap(ret)
                    }
                    /**
                     * @param {Float32Array} points
                     * @returns {RawShape | undefined}
                     */ static convexHull(points) {
                        const ptr0 = passArrayF32ToWasm0(
                            points,
                            wasm.__wbindgen_malloc
                        )
                        const len0 = WASM_VECTOR_LEN
                        const ret = wasm.rawshape_convexHull(ptr0, len0)
                        return ret === 0 ? undefined : RawShape.__wrap(ret)
                    }
                    /**
                     * @param {Float32Array} points
                     * @param {number} borderRadius
                     * @returns {RawShape | undefined}
                     */ static roundConvexHull(points, borderRadius) {
                        const ptr0 = passArrayF32ToWasm0(
                            points,
                            wasm.__wbindgen_malloc
                        )
                        const len0 = WASM_VECTOR_LEN
                        const ret = wasm.rawshape_roundConvexHull(
                            ptr0,
                            len0,
                            borderRadius
                        )
                        return ret === 0 ? undefined : RawShape.__wrap(ret)
                    }
                    /**
                     * @param {Float32Array} vertices
                     * @param {Uint32Array} indices
                     * @returns {RawShape | undefined}
                     */ static convexMesh(vertices, indices) {
                        const ptr0 = passArrayF32ToWasm0(
                            vertices,
                            wasm.__wbindgen_malloc
                        )
                        const len0 = WASM_VECTOR_LEN
                        const ptr1 = passArray32ToWasm0(
                            indices,
                            wasm.__wbindgen_malloc
                        )
                        const len1 = WASM_VECTOR_LEN
                        const ret = wasm.rawshape_convexMesh(
                            ptr0,
                            len0,
                            ptr1,
                            len1
                        )
                        return ret === 0 ? undefined : RawShape.__wrap(ret)
                    }
                    /**
                     * @param {Float32Array} vertices
                     * @param {Uint32Array} indices
                     * @param {number} borderRadius
                     * @returns {RawShape | undefined}
                     */ static roundConvexMesh(
                        vertices,
                        indices,
                        borderRadius
                    ) {
                        const ptr0 = passArrayF32ToWasm0(
                            vertices,
                            wasm.__wbindgen_malloc
                        )
                        const len0 = WASM_VECTOR_LEN
                        const ptr1 = passArray32ToWasm0(
                            indices,
                            wasm.__wbindgen_malloc
                        )
                        const len1 = WASM_VECTOR_LEN
                        const ret = wasm.rawshape_roundConvexMesh(
                            ptr0,
                            len0,
                            ptr1,
                            len1,
                            borderRadius
                        )
                        return ret === 0 ? undefined : RawShape.__wrap(ret)
                    }
                    /**
                     * @param {RawVector} shapePos1
                     * @param {RawRotation} shapeRot1
                     * @param {RawVector} shapeVel1
                     * @param {RawShape} shape2
                     * @param {RawVector} shapePos2
                     * @param {RawRotation} shapeRot2
                     * @param {RawVector} shapeVel2
                     * @param {number} target_distance
                     * @param {number} maxToi
                     * @param {boolean} stop_at_penetration
                     * @returns {RawShapeCastHit | undefined}
                     */ castShape(
                        shapePos1,
                        shapeRot1,
                        shapeVel1,
                        shape2,
                        shapePos2,
                        shapeRot2,
                        shapeVel2,
                        target_distance,
                        maxToi,
                        stop_at_penetration
                    ) {
                        _assertClass(shapePos1, RawVector)
                        _assertClass(shapeRot1, RawRotation)
                        _assertClass(shapeVel1, RawVector)
                        _assertClass(shape2, RawShape)
                        _assertClass(shapePos2, RawVector)
                        _assertClass(shapeRot2, RawRotation)
                        _assertClass(shapeVel2, RawVector)
                        const ret = wasm.rawshape_castShape(
                            this.__wbg_ptr,
                            shapePos1.__wbg_ptr,
                            shapeRot1.__wbg_ptr,
                            shapeVel1.__wbg_ptr,
                            shape2.__wbg_ptr,
                            shapePos2.__wbg_ptr,
                            shapeRot2.__wbg_ptr,
                            shapeVel2.__wbg_ptr,
                            target_distance,
                            maxToi,
                            stop_at_penetration
                        )
                        return ret === 0
                            ? undefined
                            : RawShapeCastHit.__wrap(ret)
                    }
                    /**
                     * @param {RawVector} shapePos1
                     * @param {RawRotation} shapeRot1
                     * @param {RawShape} shape2
                     * @param {RawVector} shapePos2
                     * @param {RawRotation} shapeRot2
                     * @returns {boolean}
                     */ intersectsShape(
                        shapePos1,
                        shapeRot1,
                        shape2,
                        shapePos2,
                        shapeRot2
                    ) {
                        _assertClass(shapePos1, RawVector)
                        _assertClass(shapeRot1, RawRotation)
                        _assertClass(shape2, RawShape)
                        _assertClass(shapePos2, RawVector)
                        _assertClass(shapeRot2, RawRotation)
                        const ret = wasm.rawshape_intersectsShape(
                            this.__wbg_ptr,
                            shapePos1.__wbg_ptr,
                            shapeRot1.__wbg_ptr,
                            shape2.__wbg_ptr,
                            shapePos2.__wbg_ptr,
                            shapeRot2.__wbg_ptr
                        )
                        return ret !== 0
                    }
                    /**
                     * @param {RawVector} shapePos1
                     * @param {RawRotation} shapeRot1
                     * @param {RawShape} shape2
                     * @param {RawVector} shapePos2
                     * @param {RawRotation} shapeRot2
                     * @param {number} prediction
                     * @returns {RawShapeContact | undefined}
                     */ contactShape(
                        shapePos1,
                        shapeRot1,
                        shape2,
                        shapePos2,
                        shapeRot2,
                        prediction
                    ) {
                        _assertClass(shapePos1, RawVector)
                        _assertClass(shapeRot1, RawRotation)
                        _assertClass(shape2, RawShape)
                        _assertClass(shapePos2, RawVector)
                        _assertClass(shapeRot2, RawRotation)
                        const ret = wasm.rawshape_contactShape(
                            this.__wbg_ptr,
                            shapePos1.__wbg_ptr,
                            shapeRot1.__wbg_ptr,
                            shape2.__wbg_ptr,
                            shapePos2.__wbg_ptr,
                            shapeRot2.__wbg_ptr,
                            prediction
                        )
                        return ret === 0
                            ? undefined
                            : RawShapeContact.__wrap(ret)
                    }
                    /**
                     * @param {RawVector} shapePos
                     * @param {RawRotation} shapeRot
                     * @param {RawVector} point
                     * @returns {boolean}
                     */ containsPoint(shapePos, shapeRot, point) {
                        _assertClass(shapePos, RawVector)
                        _assertClass(shapeRot, RawRotation)
                        _assertClass(point, RawVector)
                        const ret = wasm.rawshape_containsPoint(
                            this.__wbg_ptr,
                            shapePos.__wbg_ptr,
                            shapeRot.__wbg_ptr,
                            point.__wbg_ptr
                        )
                        return ret !== 0
                    }
                    /**
                     * @param {RawVector} shapePos
                     * @param {RawRotation} shapeRot
                     * @param {RawVector} point
                     * @param {boolean} solid
                     * @returns {RawPointProjection}
                     */ projectPoint(shapePos, shapeRot, point, solid) {
                        _assertClass(shapePos, RawVector)
                        _assertClass(shapeRot, RawRotation)
                        _assertClass(point, RawVector)
                        const ret = wasm.rawshape_projectPoint(
                            this.__wbg_ptr,
                            shapePos.__wbg_ptr,
                            shapeRot.__wbg_ptr,
                            point.__wbg_ptr,
                            solid
                        )
                        return RawPointProjection.__wrap(ret)
                    }
                    /**
                     * @param {RawVector} shapePos
                     * @param {RawRotation} shapeRot
                     * @param {RawVector} rayOrig
                     * @param {RawVector} rayDir
                     * @param {number} maxToi
                     * @returns {boolean}
                     */ intersectsRay(
                        shapePos,
                        shapeRot,
                        rayOrig,
                        rayDir,
                        maxToi
                    ) {
                        _assertClass(shapePos, RawVector)
                        _assertClass(shapeRot, RawRotation)
                        _assertClass(rayOrig, RawVector)
                        _assertClass(rayDir, RawVector)
                        const ret = wasm.rawshape_intersectsRay(
                            this.__wbg_ptr,
                            shapePos.__wbg_ptr,
                            shapeRot.__wbg_ptr,
                            rayOrig.__wbg_ptr,
                            rayDir.__wbg_ptr,
                            maxToi
                        )
                        return ret !== 0
                    }
                    /**
                     * @param {RawVector} shapePos
                     * @param {RawRotation} shapeRot
                     * @param {RawVector} rayOrig
                     * @param {RawVector} rayDir
                     * @param {number} maxToi
                     * @param {boolean} solid
                     * @returns {number}
                     */ castRay(
                        shapePos,
                        shapeRot,
                        rayOrig,
                        rayDir,
                        maxToi,
                        solid
                    ) {
                        _assertClass(shapePos, RawVector)
                        _assertClass(shapeRot, RawRotation)
                        _assertClass(rayOrig, RawVector)
                        _assertClass(rayDir, RawVector)
                        const ret = wasm.rawshape_castRay(
                            this.__wbg_ptr,
                            shapePos.__wbg_ptr,
                            shapeRot.__wbg_ptr,
                            rayOrig.__wbg_ptr,
                            rayDir.__wbg_ptr,
                            maxToi,
                            solid
                        )
                        return ret
                    }
                    /**
                     * @param {RawVector} shapePos
                     * @param {RawRotation} shapeRot
                     * @param {RawVector} rayOrig
                     * @param {RawVector} rayDir
                     * @param {number} maxToi
                     * @param {boolean} solid
                     * @returns {RawRayIntersection | undefined}
                     */ castRayAndGetNormal(
                        shapePos,
                        shapeRot,
                        rayOrig,
                        rayDir,
                        maxToi,
                        solid
                    ) {
                        _assertClass(shapePos, RawVector)
                        _assertClass(shapeRot, RawRotation)
                        _assertClass(rayOrig, RawVector)
                        _assertClass(rayDir, RawVector)
                        const ret = wasm.rawshape_castRayAndGetNormal(
                            this.__wbg_ptr,
                            shapePos.__wbg_ptr,
                            shapeRot.__wbg_ptr,
                            rayOrig.__wbg_ptr,
                            rayDir.__wbg_ptr,
                            maxToi,
                            solid
                        )
                        return ret === 0
                            ? undefined
                            : RawRayIntersection.__wrap(ret)
                    }
                }
                const RawShapeCastHitFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawshapecasthit_free(ptr >>> 0)
                          )
                class RawShapeCastHit {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawShapeCastHit.prototype)
                        obj.__wbg_ptr = ptr
                        RawShapeCastHitFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawShapeCastHitFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawshapecasthit_free(ptr)
                    }
                    /**
                     * @returns {number}
                     */ time_of_impact() {
                        const ret = wasm.rawrotation_x(this.__wbg_ptr)
                        return ret
                    }
                    /**
                     * @returns {RawVector}
                     */ witness1() {
                        const ret = wasm.rawshapecasthit_witness1(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ witness2() {
                        const ret = wasm.rawcontactforceevent_total_force(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ normal1() {
                        const ret = wasm.rawshapecasthit_normal1(this.__wbg_ptr)
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ normal2() {
                        const ret = wasm.rawshapecasthit_normal2(this.__wbg_ptr)
                        return RawVector.__wrap(ret)
                    }
                }
                const RawShapeContactFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawshapecontact_free(ptr >>> 0)
                          )
                class RawShapeContact {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawShapeContact.prototype)
                        obj.__wbg_ptr = ptr
                        RawShapeContactFinalization.register(
                            obj,
                            obj.__wbg_ptr,
                            obj
                        )
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawShapeContactFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawshapecontact_free(ptr)
                    }
                    /**
                     * @returns {number}
                     */ distance() {
                        const ret =
                            wasm.rawkinematiccharactercontroller_maxSlopeClimbAngle(
                                this.__wbg_ptr
                            )
                        return ret
                    }
                    /**
                     * @returns {RawVector}
                     */ point1() {
                        const ret = wasm.rawpointprojection_point(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ point2() {
                        const ret = wasm.rawcollidershapecasthit_witness1(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ normal1() {
                        const ret = wasm.rawcollidershapecasthit_witness2(
                            this.__wbg_ptr
                        )
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * @returns {RawVector}
                     */ normal2() {
                        const ret =
                            wasm.rawcharactercollision_translationDeltaApplied(
                                this.__wbg_ptr
                            )
                        return RawVector.__wrap(ret)
                    }
                }
                const RawVectorFinalization =
                    typeof FinalizationRegistry === 'undefined'
                        ? {
                              register: () => {},
                              unregister: () => {},
                          }
                        : new FinalizationRegistry((ptr) =>
                              wasm.__wbg_rawvector_free(ptr >>> 0)
                          )
                class RawVector {
                    static __wrap(ptr) {
                        ptr = ptr >>> 0
                        const obj = Object.create(RawVector.prototype)
                        obj.__wbg_ptr = ptr
                        RawVectorFinalization.register(obj, obj.__wbg_ptr, obj)
                        return obj
                    }
                    __destroy_into_raw() {
                        const ptr = this.__wbg_ptr
                        this.__wbg_ptr = 0
                        RawVectorFinalization.unregister(this)
                        return ptr
                    }
                    free() {
                        const ptr = this.__destroy_into_raw()
                        wasm.__wbg_rawvector_free(ptr)
                    }
                    /**
                     * Creates a new vector filled with zeros.
                     * @returns {RawVector}
                     */ static zero() {
                        const ret = wasm.rawvector_zero()
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * Creates a new 3D vector from its two components.
                     *
                     * # Parameters
                     * - `x`: the `x` component of this 3D vector.
                     * - `y`: the `y` component of this 3D vector.
                     * - `z`: the `z` component of this 3D vector.
                     * @param {number} x
                     * @param {number} y
                     * @param {number} z
                     */ constructor(x, y, z) {
                        const ret = wasm.rawvector_new(x, y, z)
                        this.__wbg_ptr = ret >>> 0
                        return this
                    }
                    /**
                     * The `x` component of this vector.
                     * @returns {number}
                     */ get x() {
                        const ret = wasm.rawrotation_x(this.__wbg_ptr)
                        return ret
                    }
                    /**
                     * Sets the `x` component of this vector.
                     * @param {number} x
                     */ set x(x) {
                        wasm.rawvector_set_x(this.__wbg_ptr, x)
                    }
                    /**
                     * The `y` component of this vector.
                     * @returns {number}
                     */ get y() {
                        const ret = wasm.rawintegrationparameters_dt(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * Sets the `y` component of this vector.
                     * @param {number} y
                     */ set y(y) {
                        wasm.rawintegrationparameters_set_dt(this.__wbg_ptr, y)
                    }
                    /**
                     * The `z` component of this vector.
                     * @returns {number}
                     */ get z() {
                        const ret = wasm.rawcollidershapecasthit_time_of_impact(
                            this.__wbg_ptr
                        )
                        return ret
                    }
                    /**
                     * Sets the `z` component of this vector.
                     * @param {number} z
                     */ set z(z) {
                        wasm.rawvector_set_z(this.__wbg_ptr, z)
                    }
                    /**
                     * Create a new 3D vector from this vector with its components rearranged as `{x, y, z}`.
                     *
                     * This will effectively return a copy of `this`. This method exist for completeness with the
                     * other swizzling functions.
                     * @returns {RawVector}
                     */ xyz() {
                        const ret = wasm.rawvector_xyz(this.__wbg_ptr)
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * Create a new 3D vector from this vector with its components rearranged as `{y, x, z}`.
                     * @returns {RawVector}
                     */ yxz() {
                        const ret = wasm.rawvector_yxz(this.__wbg_ptr)
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * Create a new 3D vector from this vector with its components rearranged as `{z, x, y}`.
                     * @returns {RawVector}
                     */ zxy() {
                        const ret = wasm.rawvector_zxy(this.__wbg_ptr)
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * Create a new 3D vector from this vector with its components rearranged as `{x, z, y}`.
                     * @returns {RawVector}
                     */ xzy() {
                        const ret = wasm.rawvector_xzy(this.__wbg_ptr)
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * Create a new 3D vector from this vector with its components rearranged as `{y, z, x}`.
                     * @returns {RawVector}
                     */ yzx() {
                        const ret = wasm.rawvector_yzx(this.__wbg_ptr)
                        return RawVector.__wrap(ret)
                    }
                    /**
                     * Create a new 3D vector from this vector with its components rearranged as `{z, y, x}`.
                     * @returns {RawVector}
                     */ zyx() {
                        const ret = wasm.rawvector_zyx(this.__wbg_ptr)
                        return RawVector.__wrap(ret)
                    }
                }
                function __wbindgen_number_new(arg0) {
                    const ret = arg0
                    return addHeapObject(ret)
                }
                function __wbindgen_boolean_get(arg0) {
                    const v = getObject(arg0)
                    const ret = typeof v === 'boolean' ? (v ? 1 : 0) : 2
                    return ret
                }
                function __wbindgen_object_drop_ref(arg0) {
                    takeObject(arg0)
                }
                function __wbindgen_number_get(arg0, arg1) {
                    const obj = getObject(arg1)
                    const ret = typeof obj === 'number' ? obj : undefined
                    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret)
                        ? 0
                        : ret
                    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret)
                }
                function __wbindgen_is_function(arg0) {
                    const ret = typeof getObject(arg0) === 'function'
                    return ret
                }
                function __wbg_rawraycolliderintersection_new(arg0) {
                    const ret = RawRayColliderIntersection.__wrap(arg0)
                    return addHeapObject(ret)
                }
                function __wbg_rawcontactforceevent_new(arg0) {
                    const ret = RawContactForceEvent.__wrap(arg0)
                    return addHeapObject(ret)
                }
                function __wbg_call_b3ca7c6051f9bec1() {
                    return handleError(function (arg0, arg1, arg2) {
                        const ret = getObject(arg0).call(
                            getObject(arg1),
                            getObject(arg2)
                        )
                        return addHeapObject(ret)
                    }, arguments)
                }
                function __wbg_call_8e7cb608789c2528() {
                    return handleError(function (arg0, arg1, arg2, arg3) {
                        const ret = getObject(arg0).call(
                            getObject(arg1),
                            getObject(arg2),
                            getObject(arg3)
                        )
                        return addHeapObject(ret)
                    }, arguments)
                }
                function __wbg_call_938992c832f74314() {
                    return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                        const ret = getObject(arg0).call(
                            getObject(arg1),
                            getObject(arg2),
                            getObject(arg3),
                            getObject(arg4)
                        )
                        return addHeapObject(ret)
                    }, arguments)
                }
                function __wbg_bind_4d857b598695205e(arg0, arg1, arg2, arg3) {
                    const ret = getObject(arg0).bind(
                        getObject(arg1),
                        getObject(arg2),
                        getObject(arg3)
                    )
                    return addHeapObject(ret)
                }
                function __wbg_buffer_12d079cc21e14bdb(arg0) {
                    const ret = getObject(arg0).buffer
                    return addHeapObject(ret)
                }
                function __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb(
                    arg0,
                    arg1,
                    arg2
                ) {
                    const ret = new Uint8Array(
                        getObject(arg0),
                        arg1 >>> 0,
                        arg2 >>> 0
                    )
                    return addHeapObject(ret)
                }
                function __wbg_new_63b92bc8671ed464(arg0) {
                    const ret = new Uint8Array(getObject(arg0))
                    return addHeapObject(ret)
                }
                function __wbg_set_a47bac70306a19a7(arg0, arg1, arg2) {
                    getObject(arg0).set(getObject(arg1), arg2 >>> 0)
                }
                function __wbg_length_c20a40f15020d68a(arg0) {
                    const ret = getObject(arg0).length
                    return ret
                }
                function __wbg_newwithbyteoffsetandlength_4a659d079a1650e0(
                    arg0,
                    arg1,
                    arg2
                ) {
                    const ret = new Float32Array(
                        getObject(arg0),
                        arg1 >>> 0,
                        arg2 >>> 0
                    )
                    return addHeapObject(ret)
                }
                function __wbg_set_bd975934d1b1fddb(arg0, arg1, arg2) {
                    getObject(arg0).set(getObject(arg1), arg2 >>> 0)
                }
                function __wbg_length_d25bbcbc3367f684(arg0) {
                    const ret = getObject(arg0).length
                    return ret
                }
                function __wbg_newwithlength_1e8b839a06de01c5(arg0) {
                    const ret = new Float32Array(arg0 >>> 0)
                    return addHeapObject(ret)
                }
                function __wbindgen_throw(arg0, arg1) {
                    throw new Error(getStringFromWasm0(arg0, arg1))
                }
                function __wbindgen_memory() {
                    const ret = wasm.memory
                    return addHeapObject(ret)
                }
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
        ],
        jE0Bx: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * A 3D vector.
                 */ parcelHelpers.export(exports, 'Vector3', () => Vector3)
                parcelHelpers.export(exports, 'VectorOps', () => VectorOps)
                /**
                 * A quaternion.
                 */ parcelHelpers.export(
                    exports,
                    'Quaternion',
                    () => Quaternion
                )
                parcelHelpers.export(exports, 'RotationOps', () => RotationOps)
                /**
                 * A 3D symmetric-positive-definite matrix.
                 */ parcelHelpers.export(
                    exports,
                    'SdpMatrix3',
                    () => SdpMatrix3
                )
                parcelHelpers.export(
                    exports,
                    'SdpMatrix3Ops',
                    () => SdpMatrix3Ops
                ) // #endif
                var _raw = require('./raw')
                class Vector3 {
                    constructor(x, y, z) {
                        this.x = x
                        this.y = y
                        this.z = z
                    }
                }
                class VectorOps {
                    static new(x, y, z) {
                        return new Vector3(x, y, z)
                    }
                    static intoRaw(v) {
                        return new (0, _raw.RawVector)(v.x, v.y, v.z)
                    }
                    static zeros() {
                        return VectorOps.new(0.0, 0.0, 0.0)
                    }
                    // FIXME: type ram: RawVector?
                    static fromRaw(raw) {
                        if (!raw) return null
                        let res = VectorOps.new(raw.x, raw.y, raw.z)
                        raw.free()
                        return res
                    }
                    static copy(out, input) {
                        out.x = input.x
                        out.y = input.y
                        out.z = input.z
                    }
                }
                class Quaternion {
                    constructor(x, y, z, w) {
                        this.x = x
                        this.y = y
                        this.z = z
                        this.w = w
                    }
                }
                class RotationOps {
                    static identity() {
                        return new Quaternion(0.0, 0.0, 0.0, 1.0)
                    }
                    static fromRaw(raw) {
                        if (!raw) return null
                        let res = new Quaternion(raw.x, raw.y, raw.z, raw.w)
                        raw.free()
                        return res
                    }
                    static intoRaw(rot) {
                        return new (0, _raw.RawRotation)(
                            rot.x,
                            rot.y,
                            rot.z,
                            rot.w
                        )
                    }
                    static copy(out, input) {
                        out.x = input.x
                        out.y = input.y
                        out.z = input.z
                        out.w = input.w
                    }
                }
                class SdpMatrix3 {
                    constructor(elements) {
                        this.elements = elements
                    }
                    /**
                     * Matrix element at row 1, column 1.
                     */ get m11() {
                        return this.elements[0]
                    }
                    /**
                     * Matrix element at row 1, column 2.
                     */ get m12() {
                        return this.elements[1]
                    }
                    /**
                     * Matrix element at row 2, column 1.
                     */ get m21() {
                        return this.m12
                    }
                    /**
                     * Matrix element at row 1, column 3.
                     */ get m13() {
                        return this.elements[2]
                    }
                    /**
                     * Matrix element at row 3, column 1.
                     */ get m31() {
                        return this.m13
                    }
                    /**
                     * Matrix element at row 2, column 2.
                     */ get m22() {
                        return this.elements[3]
                    }
                    /**
                     * Matrix element at row 2, column 3.
                     */ get m23() {
                        return this.elements[4]
                    }
                    /**
                     * Matrix element at row 3, column 2.
                     */ get m32() {
                        return this.m23
                    }
                    /**
                     * Matrix element at row 3, column 3.
                     */ get m33() {
                        return this.elements[5]
                    }
                }
                class SdpMatrix3Ops {
                    static fromRaw(raw) {
                        const sdpMatrix3 = new SdpMatrix3(raw.elements())
                        raw.free()
                        return sdpMatrix3
                    }
                }
            },
            {
                './raw': '7Eciy',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        gdK69: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                var _rigidBody = require('./rigid_body')
                parcelHelpers.exportAll(_rigidBody, exports)
                var _rigidBodySet = require('./rigid_body_set')
                parcelHelpers.exportAll(_rigidBodySet, exports)
                var _integrationParameters = require('./integration_parameters')
                parcelHelpers.exportAll(_integrationParameters, exports)
                var _impulseJoint = require('./impulse_joint')
                parcelHelpers.exportAll(_impulseJoint, exports)
                var _impulseJointSet = require('./impulse_joint_set')
                parcelHelpers.exportAll(_impulseJointSet, exports)
                var _multibodyJoint = require('./multibody_joint')
                parcelHelpers.exportAll(_multibodyJoint, exports)
                var _multibodyJointSet = require('./multibody_joint_set')
                parcelHelpers.exportAll(_multibodyJointSet, exports)
                var _coefficientCombineRule = require('./coefficient_combine_rule')
                parcelHelpers.exportAll(_coefficientCombineRule, exports)
                var _ccdSolver = require('./ccd_solver')
                parcelHelpers.exportAll(_ccdSolver, exports)
                var _islandManager = require('./island_manager')
                parcelHelpers.exportAll(_islandManager, exports)
            },
            {
                './rigid_body': 'cGah0',
                './rigid_body_set': '3vie4',
                './integration_parameters': '1T3w7',
                './impulse_joint': 'bs9N4',
                './impulse_joint_set': '9O61W',
                './multibody_joint': 'aCGBy',
                './multibody_joint_set': '7cv6p',
                './coefficient_combine_rule': '6Vo8H',
                './ccd_solver': '15VhG',
                './island_manager': '2yldA',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        cGah0: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(
                    exports,
                    'RigidBodyType',
                    () => RigidBodyType
                )
                /**
                 * A rigid-body.
                 */ parcelHelpers.export(exports, 'RigidBody', () => RigidBody)
                parcelHelpers.export(
                    exports,
                    'RigidBodyDesc',
                    () => RigidBodyDesc
                )
                var _math = require('../math')
                var RigidBodyType
                ;(function (RigidBodyType) {
                    /**
                     * A `RigidBodyType::Dynamic` body can be affected by all external forces.
                     */ RigidBodyType[(RigidBodyType['Dynamic'] = 0)] =
                        'Dynamic'
                    /**
                     * A `RigidBodyType::Fixed` body cannot be affected by external forces.
                     */ RigidBodyType[(RigidBodyType['Fixed'] = 1)] = 'Fixed'
                    /**
                     * A `RigidBodyType::KinematicPositionBased` body cannot be affected by any external forces but can be controlled
                     * by the user at the position level while keeping realistic one-way interaction with dynamic bodies.
                     *
                     * One-way interaction means that a kinematic body can push a dynamic body, but a kinematic body
                     * cannot be pushed by anything. In other words, the trajectory of a kinematic body can only be
                     * modified by the user and is independent from any contact or joint it is involved in.
                     */ RigidBodyType[
                        (RigidBodyType['KinematicPositionBased'] = 2)
                    ] = 'KinematicPositionBased'
                    /**
                     * A `RigidBodyType::KinematicVelocityBased` body cannot be affected by any external forces but can be controlled
                     * by the user at the velocity level while keeping realistic one-way interaction with dynamic bodies.
                     *
                     * One-way interaction means that a kinematic body can push a dynamic body, but a kinematic body
                     * cannot be pushed by anything. In other words, the trajectory of a kinematic body can only be
                     * modified by the user and is independent from any contact or joint it is involved in.
                     */ RigidBodyType[
                        (RigidBodyType['KinematicVelocityBased'] = 3)
                    ] = 'KinematicVelocityBased'
                })(RigidBodyType || (RigidBodyType = {}))
                class RigidBody {
                    constructor(rawSet, colliderSet, handle) {
                        this.rawSet = rawSet
                        this.colliderSet = colliderSet
                        this.handle = handle
                    }
                    /** @internal */ finalizeDeserialization(colliderSet) {
                        this.colliderSet = colliderSet
                    }
                    /**
                     * Checks if this rigid-body is still valid (i.e. that it has
                     * not been deleted from the rigid-body set yet.
                     */ isValid() {
                        return this.rawSet.contains(this.handle)
                    }
                    /**
                     * Locks or unlocks the ability of this rigid-body to translate.
                     *
                     * @param locked - If `true`, this rigid-body will no longer translate due to forces and impulses.
                     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
                     */ lockTranslations(locked, wakeUp) {
                        return this.rawSet.rbLockTranslations(
                            this.handle,
                            locked,
                            wakeUp
                        )
                    }
                    /**
                     * Locks or unlocks the ability of this rigid-body to rotate.
                     *
                     * @param locked - If `true`, this rigid-body will no longer rotate due to torques and impulses.
                     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
                     */ lockRotations(locked, wakeUp) {
                        return this.rawSet.rbLockRotations(
                            this.handle,
                            locked,
                            wakeUp
                        )
                    }
                    // #if DIM3
                    /**
                     * Locks or unlocks the ability of this rigid-body to translate along individual coordinate axes.
                     *
                     * @param enableX - If `false`, this rigid-body will no longer translate due to torques and impulses, along the X coordinate axis.
                     * @param enableY - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Y coordinate axis.
                     * @param enableZ - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Z coordinate axis.
                     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
                     */ setEnabledTranslations(
                        enableX,
                        enableY,
                        enableZ,
                        wakeUp
                    ) {
                        return this.rawSet.rbSetEnabledTranslations(
                            this.handle,
                            enableX,
                            enableY,
                            enableZ,
                            wakeUp
                        )
                    }
                    /**
                     * Locks or unlocks the ability of this rigid-body to translate along individual coordinate axes.
                     *
                     * @param enableX - If `false`, this rigid-body will no longer translate due to torques and impulses, along the X coordinate axis.
                     * @param enableY - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Y coordinate axis.
                     * @param enableZ - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Z coordinate axis.
                     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
                     * @deprecated use `this.setEnabledTranslations` with the same arguments instead.
                     */ restrictTranslations(
                        enableX,
                        enableY,
                        enableZ,
                        wakeUp
                    ) {
                        this.setEnabledTranslations(
                            enableX,
                            enableY,
                            enableZ,
                            wakeUp
                        )
                    }
                    /**
                     * Locks or unlocks the ability of this rigid-body to rotate along individual coordinate axes.
                     *
                     * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
                     * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
                     * @param enableZ - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Z coordinate axis.
                     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
                     */ setEnabledRotations(enableX, enableY, enableZ, wakeUp) {
                        return this.rawSet.rbSetEnabledRotations(
                            this.handle,
                            enableX,
                            enableY,
                            enableZ,
                            wakeUp
                        )
                    }
                    /**
                     * Locks or unlocks the ability of this rigid-body to rotate along individual coordinate axes.
                     *
                     * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
                     * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
                     * @param enableZ - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Z coordinate axis.
                     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
                     * @deprecated use `this.setEnabledRotations` with the same arguments instead.
                     */ restrictRotations(enableX, enableY, enableZ, wakeUp) {
                        this.setEnabledRotations(
                            enableX,
                            enableY,
                            enableZ,
                            wakeUp
                        )
                    }
                    // #endif
                    /**
                     * The dominance group, in [-127, +127] this rigid-body is part of.
                     */ dominanceGroup() {
                        return this.rawSet.rbDominanceGroup(this.handle)
                    }
                    /**
                     * Sets the dominance group of this rigid-body.
                     *
                     * @param group - The dominance group of this rigid-body. Must be a signed integer in the range [-127, +127].
                     */ setDominanceGroup(group) {
                        this.rawSet.rbSetDominanceGroup(this.handle, group)
                    }
                    /**
                     * The number of additional solver iterations that will be run for this
                     * rigid-body and everything that interacts with it directly or indirectly
                     * through contacts or joints.
                     */ additionalSolverIterations() {
                        return this.rawSet.rbAdditionalSolverIterations(
                            this.handle
                        )
                    }
                    /**
                     * Sets the number of additional solver iterations that will be run for this
                     * rigid-body and everything that interacts with it directly or indirectly
                     * through contacts or joints.
                     *
                     * Compared to increasing the global `World.numSolverIteration`, setting this
                     * value lets you increase accuracy on only a subset of the scene, resulting in reduced
                     * performance loss.
                     *
                     * @param iters - The new number of additional solver iterations (default: 0).
                     */ setAdditionalSolverIterations(iters) {
                        this.rawSet.rbSetAdditionalSolverIterations(
                            this.handle,
                            iters
                        )
                    }
                    /**
                     * Enable or disable CCD (Continuous Collision Detection) for this rigid-body.
                     *
                     * @param enabled - If `true`, CCD will be enabled for this rigid-body.
                     */ enableCcd(enabled) {
                        this.rawSet.rbEnableCcd(this.handle, enabled)
                    }
                    /**
                     * Sets the soft-CCD prediction distance for this rigid-body.
                     *
                     * See the documentation of `RigidBodyDesc.setSoftCcdPrediction` for
                     * additional details.
                     */ setSoftCcdPrediction(distance) {
                        this.rawSet.rbSetSoftCcdPrediction(
                            this.handle,
                            distance
                        )
                    }
                    /**
                     * Gets the soft-CCD prediction distance for this rigid-body.
                     *
                     * See the documentation of `RigidBodyDesc.setSoftCcdPrediction` for
                     * additional details.
                     */ softCcdPrediction() {
                        return this.rawSet.rbSoftCcdPrediction(this.handle)
                    }
                    /**
                     * The world-space translation of this rigid-body.
                     */ translation() {
                        let res = this.rawSet.rbTranslation(this.handle)
                        return (0, _math.VectorOps).fromRaw(res)
                    }
                    /**
                     * The world-space orientation of this rigid-body.
                     */ rotation() {
                        let res = this.rawSet.rbRotation(this.handle)
                        return (0, _math.RotationOps).fromRaw(res)
                    }
                    /**
                     * The world-space next translation of this rigid-body.
                     *
                     * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
                     * method and is used for estimating the kinematic body velocity at the next timestep.
                     * For non-kinematic bodies, this value is currently unspecified.
                     */ nextTranslation() {
                        let res = this.rawSet.rbNextTranslation(this.handle)
                        return (0, _math.VectorOps).fromRaw(res)
                    }
                    /**
                     * The world-space next orientation of this rigid-body.
                     *
                     * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
                     * method and is used for estimating the kinematic body velocity at the next timestep.
                     * For non-kinematic bodies, this value is currently unspecified.
                     */ nextRotation() {
                        let res = this.rawSet.rbNextRotation(this.handle)
                        return (0, _math.RotationOps).fromRaw(res)
                    }
                    /**
                     * Sets the translation of this rigid-body.
                     *
                     * @param tra - The world-space position of the rigid-body.
                     * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
                     *                 wasn't moving before modifying its position.
                     */ setTranslation(tra, wakeUp) {
                        // #if DIM3
                        this.rawSet.rbSetTranslation(
                            this.handle,
                            tra.x,
                            tra.y,
                            tra.z,
                            wakeUp
                        )
                        // #endif
                    }
                    /**
                     * Sets the linear velocity of this rigid-body.
                     *
                     * @param vel - The linear velocity to set.
                     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
                     */ setLinvel(vel, wakeUp) {
                        let rawVel = (0, _math.VectorOps).intoRaw(vel)
                        this.rawSet.rbSetLinvel(this.handle, rawVel, wakeUp)
                        rawVel.free()
                    }
                    /**
                     * The scale factor applied to the gravity affecting
                     * this rigid-body.
                     */ gravityScale() {
                        return this.rawSet.rbGravityScale(this.handle)
                    }
                    /**
                     * Sets the scale factor applied to the gravity affecting
                     * this rigid-body.
                     *
                     * @param factor - The scale factor to set. A value of 0.0 means
                     *   that this rigid-body will on longer be affected by gravity.
                     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
                     */ setGravityScale(factor, wakeUp) {
                        this.rawSet.rbSetGravityScale(
                            this.handle,
                            factor,
                            wakeUp
                        )
                    }
                    // #if DIM3
                    /**
                     * Sets the rotation quaternion of this rigid-body.
                     *
                     * This does nothing if a zero quaternion is provided.
                     *
                     * @param rotation - The rotation to set.
                     * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
                     * wasn't moving before modifying its position.
                     */ setRotation(rot, wakeUp) {
                        this.rawSet.rbSetRotation(
                            this.handle,
                            rot.x,
                            rot.y,
                            rot.z,
                            rot.w,
                            wakeUp
                        )
                    }
                    /**
                     * Sets the angular velocity fo this rigid-body.
                     *
                     * @param vel - The angular velocity to set.
                     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
                     */ setAngvel(vel, wakeUp) {
                        let rawVel = (0, _math.VectorOps).intoRaw(vel)
                        this.rawSet.rbSetAngvel(this.handle, rawVel, wakeUp)
                        rawVel.free()
                    }
                    // #endif
                    /**
                     * If this rigid body is kinematic, sets its future translation after the next timestep integration.
                     *
                     * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
                     * interacting with this kinematic body behave as expected. Internally, Rapier will compute
                     * an artificial velocity for this rigid-body from its current position and its next kinematic
                     * position. This velocity will be used to compute forces on dynamic bodies interacting with
                     * this body.
                     *
                     * @param t - The kinematic translation to set.
                     */ setNextKinematicTranslation(t) {
                        // #if DIM3
                        this.rawSet.rbSetNextKinematicTranslation(
                            this.handle,
                            t.x,
                            t.y,
                            t.z
                        )
                        // #endif
                    }
                    // #if DIM3
                    /**
                     * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
                     *
                     * This should be used instead of `rigidBody.setRotation` to make the dynamic object
                     * interacting with this kinematic body behave as expected. Internally, Rapier will compute
                     * an artificial velocity for this rigid-body from its current position and its next kinematic
                     * position. This velocity will be used to compute forces on dynamic bodies interacting with
                     * this body.
                     *
                     * @param rot - The kinematic rotation to set.
                     */ setNextKinematicRotation(rot) {
                        this.rawSet.rbSetNextKinematicRotation(
                            this.handle,
                            rot.x,
                            rot.y,
                            rot.z,
                            rot.w
                        )
                    }
                    // #endif
                    /**
                     * The linear velocity of this rigid-body.
                     */ linvel() {
                        return (0, _math.VectorOps).fromRaw(
                            this.rawSet.rbLinvel(this.handle)
                        )
                    }
                    // #if DIM3
                    /**
                     * The angular velocity of this rigid-body.
                     */ angvel() {
                        return (0, _math.VectorOps).fromRaw(
                            this.rawSet.rbAngvel(this.handle)
                        )
                    }
                    // #endif
                    /**
                     * The mass of this rigid-body.
                     */ mass() {
                        return this.rawSet.rbMass(this.handle)
                    }
                    /**
                     * The inverse mass taking into account translation locking.
                     */ effectiveInvMass() {
                        return (0, _math.VectorOps).fromRaw(
                            this.rawSet.rbEffectiveInvMass(this.handle)
                        )
                    }
                    /**
                     * The inverse of the mass of a rigid-body.
                     *
                     * If this is zero, the rigid-body is assumed to have infinite mass.
                     */ invMass() {
                        return this.rawSet.rbInvMass(this.handle)
                    }
                    /**
                     * The center of mass of a rigid-body expressed in its local-space.
                     */ localCom() {
                        return (0, _math.VectorOps).fromRaw(
                            this.rawSet.rbLocalCom(this.handle)
                        )
                    }
                    /**
                     * The world-space center of mass of the rigid-body.
                     */ worldCom() {
                        return (0, _math.VectorOps).fromRaw(
                            this.rawSet.rbWorldCom(this.handle)
                        )
                    }
                    // #if DIM3
                    /**
                     * The inverse of the principal angular inertia of the rigid-body.
                     *
                     * Components set to zero are assumed to be infinite along the corresponding principal axis.
                     */ invPrincipalInertiaSqrt() {
                        return (0, _math.VectorOps).fromRaw(
                            this.rawSet.rbInvPrincipalInertiaSqrt(this.handle)
                        )
                    }
                    // #endif
                    // #if DIM3
                    /**
                     * The angular inertia along the principal inertia axes of the rigid-body.
                     */ principalInertia() {
                        return (0, _math.VectorOps).fromRaw(
                            this.rawSet.rbPrincipalInertia(this.handle)
                        )
                    }
                    // #endif
                    // #if DIM3
                    /**
                     * The principal vectors of the local angular inertia tensor of the rigid-body.
                     */ principalInertiaLocalFrame() {
                        return (0, _math.RotationOps).fromRaw(
                            this.rawSet.rbPrincipalInertiaLocalFrame(
                                this.handle
                            )
                        )
                    }
                    // #endif
                    // #if DIM3
                    /**
                     * The square-root of the world-space inverse angular inertia tensor of the rigid-body,
                     * taking into account rotation locking.
                     */ effectiveWorldInvInertiaSqrt() {
                        return (0, _math.SdpMatrix3Ops).fromRaw(
                            this.rawSet.rbEffectiveWorldInvInertiaSqrt(
                                this.handle
                            )
                        )
                    }
                    // #endif
                    // #if DIM3
                    /**
                     * The effective world-space angular inertia (that takes the potential rotation locking into account) of
                     * this rigid-body.
                     */ effectiveAngularInertia() {
                        return (0, _math.SdpMatrix3Ops).fromRaw(
                            this.rawSet.rbEffectiveAngularInertia(this.handle)
                        )
                    }
                    // #endif
                    /**
                     * Put this rigid body to sleep.
                     *
                     * A sleeping body no longer moves and is no longer simulated by the physics engine unless
                     * it is waken up. It can be woken manually with `this.wakeUp()` or automatically due to
                     * external forces like contacts.
                     */ sleep() {
                        this.rawSet.rbSleep(this.handle)
                    }
                    /**
                     * Wakes this rigid-body up.
                     *
                     * A dynamic rigid-body that does not move during several consecutive frames will
                     * be put to sleep by the physics engine, i.e., it will stop being simulated in order
                     * to avoid useless computations.
                     * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
                     * the position of a dynamic body so that it is properly simulated afterwards.
                     */ wakeUp() {
                        this.rawSet.rbWakeUp(this.handle)
                    }
                    /**
                     * Is CCD enabled for this rigid-body?
                     */ isCcdEnabled() {
                        return this.rawSet.rbIsCcdEnabled(this.handle)
                    }
                    /**
                     * The number of colliders attached to this rigid-body.
                     */ numColliders() {
                        return this.rawSet.rbNumColliders(this.handle)
                    }
                    /**
                     * Retrieves the `i-th` collider attached to this rigid-body.
                     *
                     * @param i - The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
                     *         This index is **not** the same as the unique identifier of the collider.
                     */ collider(i) {
                        return this.colliderSet.get(
                            this.rawSet.rbCollider(this.handle, i)
                        )
                    }
                    /**
                     * Sets whether this rigid-body is enabled or not.
                     *
                     * @param enabled - Set to `false` to disable this rigid-body and all its attached colliders.
                     */ setEnabled(enabled) {
                        this.rawSet.rbSetEnabled(this.handle, enabled)
                    }
                    /**
                     * Is this rigid-body enabled?
                     */ isEnabled() {
                        return this.rawSet.rbIsEnabled(this.handle)
                    }
                    /**
                     * The status of this rigid-body: static, dynamic, or kinematic.
                     */ bodyType() {
                        return this.rawSet.rbBodyType(this.handle)
                    }
                    /**
                     * Set a new status for this rigid-body: static, dynamic, or kinematic.
                     */ setBodyType(type, wakeUp) {
                        return this.rawSet.rbSetBodyType(
                            this.handle,
                            type,
                            wakeUp
                        )
                    }
                    /**
                     * Is this rigid-body sleeping?
                     */ isSleeping() {
                        return this.rawSet.rbIsSleeping(this.handle)
                    }
                    /**
                     * Is the velocity of this rigid-body not zero?
                     */ isMoving() {
                        return this.rawSet.rbIsMoving(this.handle)
                    }
                    /**
                     * Is this rigid-body static?
                     */ isFixed() {
                        return this.rawSet.rbIsFixed(this.handle)
                    }
                    /**
                     * Is this rigid-body kinematic?
                     */ isKinematic() {
                        return this.rawSet.rbIsKinematic(this.handle)
                    }
                    /**
                     * Is this rigid-body dynamic?
                     */ isDynamic() {
                        return this.rawSet.rbIsDynamic(this.handle)
                    }
                    /**
                     * The linear damping coefficient of this rigid-body.
                     */ linearDamping() {
                        return this.rawSet.rbLinearDamping(this.handle)
                    }
                    /**
                     * The angular damping coefficient of this rigid-body.
                     */ angularDamping() {
                        return this.rawSet.rbAngularDamping(this.handle)
                    }
                    /**
                     * Sets the linear damping factor applied to this rigid-body.
                     *
                     * @param factor - The damping factor to set.
                     */ setLinearDamping(factor) {
                        this.rawSet.rbSetLinearDamping(this.handle, factor)
                    }
                    /**
                     * Recompute the mass-properties of this rigid-bodies based on its currently attached colliders.
                     */ recomputeMassPropertiesFromColliders() {
                        this.rawSet.rbRecomputeMassPropertiesFromColliders(
                            this.handle,
                            this.colliderSet.raw
                        )
                    }
                    /**
                     * Sets the rigid-body's additional mass.
                     *
                     * The total angular inertia of the rigid-body will be scaled automatically based on this additional mass. If this
                     * scaling effect isn’t desired, use Self::additional_mass_properties instead of this method.
                     *
                     * This is only the "additional" mass because the total mass of the rigid-body is equal to the sum of this
                     * additional mass and the mass computed from the colliders (with non-zero densities) attached to this rigid-body.
                     *
                     * That total mass (which includes the attached colliders’ contributions) will be updated at the name physics step,
                     * or can be updated manually with `this.recomputeMassPropertiesFromColliders`.
                     *
                     * This will override any previous additional mass-properties set by `this.setAdditionalMass`,
                     * `this.setAdditionalMassProperties`, `RigidBodyDesc::setAdditionalMass`, or
                     * `RigidBodyDesc.setAdditionalMassfProperties` for this rigid-body.
                     *
                     * @param mass - The additional mass to set.
                     * @param wakeUp - If `true` then the rigid-body will be woken up if it was put to sleep because it did not move for a while.
                     */ setAdditionalMass(mass, wakeUp) {
                        this.rawSet.rbSetAdditionalMass(
                            this.handle,
                            mass,
                            wakeUp
                        )
                    }
                    // #if DIM3
                    /**
                     * Sets the rigid-body's additional mass-properties.
                     *
                     * This is only the "additional" mass-properties because the total mass-properties of the rigid-body is equal to the
                     * sum of this additional mass-properties and the mass computed from the colliders (with non-zero densities) attached
                     * to this rigid-body.
                     *
                     * That total mass-properties (which include the attached colliders’ contributions) will be updated at the name
                     * physics step, or can be updated manually with `this.recomputeMassPropertiesFromColliders`.
                     *
                     * This will override any previous mass-properties set by `this.setAdditionalMass`,
                     * `this.setAdditionalMassProperties`, `RigidBodyDesc.setAdditionalMass`, or `RigidBodyDesc.setAdditionalMassProperties`
                     * for this rigid-body.
                     *
                     * If `wake_up` is true then the rigid-body will be woken up if it was put to sleep because it did not move for a while.
                     */ setAdditionalMassProperties(
                        mass,
                        centerOfMass,
                        principalAngularInertia,
                        angularInertiaLocalFrame,
                        wakeUp
                    ) {
                        let rawCom = (0, _math.VectorOps).intoRaw(centerOfMass)
                        let rawPrincipalInertia = (0, _math.VectorOps).intoRaw(
                            principalAngularInertia
                        )
                        let rawInertiaFrame = (0, _math.RotationOps).intoRaw(
                            angularInertiaLocalFrame
                        )
                        this.rawSet.rbSetAdditionalMassProperties(
                            this.handle,
                            mass,
                            rawCom,
                            rawPrincipalInertia,
                            rawInertiaFrame,
                            wakeUp
                        )
                        rawCom.free()
                        rawPrincipalInertia.free()
                        rawInertiaFrame.free()
                    }
                    // #endif
                    /**
                     * Sets the linear damping factor applied to this rigid-body.
                     *
                     * @param factor - The damping factor to set.
                     */ setAngularDamping(factor) {
                        this.rawSet.rbSetAngularDamping(this.handle, factor)
                    }
                    /**
                     * Resets to zero the user forces (but not torques) applied to this rigid-body.
                     *
                     * @param wakeUp - should the rigid-body be automatically woken-up?
                     */ resetForces(wakeUp) {
                        this.rawSet.rbResetForces(this.handle, wakeUp)
                    }
                    /**
                     * Resets to zero the user torques applied to this rigid-body.
                     *
                     * @param wakeUp - should the rigid-body be automatically woken-up?
                     */ resetTorques(wakeUp) {
                        this.rawSet.rbResetTorques(this.handle, wakeUp)
                    }
                    /**
                     * Adds a force at the center-of-mass of this rigid-body.
                     *
                     * @param force - the world-space force to add to the rigid-body.
                     * @param wakeUp - should the rigid-body be automatically woken-up?
                     */ addForce(force, wakeUp) {
                        const rawForce = (0, _math.VectorOps).intoRaw(force)
                        this.rawSet.rbAddForce(this.handle, rawForce, wakeUp)
                        rawForce.free()
                    }
                    /**
                     * Applies an impulse at the center-of-mass of this rigid-body.
                     *
                     * @param impulse - the world-space impulse to apply on the rigid-body.
                     * @param wakeUp - should the rigid-body be automatically woken-up?
                     */ applyImpulse(impulse, wakeUp) {
                        const rawImpulse = (0, _math.VectorOps).intoRaw(impulse)
                        this.rawSet.rbApplyImpulse(
                            this.handle,
                            rawImpulse,
                            wakeUp
                        )
                        rawImpulse.free()
                    }
                    // #if DIM3
                    /**
                     * Adds a torque at the center-of-mass of this rigid-body.
                     *
                     * @param torque - the world-space torque to add to the rigid-body.
                     * @param wakeUp - should the rigid-body be automatically woken-up?
                     */ addTorque(torque, wakeUp) {
                        const rawTorque = (0, _math.VectorOps).intoRaw(torque)
                        this.rawSet.rbAddTorque(this.handle, rawTorque, wakeUp)
                        rawTorque.free()
                    }
                    // #endif
                    // #if DIM3
                    /**
                     * Applies an impulsive torque at the center-of-mass of this rigid-body.
                     *
                     * @param torqueImpulse - the world-space torque impulse to apply on the rigid-body.
                     * @param wakeUp - should the rigid-body be automatically woken-up?
                     */ applyTorqueImpulse(torqueImpulse, wakeUp) {
                        const rawTorqueImpulse = (0, _math.VectorOps).intoRaw(
                            torqueImpulse
                        )
                        this.rawSet.rbApplyTorqueImpulse(
                            this.handle,
                            rawTorqueImpulse,
                            wakeUp
                        )
                        rawTorqueImpulse.free()
                    }
                    // #endif
                    /**
                     * Adds a force at the given world-space point of this rigid-body.
                     *
                     * @param force - the world-space force to add to the rigid-body.
                     * @param point - the world-space point where the impulse is to be applied on the rigid-body.
                     * @param wakeUp - should the rigid-body be automatically woken-up?
                     */ addForceAtPoint(force, point, wakeUp) {
                        const rawForce = (0, _math.VectorOps).intoRaw(force)
                        const rawPoint = (0, _math.VectorOps).intoRaw(point)
                        this.rawSet.rbAddForceAtPoint(
                            this.handle,
                            rawForce,
                            rawPoint,
                            wakeUp
                        )
                        rawForce.free()
                        rawPoint.free()
                    }
                    /**
                     * Applies an impulse at the given world-space point of this rigid-body.
                     *
                     * @param impulse - the world-space impulse to apply on the rigid-body.
                     * @param point - the world-space point where the impulse is to be applied on the rigid-body.
                     * @param wakeUp - should the rigid-body be automatically woken-up?
                     */ applyImpulseAtPoint(impulse, point, wakeUp) {
                        const rawImpulse = (0, _math.VectorOps).intoRaw(impulse)
                        const rawPoint = (0, _math.VectorOps).intoRaw(point)
                        this.rawSet.rbApplyImpulseAtPoint(
                            this.handle,
                            rawImpulse,
                            rawPoint,
                            wakeUp
                        )
                        rawImpulse.free()
                        rawPoint.free()
                    }
                    /**
                     * Retrieves the constant force(s) the user added to this rigid-body
                     * Returns zero if the rigid-body is not dynamic.
                     */ userForce() {
                        return (0, _math.VectorOps).fromRaw(
                            this.rawSet.rbUserForce(this.handle)
                        )
                    }
                    // #if DIM3
                    /**
                     * Retrieves the constant torque(s) the user added to this rigid-body
                     * Returns zero if the rigid-body is not dynamic.
                     */ userTorque() {
                        return (0, _math.VectorOps).fromRaw(
                            this.rawSet.rbUserTorque(this.handle)
                        )
                    }
                }
                class RigidBodyDesc {
                    constructor(status) {
                        this.enabled = true
                        this.status = status
                        this.translation = (0, _math.VectorOps).zeros()
                        this.rotation = (0, _math.RotationOps).identity()
                        this.gravityScale = 1.0
                        this.linvel = (0, _math.VectorOps).zeros()
                        this.mass = 0.0
                        this.massOnly = false
                        this.centerOfMass = (0, _math.VectorOps).zeros()
                        this.translationsEnabledX = true
                        this.translationsEnabledY = true
                        // #if DIM3
                        this.angvel = (0, _math.VectorOps).zeros()
                        this.principalAngularInertia = (0,
                        _math.VectorOps).zeros()
                        this.angularInertiaLocalFrame = (0,
                        _math.RotationOps).identity()
                        this.translationsEnabledZ = true
                        this.rotationsEnabledX = true
                        this.rotationsEnabledY = true
                        this.rotationsEnabledZ = true
                        // #endif
                        this.linearDamping = 0.0
                        this.angularDamping = 0.0
                        this.canSleep = true
                        this.sleeping = false
                        this.ccdEnabled = false
                        this.softCcdPrediction = 0.0
                        this.dominanceGroup = 0
                        this.additionalSolverIterations = 0
                    }
                    /**
                     * A rigid-body descriptor used to build a dynamic rigid-body.
                     */ static dynamic() {
                        return new RigidBodyDesc(RigidBodyType.Dynamic)
                    }
                    /**
                     * A rigid-body descriptor used to build a position-based kinematic rigid-body.
                     */ static kinematicPositionBased() {
                        return new RigidBodyDesc(
                            RigidBodyType.KinematicPositionBased
                        )
                    }
                    /**
                     * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
                     */ static kinematicVelocityBased() {
                        return new RigidBodyDesc(
                            RigidBodyType.KinematicVelocityBased
                        )
                    }
                    /**
                     * A rigid-body descriptor used to build a fixed rigid-body.
                     */ static fixed() {
                        return new RigidBodyDesc(RigidBodyType.Fixed)
                    }
                    /**
                     * A rigid-body descriptor used to build a dynamic rigid-body.
                     *
                     * @deprecated The method has been renamed to `.dynamic()`.
                     */ static newDynamic() {
                        return new RigidBodyDesc(RigidBodyType.Dynamic)
                    }
                    /**
                     * A rigid-body descriptor used to build a position-based kinematic rigid-body.
                     *
                     * @deprecated The method has been renamed to `.kinematicPositionBased()`.
                     */ static newKinematicPositionBased() {
                        return new RigidBodyDesc(
                            RigidBodyType.KinematicPositionBased
                        )
                    }
                    /**
                     * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
                     *
                     * @deprecated The method has been renamed to `.kinematicVelocityBased()`.
                     */ static newKinematicVelocityBased() {
                        return new RigidBodyDesc(
                            RigidBodyType.KinematicVelocityBased
                        )
                    }
                    /**
                     * A rigid-body descriptor used to build a fixed rigid-body.
                     *
                     * @deprecated The method has been renamed to `.fixed()`.
                     */ static newStatic() {
                        return new RigidBodyDesc(RigidBodyType.Fixed)
                    }
                    setDominanceGroup(group) {
                        this.dominanceGroup = group
                        return this
                    }
                    /**
                     * Sets the number of additional solver iterations that will be run for this
                     * rigid-body and everything that interacts with it directly or indirectly
                     * through contacts or joints.
                     *
                     * Compared to increasing the global `World.numSolverIteration`, setting this
                     * value lets you increase accuracy on only a subset of the scene, resulting in reduced
                     * performance loss.
                     *
                     * @param iters - The new number of additional solver iterations (default: 0).
                     */ setAdditionalSolverIterations(iters) {
                        this.additionalSolverIterations = iters
                        return this
                    }
                    /**
                     * Sets whether the created rigid-body will be enabled or disabled.
                     * @param enabled − If set to `false` the rigid-body will be disabled at creation.
                     */ setEnabled(enabled) {
                        this.enabled = enabled
                        return this
                    }
                    // #if DIM3
                    /**
                     * Sets the initial translation of the rigid-body to create.
                     *
                     * @param tra - The translation to set.
                     */ setTranslation(x, y, z) {
                        if (
                            typeof x != 'number' ||
                            typeof y != 'number' ||
                            typeof z != 'number'
                        )
                            throw TypeError(
                                'The translation components must be numbers.'
                            )
                        this.translation = {
                            x: x,
                            y: y,
                            z: z,
                        }
                        return this
                    }
                    // #endif
                    /**
                     * Sets the initial rotation of the rigid-body to create.
                     *
                     * @param rot - The rotation to set.
                     */ setRotation(rot) {
                        // #if DIM3
                        ;(0, _math.RotationOps).copy(this.rotation, rot)
                        // #endif
                        return this
                    }
                    /**
                     * Sets the scale factor applied to the gravity affecting
                     * the rigid-body being built.
                     *
                     * @param scale - The scale factor. Set this to `0.0` if the rigid-body
                     *   needs to ignore gravity.
                     */ setGravityScale(scale) {
                        this.gravityScale = scale
                        return this
                    }
                    /**
                     * Sets the initial mass of the rigid-body being built, before adding colliders' contributions.
                     *
                     * @param mass − The initial mass of the rigid-body to create.
                     */ setAdditionalMass(mass) {
                        this.mass = mass
                        this.massOnly = true
                        return this
                    }
                    // #if DIM3
                    /**
                     * Sets the initial linear velocity of the rigid-body to create.
                     *
                     * @param x - The linear velocity to set along the `x` axis.
                     * @param y - The linear velocity to set along the `y` axis.
                     * @param z - The linear velocity to set along the `z` axis.
                     */ setLinvel(x, y, z) {
                        if (
                            typeof x != 'number' ||
                            typeof y != 'number' ||
                            typeof z != 'number'
                        )
                            throw TypeError(
                                'The linvel components must be numbers.'
                            )
                        this.linvel = {
                            x: x,
                            y: y,
                            z: z,
                        }
                        return this
                    }
                    /**
                     * Sets the initial angular velocity of the rigid-body to create.
                     *
                     * @param vel - The angular velocity to set.
                     */ setAngvel(vel) {
                        ;(0, _math.VectorOps).copy(this.angvel, vel)
                        return this
                    }
                    /**
                     * Sets the mass properties of the rigid-body being built.
                     *
                     * Note that the final mass properties of the rigid-bodies depends
                     * on the initial mass-properties of the rigid-body (set by this method)
                     * to which is added the contributions of all the colliders with non-zero density
                     * attached to this rigid-body.
                     *
                     * Therefore, if you want your provided mass properties to be the final
                     * mass properties of your rigid-body, don't attach colliders to it, or
                     * only attach colliders with densities equal to zero.
                     *
                     * @param mass − The initial mass of the rigid-body to create.
                     * @param centerOfMass − The initial center-of-mass of the rigid-body to create.
                     * @param principalAngularInertia − The initial principal angular inertia of the rigid-body to create.
                     *                                  These are the eigenvalues of the angular inertia matrix.
                     * @param angularInertiaLocalFrame − The initial local angular inertia frame of the rigid-body to create.
                     *                                   These are the eigenvectors of the angular inertia matrix.
                     */ setAdditionalMassProperties(
                        mass,
                        centerOfMass,
                        principalAngularInertia,
                        angularInertiaLocalFrame
                    ) {
                        this.mass = mass
                        ;(0, _math.VectorOps).copy(
                            this.centerOfMass,
                            centerOfMass
                        )
                        ;(0, _math.VectorOps).copy(
                            this.principalAngularInertia,
                            principalAngularInertia
                        )
                        ;(0, _math.RotationOps).copy(
                            this.angularInertiaLocalFrame,
                            angularInertiaLocalFrame
                        )
                        this.massOnly = false
                        return this
                    }
                    /**
                     * Allow translation of this rigid-body only along specific axes.
                     * @param translationsEnabledX - Are translations along the X axis enabled?
                     * @param translationsEnabledY - Are translations along the y axis enabled?
                     * @param translationsEnabledZ - Are translations along the Z axis enabled?
                     */ enabledTranslations(
                        translationsEnabledX,
                        translationsEnabledY,
                        translationsEnabledZ
                    ) {
                        this.translationsEnabledX = translationsEnabledX
                        this.translationsEnabledY = translationsEnabledY
                        this.translationsEnabledZ = translationsEnabledZ
                        return this
                    }
                    /**
                     * Allow translation of this rigid-body only along specific axes.
                     * @param translationsEnabledX - Are translations along the X axis enabled?
                     * @param translationsEnabledY - Are translations along the y axis enabled?
                     * @param translationsEnabledZ - Are translations along the Z axis enabled?
                     * @deprecated use `this.enabledTranslations` with the same arguments instead.
                     */ restrictTranslations(
                        translationsEnabledX,
                        translationsEnabledY,
                        translationsEnabledZ
                    ) {
                        return this.enabledTranslations(
                            translationsEnabledX,
                            translationsEnabledY,
                            translationsEnabledZ
                        )
                    }
                    /**
                     * Locks all translations that would have resulted from forces on
                     * the created rigid-body.
                     */ lockTranslations() {
                        return this.enabledTranslations(false, false, false)
                    }
                    /**
                     * Allow rotation of this rigid-body only along specific axes.
                     * @param rotationsEnabledX - Are rotations along the X axis enabled?
                     * @param rotationsEnabledY - Are rotations along the y axis enabled?
                     * @param rotationsEnabledZ - Are rotations along the Z axis enabled?
                     */ enabledRotations(
                        rotationsEnabledX,
                        rotationsEnabledY,
                        rotationsEnabledZ
                    ) {
                        this.rotationsEnabledX = rotationsEnabledX
                        this.rotationsEnabledY = rotationsEnabledY
                        this.rotationsEnabledZ = rotationsEnabledZ
                        return this
                    }
                    /**
                     * Allow rotation of this rigid-body only along specific axes.
                     * @param rotationsEnabledX - Are rotations along the X axis enabled?
                     * @param rotationsEnabledY - Are rotations along the y axis enabled?
                     * @param rotationsEnabledZ - Are rotations along the Z axis enabled?
                     * @deprecated use `this.enabledRotations` with the same arguments instead.
                     */ restrictRotations(
                        rotationsEnabledX,
                        rotationsEnabledY,
                        rotationsEnabledZ
                    ) {
                        return this.enabledRotations(
                            rotationsEnabledX,
                            rotationsEnabledY,
                            rotationsEnabledZ
                        )
                    }
                    /**
                     * Locks all rotations that would have resulted from forces on
                     * the created rigid-body.
                     */ lockRotations() {
                        return this.restrictRotations(false, false, false)
                    }
                    // #endif
                    /**
                     * Sets the linear damping of the rigid-body to create.
                     *
                     * This will progressively slowdown the translational movement of the rigid-body.
                     *
                     * @param damping - The angular damping coefficient. Should be >= 0. The higher this
                     *                  value is, the stronger the translational slowdown will be.
                     */ setLinearDamping(damping) {
                        this.linearDamping = damping
                        return this
                    }
                    /**
                     * Sets the angular damping of the rigid-body to create.
                     *
                     * This will progressively slowdown the rotational movement of the rigid-body.
                     *
                     * @param damping - The angular damping coefficient. Should be >= 0. The higher this
                     *                  value is, the stronger the rotational slowdown will be.
                     */ setAngularDamping(damping) {
                        this.angularDamping = damping
                        return this
                    }
                    /**
                     * Sets whether or not the rigid-body to create can sleep.
                     *
                     * @param can - true if the rigid-body can sleep, false if it can't.
                     */ setCanSleep(can) {
                        this.canSleep = can
                        return this
                    }
                    /**
                     * Sets whether or not the rigid-body is to be created asleep.
                     *
                     * @param can - true if the rigid-body should be in sleep, default false.
                     */ setSleeping(sleeping) {
                        this.sleeping = sleeping
                        return this
                    }
                    /**
                     * Sets whether Continuous Collision Detection (CCD) is enabled for this rigid-body.
                     *
                     * @param enabled - true if the rigid-body has CCD enabled.
                     */ setCcdEnabled(enabled) {
                        this.ccdEnabled = enabled
                        return this
                    }
                    /**
                     * Sets the maximum prediction distance Soft Continuous Collision-Detection.
                     *
                     * When set to 0, soft-CCD is disabled. Soft-CCD helps prevent tunneling especially of
                     * slow-but-thin to moderately fast objects. The soft CCD prediction distance indicates how
                     * far in the object’s path the CCD algorithm is allowed to inspect. Large values can impact
                     * performance badly by increasing the work needed from the broad-phase.
                     *
                     * It is a generally cheaper variant of regular CCD (that can be enabled with
                     * `RigidBodyDesc::setCcdEnabled` since it relies on predictive constraints instead of
                     * shape-cast and substeps.
                     */ setSoftCcdPrediction(distance) {
                        this.softCcdPrediction = distance
                        return this
                    }
                    /**
                     * Sets the user-defined object of this rigid-body.
                     *
                     * @param userData - The user-defined object to set.
                     */ setUserData(data) {
                        this.userData = data
                        return this
                    }
                }
            },
            {
                '../math': 'jE0Bx',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '3vie4': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * A set of rigid bodies that can be handled by a physics pipeline.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `rigidBodySet.free()`
                 * once you are done using it (and all the rigid-bodies it created).
                 */ parcelHelpers.export(
                    exports,
                    'RigidBodySet',
                    () => RigidBodySet
                )
                var _raw = require('../raw')
                var _coarena = require('../coarena')
                var _math = require('../math')
                var _rigidBody = require('./rigid_body')
                class RigidBodySet {
                    constructor(raw) {
                        this.raw = raw || new (0, _raw.RawRigidBodySet)()
                        this.map = new (0, _coarena.Coarena)()
                        // deserialize
                        if (raw)
                            raw.forEachRigidBodyHandle((handle) => {
                                this.map.set(
                                    handle,
                                    new (0, _rigidBody.RigidBody)(
                                        raw,
                                        null,
                                        handle
                                    )
                                )
                            })
                    }
                    /**
                     * Release the WASM memory occupied by this rigid-body set.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                        if (!!this.map) this.map.clear()
                        this.map = undefined
                    }
                    /**
                     * Internal method, do not call this explicitly.
                     */ finalizeDeserialization(colliderSet) {
                        this.map.forEach((rb) =>
                            rb.finalizeDeserialization(colliderSet)
                        )
                    }
                    /**
                     * Creates a new rigid-body and return its integer handle.
                     *
                     * @param desc - The description of the rigid-body to create.
                     */ createRigidBody(colliderSet, desc) {
                        let rawTra = (0, _math.VectorOps).intoRaw(
                            desc.translation
                        )
                        let rawRot = (0, _math.RotationOps).intoRaw(
                            desc.rotation
                        )
                        let rawLv = (0, _math.VectorOps).intoRaw(desc.linvel)
                        let rawCom = (0, _math.VectorOps).intoRaw(
                            desc.centerOfMass
                        )
                        // #if DIM3
                        let rawAv = (0, _math.VectorOps).intoRaw(desc.angvel)
                        let rawPrincipalInertia = (0, _math.VectorOps).intoRaw(
                            desc.principalAngularInertia
                        )
                        let rawInertiaFrame = (0, _math.RotationOps).intoRaw(
                            desc.angularInertiaLocalFrame
                        )
                        // #endif
                        let handle = this.raw.createRigidBody(
                            desc.enabled,
                            rawTra,
                            rawRot,
                            desc.gravityScale,
                            desc.mass,
                            desc.massOnly,
                            rawCom,
                            rawLv, // #if DIM3
                            rawAv,
                            rawPrincipalInertia,
                            rawInertiaFrame,
                            desc.translationsEnabledX,
                            desc.translationsEnabledY,
                            desc.translationsEnabledZ,
                            desc.rotationsEnabledX,
                            desc.rotationsEnabledY,
                            desc.rotationsEnabledZ, // #endif
                            desc.linearDamping,
                            desc.angularDamping,
                            desc.status,
                            desc.canSleep,
                            desc.sleeping,
                            desc.softCcdPrediction,
                            desc.ccdEnabled,
                            desc.dominanceGroup,
                            desc.additionalSolverIterations
                        )
                        rawTra.free()
                        rawRot.free()
                        rawLv.free()
                        rawCom.free()
                        // #if DIM3
                        rawAv.free()
                        rawPrincipalInertia.free()
                        rawInertiaFrame.free()
                        // #endif
                        const body = new (0, _rigidBody.RigidBody)(
                            this.raw,
                            colliderSet,
                            handle
                        )
                        body.userData = desc.userData
                        this.map.set(handle, body)
                        return body
                    }
                    /**
                     * Removes a rigid-body from this set.
                     *
                     * This will also remove all the colliders and joints attached to the rigid-body.
                     *
                     * @param handle - The integer handle of the rigid-body to remove.
                     * @param colliders - The set of colliders that may contain colliders attached to the removed rigid-body.
                     * @param impulseJoints - The set of impulse joints that may contain joints attached to the removed rigid-body.
                     * @param multibodyJoints - The set of multibody joints that may contain joints attached to the removed rigid-body.
                     */ remove(
                        handle,
                        islands,
                        colliders,
                        impulseJoints,
                        multibodyJoints
                    ) {
                        // Unmap the entities that will be removed automatically because of the rigid-body removals.
                        for (
                            let i = 0;
                            i < this.raw.rbNumColliders(handle);
                            i += 1
                        )
                            colliders.unmap(this.raw.rbCollider(handle, i))
                        impulseJoints.forEachJointHandleAttachedToRigidBody(
                            handle,
                            (handle) => impulseJoints.unmap(handle)
                        )
                        multibodyJoints.forEachJointHandleAttachedToRigidBody(
                            handle,
                            (handle) => multibodyJoints.unmap(handle)
                        )
                        // Remove the rigid-body.
                        this.raw.remove(
                            handle,
                            islands.raw,
                            colliders.raw,
                            impulseJoints.raw,
                            multibodyJoints.raw
                        )
                        this.map.delete(handle)
                    }
                    /**
                     * The number of rigid-bodies on this set.
                     */ len() {
                        return this.map.len()
                    }
                    /**
                     * Does this set contain a rigid-body with the given handle?
                     *
                     * @param handle - The rigid-body handle to check.
                     */ contains(handle) {
                        return this.get(handle) != null
                    }
                    /**
                     * Gets the rigid-body with the given handle.
                     *
                     * @param handle - The handle of the rigid-body to retrieve.
                     */ get(handle) {
                        return this.map.get(handle)
                    }
                    /**
                     * Applies the given closure to each rigid-body contained by this set.
                     *
                     * @param f - The closure to apply.
                     */ forEach(f) {
                        this.map.forEach(f)
                    }
                    /**
                     * Applies the given closure to each active rigid-bodies contained by this set.
                     *
                     * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
                     *
                     * @param f - The closure to apply.
                     */ forEachActiveRigidBody(islands, f) {
                        islands.forEachActiveRigidBodyHandle((handle) => {
                            f(this.get(handle))
                        })
                    }
                    /**
                     * Gets all rigid-bodies in the list.
                     *
                     * @returns rigid-bodies list.
                     */ getAll() {
                        return this.map.getAll()
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '../coarena': 'eaS82',
                '../math': 'jE0Bx',
                './rigid_body': 'cGah0',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        eaS82: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(exports, 'Coarena', () => Coarena)
                class Coarena {
                    constructor() {
                        this.fconv = new Float64Array(1)
                        this.uconv = new Uint32Array(this.fconv.buffer)
                        this.data = new Array()
                        this.size = 0
                    }
                    set(handle, data) {
                        let i = this.index(handle)
                        while (this.data.length <= i) this.data.push(null)
                        if (this.data[i] == null) this.size += 1
                        this.data[i] = data
                    }
                    len() {
                        return this.size
                    }
                    delete(handle) {
                        let i = this.index(handle)
                        if (i < this.data.length) {
                            if (this.data[i] != null) this.size -= 1
                            this.data[i] = null
                        }
                    }
                    clear() {
                        this.data = new Array()
                    }
                    get(handle) {
                        let i = this.index(handle)
                        if (i < this.data.length) return this.data[i]
                        else return null
                    }
                    forEach(f) {
                        for (const elt of this.data) if (elt != null) f(elt)
                    }
                    getAll() {
                        return this.data.filter((elt) => elt != null)
                    }
                    index(handle) {
                        /// Extracts the index part of a handle (the lower 32 bits).
                        /// This is done by first injecting the handle into an Float64Array
                        /// which is itself injected into an Uint32Array (at construction time).
                        /// The 0-th value of the Uint32Array will become the `number` integer
                        /// representation of the lower 32 bits.
                        /// Also `this.uconv[1]` then contains the generation number as a `number`,
                        /// which we don’t really need.
                        this.fconv[0] = handle
                        return this.uconv[0]
                    }
                }
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
        ],
        '1T3w7': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(
                    exports,
                    'IntegrationParameters',
                    () => IntegrationParameters
                )
                var _raw = require('../raw')
                class IntegrationParameters {
                    constructor(raw) {
                        this.raw =
                            raw || new (0, _raw.RawIntegrationParameters)()
                    }
                    /**
                     * Free the WASM memory used by these integration parameters.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                    /**
                     * The timestep length (default: `1.0 / 60.0`)
                     */ get dt() {
                        return this.raw.dt
                    }
                    /**
                     * The Error Reduction Parameter in `[0, 1]` is the proportion of
                     * the positional error to be corrected at each time step (default: `0.2`).
                     */ get contact_erp() {
                        return this.raw.contact_erp
                    }
                    get lengthUnit() {
                        return this.raw.lengthUnit
                    }
                    /**
                     * Normalized amount of penetration the engine won’t attempt to correct (default: `0.001m`).
                     *
                     * This threshold considered by the physics engine is this value multiplied by the `lengthUnit`.
                     */ get normalizedAllowedLinearError() {
                        return this.raw.normalizedAllowedLinearError
                    }
                    /**
                     * The maximal normalized distance separating two objects that will generate predictive contacts (default: `0.002`).
                     *
                     * This threshold considered by the physics engine is this value multiplied by the `lengthUnit`.
                     */ get normalizedPredictionDistance() {
                        return this.raw.normalizedPredictionDistance
                    }
                    /**
                     * The number of solver iterations run by the constraints solver for calculating forces (default: `4`).
                     */ get numSolverIterations() {
                        return this.raw.numSolverIterations
                    }
                    /**
                     * Number of addition friction resolution iteration run during the last solver sub-step (default: `4`).
                     */ get numAdditionalFrictionIterations() {
                        return this.raw.numAdditionalFrictionIterations
                    }
                    /**
                     * Number of internal Project Gauss Seidel (PGS) iterations run at each solver iteration (default: `1`).
                     */ get numInternalPgsIterations() {
                        return this.raw.numInternalPgsIterations
                    }
                    /**
                     * Minimum number of dynamic bodies in each active island (default: `128`).
                     */ get minIslandSize() {
                        return this.raw.minIslandSize
                    }
                    /**
                     * Maximum number of substeps performed by the  solver (default: `1`).
                     */ get maxCcdSubsteps() {
                        return this.raw.maxCcdSubsteps
                    }
                    set dt(value) {
                        this.raw.dt = value
                    }
                    set contact_natural_frequency(value) {
                        this.raw.contact_natural_frequency = value
                    }
                    set lengthUnit(value) {
                        this.raw.lengthUnit = value
                    }
                    set normalizedAllowedLinearError(value) {
                        this.raw.normalizedAllowedLinearError = value
                    }
                    set normalizedPredictionDistance(value) {
                        this.raw.normalizedPredictionDistance = value
                    }
                    /**
                     * Sets the number of solver iterations run by the constraints solver for calculating forces (default: `4`).
                     */ set numSolverIterations(value) {
                        this.raw.numSolverIterations = value
                    }
                    /**
                     * Sets the number of addition friction resolution iteration run during the last solver sub-step (default: `4`).
                     */ set numAdditionalFrictionIterations(value) {
                        this.raw.numAdditionalFrictionIterations = value
                    }
                    /**
                     * Sets the number of internal Project Gauss Seidel (PGS) iterations run at each solver iteration (default: `1`).
                     */ set numInternalPgsIterations(value) {
                        this.raw.numInternalPgsIterations = value
                    }
                    set minIslandSize(value) {
                        this.raw.minIslandSize = value
                    }
                    set maxCcdSubsteps(value) {
                        this.raw.maxCcdSubsteps = value
                    }
                    switchToStandardPgsSolver() {
                        this.raw.switchToStandardPgsSolver()
                    }
                    switchToSmallStepsPgsSolver() {
                        this.raw.switchToSmallStepsPgsSolver()
                    }
                    switchToSmallStepsPgsSolverWithoutWarmstart() {
                        this.raw.switchToSmallStepsPgsSolverWithoutWarmstart()
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        bs9N4: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(exports, 'JointType', () => JointType)
                parcelHelpers.export(exports, 'MotorModel', () => MotorModel)
                parcelHelpers.export(
                    exports,
                    'JointAxesMask',
                    () => JointAxesMask
                )
                parcelHelpers.export(
                    exports,
                    'ImpulseJoint',
                    () => ImpulseJoint
                )
                parcelHelpers.export(
                    exports,
                    'UnitImpulseJoint',
                    () => UnitImpulseJoint
                )
                parcelHelpers.export(
                    exports,
                    'FixedImpulseJoint',
                    () => FixedImpulseJoint
                )
                parcelHelpers.export(
                    exports,
                    'RopeImpulseJoint',
                    () => RopeImpulseJoint
                )
                parcelHelpers.export(
                    exports,
                    'SpringImpulseJoint',
                    () => SpringImpulseJoint
                )
                parcelHelpers.export(
                    exports,
                    'PrismaticImpulseJoint',
                    () => PrismaticImpulseJoint
                )
                parcelHelpers.export(
                    exports,
                    'RevoluteImpulseJoint',
                    () => RevoluteImpulseJoint
                )
                // #if DIM3
                parcelHelpers.export(
                    exports,
                    'GenericImpulseJoint',
                    () => GenericImpulseJoint
                )
                parcelHelpers.export(
                    exports,
                    'SphericalImpulseJoint',
                    () => SphericalImpulseJoint
                )
                // #endif
                parcelHelpers.export(exports, 'JointData', () => JointData)
                var _math = require('../math')
                var _raw = require('../raw')
                var JointType
                ;(function (JointType) {
                    JointType[(JointType['Revolute'] = 0)] = 'Revolute'
                    JointType[(JointType['Fixed'] = 1)] = 'Fixed'
                    JointType[(JointType['Prismatic'] = 2)] = 'Prismatic'
                    JointType[(JointType['Rope'] = 3)] = 'Rope'
                    JointType[(JointType['Spring'] = 4)] = 'Spring'
                    // #if DIM3
                    JointType[(JointType['Spherical'] = 5)] = 'Spherical'
                    JointType[(JointType['Generic'] = 6)] = 'Generic'
                    // #endif
                })(JointType || (JointType = {}))
                var MotorModel
                ;(function (MotorModel) {
                    MotorModel[(MotorModel['AccelerationBased'] = 0)] =
                        'AccelerationBased'
                    MotorModel[(MotorModel['ForceBased'] = 1)] = 'ForceBased'
                })(MotorModel || (MotorModel = {}))
                var JointAxesMask
                ;(function (JointAxesMask) {
                    JointAxesMask[(JointAxesMask['LinX'] = 1)] = 'LinX'
                    JointAxesMask[(JointAxesMask['LinY'] = 2)] = 'LinY'
                    JointAxesMask[(JointAxesMask['LinZ'] = 4)] = 'LinZ'
                    JointAxesMask[(JointAxesMask['AngX'] = 8)] = 'AngX'
                    JointAxesMask[(JointAxesMask['AngY'] = 16)] = 'AngY'
                    JointAxesMask[(JointAxesMask['AngZ'] = 32)] = 'AngZ'
                })(JointAxesMask || (JointAxesMask = {}))
                class ImpulseJoint {
                    constructor(rawSet, bodySet, handle) {
                        this.rawSet = rawSet
                        this.bodySet = bodySet
                        this.handle = handle
                    }
                    static newTyped(rawSet, bodySet, handle) {
                        switch (rawSet.jointType(handle)) {
                            case (0, _raw.RawJointType).Revolute:
                                return new RevoluteImpulseJoint(
                                    rawSet,
                                    bodySet,
                                    handle
                                )
                            case (0, _raw.RawJointType).Prismatic:
                                return new PrismaticImpulseJoint(
                                    rawSet,
                                    bodySet,
                                    handle
                                )
                            case (0, _raw.RawJointType).Fixed:
                                return new FixedImpulseJoint(
                                    rawSet,
                                    bodySet,
                                    handle
                                )
                            case (0, _raw.RawJointType).Spring:
                                return new SpringImpulseJoint(
                                    rawSet,
                                    bodySet,
                                    handle
                                )
                            case (0, _raw.RawJointType).Rope:
                                return new RopeImpulseJoint(
                                    rawSet,
                                    bodySet,
                                    handle
                                )
                            // #if DIM3
                            case (0, _raw.RawJointType).Spherical:
                                return new SphericalImpulseJoint(
                                    rawSet,
                                    bodySet,
                                    handle
                                )
                            case (0, _raw.RawJointType).Generic:
                                return new GenericImpulseJoint(
                                    rawSet,
                                    bodySet,
                                    handle
                                )
                            // #endif
                            default:
                                return new ImpulseJoint(rawSet, bodySet, handle)
                        }
                    }
                    /** @internal */ finalizeDeserialization(bodySet) {
                        this.bodySet = bodySet
                    }
                    /**
                     * Checks if this joint is still valid (i.e. that it has
                     * not been deleted from the joint set yet).
                     */ isValid() {
                        return this.rawSet.contains(this.handle)
                    }
                    /**
                     * The first rigid-body this joint it attached to.
                     */ body1() {
                        return this.bodySet.get(
                            this.rawSet.jointBodyHandle1(this.handle)
                        )
                    }
                    /**
                     * The second rigid-body this joint is attached to.
                     */ body2() {
                        return this.bodySet.get(
                            this.rawSet.jointBodyHandle2(this.handle)
                        )
                    }
                    /**
                     * The type of this joint given as a string.
                     */ type() {
                        return this.rawSet.jointType(this.handle)
                    }
                    // #if DIM3
                    /**
                     * The rotation quaternion that aligns this joint's first local axis to the `x` axis.
                     */ frameX1() {
                        return (0, _math.RotationOps).fromRaw(
                            this.rawSet.jointFrameX1(this.handle)
                        )
                    }
                    // #endif
                    // #if DIM3
                    /**
                     * The rotation matrix that aligns this joint's second local axis to the `x` axis.
                     */ frameX2() {
                        return (0, _math.RotationOps).fromRaw(
                            this.rawSet.jointFrameX2(this.handle)
                        )
                    }
                    // #endif
                    /**
                     * The position of the first anchor of this joint.
                     *
                     * The first anchor gives the position of the application point on the
                     * local frame of the first rigid-body it is attached to.
                     */ anchor1() {
                        return (0, _math.VectorOps).fromRaw(
                            this.rawSet.jointAnchor1(this.handle)
                        )
                    }
                    /**
                     * The position of the second anchor of this joint.
                     *
                     * The second anchor gives the position of the application point on the
                     * local frame of the second rigid-body it is attached to.
                     */ anchor2() {
                        return (0, _math.VectorOps).fromRaw(
                            this.rawSet.jointAnchor2(this.handle)
                        )
                    }
                    /**
                     * Sets the position of the first anchor of this joint.
                     *
                     * The first anchor gives the position of the application point on the
                     * local frame of the first rigid-body it is attached to.
                     */ setAnchor1(newPos) {
                        const rawPoint = (0, _math.VectorOps).intoRaw(newPos)
                        this.rawSet.jointSetAnchor1(this.handle, rawPoint)
                        rawPoint.free()
                    }
                    /**
                     * Sets the position of the second anchor of this joint.
                     *
                     * The second anchor gives the position of the application point on the
                     * local frame of the second rigid-body it is attached to.
                     */ setAnchor2(newPos) {
                        const rawPoint = (0, _math.VectorOps).intoRaw(newPos)
                        this.rawSet.jointSetAnchor2(this.handle, rawPoint)
                        rawPoint.free()
                    }
                    /**
                     * Controls whether contacts are computed between colliders attached
                     * to the rigid-bodies linked by this joint.
                     */ setContactsEnabled(enabled) {
                        this.rawSet.jointSetContactsEnabled(
                            this.handle,
                            enabled
                        )
                    }
                    /**
                     * Indicates if contacts are enabled between colliders attached
                     * to the rigid-bodies linked by this joint.
                     */ contactsEnabled() {
                        return this.rawSet.jointContactsEnabled(this.handle)
                    }
                }
                class UnitImpulseJoint extends ImpulseJoint {
                    /**
                     * Are the limits enabled for this joint?
                     */ limitsEnabled() {
                        return this.rawSet.jointLimitsEnabled(
                            this.handle,
                            this.rawAxis()
                        )
                    }
                    /**
                     * The min limit of this joint.
                     */ limitsMin() {
                        return this.rawSet.jointLimitsMin(
                            this.handle,
                            this.rawAxis()
                        )
                    }
                    /**
                     * The max limit of this joint.
                     */ limitsMax() {
                        return this.rawSet.jointLimitsMax(
                            this.handle,
                            this.rawAxis()
                        )
                    }
                    /**
                     * Sets the limits of this joint.
                     *
                     * @param min - The minimum bound of this joint’s free coordinate.
                     * @param max - The maximum bound of this joint’s free coordinate.
                     */ setLimits(min, max) {
                        this.rawSet.jointSetLimits(
                            this.handle,
                            this.rawAxis(),
                            min,
                            max
                        )
                    }
                    configureMotorModel(model) {
                        this.rawSet.jointConfigureMotorModel(
                            this.handle,
                            this.rawAxis(),
                            model
                        )
                    }
                    configureMotorVelocity(targetVel, factor) {
                        this.rawSet.jointConfigureMotorVelocity(
                            this.handle,
                            this.rawAxis(),
                            targetVel,
                            factor
                        )
                    }
                    configureMotorPosition(targetPos, stiffness, damping) {
                        this.rawSet.jointConfigureMotorPosition(
                            this.handle,
                            this.rawAxis(),
                            targetPos,
                            stiffness,
                            damping
                        )
                    }
                    configureMotor(targetPos, targetVel, stiffness, damping) {
                        this.rawSet.jointConfigureMotor(
                            this.handle,
                            this.rawAxis(),
                            targetPos,
                            targetVel,
                            stiffness,
                            damping
                        )
                    }
                }
                class FixedImpulseJoint extends ImpulseJoint {}
                class RopeImpulseJoint extends ImpulseJoint {}
                class SpringImpulseJoint extends ImpulseJoint {}
                class PrismaticImpulseJoint extends UnitImpulseJoint {
                    rawAxis() {
                        return (0, _raw.RawJointAxis).LinX
                    }
                }
                class RevoluteImpulseJoint extends UnitImpulseJoint {
                    rawAxis() {
                        return (0, _raw.RawJointAxis).AngX
                    }
                }
                class GenericImpulseJoint extends ImpulseJoint {}
                class SphericalImpulseJoint extends ImpulseJoint {}
                class JointData {
                    constructor() {}
                    /**
                     * Creates a new joint descriptor that builds a Fixed joint.
                     *
                     * A fixed joint removes all the degrees of freedom between the affected bodies, ensuring their
                     * anchor and local frames coincide in world-space.
                     *
                     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
                     *                  local-space of the rigid-body.
                     * @param frame1 - The reference orientation of the joint wrt. the first rigid-body.
                     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
                     *                  local-space of the rigid-body.
                     * @param frame2 - The reference orientation of the joint wrt. the second rigid-body.
                     */ static fixed(anchor1, frame1, anchor2, frame2) {
                        let res = new JointData()
                        res.anchor1 = anchor1
                        res.anchor2 = anchor2
                        res.frame1 = frame1
                        res.frame2 = frame2
                        res.jointType = JointType.Fixed
                        return res
                    }
                    static spring(
                        rest_length,
                        stiffness,
                        damping,
                        anchor1,
                        anchor2
                    ) {
                        let res = new JointData()
                        res.anchor1 = anchor1
                        res.anchor2 = anchor2
                        res.length = rest_length
                        res.stiffness = stiffness
                        res.damping = damping
                        res.jointType = JointType.Spring
                        return res
                    }
                    static rope(length, anchor1, anchor2) {
                        let res = new JointData()
                        res.anchor1 = anchor1
                        res.anchor2 = anchor2
                        res.length = length
                        res.jointType = JointType.Rope
                        return res
                    }
                    // #if DIM3
                    /**
                     * Create a new joint descriptor that builds generic joints.
                     *
                     * A generic joint allows customizing its degrees of freedom
                     * by supplying a mask of the joint axes that should remain locked.
                     *
                     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
                     *                  local-space of the rigid-body.
                     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
                     *                  local-space of the rigid-body.
                     * @param axis - The X axis of the joint, expressed in the local-space of the rigid-bodies it is attached to.
                     * @param axesMask - Mask representing the locked axes of the joint. You can use logical OR to select these from
                     *                   the JointAxesMask enum. For example, passing (JointAxesMask.AngX || JointAxesMask.AngY) will
                     *                   create a joint locked in the X and Y rotational axes.
                     */ static generic(anchor1, anchor2, axis, axesMask) {
                        let res = new JointData()
                        res.anchor1 = anchor1
                        res.anchor2 = anchor2
                        res.axis = axis
                        res.axesMask = axesMask
                        res.jointType = JointType.Generic
                        return res
                    }
                    /**
                     * Create a new joint descriptor that builds spherical joints.
                     *
                     * A spherical joint allows three relative rotational degrees of freedom
                     * by preventing any relative translation between the anchors of the
                     * two attached rigid-bodies.
                     *
                     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
                     *                  local-space of the rigid-body.
                     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
                     *                  local-space of the rigid-body.
                     */ static spherical(anchor1, anchor2) {
                        let res = new JointData()
                        res.anchor1 = anchor1
                        res.anchor2 = anchor2
                        res.jointType = JointType.Spherical
                        return res
                    }
                    /**
                     * Creates a new joint descriptor that builds a Prismatic joint.
                     *
                     * A prismatic joint removes all the degrees of freedom between the
                     * affected bodies, except for the translation along one axis.
                     *
                     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
                     *                  local-space of the rigid-body.
                     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
                     *                  local-space of the rigid-body.
                     * @param axis - Axis of the joint, expressed in the local-space of the rigid-bodies it is attached to.
                     */ static prismatic(anchor1, anchor2, axis) {
                        let res = new JointData()
                        res.anchor1 = anchor1
                        res.anchor2 = anchor2
                        res.axis = axis
                        res.jointType = JointType.Prismatic
                        return res
                    }
                    /**
                     * Create a new joint descriptor that builds Revolute joints.
                     *
                     * A revolute joint removes all degrees of freedom between the affected
                     * bodies except for the rotation along one axis.
                     *
                     * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
                     *                  local-space of the rigid-body.
                     * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
                     *                  local-space of the rigid-body.
                     * @param axis - Axis of the joint, expressed in the local-space of the rigid-bodies it is attached to.
                     */ static revolute(anchor1, anchor2, axis) {
                        let res = new JointData()
                        res.anchor1 = anchor1
                        res.anchor2 = anchor2
                        res.axis = axis
                        res.jointType = JointType.Revolute
                        return res
                    }
                    // #endif
                    intoRaw() {
                        let rawA1 = (0, _math.VectorOps).intoRaw(this.anchor1)
                        let rawA2 = (0, _math.VectorOps).intoRaw(this.anchor2)
                        let rawAx
                        let result
                        let limitsEnabled = false
                        let limitsMin = 0.0
                        let limitsMax = 0.0
                        switch (this.jointType) {
                            case JointType.Fixed:
                                let rawFra1 = (0, _math.RotationOps).intoRaw(
                                    this.frame1
                                )
                                let rawFra2 = (0, _math.RotationOps).intoRaw(
                                    this.frame2
                                )
                                result = (0, _raw.RawGenericJoint).fixed(
                                    rawA1,
                                    rawFra1,
                                    rawA2,
                                    rawFra2
                                )
                                rawFra1.free()
                                rawFra2.free()
                                break
                            case JointType.Spring:
                                result = (0, _raw.RawGenericJoint).spring(
                                    this.length,
                                    this.stiffness,
                                    this.damping,
                                    rawA1,
                                    rawA2
                                )
                                break
                            case JointType.Rope:
                                result = (0, _raw.RawGenericJoint).rope(
                                    this.length,
                                    rawA1,
                                    rawA2
                                )
                                break
                            case JointType.Prismatic:
                                rawAx = (0, _math.VectorOps).intoRaw(this.axis)
                                if (!!this.limitsEnabled) {
                                    limitsEnabled = true
                                    limitsMin = this.limits[0]
                                    limitsMax = this.limits[1]
                                }
                                // #if DIM3
                                result = (0, _raw.RawGenericJoint).prismatic(
                                    rawA1,
                                    rawA2,
                                    rawAx,
                                    limitsEnabled,
                                    limitsMin,
                                    limitsMax
                                )
                                // #endif
                                rawAx.free()
                                break
                            // #if DIM3
                            case JointType.Generic:
                                rawAx = (0, _math.VectorOps).intoRaw(this.axis)
                                // implicit type cast: axesMask is a JointAxesMask bitflag enum,
                                // we're treating it as a u8 on the Rust side
                                let rawAxesMask = this.axesMask
                                result = (0, _raw.RawGenericJoint).generic(
                                    rawA1,
                                    rawA2,
                                    rawAx,
                                    rawAxesMask
                                )
                                break
                            case JointType.Spherical:
                                result = (0, _raw.RawGenericJoint).spherical(
                                    rawA1,
                                    rawA2
                                )
                                break
                            case JointType.Revolute:
                                rawAx = (0, _math.VectorOps).intoRaw(this.axis)
                                result = (0, _raw.RawGenericJoint).revolute(
                                    rawA1,
                                    rawA2,
                                    rawAx
                                )
                                rawAx.free()
                                break
                        }
                        rawA1.free()
                        rawA2.free()
                        return result
                    }
                }
            },
            {
                '../math': 'jE0Bx',
                '../raw': '7Eciy',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '9O61W': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * A set of joints.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `jointSet.free()`
                 * once you are done using it (and all the joints it created).
                 */ parcelHelpers.export(
                    exports,
                    'ImpulseJointSet',
                    () => ImpulseJointSet
                )
                var _raw = require('../raw')
                var _coarena = require('../coarena')
                var _impulseJoint = require('./impulse_joint')
                class ImpulseJointSet {
                    constructor(raw) {
                        this.raw = raw || new (0, _raw.RawImpulseJointSet)()
                        this.map = new (0, _coarena.Coarena)()
                        // Initialize the map with the existing elements, if any.
                        if (raw)
                            raw.forEachJointHandle((handle) => {
                                this.map.set(
                                    handle,
                                    (0, _impulseJoint.ImpulseJoint).newTyped(
                                        raw,
                                        null,
                                        handle
                                    )
                                )
                            })
                    }
                    /**
                     * Release the WASM memory occupied by this joint set.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                        if (!!this.map) this.map.clear()
                        this.map = undefined
                    }
                    /** @internal */ finalizeDeserialization(bodies) {
                        this.map.forEach((joint) =>
                            joint.finalizeDeserialization(bodies)
                        )
                    }
                    /**
                     * Creates a new joint and return its integer handle.
                     *
                     * @param bodies - The set of rigid-bodies containing the bodies the joint is attached to.
                     * @param desc - The joint's parameters.
                     * @param parent1 - The handle of the first rigid-body this joint is attached to.
                     * @param parent2 - The handle of the second rigid-body this joint is attached to.
                     * @param wakeUp - Should the attached rigid-bodies be awakened?
                     */ createJoint(bodies, desc, parent1, parent2, wakeUp) {
                        const rawParams = desc.intoRaw()
                        const handle = this.raw.createJoint(
                            rawParams,
                            parent1,
                            parent2,
                            wakeUp
                        )
                        rawParams.free()
                        let joint = (0, _impulseJoint.ImpulseJoint).newTyped(
                            this.raw,
                            bodies,
                            handle
                        )
                        this.map.set(handle, joint)
                        return joint
                    }
                    /**
                     * Remove a joint from this set.
                     *
                     * @param handle - The integer handle of the joint.
                     * @param wakeUp - If `true`, the rigid-bodies attached by the removed joint will be woken-up automatically.
                     */ remove(handle, wakeUp) {
                        this.raw.remove(handle, wakeUp)
                        this.unmap(handle)
                    }
                    /**
                     * Calls the given closure with the integer handle of each impulse joint attached to this rigid-body.
                     *
                     * @param f - The closure called with the integer handle of each impulse joint attached to the rigid-body.
                     */ forEachJointHandleAttachedToRigidBody(handle, f) {
                        this.raw.forEachJointAttachedToRigidBody(handle, f)
                    }
                    /**
                     * Internal function, do not call directly.
                     * @param handle
                     */ unmap(handle) {
                        this.map.delete(handle)
                    }
                    /**
                     * The number of joints on this set.
                     */ len() {
                        return this.map.len()
                    }
                    /**
                     * Does this set contain a joint with the given handle?
                     *
                     * @param handle - The joint handle to check.
                     */ contains(handle) {
                        return this.get(handle) != null
                    }
                    /**
                     * Gets the joint with the given handle.
                     *
                     * Returns `null` if no joint with the specified handle exists.
                     *
                     * @param handle - The integer handle of the joint to retrieve.
                     */ get(handle) {
                        return this.map.get(handle)
                    }
                    /**
                     * Applies the given closure to each joint contained by this set.
                     *
                     * @param f - The closure to apply.
                     */ forEach(f) {
                        this.map.forEach(f)
                    }
                    /**
                     * Gets all joints in the list.
                     *
                     * @returns joint list.
                     */ getAll() {
                        return this.map.getAll()
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '../coarena': 'eaS82',
                './impulse_joint': 'bs9N4',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        aCGBy: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(
                    exports,
                    'MultibodyJoint',
                    () => MultibodyJoint
                )
                parcelHelpers.export(
                    exports,
                    'UnitMultibodyJoint',
                    () => UnitMultibodyJoint
                )
                parcelHelpers.export(
                    exports,
                    'FixedMultibodyJoint',
                    () => FixedMultibodyJoint
                )
                parcelHelpers.export(
                    exports,
                    'PrismaticMultibodyJoint',
                    () => PrismaticMultibodyJoint
                )
                parcelHelpers.export(
                    exports,
                    'RevoluteMultibodyJoint',
                    () => RevoluteMultibodyJoint
                )
                // #if DIM3
                parcelHelpers.export(
                    exports,
                    'SphericalMultibodyJoint',
                    () => SphericalMultibodyJoint
                ) // #endif
                var _raw = require('../raw')
                class MultibodyJoint {
                    constructor(rawSet, handle) {
                        this.rawSet = rawSet
                        this.handle = handle
                    }
                    static newTyped(rawSet, handle) {
                        switch (rawSet.jointType(handle)) {
                            case (0, _raw.RawJointType).Revolute:
                                return new RevoluteMultibodyJoint(
                                    rawSet,
                                    handle
                                )
                            case (0, _raw.RawJointType).Prismatic:
                                return new PrismaticMultibodyJoint(
                                    rawSet,
                                    handle
                                )
                            case (0, _raw.RawJointType).Fixed:
                                return new FixedMultibodyJoint(rawSet, handle)
                            // #if DIM3
                            case (0, _raw.RawJointType).Spherical:
                                return new SphericalMultibodyJoint(
                                    rawSet,
                                    handle
                                )
                            // #endif
                            default:
                                return new MultibodyJoint(rawSet, handle)
                        }
                    }
                    /**
                     * Checks if this joint is still valid (i.e. that it has
                     * not been deleted from the joint set yet).
                     */ isValid() {
                        return this.rawSet.contains(this.handle)
                    }
                    // /**
                    //  * The unique integer identifier of the first rigid-body this joint it attached to.
                    //  */
                    // public bodyHandle1(): RigidBodyHandle {
                    //     return this.rawSet.jointBodyHandle1(this.handle);
                    // }
                    //
                    // /**
                    //  * The unique integer identifier of the second rigid-body this joint is attached to.
                    //  */
                    // public bodyHandle2(): RigidBodyHandle {
                    //     return this.rawSet.jointBodyHandle2(this.handle);
                    // }
                    //
                    // /**
                    //  * The type of this joint given as a string.
                    //  */
                    // public type(): JointType {
                    //     return this.rawSet.jointType(this.handle);
                    // }
                    //
                    // // #if DIM3
                    // /**
                    //  * The rotation quaternion that aligns this joint's first local axis to the `x` axis.
                    //  */
                    // public frameX1(): Rotation {
                    //     return RotationOps.fromRaw(this.rawSet.jointFrameX1(this.handle));
                    // }
                    //
                    // // #endif
                    //
                    // // #if DIM3
                    // /**
                    //  * The rotation matrix that aligns this joint's second local axis to the `x` axis.
                    //  */
                    // public frameX2(): Rotation {
                    //     return RotationOps.fromRaw(this.rawSet.jointFrameX2(this.handle));
                    // }
                    //
                    // // #endif
                    //
                    // /**
                    //  * The position of the first anchor of this joint.
                    //  *
                    //  * The first anchor gives the position of the points application point on the
                    //  * local frame of the first rigid-body it is attached to.
                    //  */
                    // public anchor1(): Vector {
                    //     return VectorOps.fromRaw(this.rawSet.jointAnchor1(this.handle));
                    // }
                    //
                    // /**
                    //  * The position of the second anchor of this joint.
                    //  *
                    //  * The second anchor gives the position of the points application point on the
                    //  * local frame of the second rigid-body it is attached to.
                    //  */
                    // public anchor2(): Vector {
                    //     return VectorOps.fromRaw(this.rawSet.jointAnchor2(this.handle));
                    // }
                    /**
                     * Controls whether contacts are computed between colliders attached
                     * to the rigid-bodies linked by this joint.
                     */ setContactsEnabled(enabled) {
                        this.rawSet.jointSetContactsEnabled(
                            this.handle,
                            enabled
                        )
                    }
                    /**
                     * Indicates if contacts are enabled between colliders attached
                     * to the rigid-bodies linked by this joint.
                     */ contactsEnabled() {
                        return this.rawSet.jointContactsEnabled(this.handle)
                    }
                }
                class UnitMultibodyJoint extends MultibodyJoint {}
                class FixedMultibodyJoint extends MultibodyJoint {}
                class PrismaticMultibodyJoint extends UnitMultibodyJoint {
                    rawAxis() {
                        return (0, _raw.RawJointAxis).LinX
                    }
                }
                class RevoluteMultibodyJoint extends UnitMultibodyJoint {
                    rawAxis() {
                        return (0, _raw.RawJointAxis).AngX
                    }
                }
                class SphericalMultibodyJoint extends MultibodyJoint {}
            },
            {
                '../raw': '7Eciy',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '7cv6p': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * A set of joints.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `jointSet.free()`
                 * once you are done using it (and all the joints it created).
                 */ parcelHelpers.export(
                    exports,
                    'MultibodyJointSet',
                    () => MultibodyJointSet
                )
                var _raw = require('../raw')
                var _coarena = require('../coarena')
                var _multibodyJoint = require('./multibody_joint')
                class MultibodyJointSet {
                    constructor(raw) {
                        this.raw = raw || new (0, _raw.RawMultibodyJointSet)()
                        this.map = new (0, _coarena.Coarena)()
                        // Initialize the map with the existing elements, if any.
                        if (raw)
                            raw.forEachJointHandle((handle) => {
                                this.map.set(
                                    handle,
                                    (0,
                                    _multibodyJoint.MultibodyJoint).newTyped(
                                        this.raw,
                                        handle
                                    )
                                )
                            })
                    }
                    /**
                     * Release the WASM memory occupied by this joint set.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                        if (!!this.map) this.map.clear()
                        this.map = undefined
                    }
                    /**
                     * Creates a new joint and return its integer handle.
                     *
                     * @param desc - The joint's parameters.
                     * @param parent1 - The handle of the first rigid-body this joint is attached to.
                     * @param parent2 - The handle of the second rigid-body this joint is attached to.
                     * @param wakeUp - Should the attached rigid-bodies be awakened?
                     */ createJoint(desc, parent1, parent2, wakeUp) {
                        const rawParams = desc.intoRaw()
                        const handle = this.raw.createJoint(
                            rawParams,
                            parent1,
                            parent2,
                            wakeUp
                        )
                        rawParams.free()
                        let joint = (0,
                        _multibodyJoint.MultibodyJoint).newTyped(
                            this.raw,
                            handle
                        )
                        this.map.set(handle, joint)
                        return joint
                    }
                    /**
                     * Remove a joint from this set.
                     *
                     * @param handle - The integer handle of the joint.
                     * @param wake_up - If `true`, the rigid-bodies attached by the removed joint will be woken-up automatically.
                     */ remove(handle, wake_up) {
                        this.raw.remove(handle, wake_up)
                        this.map.delete(handle)
                    }
                    /**
                     * Internal function, do not call directly.
                     * @param handle
                     */ unmap(handle) {
                        this.map.delete(handle)
                    }
                    /**
                     * The number of joints on this set.
                     */ len() {
                        return this.map.len()
                    }
                    /**
                     * Does this set contain a joint with the given handle?
                     *
                     * @param handle - The joint handle to check.
                     */ contains(handle) {
                        return this.get(handle) != null
                    }
                    /**
                     * Gets the joint with the given handle.
                     *
                     * Returns `null` if no joint with the specified handle exists.
                     *
                     * @param handle - The integer handle of the joint to retrieve.
                     */ get(handle) {
                        return this.map.get(handle)
                    }
                    /**
                     * Applies the given closure to each joint contained by this set.
                     *
                     * @param f - The closure to apply.
                     */ forEach(f) {
                        this.map.forEach(f)
                    }
                    /**
                     * Calls the given closure with the integer handle of each multibody joint attached to this rigid-body.
                     *
                     * @param f - The closure called with the integer handle of each multibody joint attached to the rigid-body.
                     */ forEachJointHandleAttachedToRigidBody(handle, f) {
                        this.raw.forEachJointAttachedToRigidBody(handle, f)
                    }
                    /**
                     * Gets all joints in the list.
                     *
                     * @returns joint list.
                     */ getAll() {
                        return this.map.getAll()
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '../coarena': 'eaS82',
                './multibody_joint': 'aCGBy',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '6Vo8H': [
            function (require, module, exports, __globalThis) {
                /**
                 * A rule applied to combine coefficients.
                 *
                 * Use this when configuring the `ColliderDesc` to specify
                 * how friction and restitution coefficient should be combined
                 * in a contact.
                 */ var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(
                    exports,
                    'CoefficientCombineRule',
                    () => CoefficientCombineRule
                )
                var CoefficientCombineRule
                ;(function (CoefficientCombineRule) {
                    CoefficientCombineRule[
                        (CoefficientCombineRule['Average'] = 0)
                    ] = 'Average'
                    CoefficientCombineRule[
                        (CoefficientCombineRule['Min'] = 1)
                    ] = 'Min'
                    CoefficientCombineRule[
                        (CoefficientCombineRule['Multiply'] = 2)
                    ] = 'Multiply'
                    CoefficientCombineRule[
                        (CoefficientCombineRule['Max'] = 3)
                    ] = 'Max'
                })(CoefficientCombineRule || (CoefficientCombineRule = {}))
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
        ],
        '15VhG': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * The CCD solver responsible for resolving Continuous Collision Detection.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `ccdSolver.free()`
                 * once you are done using it.
                 */ parcelHelpers.export(exports, 'CCDSolver', () => CCDSolver)
                var _raw = require('../raw')
                class CCDSolver {
                    constructor(raw) {
                        this.raw = raw || new (0, _raw.RawCCDSolver)()
                    }
                    /**
                     * Release the WASM memory occupied by this narrow-phase.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '2yldA': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * The CCD solver responsible for resolving Continuous Collision Detection.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `ccdSolver.free()`
                 * once you are done using it.
                 */ parcelHelpers.export(
                    exports,
                    'IslandManager',
                    () => IslandManager
                )
                var _raw = require('../raw')
                class IslandManager {
                    constructor(raw) {
                        this.raw = raw || new (0, _raw.RawIslandManager)()
                    }
                    /**
                     * Release the WASM memory occupied by this narrow-phase.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                    /**
                     * Applies the given closure to the handle of each active rigid-bodies contained by this set.
                     *
                     * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
                     *
                     * @param f - The closure to apply.
                     */ forEachActiveRigidBodyHandle(f) {
                        this.raw.forEachActiveRigidBodyHandle(f)
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        emjBd: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                var _broadPhase = require('./broad_phase')
                parcelHelpers.exportAll(_broadPhase, exports)
                var _narrowPhase = require('./narrow_phase')
                parcelHelpers.exportAll(_narrowPhase, exports)
                var _shape = require('./shape')
                parcelHelpers.exportAll(_shape, exports)
                var _collider = require('./collider')
                parcelHelpers.exportAll(_collider, exports)
                var _colliderSet = require('./collider_set')
                parcelHelpers.exportAll(_colliderSet, exports)
                var _feature = require('./feature')
                parcelHelpers.exportAll(_feature, exports)
                var _ray = require('./ray')
                parcelHelpers.exportAll(_ray, exports)
                var _point = require('./point')
                parcelHelpers.exportAll(_point, exports)
                var _toi = require('./toi')
                parcelHelpers.exportAll(_toi, exports)
                var _interactionGroups = require('./interaction_groups')
                parcelHelpers.exportAll(_interactionGroups, exports)
                var _contact = require('./contact')
                parcelHelpers.exportAll(_contact, exports)
            },
            {
                './broad_phase': 'h44hj',
                './narrow_phase': '2XBZ3',
                './shape': 'lrt5G',
                './collider': '5bsoq',
                './collider_set': 'jlsZM',
                './feature': '6IkXf',
                './ray': 'aS6kI',
                './point': '1dBT4',
                './toi': 'apxEh',
                './interaction_groups': 'fH1HE',
                './contact': '2WaUV',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        h44hj: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * The broad-phase used for coarse collision-detection.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `broadPhase.free()`
                 * once you are done using it.
                 */ parcelHelpers.export(
                    exports,
                    'BroadPhase',
                    () => BroadPhase
                )
                var _raw = require('../raw')
                class BroadPhase {
                    constructor(raw) {
                        this.raw = raw || new (0, _raw.RawBroadPhase)()
                    }
                    /**
                     * Release the WASM memory occupied by this broad-phase.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '2XBZ3': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * The narrow-phase used for precise collision-detection.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `narrowPhase.free()`
                 * once you are done using it.
                 */ parcelHelpers.export(
                    exports,
                    'NarrowPhase',
                    () => NarrowPhase
                )
                parcelHelpers.export(
                    exports,
                    'TempContactManifold',
                    () => TempContactManifold
                )
                var _raw = require('../raw')
                var _math = require('../math')
                class NarrowPhase {
                    constructor(raw) {
                        this.raw = raw || new (0, _raw.RawNarrowPhase)()
                        this.tempManifold = new TempContactManifold(null)
                    }
                    /**
                     * Release the WASM memory occupied by this narrow-phase.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                    /**
                     * Enumerates all the colliders potentially in contact with the given collider.
                     *
                     * @param collider1 - The second collider involved in the contact.
                     * @param f - Closure that will be called on each collider that is in contact with `collider1`.
                     */ contactPairsWith(collider1, f) {
                        this.raw.contact_pairs_with(collider1, f)
                    }
                    /**
                     * Enumerates all the colliders intersecting the given colliders, assuming one of them
                     * is a sensor.
                     */ intersectionPairsWith(collider1, f) {
                        this.raw.intersection_pairs_with(collider1, f)
                    }
                    /**
                     * Iterates through all the contact manifolds between the given pair of colliders.
                     *
                     * @param collider1 - The first collider involved in the contact.
                     * @param collider2 - The second collider involved in the contact.
                     * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
                     *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
                     *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
                     */ contactPair(collider1, collider2, f) {
                        const rawPair = this.raw.contact_pair(
                            collider1,
                            collider2
                        )
                        if (!!rawPair) {
                            const flipped = rawPair.collider1() != collider1
                            let i
                            for (
                                i = 0;
                                i < rawPair.numContactManifolds();
                                ++i
                            ) {
                                this.tempManifold.raw =
                                    rawPair.contactManifold(i)
                                if (!!this.tempManifold.raw)
                                    f(this.tempManifold, flipped)
                                // SAFETY: The RawContactManifold stores a raw pointer that will be invalidated
                                //         at the next timestep. So we must be sure to free the pair here
                                //         to avoid unsoundness in the Rust code.
                                this.tempManifold.free()
                            }
                            rawPair.free()
                        }
                    }
                    /**
                     * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
                     * @param collider1 − The first collider involved in the intersection.
                     * @param collider2 − The second collider involved in the intersection.
                     */ intersectionPair(collider1, collider2) {
                        return this.raw.intersection_pair(collider1, collider2)
                    }
                }
                class TempContactManifold {
                    constructor(raw) {
                        this.raw = raw
                    }
                    free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                    normal() {
                        return (0, _math.VectorOps).fromRaw(this.raw.normal())
                    }
                    localNormal1() {
                        return (0, _math.VectorOps).fromRaw(this.raw.local_n1())
                    }
                    localNormal2() {
                        return (0, _math.VectorOps).fromRaw(this.raw.local_n2())
                    }
                    subshape1() {
                        return this.raw.subshape1()
                    }
                    subshape2() {
                        return this.raw.subshape2()
                    }
                    numContacts() {
                        return this.raw.num_contacts()
                    }
                    localContactPoint1(i) {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.contact_local_p1(i)
                        )
                    }
                    localContactPoint2(i) {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.contact_local_p2(i)
                        )
                    }
                    contactDist(i) {
                        return this.raw.contact_dist(i)
                    }
                    contactFid1(i) {
                        return this.raw.contact_fid1(i)
                    }
                    contactFid2(i) {
                        return this.raw.contact_fid2(i)
                    }
                    contactImpulse(i) {
                        return this.raw.contact_impulse(i)
                    }
                    // #if DIM3
                    contactTangentImpulseX(i) {
                        return this.raw.contact_tangent_impulse_x(i)
                    }
                    contactTangentImpulseY(i) {
                        return this.raw.contact_tangent_impulse_y(i)
                    }
                    // #endif
                    numSolverContacts() {
                        return this.raw.num_solver_contacts()
                    }
                    solverContactPoint(i) {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.solver_contact_point(i)
                        )
                    }
                    solverContactDist(i) {
                        return this.raw.solver_contact_dist(i)
                    }
                    solverContactFriction(i) {
                        return this.raw.solver_contact_friction(i)
                    }
                    solverContactRestitution(i) {
                        return this.raw.solver_contact_restitution(i)
                    }
                    solverContactTangentVelocity(i) {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.solver_contact_tangent_velocity(i)
                        )
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '../math': 'jE0Bx',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        lrt5G: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(exports, 'Shape', () => Shape)
                parcelHelpers.export(exports, 'ShapeType', () => ShapeType)
                parcelHelpers.export(
                    exports,
                    'HeightFieldFlags',
                    () => HeightFieldFlags
                )
                parcelHelpers.export(
                    exports,
                    'TriMeshFlags',
                    () => TriMeshFlags
                )
                /**
                 * A shape that is a sphere in 3D and a circle in 2D.
                 */ parcelHelpers.export(exports, 'Ball', () => Ball)
                parcelHelpers.export(exports, 'HalfSpace', () => HalfSpace)
                /**
                 * A shape that is a box in 3D and a rectangle in 2D.
                 */ parcelHelpers.export(exports, 'Cuboid', () => Cuboid)
                /**
                 * A shape that is a box in 3D and a rectangle in 2D, with round corners.
                 */ parcelHelpers.export(
                    exports,
                    'RoundCuboid',
                    () => RoundCuboid
                )
                /**
                 * A shape that is a capsule.
                 */ parcelHelpers.export(exports, 'Capsule', () => Capsule)
                /**
                 * A shape that is a segment.
                 */ parcelHelpers.export(exports, 'Segment', () => Segment)
                /**
                 * A shape that is a segment.
                 */ parcelHelpers.export(exports, 'Triangle', () => Triangle)
                /**
                 * A shape that is a triangle with round borders and a non-zero thickness.
                 */ parcelHelpers.export(
                    exports,
                    'RoundTriangle',
                    () => RoundTriangle
                )
                /**
                 * A shape that is a triangle mesh.
                 */ parcelHelpers.export(exports, 'Polyline', () => Polyline)
                /**
                 * A shape that is a triangle mesh.
                 */ parcelHelpers.export(exports, 'TriMesh', () => TriMesh)
                // #if DIM3
                /**
                 * A shape that is a convex polygon.
                 */ parcelHelpers.export(
                    exports,
                    'ConvexPolyhedron',
                    () => ConvexPolyhedron
                )
                /**
                 * A shape that is a convex polygon.
                 */ parcelHelpers.export(
                    exports,
                    'RoundConvexPolyhedron',
                    () => RoundConvexPolyhedron
                )
                /**
                 * A shape that is a heightfield.
                 */ parcelHelpers.export(
                    exports,
                    'Heightfield',
                    () => Heightfield
                )
                /**
                 * A shape that is a 3D cylinder.
                 */ parcelHelpers.export(exports, 'Cylinder', () => Cylinder)
                /**
                 * A shape that is a 3D cylinder with round corners.
                 */ parcelHelpers.export(
                    exports,
                    'RoundCylinder',
                    () => RoundCylinder
                )
                /**
                 * A shape that is a 3D cone.
                 */ parcelHelpers.export(exports, 'Cone', () => Cone)
                /**
                 * A shape that is a 3D cone with round corners.
                 */ parcelHelpers.export(exports, 'RoundCone', () => RoundCone) // #endif
                var _math = require('../math')
                var _raw = require('../raw')
                var _contact = require('./contact')
                var _point = require('./point')
                var _ray = require('./ray')
                var _toi = require('./toi')
                class Shape {
                    /**
                     * instant mode without cache
                     */ static fromRaw(rawSet, handle) {
                        const rawType = rawSet.coShapeType(handle)
                        let extents
                        let borderRadius
                        let vs
                        let indices
                        let halfHeight
                        let radius
                        let normal
                        switch (rawType) {
                            case (0, _raw.RawShapeType).Ball:
                                return new Ball(rawSet.coRadius(handle))
                            case (0, _raw.RawShapeType).Cuboid:
                                extents = rawSet.coHalfExtents(handle)
                                // #if DIM3
                                return new Cuboid(
                                    extents.x,
                                    extents.y,
                                    extents.z
                                )
                            // #endif
                            case (0, _raw.RawShapeType).RoundCuboid:
                                extents = rawSet.coHalfExtents(handle)
                                borderRadius = rawSet.coRoundRadius(handle)
                                // #if DIM3
                                return new RoundCuboid(
                                    extents.x,
                                    extents.y,
                                    extents.z,
                                    borderRadius
                                )
                            // #endif
                            case (0, _raw.RawShapeType).Capsule:
                                halfHeight = rawSet.coHalfHeight(handle)
                                radius = rawSet.coRadius(handle)
                                return new Capsule(halfHeight, radius)
                            case (0, _raw.RawShapeType).Segment:
                                vs = rawSet.coVertices(handle)
                                // #if DIM3
                                return new Segment(
                                    (0, _math.VectorOps).new(
                                        vs[0],
                                        vs[1],
                                        vs[2]
                                    ),
                                    (0, _math.VectorOps).new(
                                        vs[3],
                                        vs[4],
                                        vs[5]
                                    )
                                )
                            // #endif
                            case (0, _raw.RawShapeType).Polyline:
                                vs = rawSet.coVertices(handle)
                                indices = rawSet.coIndices(handle)
                                return new Polyline(vs, indices)
                            case (0, _raw.RawShapeType).Triangle:
                                vs = rawSet.coVertices(handle)
                                // #if DIM3
                                return new Triangle(
                                    (0, _math.VectorOps).new(
                                        vs[0],
                                        vs[1],
                                        vs[2]
                                    ),
                                    (0, _math.VectorOps).new(
                                        vs[3],
                                        vs[4],
                                        vs[5]
                                    ),
                                    (0, _math.VectorOps).new(
                                        vs[6],
                                        vs[7],
                                        vs[8]
                                    )
                                )
                            // #endif
                            case (0, _raw.RawShapeType).RoundTriangle:
                                vs = rawSet.coVertices(handle)
                                borderRadius = rawSet.coRoundRadius(handle)
                                // #if DIM3
                                return new RoundTriangle(
                                    (0, _math.VectorOps).new(
                                        vs[0],
                                        vs[1],
                                        vs[2]
                                    ),
                                    (0, _math.VectorOps).new(
                                        vs[3],
                                        vs[4],
                                        vs[5]
                                    ),
                                    (0, _math.VectorOps).new(
                                        vs[6],
                                        vs[7],
                                        vs[8]
                                    ),
                                    borderRadius
                                )
                            // #endif
                            case (0, _raw.RawShapeType).HalfSpace:
                                normal = (0, _math.VectorOps).fromRaw(
                                    rawSet.coHalfspaceNormal(handle)
                                )
                                return new HalfSpace(normal)
                            case (0, _raw.RawShapeType).TriMesh:
                                vs = rawSet.coVertices(handle)
                                indices = rawSet.coIndices(handle)
                                const tri_flags = rawSet.coTriMeshFlags(handle)
                                return new TriMesh(vs, indices, tri_flags)
                            case (0, _raw.RawShapeType).HeightField:
                                const scale = rawSet.coHeightfieldScale(handle)
                                const heights =
                                    rawSet.coHeightfieldHeights(handle)
                                // #if DIM3
                                const nrows = rawSet.coHeightfieldNRows(handle)
                                const ncols = rawSet.coHeightfieldNCols(handle)
                                const hf_flags =
                                    rawSet.coHeightFieldFlags(handle)
                                return new Heightfield(
                                    nrows,
                                    ncols,
                                    heights,
                                    scale,
                                    hf_flags
                                )
                            // #endif
                            // #if DIM3
                            case (0, _raw.RawShapeType).ConvexPolyhedron:
                                vs = rawSet.coVertices(handle)
                                indices = rawSet.coIndices(handle)
                                return new ConvexPolyhedron(vs, indices)
                            case (0, _raw.RawShapeType).RoundConvexPolyhedron:
                                vs = rawSet.coVertices(handle)
                                indices = rawSet.coIndices(handle)
                                borderRadius = rawSet.coRoundRadius(handle)
                                return new RoundConvexPolyhedron(
                                    vs,
                                    indices,
                                    borderRadius
                                )
                            case (0, _raw.RawShapeType).Cylinder:
                                halfHeight = rawSet.coHalfHeight(handle)
                                radius = rawSet.coRadius(handle)
                                return new Cylinder(halfHeight, radius)
                            case (0, _raw.RawShapeType).RoundCylinder:
                                halfHeight = rawSet.coHalfHeight(handle)
                                radius = rawSet.coRadius(handle)
                                borderRadius = rawSet.coRoundRadius(handle)
                                return new RoundCylinder(
                                    halfHeight,
                                    radius,
                                    borderRadius
                                )
                            case (0, _raw.RawShapeType).Cone:
                                halfHeight = rawSet.coHalfHeight(handle)
                                radius = rawSet.coRadius(handle)
                                return new Cone(halfHeight, radius)
                            case (0, _raw.RawShapeType).RoundCone:
                                halfHeight = rawSet.coHalfHeight(handle)
                                radius = rawSet.coRadius(handle)
                                borderRadius = rawSet.coRoundRadius(handle)
                                return new RoundCone(
                                    halfHeight,
                                    radius,
                                    borderRadius
                                )
                            // #endif
                            default:
                                throw new Error(
                                    'unknown shape type: ' + rawType
                                )
                        }
                    }
                    /**
                     * Computes the time of impact between two moving shapes.
                     * @param shapePos1 - The initial position of this sahpe.
                     * @param shapeRot1 - The rotation of this shape.
                     * @param shapeVel1 - The velocity of this shape.
                     * @param shape2 - The second moving shape.
                     * @param shapePos2 - The initial position of the second shape.
                     * @param shapeRot2 - The rotation of the second shape.
                     * @param shapeVel2 - The velocity of the second shape.
                     * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
                     *                         will be returned.
                     * @param maxToi - The maximum time when the impact can happen.
                     * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
                     *   the shape is penetrating another shape at its starting point **and** its trajectory is such
                     *   that it’s on a path to exit that penetration state.
                     * @returns If the two moving shapes collider at some point along their trajectories, this returns the
                     *  time at which the two shape collider as well as the contact information during the impact. Returns
                     *  `null`if the two shapes never collide along their paths.
                     */ castShape(
                        shapePos1,
                        shapeRot1,
                        shapeVel1,
                        shape2,
                        shapePos2,
                        shapeRot2,
                        shapeVel2,
                        targetDistance,
                        maxToi,
                        stopAtPenetration
                    ) {
                        let rawPos1 = (0, _math.VectorOps).intoRaw(shapePos1)
                        let rawRot1 = (0, _math.RotationOps).intoRaw(shapeRot1)
                        let rawVel1 = (0, _math.VectorOps).intoRaw(shapeVel1)
                        let rawPos2 = (0, _math.VectorOps).intoRaw(shapePos2)
                        let rawRot2 = (0, _math.RotationOps).intoRaw(shapeRot2)
                        let rawVel2 = (0, _math.VectorOps).intoRaw(shapeVel2)
                        let rawShape1 = this.intoRaw()
                        let rawShape2 = shape2.intoRaw()
                        let result = (0, _toi.ShapeCastHit).fromRaw(
                            null,
                            rawShape1.castShape(
                                rawPos1,
                                rawRot1,
                                rawVel1,
                                rawShape2,
                                rawPos2,
                                rawRot2,
                                rawVel2,
                                targetDistance,
                                maxToi,
                                stopAtPenetration
                            )
                        )
                        rawPos1.free()
                        rawRot1.free()
                        rawVel1.free()
                        rawPos2.free()
                        rawRot2.free()
                        rawVel2.free()
                        rawShape1.free()
                        rawShape2.free()
                        return result
                    }
                    /**
                     * Tests if this shape intersects another shape.
                     *
                     * @param shapePos1 - The position of this shape.
                     * @param shapeRot1 - The rotation of this shape.
                     * @param shape2  - The second shape to test.
                     * @param shapePos2 - The position of the second shape.
                     * @param shapeRot2 - The rotation of the second shape.
                     * @returns `true` if the two shapes intersect, `false` if they don’t.
                     */ intersectsShape(
                        shapePos1,
                        shapeRot1,
                        shape2,
                        shapePos2,
                        shapeRot2
                    ) {
                        let rawPos1 = (0, _math.VectorOps).intoRaw(shapePos1)
                        let rawRot1 = (0, _math.RotationOps).intoRaw(shapeRot1)
                        let rawPos2 = (0, _math.VectorOps).intoRaw(shapePos2)
                        let rawRot2 = (0, _math.RotationOps).intoRaw(shapeRot2)
                        let rawShape1 = this.intoRaw()
                        let rawShape2 = shape2.intoRaw()
                        let result = rawShape1.intersectsShape(
                            rawPos1,
                            rawRot1,
                            rawShape2,
                            rawPos2,
                            rawRot2
                        )
                        rawPos1.free()
                        rawRot1.free()
                        rawPos2.free()
                        rawRot2.free()
                        rawShape1.free()
                        rawShape2.free()
                        return result
                    }
                    /**
                     * Computes one pair of contact points between two shapes.
                     *
                     * @param shapePos1 - The initial position of this sahpe.
                     * @param shapeRot1 - The rotation of this shape.
                     * @param shape2 - The second shape.
                     * @param shapePos2 - The initial position of the second shape.
                     * @param shapeRot2 - The rotation of the second shape.
                     * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
                     * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
                     */ contactShape(
                        shapePos1,
                        shapeRot1,
                        shape2,
                        shapePos2,
                        shapeRot2,
                        prediction
                    ) {
                        let rawPos1 = (0, _math.VectorOps).intoRaw(shapePos1)
                        let rawRot1 = (0, _math.RotationOps).intoRaw(shapeRot1)
                        let rawPos2 = (0, _math.VectorOps).intoRaw(shapePos2)
                        let rawRot2 = (0, _math.RotationOps).intoRaw(shapeRot2)
                        let rawShape1 = this.intoRaw()
                        let rawShape2 = shape2.intoRaw()
                        let result = (0, _contact.ShapeContact).fromRaw(
                            rawShape1.contactShape(
                                rawPos1,
                                rawRot1,
                                rawShape2,
                                rawPos2,
                                rawRot2,
                                prediction
                            )
                        )
                        rawPos1.free()
                        rawRot1.free()
                        rawPos2.free()
                        rawRot2.free()
                        rawShape1.free()
                        rawShape2.free()
                        return result
                    }
                    containsPoint(shapePos, shapeRot, point) {
                        let rawPos = (0, _math.VectorOps).intoRaw(shapePos)
                        let rawRot = (0, _math.RotationOps).intoRaw(shapeRot)
                        let rawPoint = (0, _math.VectorOps).intoRaw(point)
                        let rawShape = this.intoRaw()
                        let result = rawShape.containsPoint(
                            rawPos,
                            rawRot,
                            rawPoint
                        )
                        rawPos.free()
                        rawRot.free()
                        rawPoint.free()
                        rawShape.free()
                        return result
                    }
                    projectPoint(shapePos, shapeRot, point, solid) {
                        let rawPos = (0, _math.VectorOps).intoRaw(shapePos)
                        let rawRot = (0, _math.RotationOps).intoRaw(shapeRot)
                        let rawPoint = (0, _math.VectorOps).intoRaw(point)
                        let rawShape = this.intoRaw()
                        let result = (0, _point.PointProjection).fromRaw(
                            rawShape.projectPoint(
                                rawPos,
                                rawRot,
                                rawPoint,
                                solid
                            )
                        )
                        rawPos.free()
                        rawRot.free()
                        rawPoint.free()
                        rawShape.free()
                        return result
                    }
                    intersectsRay(ray, shapePos, shapeRot, maxToi) {
                        let rawPos = (0, _math.VectorOps).intoRaw(shapePos)
                        let rawRot = (0, _math.RotationOps).intoRaw(shapeRot)
                        let rawRayOrig = (0, _math.VectorOps).intoRaw(
                            ray.origin
                        )
                        let rawRayDir = (0, _math.VectorOps).intoRaw(ray.dir)
                        let rawShape = this.intoRaw()
                        let result = rawShape.intersectsRay(
                            rawPos,
                            rawRot,
                            rawRayOrig,
                            rawRayDir,
                            maxToi
                        )
                        rawPos.free()
                        rawRot.free()
                        rawRayOrig.free()
                        rawRayDir.free()
                        rawShape.free()
                        return result
                    }
                    castRay(ray, shapePos, shapeRot, maxToi, solid) {
                        let rawPos = (0, _math.VectorOps).intoRaw(shapePos)
                        let rawRot = (0, _math.RotationOps).intoRaw(shapeRot)
                        let rawRayOrig = (0, _math.VectorOps).intoRaw(
                            ray.origin
                        )
                        let rawRayDir = (0, _math.VectorOps).intoRaw(ray.dir)
                        let rawShape = this.intoRaw()
                        let result = rawShape.castRay(
                            rawPos,
                            rawRot,
                            rawRayOrig,
                            rawRayDir,
                            maxToi,
                            solid
                        )
                        rawPos.free()
                        rawRot.free()
                        rawRayOrig.free()
                        rawRayDir.free()
                        rawShape.free()
                        return result
                    }
                    castRayAndGetNormal(
                        ray,
                        shapePos,
                        shapeRot,
                        maxToi,
                        solid
                    ) {
                        let rawPos = (0, _math.VectorOps).intoRaw(shapePos)
                        let rawRot = (0, _math.RotationOps).intoRaw(shapeRot)
                        let rawRayOrig = (0, _math.VectorOps).intoRaw(
                            ray.origin
                        )
                        let rawRayDir = (0, _math.VectorOps).intoRaw(ray.dir)
                        let rawShape = this.intoRaw()
                        let result = (0, _ray.RayIntersection).fromRaw(
                            rawShape.castRayAndGetNormal(
                                rawPos,
                                rawRot,
                                rawRayOrig,
                                rawRayDir,
                                maxToi,
                                solid
                            )
                        )
                        rawPos.free()
                        rawRot.free()
                        rawRayOrig.free()
                        rawRayDir.free()
                        rawShape.free()
                        return result
                    }
                }
                var ShapeType
                ;(function (ShapeType) {
                    ShapeType[(ShapeType['Ball'] = 0)] = 'Ball'
                    ShapeType[(ShapeType['Cuboid'] = 1)] = 'Cuboid'
                    ShapeType[(ShapeType['Capsule'] = 2)] = 'Capsule'
                    ShapeType[(ShapeType['Segment'] = 3)] = 'Segment'
                    ShapeType[(ShapeType['Polyline'] = 4)] = 'Polyline'
                    ShapeType[(ShapeType['Triangle'] = 5)] = 'Triangle'
                    ShapeType[(ShapeType['TriMesh'] = 6)] = 'TriMesh'
                    ShapeType[(ShapeType['HeightField'] = 7)] = 'HeightField'
                    // Compound = 8,
                    ShapeType[(ShapeType['ConvexPolyhedron'] = 9)] =
                        'ConvexPolyhedron'
                    ShapeType[(ShapeType['Cylinder'] = 10)] = 'Cylinder'
                    ShapeType[(ShapeType['Cone'] = 11)] = 'Cone'
                    ShapeType[(ShapeType['RoundCuboid'] = 12)] = 'RoundCuboid'
                    ShapeType[(ShapeType['RoundTriangle'] = 13)] =
                        'RoundTriangle'
                    ShapeType[(ShapeType['RoundCylinder'] = 14)] =
                        'RoundCylinder'
                    ShapeType[(ShapeType['RoundCone'] = 15)] = 'RoundCone'
                    ShapeType[(ShapeType['RoundConvexPolyhedron'] = 16)] =
                        'RoundConvexPolyhedron'
                    ShapeType[(ShapeType['HalfSpace'] = 17)] = 'HalfSpace'
                })(ShapeType || (ShapeType = {}))
                var HeightFieldFlags
                ;(function (HeightFieldFlags) {
                    /**
                     * If set, a special treatment will be applied to contact manifold calculation to eliminate
                     * or fix contacts normals that could lead to incorrect bumps in physics simulation (especially
                     * on flat surfaces).
                     *
                     * This is achieved by taking into account adjacent triangle normals when computing contact
                     * points for a given triangle.
                     */ HeightFieldFlags[
                        (HeightFieldFlags['FIX_INTERNAL_EDGES'] = 1)
                    ] = 'FIX_INTERNAL_EDGES'
                })(HeightFieldFlags || (HeightFieldFlags = {}))
                var TriMeshFlags
                ;(function (TriMeshFlags) {
                    // NOTE: these two flags are not really useful in JS.
                    //
                    // /**
                    //  * If set, the half-edge topology of the trimesh will be computed if possible.
                    //  */
                    // HALF_EDGE_TOPOLOGY = 0b0000_0001,
                    // /** If set, the half-edge topology and connected components of the trimesh will be computed if possible.
                    //  *
                    //  * Because of the way it is currently implemented, connected components can only be computed on
                    //  * a mesh where the half-edge topology computation succeeds. It will no longer be the case in the
                    //  * future once we decouple the computations.
                    //  */
                    // CONNECTED_COMPONENTS = 0b0000_0010,
                    /**
                     * If set, any triangle that results in a failing half-hedge topology computation will be deleted.
                     */ TriMeshFlags[
                        (TriMeshFlags['DELETE_BAD_TOPOLOGY_TRIANGLES'] = 4)
                    ] = 'DELETE_BAD_TOPOLOGY_TRIANGLES'
                    /**
                     * If set, the trimesh will be assumed to be oriented (with outward normals).
                     *
                     * The pseudo-normals of its vertices and edges will be computed.
                     */ TriMeshFlags[(TriMeshFlags['ORIENTED'] = 8)] =
                        'ORIENTED'
                    /**
                     * If set, the duplicate vertices of the trimesh will be merged.
                     *
                     * Two vertices with the exact same coordinates will share the same entry on the
                     * vertex buffer and the index buffer is adjusted accordingly.
                     */ TriMeshFlags[
                        (TriMeshFlags['MERGE_DUPLICATE_VERTICES'] = 16)
                    ] = 'MERGE_DUPLICATE_VERTICES'
                    /**
                     * If set, the triangles sharing two vertices with identical index values will be removed.
                     *
                     * Because of the way it is currently implemented, this methods implies that duplicate
                     * vertices will be merged. It will no longer be the case in the future once we decouple
                     * the computations.
                     */ TriMeshFlags[
                        (TriMeshFlags['DELETE_DEGENERATE_TRIANGLES'] = 32)
                    ] = 'DELETE_DEGENERATE_TRIANGLES'
                    /**
                     * If set, two triangles sharing three vertices with identical index values (in any order)
                     * will be removed.
                     *
                     * Because of the way it is currently implemented, this methods implies that duplicate
                     * vertices will be merged. It will no longer be the case in the future once we decouple
                     * the computations.
                     */ TriMeshFlags[
                        (TriMeshFlags['DELETE_DUPLICATE_TRIANGLES'] = 64)
                    ] = 'DELETE_DUPLICATE_TRIANGLES'
                    /**
                     * If set, a special treatment will be applied to contact manifold calculation to eliminate
                     * or fix contacts normals that could lead to incorrect bumps in physics simulation
                     * (especially on flat surfaces).
                     *
                     * This is achieved by taking into account adjacent triangle normals when computing contact
                     * points for a given triangle.
                     *
                     * /!\ NOT SUPPORTED IN THE 2D VERSION OF RAPIER.
                     */ TriMeshFlags[
                        (TriMeshFlags['FIX_INTERNAL_EDGES'] = 152)
                    ] = 'FIX_INTERNAL_EDGES'
                })(TriMeshFlags || (TriMeshFlags = {}))
                class Ball extends Shape {
                    /**
                     * Creates a new ball with the given radius.
                     * @param radius - The balls radius.
                     */ constructor(radius) {
                        super()
                        this.type = ShapeType.Ball
                        this.radius = radius
                    }
                    intoRaw() {
                        return (0, _raw.RawShape).ball(this.radius)
                    }
                }
                class HalfSpace extends Shape {
                    /**
                     * Creates a new halfspace delimited by an infinite plane.
                     *
                     * @param normal - The outward normal of the plane.
                     */ constructor(normal) {
                        super()
                        this.type = ShapeType.HalfSpace
                        this.normal = normal
                    }
                    intoRaw() {
                        let n = (0, _math.VectorOps).intoRaw(this.normal)
                        let result = (0, _raw.RawShape).halfspace(n)
                        n.free()
                        return result
                    }
                }
                class Cuboid extends Shape {
                    // #if DIM3
                    /**
                     * Creates a new 3D cuboid.
                     * @param hx - The half width of the cuboid.
                     * @param hy - The half height of the cuboid.
                     * @param hz - The half depth of the cuboid.
                     */ constructor(hx, hy, hz) {
                        super()
                        this.type = ShapeType.Cuboid
                        this.halfExtents = (0, _math.VectorOps).new(hx, hy, hz)
                    }
                    // #endif
                    intoRaw() {
                        // #if DIM3
                        return (0, _raw.RawShape).cuboid(
                            this.halfExtents.x,
                            this.halfExtents.y,
                            this.halfExtents.z
                        )
                        // #endif
                    }
                }
                class RoundCuboid extends Shape {
                    // #if DIM3
                    /**
                     * Creates a new 3D cuboid.
                     * @param hx - The half width of the cuboid.
                     * @param hy - The half height of the cuboid.
                     * @param hz - The half depth of the cuboid.
                     * @param borderRadius - The radius of the borders of this cuboid. This will
                     *   effectively increase the half-extents of the cuboid by this radius.
                     */ constructor(hx, hy, hz, borderRadius) {
                        super()
                        this.type = ShapeType.RoundCuboid
                        this.halfExtents = (0, _math.VectorOps).new(hx, hy, hz)
                        this.borderRadius = borderRadius
                    }
                    // #endif
                    intoRaw() {
                        // #if DIM3
                        return (0, _raw.RawShape).roundCuboid(
                            this.halfExtents.x,
                            this.halfExtents.y,
                            this.halfExtents.z,
                            this.borderRadius
                        )
                        // #endif
                    }
                }
                class Capsule extends Shape {
                    /**
                     * Creates a new capsule with the given radius and half-height.
                     * @param halfHeight - The balls half-height along the `y` axis.
                     * @param radius - The balls radius.
                     */ constructor(halfHeight, radius) {
                        super()
                        this.type = ShapeType.Capsule
                        this.halfHeight = halfHeight
                        this.radius = radius
                    }
                    intoRaw() {
                        return (0, _raw.RawShape).capsule(
                            this.halfHeight,
                            this.radius
                        )
                    }
                }
                class Segment extends Shape {
                    /**
                     * Creates a new segment shape.
                     * @param a - The first point of the segment.
                     * @param b - The second point of the segment.
                     */ constructor(a, b) {
                        super()
                        this.type = ShapeType.Segment
                        this.a = a
                        this.b = b
                    }
                    intoRaw() {
                        let ra = (0, _math.VectorOps).intoRaw(this.a)
                        let rb = (0, _math.VectorOps).intoRaw(this.b)
                        let result = (0, _raw.RawShape).segment(ra, rb)
                        ra.free()
                        rb.free()
                        return result
                    }
                }
                class Triangle extends Shape {
                    /**
                     * Creates a new triangle shape.
                     *
                     * @param a - The first point of the triangle.
                     * @param b - The second point of the triangle.
                     * @param c - The third point of the triangle.
                     */ constructor(a, b, c) {
                        super()
                        this.type = ShapeType.Triangle
                        this.a = a
                        this.b = b
                        this.c = c
                    }
                    intoRaw() {
                        let ra = (0, _math.VectorOps).intoRaw(this.a)
                        let rb = (0, _math.VectorOps).intoRaw(this.b)
                        let rc = (0, _math.VectorOps).intoRaw(this.c)
                        let result = (0, _raw.RawShape).triangle(ra, rb, rc)
                        ra.free()
                        rb.free()
                        rc.free()
                        return result
                    }
                }
                class RoundTriangle extends Shape {
                    /**
                     * Creates a new triangle shape with round corners.
                     *
                     * @param a - The first point of the triangle.
                     * @param b - The second point of the triangle.
                     * @param c - The third point of the triangle.
                     * @param borderRadius - The radius of the borders of this triangle. In 3D,
                     *   this is also equal to half the thickness of the triangle.
                     */ constructor(a, b, c, borderRadius) {
                        super()
                        this.type = ShapeType.RoundTriangle
                        this.a = a
                        this.b = b
                        this.c = c
                        this.borderRadius = borderRadius
                    }
                    intoRaw() {
                        let ra = (0, _math.VectorOps).intoRaw(this.a)
                        let rb = (0, _math.VectorOps).intoRaw(this.b)
                        let rc = (0, _math.VectorOps).intoRaw(this.c)
                        let result = (0, _raw.RawShape).roundTriangle(
                            ra,
                            rb,
                            rc,
                            this.borderRadius
                        )
                        ra.free()
                        rb.free()
                        rc.free()
                        return result
                    }
                }
                class Polyline extends Shape {
                    /**
                     * Creates a new polyline shape.
                     *
                     * @param vertices - The coordinates of the polyline's vertices.
                     * @param indices - The indices of the polyline's segments. If this is `null` or not provided, then
                     *    the vertices are assumed to form a line strip.
                     */ constructor(vertices, indices) {
                        super()
                        this.type = ShapeType.Polyline
                        this.vertices = vertices
                        this.indices =
                            indices !== null && indices !== void 0
                                ? indices
                                : new Uint32Array(0)
                    }
                    intoRaw() {
                        return (0, _raw.RawShape).polyline(
                            this.vertices,
                            this.indices
                        )
                    }
                }
                class TriMesh extends Shape {
                    /**
                     * Creates a new triangle mesh shape.
                     *
                     * @param vertices - The coordinates of the triangle mesh's vertices.
                     * @param indices - The indices of the triangle mesh's triangles.
                     */ constructor(vertices, indices, flags) {
                        super()
                        this.type = ShapeType.TriMesh
                        this.vertices = vertices
                        this.indices = indices
                        this.flags = flags
                    }
                    intoRaw() {
                        return (0, _raw.RawShape).trimesh(
                            this.vertices,
                            this.indices,
                            this.flags
                        )
                    }
                }
                class ConvexPolyhedron extends Shape {
                    /**
                     * Creates a new convex polygon shape.
                     *
                     * @param vertices - The coordinates of the convex polygon's vertices.
                     * @param indices - The index buffer of this convex mesh. If this is `null`
                     *   or `undefined`, the convex-hull of the input vertices will be computed
                     *   automatically. Otherwise, it will be assumed that the mesh you provide
                     *   is already convex.
                     */ constructor(vertices, indices) {
                        super()
                        this.type = ShapeType.ConvexPolyhedron
                        this.vertices = vertices
                        this.indices = indices
                    }
                    intoRaw() {
                        if (!!this.indices)
                            return (0, _raw.RawShape).convexMesh(
                                this.vertices,
                                this.indices
                            )
                        else return (0, _raw.RawShape).convexHull(this.vertices)
                    }
                }
                class RoundConvexPolyhedron extends Shape {
                    /**
                     * Creates a new convex polygon shape.
                     *
                     * @param vertices - The coordinates of the convex polygon's vertices.
                     * @param indices - The index buffer of this convex mesh. If this is `null`
                     *   or `undefined`, the convex-hull of the input vertices will be computed
                     *   automatically. Otherwise, it will be assumed that the mesh you provide
                     *   is already convex.
                     * @param borderRadius - The radius of the borders of this convex polyhedron.
                     */ constructor(vertices, indices, borderRadius) {
                        super()
                        this.type = ShapeType.RoundConvexPolyhedron
                        this.vertices = vertices
                        this.indices = indices
                        this.borderRadius = borderRadius
                    }
                    intoRaw() {
                        if (!!this.indices)
                            return (0, _raw.RawShape).roundConvexMesh(
                                this.vertices,
                                this.indices,
                                this.borderRadius
                            )
                        else
                            return (0, _raw.RawShape).roundConvexHull(
                                this.vertices,
                                this.borderRadius
                            )
                    }
                }
                class Heightfield extends Shape {
                    /**
                     * Creates a new heightfield shape.
                     *
                     * @param nrows − The number of rows in the heights matrix.
                     * @param ncols - The number of columns in the heights matrix.
                     * @param heights - The heights of the heightfield along its local `y` axis,
                     *                  provided as a matrix stored in column-major order.
                     * @param scale - The dimensions of the heightfield's local `x,z` plane.
                     */ constructor(nrows, ncols, heights, scale, flags) {
                        super()
                        this.type = ShapeType.HeightField
                        this.nrows = nrows
                        this.ncols = ncols
                        this.heights = heights
                        this.scale = scale
                        this.flags = flags
                    }
                    intoRaw() {
                        let rawScale = (0, _math.VectorOps).intoRaw(this.scale)
                        let rawShape = (0, _raw.RawShape).heightfield(
                            this.nrows,
                            this.ncols,
                            this.heights,
                            rawScale,
                            this.flags
                        )
                        rawScale.free()
                        return rawShape
                    }
                }
                class Cylinder extends Shape {
                    /**
                     * Creates a new cylinder with the given radius and half-height.
                     * @param halfHeight - The balls half-height along the `y` axis.
                     * @param radius - The balls radius.
                     */ constructor(halfHeight, radius) {
                        super()
                        this.type = ShapeType.Cylinder
                        this.halfHeight = halfHeight
                        this.radius = radius
                    }
                    intoRaw() {
                        return (0, _raw.RawShape).cylinder(
                            this.halfHeight,
                            this.radius
                        )
                    }
                }
                class RoundCylinder extends Shape {
                    /**
                     * Creates a new cylinder with the given radius and half-height.
                     * @param halfHeight - The balls half-height along the `y` axis.
                     * @param radius - The balls radius.
                     * @param borderRadius - The radius of the borders of this cylinder.
                     */ constructor(halfHeight, radius, borderRadius) {
                        super()
                        this.type = ShapeType.RoundCylinder
                        this.borderRadius = borderRadius
                        this.halfHeight = halfHeight
                        this.radius = radius
                    }
                    intoRaw() {
                        return (0, _raw.RawShape).roundCylinder(
                            this.halfHeight,
                            this.radius,
                            this.borderRadius
                        )
                    }
                }
                class Cone extends Shape {
                    /**
                     * Creates a new cone with the given radius and half-height.
                     * @param halfHeight - The balls half-height along the `y` axis.
                     * @param radius - The balls radius.
                     */ constructor(halfHeight, radius) {
                        super()
                        this.type = ShapeType.Cone
                        this.halfHeight = halfHeight
                        this.radius = radius
                    }
                    intoRaw() {
                        return (0, _raw.RawShape).cone(
                            this.halfHeight,
                            this.radius
                        )
                    }
                }
                class RoundCone extends Shape {
                    /**
                     * Creates a new cone with the given radius and half-height.
                     * @param halfHeight - The balls half-height along the `y` axis.
                     * @param radius - The balls radius.
                     * @param borderRadius - The radius of the borders of this cone.
                     */ constructor(halfHeight, radius, borderRadius) {
                        super()
                        this.type = ShapeType.RoundCone
                        this.halfHeight = halfHeight
                        this.radius = radius
                        this.borderRadius = borderRadius
                    }
                    intoRaw() {
                        return (0, _raw.RawShape).roundCone(
                            this.halfHeight,
                            this.radius,
                            this.borderRadius
                        )
                    }
                }
            },
            {
                '../math': 'jE0Bx',
                '../raw': '7Eciy',
                './contact': '2WaUV',
                './point': '1dBT4',
                './ray': 'aS6kI',
                './toi': 'apxEh',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '2WaUV': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * The contact info between two shapes.
                 */ parcelHelpers.export(
                    exports,
                    'ShapeContact',
                    () => ShapeContact
                )
                var _math = require('../math')
                class ShapeContact {
                    constructor(dist, point1, point2, normal1, normal2) {
                        this.distance = dist
                        this.point1 = point1
                        this.point2 = point2
                        this.normal1 = normal1
                        this.normal2 = normal2
                    }
                    static fromRaw(raw) {
                        if (!raw) return null
                        const result = new ShapeContact(
                            raw.distance(),
                            (0, _math.VectorOps).fromRaw(raw.point1()),
                            (0, _math.VectorOps).fromRaw(raw.point2()),
                            (0, _math.VectorOps).fromRaw(raw.normal1()),
                            (0, _math.VectorOps).fromRaw(raw.normal2())
                        )
                        raw.free()
                        return result
                    }
                }
            },
            {
                '../math': 'jE0Bx',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '1dBT4': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * The projection of a point on a collider.
                 */ parcelHelpers.export(
                    exports,
                    'PointProjection',
                    () => PointProjection
                )
                /**
                 * The projection of a point on a collider (includes the collider handle).
                 */ parcelHelpers.export(
                    exports,
                    'PointColliderProjection',
                    () => PointColliderProjection
                )
                var _math = require('../math')
                var _feature = require('./feature')
                class PointProjection {
                    constructor(point, isInside) {
                        this.point = point
                        this.isInside = isInside
                    }
                    static fromRaw(raw) {
                        if (!raw) return null
                        const result = new PointProjection(
                            (0, _math.VectorOps).fromRaw(raw.point()),
                            raw.isInside()
                        )
                        raw.free()
                        return result
                    }
                }
                class PointColliderProjection {
                    constructor(
                        collider,
                        point,
                        isInside,
                        featureType,
                        featureId
                    ) {
                        /**
                         * The type of the geometric feature the point was projected on.
                         */ this.featureType = (0, _feature.FeatureType).Unknown
                        /**
                         * The id of the geometric feature the point was projected on.
                         */ this.featureId = undefined
                        this.collider = collider
                        this.point = point
                        this.isInside = isInside
                        if (featureId !== undefined) this.featureId = featureId
                        if (featureType !== undefined)
                            this.featureType = featureType
                    }
                    static fromRaw(colliderSet, raw) {
                        if (!raw) return null
                        const result = new PointColliderProjection(
                            colliderSet.get(raw.colliderHandle()),
                            (0, _math.VectorOps).fromRaw(raw.point()),
                            raw.isInside(),
                            raw.featureType(),
                            raw.featureId()
                        )
                        raw.free()
                        return result
                    }
                }
            },
            {
                '../math': 'jE0Bx',
                './feature': '6IkXf',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '6IkXf': [
            function (require, module, exports, __globalThis) {
                // #if DIM3
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(exports, 'FeatureType', () => FeatureType)
                var FeatureType
                ;(function (FeatureType) {
                    FeatureType[(FeatureType['Vertex'] = 0)] = 'Vertex'
                    FeatureType[(FeatureType['Edge'] = 1)] = 'Edge'
                    FeatureType[(FeatureType['Face'] = 2)] = 'Face'
                    FeatureType[(FeatureType['Unknown'] = 3)] = 'Unknown'
                })(FeatureType || (FeatureType = {})) // #endif
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
        ],
        aS6kI: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * A ray. This is a directed half-line.
                 */ parcelHelpers.export(exports, 'Ray', () => Ray)
                /**
                 * The intersection between a ray and a collider.
                 */ parcelHelpers.export(
                    exports,
                    'RayIntersection',
                    () => RayIntersection
                )
                /**
                 * The intersection between a ray and a collider (includes the collider handle).
                 */ parcelHelpers.export(
                    exports,
                    'RayColliderIntersection',
                    () => RayColliderIntersection
                )
                /**
                 * The time of impact between a ray and a collider.
                 */ parcelHelpers.export(
                    exports,
                    'RayColliderHit',
                    () => RayColliderHit
                )
                var _math = require('../math')
                var _feature = require('./feature')
                class Ray {
                    /**
                     * Builds a ray from its origin and direction.
                     *
                     * @param origin - The ray's starting point.
                     * @param dir - The ray's direction of propagation.
                     */ constructor(origin, dir) {
                        this.origin = origin
                        this.dir = dir
                    }
                    pointAt(t) {
                        return {
                            x: this.origin.x + this.dir.x * t,
                            y: this.origin.y + this.dir.y * t,
                            // #if DIM3
                            z: this.origin.z + this.dir.z * t,
                        }
                    }
                }
                class RayIntersection {
                    constructor(timeOfImpact, normal, featureType, featureId) {
                        /**
                         * The type of the geometric feature the point was projected on.
                         */ this.featureType = (0, _feature.FeatureType).Unknown
                        /**
                         * The id of the geometric feature the point was projected on.
                         */ this.featureId = undefined
                        this.timeOfImpact = timeOfImpact
                        this.normal = normal
                        if (featureId !== undefined) this.featureId = featureId
                        if (featureType !== undefined)
                            this.featureType = featureType
                    }
                    static fromRaw(raw) {
                        if (!raw) return null
                        const result = new RayIntersection(
                            raw.time_of_impact(),
                            (0, _math.VectorOps).fromRaw(raw.normal()),
                            raw.featureType(),
                            raw.featureId()
                        )
                        raw.free()
                        return result
                    }
                }
                class RayColliderIntersection {
                    constructor(
                        collider,
                        timeOfImpact,
                        normal,
                        featureType,
                        featureId
                    ) {
                        /**
                         * The type of the geometric feature the point was projected on.
                         */ this.featureType = (0, _feature.FeatureType).Unknown
                        /**
                         * The id of the geometric feature the point was projected on.
                         */ this.featureId = undefined
                        this.collider = collider
                        this.timeOfImpact = timeOfImpact
                        this.normal = normal
                        if (featureId !== undefined) this.featureId = featureId
                        if (featureType !== undefined)
                            this.featureType = featureType
                    }
                    static fromRaw(colliderSet, raw) {
                        if (!raw) return null
                        const result = new RayColliderIntersection(
                            colliderSet.get(raw.colliderHandle()),
                            raw.time_of_impact(),
                            (0, _math.VectorOps).fromRaw(raw.normal()),
                            raw.featureType(),
                            raw.featureId()
                        )
                        raw.free()
                        return result
                    }
                }
                class RayColliderHit {
                    constructor(collider, timeOfImpact) {
                        this.collider = collider
                        this.timeOfImpact = timeOfImpact
                    }
                    static fromRaw(colliderSet, raw) {
                        if (!raw) return null
                        const result = new RayColliderHit(
                            colliderSet.get(raw.colliderHandle()),
                            raw.timeOfImpact()
                        )
                        raw.free()
                        return result
                    }
                }
            },
            {
                '../math': 'jE0Bx',
                './feature': '6IkXf',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        apxEh: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * The intersection between a ray and a collider.
                 */ parcelHelpers.export(
                    exports,
                    'ShapeCastHit',
                    () => ShapeCastHit
                )
                /**
                 * The intersection between a ray and a collider.
                 */ parcelHelpers.export(
                    exports,
                    'ColliderShapeCastHit',
                    () => ColliderShapeCastHit
                )
                var _math = require('../math')
                class ShapeCastHit {
                    constructor(
                        time_of_impact,
                        witness1,
                        witness2,
                        normal1,
                        normal2
                    ) {
                        this.time_of_impact = time_of_impact
                        this.witness1 = witness1
                        this.witness2 = witness2
                        this.normal1 = normal1
                        this.normal2 = normal2
                    }
                    static fromRaw(colliderSet, raw) {
                        if (!raw) return null
                        const result = new ShapeCastHit(
                            raw.time_of_impact(),
                            (0, _math.VectorOps).fromRaw(raw.witness1()),
                            (0, _math.VectorOps).fromRaw(raw.witness2()),
                            (0, _math.VectorOps).fromRaw(raw.normal1()),
                            (0, _math.VectorOps).fromRaw(raw.normal2())
                        )
                        raw.free()
                        return result
                    }
                }
                class ColliderShapeCastHit extends ShapeCastHit {
                    constructor(
                        collider,
                        time_of_impact,
                        witness1,
                        witness2,
                        normal1,
                        normal2
                    ) {
                        super(
                            time_of_impact,
                            witness1,
                            witness2,
                            normal1,
                            normal2
                        )
                        this.collider = collider
                    }
                    static fromRaw(colliderSet, raw) {
                        if (!raw) return null
                        const result = new ColliderShapeCastHit(
                            colliderSet.get(raw.colliderHandle()),
                            raw.time_of_impact(),
                            (0, _math.VectorOps).fromRaw(raw.witness1()),
                            (0, _math.VectorOps).fromRaw(raw.witness2()),
                            (0, _math.VectorOps).fromRaw(raw.normal1()),
                            (0, _math.VectorOps).fromRaw(raw.normal2())
                        )
                        raw.free()
                        return result
                    }
                }
            },
            {
                '../math': 'jE0Bx',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '5bsoq': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(
                    exports,
                    'ActiveCollisionTypes',
                    () => ActiveCollisionTypes
                )
                /**
                 * A geometric entity that can be attached to a body so it can be affected
                 * by contacts and proximity queries.
                 */ parcelHelpers.export(exports, 'Collider', () => Collider)
                parcelHelpers.export(
                    exports,
                    'MassPropsMode',
                    () => MassPropsMode
                )
                parcelHelpers.export(
                    exports,
                    'ColliderDesc',
                    () => ColliderDesc
                )
                var _math = require('../math')
                var _dynamics = require('../dynamics')
                var _pipeline = require('../pipeline')
                var _shape = require('./shape')
                var _ray = require('./ray')
                var _point = require('./point')
                var _toi = require('./toi')
                var _contact = require('./contact')
                var ActiveCollisionTypes
                ;(function (ActiveCollisionTypes) {
                    /**
                     * Enable collision-detection between a collider attached to a dynamic body
                     * and another collider attached to a dynamic body.
                     */ ActiveCollisionTypes[
                        (ActiveCollisionTypes['DYNAMIC_DYNAMIC'] = 1)
                    ] = 'DYNAMIC_DYNAMIC'
                    /**
                     * Enable collision-detection between a collider attached to a dynamic body
                     * and another collider attached to a kinematic body.
                     */ ActiveCollisionTypes[
                        (ActiveCollisionTypes['DYNAMIC_KINEMATIC'] = 12)
                    ] = 'DYNAMIC_KINEMATIC'
                    /**
                     * Enable collision-detection between a collider attached to a dynamic body
                     * and another collider attached to a fixed body (or not attached to any body).
                     */ ActiveCollisionTypes[
                        (ActiveCollisionTypes['DYNAMIC_FIXED'] = 2)
                    ] = 'DYNAMIC_FIXED'
                    /**
                     * Enable collision-detection between a collider attached to a kinematic body
                     * and another collider attached to a kinematic body.
                     */ ActiveCollisionTypes[
                        (ActiveCollisionTypes['KINEMATIC_KINEMATIC'] = 52224)
                    ] = 'KINEMATIC_KINEMATIC'
                    /**
                     * Enable collision-detection between a collider attached to a kinematic body
                     * and another collider attached to a fixed body (or not attached to any body).
                     */ ActiveCollisionTypes[
                        (ActiveCollisionTypes['KINEMATIC_FIXED'] = 8704)
                    ] = 'KINEMATIC_FIXED'
                    /**
                     * Enable collision-detection between a collider attached to a fixed body (or
                     * not attached to any body) and another collider attached to a fixed body (or
                     * not attached to any body).
                     */ ActiveCollisionTypes[
                        (ActiveCollisionTypes['FIXED_FIXED'] = 32)
                    ] = 'FIXED_FIXED'
                    /**
                     * The default active collision types, enabling collisions between a dynamic body
                     * and another body of any type, but not enabling collisions between two non-dynamic bodies.
                     */ ActiveCollisionTypes[
                        (ActiveCollisionTypes['DEFAULT'] = 15)
                    ] = 'DEFAULT'
                    /**
                     * Enable collisions between any kind of rigid-bodies (including between two non-dynamic bodies).
                     */ ActiveCollisionTypes[
                        (ActiveCollisionTypes['ALL'] = 60943)
                    ] = 'ALL'
                })(ActiveCollisionTypes || (ActiveCollisionTypes = {}))
                class Collider {
                    constructor(colliderSet, handle, parent, shape) {
                        this.colliderSet = colliderSet
                        this.handle = handle
                        this._parent = parent
                        this._shape = shape
                    }
                    /** @internal */ finalizeDeserialization(bodies) {
                        if (this.handle != null)
                            this._parent = bodies.get(
                                this.colliderSet.raw.coParent(this.handle)
                            )
                    }
                    ensureShapeIsCached() {
                        if (!this._shape)
                            this._shape = (0, _shape.Shape).fromRaw(
                                this.colliderSet.raw,
                                this.handle
                            )
                    }
                    /**
                     * The shape of this collider.
                     */ get shape() {
                        this.ensureShapeIsCached()
                        return this._shape
                    }
                    /**
                     * Checks if this collider is still valid (i.e. that it has
                     * not been deleted from the collider set yet).
                     */ isValid() {
                        return this.colliderSet.raw.contains(this.handle)
                    }
                    /**
                     * The world-space translation of this rigid-body.
                     */ translation() {
                        return (0, _math.VectorOps).fromRaw(
                            this.colliderSet.raw.coTranslation(this.handle)
                        )
                    }
                    /**
                     * The world-space orientation of this rigid-body.
                     */ rotation() {
                        return (0, _math.RotationOps).fromRaw(
                            this.colliderSet.raw.coRotation(this.handle)
                        )
                    }
                    /**
                     * Is this collider a sensor?
                     */ isSensor() {
                        return this.colliderSet.raw.coIsSensor(this.handle)
                    }
                    /**
                     * Sets whether or not this collider is a sensor.
                     * @param isSensor - If `true`, the collider will be a sensor.
                     */ setSensor(isSensor) {
                        this.colliderSet.raw.coSetSensor(this.handle, isSensor)
                    }
                    /**
                     * Sets the new shape of the collider.
                     * @param shape - The collider’s new shape.
                     */ setShape(shape) {
                        let rawShape = shape.intoRaw()
                        this.colliderSet.raw.coSetShape(this.handle, rawShape)
                        rawShape.free()
                        this._shape = shape
                    }
                    /**
                     * Sets whether this collider is enabled or not.
                     *
                     * @param enabled - Set to `false` to disable this collider (its parent rigid-body won’t be disabled automatically by this).
                     */ setEnabled(enabled) {
                        this.colliderSet.raw.coSetEnabled(this.handle, enabled)
                    }
                    /**
                     * Is this collider enabled?
                     */ isEnabled() {
                        return this.colliderSet.raw.coIsEnabled(this.handle)
                    }
                    /**
                     * Sets the restitution coefficient of the collider to be created.
                     *
                     * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
                     *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
                     *                   constraints solver).
                     */ setRestitution(restitution) {
                        this.colliderSet.raw.coSetRestitution(
                            this.handle,
                            restitution
                        )
                    }
                    /**
                     * Sets the friction coefficient of the collider to be created.
                     *
                     * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
                     *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
                     *                   being built.
                     */ setFriction(friction) {
                        this.colliderSet.raw.coSetFriction(
                            this.handle,
                            friction
                        )
                    }
                    /**
                     * Gets the rule used to combine the friction coefficients of two colliders
                     * colliders involved in a contact.
                     */ frictionCombineRule() {
                        return this.colliderSet.raw.coFrictionCombineRule(
                            this.handle
                        )
                    }
                    /**
                     * Sets the rule used to combine the friction coefficients of two colliders
                     * colliders involved in a contact.
                     *
                     * @param rule − The combine rule to apply.
                     */ setFrictionCombineRule(rule) {
                        this.colliderSet.raw.coSetFrictionCombineRule(
                            this.handle,
                            rule
                        )
                    }
                    /**
                     * Gets the rule used to combine the restitution coefficients of two colliders
                     * colliders involved in a contact.
                     */ restitutionCombineRule() {
                        return this.colliderSet.raw.coRestitutionCombineRule(
                            this.handle
                        )
                    }
                    /**
                     * Sets the rule used to combine the restitution coefficients of two colliders
                     * colliders involved in a contact.
                     *
                     * @param rule − The combine rule to apply.
                     */ setRestitutionCombineRule(rule) {
                        this.colliderSet.raw.coSetRestitutionCombineRule(
                            this.handle,
                            rule
                        )
                    }
                    /**
                     * Sets the collision groups used by this collider.
                     *
                     * Two colliders will interact iff. their collision groups are compatible.
                     * See the documentation of `InteractionGroups` for details on teh used bit pattern.
                     *
                     * @param groups - The collision groups used for the collider being built.
                     */ setCollisionGroups(groups) {
                        this.colliderSet.raw.coSetCollisionGroups(
                            this.handle,
                            groups
                        )
                    }
                    /**
                     * Sets the solver groups used by this collider.
                     *
                     * Forces between two colliders in contact will be computed iff their solver
                     * groups are compatible.
                     * See the documentation of `InteractionGroups` for details on the used bit pattern.
                     *
                     * @param groups - The solver groups used for the collider being built.
                     */ setSolverGroups(groups) {
                        this.colliderSet.raw.coSetSolverGroups(
                            this.handle,
                            groups
                        )
                    }
                    /**
                     * Sets the contact skin for this collider.
                     *
                     * See the documentation of `ColliderDesc.setContactSkin` for additional details.
                     */ contactSkin() {
                        return this.colliderSet.raw.coContactSkin(this.handle)
                    }
                    /**
                     * Sets the contact skin for this collider.
                     *
                     * See the documentation of `ColliderDesc.setContactSkin` for additional details.
                     *
                     * @param thickness - The contact skin thickness.
                     */ setContactSkin(thickness) {
                        return this.colliderSet.raw.coSetContactSkin(
                            this.handle,
                            thickness
                        )
                    }
                    /**
                     * Get the physics hooks active for this collider.
                     */ activeHooks() {
                        return this.colliderSet.raw.coActiveHooks(this.handle)
                    }
                    /**
                     * Set the physics hooks active for this collider.
                     *
                     * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
                     *
                     * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
                     */ setActiveHooks(activeHooks) {
                        this.colliderSet.raw.coSetActiveHooks(
                            this.handle,
                            activeHooks
                        )
                    }
                    /**
                     * The events active for this collider.
                     */ activeEvents() {
                        return this.colliderSet.raw.coActiveEvents(this.handle)
                    }
                    /**
                     * Set the events active for this collider.
                     *
                     * Use this to enable contact and/or intersection event reporting for this collider.
                     *
                     * @param activeEvents - The events active for contact/intersection pairs involving this collider.
                     */ setActiveEvents(activeEvents) {
                        this.colliderSet.raw.coSetActiveEvents(
                            this.handle,
                            activeEvents
                        )
                    }
                    /**
                     * Gets the collision types active for this collider.
                     */ activeCollisionTypes() {
                        return this.colliderSet.raw.coActiveCollisionTypes(
                            this.handle
                        )
                    }
                    /**
                     * Sets the total force magnitude beyond which a contact force event can be emitted.
                     *
                     * @param threshold - The new force threshold.
                     */ setContactForceEventThreshold(threshold) {
                        return this.colliderSet.raw.coSetContactForceEventThreshold(
                            this.handle,
                            threshold
                        )
                    }
                    /**
                     * The total force magnitude beyond which a contact force event can be emitted.
                     */ contactForceEventThreshold() {
                        return this.colliderSet.raw.coContactForceEventThreshold(
                            this.handle
                        )
                    }
                    /**
                     * Set the collision types active for this collider.
                     *
                     * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
                     */ setActiveCollisionTypes(activeCollisionTypes) {
                        this.colliderSet.raw.coSetActiveCollisionTypes(
                            this.handle,
                            activeCollisionTypes
                        )
                    }
                    /**
                     * Sets the uniform density of this collider.
                     *
                     * This will override any previous mass-properties set by `this.setDensity`,
                     * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
                     * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
                     *
                     * The mass and angular inertia of this collider will be computed automatically based on its
                     * shape.
                     */ setDensity(density) {
                        this.colliderSet.raw.coSetDensity(this.handle, density)
                    }
                    /**
                     * Sets the mass of this collider.
                     *
                     * This will override any previous mass-properties set by `this.setDensity`,
                     * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
                     * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
                     *
                     * The angular inertia of this collider will be computed automatically based on its shape
                     * and this mass value.
                     */ setMass(mass) {
                        this.colliderSet.raw.coSetMass(this.handle, mass)
                    }
                    // #if DIM3
                    /**
                     * Sets the mass of this collider.
                     *
                     * This will override any previous mass-properties set by `this.setDensity`,
                     * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
                     * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
                     */ setMassProperties(
                        mass,
                        centerOfMass,
                        principalAngularInertia,
                        angularInertiaLocalFrame
                    ) {
                        let rawCom = (0, _math.VectorOps).intoRaw(centerOfMass)
                        let rawPrincipalInertia = (0, _math.VectorOps).intoRaw(
                            principalAngularInertia
                        )
                        let rawInertiaFrame = (0, _math.RotationOps).intoRaw(
                            angularInertiaLocalFrame
                        )
                        this.colliderSet.raw.coSetMassProperties(
                            this.handle,
                            mass,
                            rawCom,
                            rawPrincipalInertia,
                            rawInertiaFrame
                        )
                        rawCom.free()
                        rawPrincipalInertia.free()
                        rawInertiaFrame.free()
                    }
                    // #endif
                    /**
                     * Sets the translation of this collider.
                     *
                     * @param tra - The world-space position of the collider.
                     */ setTranslation(tra) {
                        // #if DIM3
                        this.colliderSet.raw.coSetTranslation(
                            this.handle,
                            tra.x,
                            tra.y,
                            tra.z
                        )
                        // #endif
                    }
                    /**
                     * Sets the translation of this collider relative to its parent rigid-body.
                     *
                     * Does nothing if this collider isn't attached to a rigid-body.
                     *
                     * @param tra - The new translation of the collider relative to its parent.
                     */ setTranslationWrtParent(tra) {
                        // #if DIM3
                        this.colliderSet.raw.coSetTranslationWrtParent(
                            this.handle,
                            tra.x,
                            tra.y,
                            tra.z
                        )
                        // #endif
                    }
                    // #if DIM3
                    /**
                     * Sets the rotation quaternion of this collider.
                     *
                     * This does nothing if a zero quaternion is provided.
                     *
                     * @param rotation - The rotation to set.
                     */ setRotation(rot) {
                        this.colliderSet.raw.coSetRotation(
                            this.handle,
                            rot.x,
                            rot.y,
                            rot.z,
                            rot.w
                        )
                    }
                    /**
                     * Sets the rotation quaternion of this collider relative to its parent rigid-body.
                     *
                     * This does nothing if a zero quaternion is provided or if this collider isn't
                     * attached to a rigid-body.
                     *
                     * @param rotation - The rotation to set.
                     */ setRotationWrtParent(rot) {
                        this.colliderSet.raw.coSetRotationWrtParent(
                            this.handle,
                            rot.x,
                            rot.y,
                            rot.z,
                            rot.w
                        )
                    }
                    // #endif
                    /**
                     * The type of the shape of this collider.
                     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
                     */ shapeType() {
                        return this.colliderSet.raw.coShapeType(this.handle)
                    }
                    /**
                     * The half-extents of this collider if it is a cuboid shape.
                     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
                     */ halfExtents() {
                        return (0, _math.VectorOps).fromRaw(
                            this.colliderSet.raw.coHalfExtents(this.handle)
                        )
                    }
                    /**
                     * Sets the half-extents of this collider if it is a cuboid shape.
                     *
                     * @param newHalfExtents - desired half extents.
                     */ setHalfExtents(newHalfExtents) {
                        const rawPoint = (0, _math.VectorOps).intoRaw(
                            newHalfExtents
                        )
                        this.colliderSet.raw.coSetHalfExtents(
                            this.handle,
                            rawPoint
                        )
                    }
                    /**
                     * The radius of this collider if it is a ball, cylinder, capsule, or cone shape.
                     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
                     */ radius() {
                        return this.colliderSet.raw.coRadius(this.handle)
                    }
                    /**
                     * Sets the radius of this collider if it is a ball, cylinder, capsule, or cone shape.
                     *
                     * @param newRadius - desired radius.
                     */ setRadius(newRadius) {
                        this.colliderSet.raw.coSetRadius(this.handle, newRadius)
                    }
                    /**
                     * The radius of the round edges of this collider if it is a round cylinder.
                     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
                     */ roundRadius() {
                        return this.colliderSet.raw.coRoundRadius(this.handle)
                    }
                    /**
                     * Sets the radius of the round edges of this collider if it has round edges.
                     *
                     * @param newBorderRadius - desired round edge radius.
                     */ setRoundRadius(newBorderRadius) {
                        this.colliderSet.raw.coSetRoundRadius(
                            this.handle,
                            newBorderRadius
                        )
                    }
                    /**
                     * The half height of this collider if it is a cylinder, capsule, or cone shape.
                     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
                     */ halfHeight() {
                        return this.colliderSet.raw.coHalfHeight(this.handle)
                    }
                    /**
                     * Sets the half height of this collider if it is a cylinder, capsule, or cone shape.
                     *
                     * @param newHalfheight - desired half height.
                     */ setHalfHeight(newHalfheight) {
                        this.colliderSet.raw.coSetHalfHeight(
                            this.handle,
                            newHalfheight
                        )
                    }
                    /**
                     * If this collider has a triangle mesh, polyline, convex polygon, or convex polyhedron shape,
                     * this returns the vertex buffer of said shape.
                     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
                     */ vertices() {
                        return this.colliderSet.raw.coVertices(this.handle)
                    }
                    /**
                     * If this collider has a triangle mesh, polyline, or convex polyhedron shape,
                     * this returns the index buffer of said shape.
                     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
                     */ indices() {
                        return this.colliderSet.raw.coIndices(this.handle)
                    }
                    /**
                     * If this collider has a heightfield shape, this returns the heights buffer of
                     * the heightfield.
                     * In 3D, the returned height matrix is provided in column-major order.
                     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
                     */ heightfieldHeights() {
                        return this.colliderSet.raw.coHeightfieldHeights(
                            this.handle
                        )
                    }
                    /**
                     * If this collider has a heightfield shape, this returns the scale
                     * applied to it.
                     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
                     */ heightfieldScale() {
                        let scale = this.colliderSet.raw.coHeightfieldScale(
                            this.handle
                        )
                        return (0, _math.VectorOps).fromRaw(scale)
                    }
                    // #if DIM3
                    /**
                     * If this collider has a heightfield shape, this returns the number of
                     * rows of its height matrix.
                     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
                     */ heightfieldNRows() {
                        return this.colliderSet.raw.coHeightfieldNRows(
                            this.handle
                        )
                    }
                    /**
                     * If this collider has a heightfield shape, this returns the number of
                     * columns of its height matrix.
                     * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
                     */ heightfieldNCols() {
                        return this.colliderSet.raw.coHeightfieldNCols(
                            this.handle
                        )
                    }
                    // #endif
                    /**
                     * The rigid-body this collider is attached to.
                     */ parent() {
                        return this._parent
                    }
                    /**
                     * The friction coefficient of this collider.
                     */ friction() {
                        return this.colliderSet.raw.coFriction(this.handle)
                    }
                    /**
                     * The restitution coefficient of this collider.
                     */ restitution() {
                        return this.colliderSet.raw.coRestitution(this.handle)
                    }
                    /**
                     * The density of this collider.
                     */ density() {
                        return this.colliderSet.raw.coDensity(this.handle)
                    }
                    /**
                     * The mass of this collider.
                     */ mass() {
                        return this.colliderSet.raw.coMass(this.handle)
                    }
                    /**
                     * The volume of this collider.
                     */ volume() {
                        return this.colliderSet.raw.coVolume(this.handle)
                    }
                    /**
                     * The collision groups of this collider.
                     */ collisionGroups() {
                        return this.colliderSet.raw.coCollisionGroups(
                            this.handle
                        )
                    }
                    /**
                     * The solver groups of this collider.
                     */ solverGroups() {
                        return this.colliderSet.raw.coSolverGroups(this.handle)
                    }
                    /**
                     * Tests if this collider contains a point.
                     *
                     * @param point - The point to test.
                     */ containsPoint(point) {
                        let rawPoint = (0, _math.VectorOps).intoRaw(point)
                        let result = this.colliderSet.raw.coContainsPoint(
                            this.handle,
                            rawPoint
                        )
                        rawPoint.free()
                        return result
                    }
                    /**
                     * Find the projection of a point on this collider.
                     *
                     * @param point - The point to project.
                     * @param solid - If this is set to `true` then the collider shapes are considered to
                     *   be plain (if the point is located inside of a plain shape, its projection is the point
                     *   itself). If it is set to `false` the collider shapes are considered to be hollow
                     *   (if the point is located inside of an hollow shape, it is projected on the shape's
                     *   boundary).
                     */ projectPoint(point, solid) {
                        let rawPoint = (0, _math.VectorOps).intoRaw(point)
                        let result = (0, _point.PointProjection).fromRaw(
                            this.colliderSet.raw.coProjectPoint(
                                this.handle,
                                rawPoint,
                                solid
                            )
                        )
                        rawPoint.free()
                        return result
                    }
                    /**
                     * Tests if this collider intersects the given ray.
                     *
                     * @param ray - The ray to cast.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
                     */ intersectsRay(ray, maxToi) {
                        let rawOrig = (0, _math.VectorOps).intoRaw(ray.origin)
                        let rawDir = (0, _math.VectorOps).intoRaw(ray.dir)
                        let result = this.colliderSet.raw.coIntersectsRay(
                            this.handle,
                            rawOrig,
                            rawDir,
                            maxToi
                        )
                        rawOrig.free()
                        rawDir.free()
                        return result
                    }
                    /*
                     * Computes the smallest time between this and the given shape under translational movement are separated by a distance smaller or equal to distance.
                     *
                     * @param collider1Vel - The constant velocity of the current shape to cast (i.e. the cast direction).
                     * @param shape2 - The shape to cast against.
                     * @param shape2Pos - The position of the second shape.
                     * @param shape2Rot - The rotation of the second shape.
                     * @param shape2Vel - The constant velocity of the second shape.
                     * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
                     *                         will be returned.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the distance traveled by the shape to `collider1Vel.norm() * maxToi`.
                     * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
                     *   the shape is penetrating another shape at its starting point **and** its trajectory is such
                     *   that it’s on a path to exit that penetration state.
                     */ castShape(
                        collider1Vel,
                        shape2,
                        shape2Pos,
                        shape2Rot,
                        shape2Vel,
                        targetDistance,
                        maxToi,
                        stopAtPenetration
                    ) {
                        let rawCollider1Vel = (0, _math.VectorOps).intoRaw(
                            collider1Vel
                        )
                        let rawShape2Pos = (0, _math.VectorOps).intoRaw(
                            shape2Pos
                        )
                        let rawShape2Rot = (0, _math.RotationOps).intoRaw(
                            shape2Rot
                        )
                        let rawShape2Vel = (0, _math.VectorOps).intoRaw(
                            shape2Vel
                        )
                        let rawShape2 = shape2.intoRaw()
                        let result = (0, _toi.ShapeCastHit).fromRaw(
                            this.colliderSet,
                            this.colliderSet.raw.coCastShape(
                                this.handle,
                                rawCollider1Vel,
                                rawShape2,
                                rawShape2Pos,
                                rawShape2Rot,
                                rawShape2Vel,
                                targetDistance,
                                maxToi,
                                stopAtPenetration
                            )
                        )
                        rawCollider1Vel.free()
                        rawShape2Pos.free()
                        rawShape2Rot.free()
                        rawShape2Vel.free()
                        rawShape2.free()
                        return result
                    }
                    /*
                     * Computes the smallest time between this and the given collider under translational movement are separated by a distance smaller or equal to distance.
                     *
                     * @param collider1Vel - The constant velocity of the current collider to cast (i.e. the cast direction).
                     * @param collider2 - The collider to cast against.
                     * @param collider2Vel - The constant velocity of the second collider.
                     * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
                     *                         will be returned.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
                     * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
                     *   the shape is penetrating another shape at its starting point **and** its trajectory is such
                     *   that it’s on a path to exit that penetration state.
                     */ castCollider(
                        collider1Vel,
                        collider2,
                        collider2Vel,
                        targetDistance,
                        maxToi,
                        stopAtPenetration
                    ) {
                        let rawCollider1Vel = (0, _math.VectorOps).intoRaw(
                            collider1Vel
                        )
                        let rawCollider2Vel = (0, _math.VectorOps).intoRaw(
                            collider2Vel
                        )
                        let result = (0, _toi.ColliderShapeCastHit).fromRaw(
                            this.colliderSet,
                            this.colliderSet.raw.coCastCollider(
                                this.handle,
                                rawCollider1Vel,
                                collider2.handle,
                                rawCollider2Vel,
                                targetDistance,
                                maxToi,
                                stopAtPenetration
                            )
                        )
                        rawCollider1Vel.free()
                        rawCollider2Vel.free()
                        return result
                    }
                    intersectsShape(shape2, shapePos2, shapeRot2) {
                        let rawPos2 = (0, _math.VectorOps).intoRaw(shapePos2)
                        let rawRot2 = (0, _math.RotationOps).intoRaw(shapeRot2)
                        let rawShape2 = shape2.intoRaw()
                        let result = this.colliderSet.raw.coIntersectsShape(
                            this.handle,
                            rawShape2,
                            rawPos2,
                            rawRot2
                        )
                        rawPos2.free()
                        rawRot2.free()
                        rawShape2.free()
                        return result
                    }
                    /**
                     * Computes one pair of contact points between the shape owned by this collider and the given shape.
                     *
                     * @param shape2 - The second shape.
                     * @param shape2Pos - The initial position of the second shape.
                     * @param shape2Rot - The rotation of the second shape.
                     * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
                     * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
                     */ contactShape(shape2, shape2Pos, shape2Rot, prediction) {
                        let rawPos2 = (0, _math.VectorOps).intoRaw(shape2Pos)
                        let rawRot2 = (0, _math.RotationOps).intoRaw(shape2Rot)
                        let rawShape2 = shape2.intoRaw()
                        let result = (0, _contact.ShapeContact).fromRaw(
                            this.colliderSet.raw.coContactShape(
                                this.handle,
                                rawShape2,
                                rawPos2,
                                rawRot2,
                                prediction
                            )
                        )
                        rawPos2.free()
                        rawRot2.free()
                        rawShape2.free()
                        return result
                    }
                    /**
                     * Computes one pair of contact points between the collider and the given collider.
                     *
                     * @param collider2 - The second collider.
                     * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
                     * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
                     */ contactCollider(collider2, prediction) {
                        let result = (0, _contact.ShapeContact).fromRaw(
                            this.colliderSet.raw.coContactCollider(
                                this.handle,
                                collider2.handle,
                                prediction
                            )
                        )
                        return result
                    }
                    /**
                     * Find the closest intersection between a ray and this collider.
                     *
                     * This also computes the normal at the hit point.
                     * @param ray - The ray to cast.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
                     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
                     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
                     *   whereas `false` implies that all shapes are hollow for this ray-cast.
                     * @returns The time-of-impact between this collider and the ray, or `-1` if there is no intersection.
                     */ castRay(ray, maxToi, solid) {
                        let rawOrig = (0, _math.VectorOps).intoRaw(ray.origin)
                        let rawDir = (0, _math.VectorOps).intoRaw(ray.dir)
                        let result = this.colliderSet.raw.coCastRay(
                            this.handle,
                            rawOrig,
                            rawDir,
                            maxToi,
                            solid
                        )
                        rawOrig.free()
                        rawDir.free()
                        return result
                    }
                    /**
                     * Find the closest intersection between a ray and this collider.
                     *
                     * This also computes the normal at the hit point.
                     * @param ray - The ray to cast.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
                     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
                     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
                     *   whereas `false` implies that all shapes are hollow for this ray-cast.
                     */ castRayAndGetNormal(ray, maxToi, solid) {
                        let rawOrig = (0, _math.VectorOps).intoRaw(ray.origin)
                        let rawDir = (0, _math.VectorOps).intoRaw(ray.dir)
                        let result = (0, _ray.RayIntersection).fromRaw(
                            this.colliderSet.raw.coCastRayAndGetNormal(
                                this.handle,
                                rawOrig,
                                rawDir,
                                maxToi,
                                solid
                            )
                        )
                        rawOrig.free()
                        rawDir.free()
                        return result
                    }
                }
                var MassPropsMode
                ;(function (MassPropsMode) {
                    MassPropsMode[(MassPropsMode['Density'] = 0)] = 'Density'
                    MassPropsMode[(MassPropsMode['Mass'] = 1)] = 'Mass'
                    MassPropsMode[(MassPropsMode['MassProps'] = 2)] =
                        'MassProps'
                })(MassPropsMode || (MassPropsMode = {}))
                class ColliderDesc {
                    /**
                     * Initializes a collider descriptor from the collision shape.
                     *
                     * @param shape - The shape of the collider being built.
                     */ constructor(shape) {
                        this.enabled = true
                        this.shape = shape
                        this.massPropsMode = MassPropsMode.Density
                        this.density = 1.0
                        this.friction = 0.5
                        this.restitution = 0.0
                        this.rotation = (0, _math.RotationOps).identity()
                        this.translation = (0, _math.VectorOps).zeros()
                        this.isSensor = false
                        this.collisionGroups = 4294967295
                        this.solverGroups = 4294967295
                        this.frictionCombineRule = (0,
                        _dynamics.CoefficientCombineRule).Average
                        this.restitutionCombineRule = (0,
                        _dynamics.CoefficientCombineRule).Average
                        this.activeCollisionTypes = ActiveCollisionTypes.DEFAULT
                        this.activeEvents = (0, _pipeline.ActiveEvents).NONE
                        this.activeHooks = (0, _pipeline.ActiveHooks).NONE
                        this.mass = 0.0
                        this.centerOfMass = (0, _math.VectorOps).zeros()
                        this.contactForceEventThreshold = 0.0
                        this.contactSkin = 0.0
                        // #if DIM3
                        this.principalAngularInertia = (0,
                        _math.VectorOps).zeros()
                        this.angularInertiaLocalFrame = (0,
                        _math.RotationOps).identity()
                        // #endif
                    }
                    /**
                     * Create a new collider descriptor with a ball shape.
                     *
                     * @param radius - The radius of the ball.
                     */ static ball(radius) {
                        const shape = new (0, _shape.Ball)(radius)
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Create a new collider descriptor with a capsule shape.
                     *
                     * @param halfHeight - The half-height of the capsule, along the `y` axis.
                     * @param radius - The radius of the capsule basis.
                     */ static capsule(halfHeight, radius) {
                        const shape = new (0, _shape.Capsule)(
                            halfHeight,
                            radius
                        )
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Creates a new segment shape.
                     *
                     * @param a - The first point of the segment.
                     * @param b - The second point of the segment.
                     */ static segment(a, b) {
                        const shape = new (0, _shape.Segment)(a, b)
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Creates a new triangle shape.
                     *
                     * @param a - The first point of the triangle.
                     * @param b - The second point of the triangle.
                     * @param c - The third point of the triangle.
                     */ static triangle(a, b, c) {
                        const shape = new (0, _shape.Triangle)(a, b, c)
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Creates a new triangle shape with round corners.
                     *
                     * @param a - The first point of the triangle.
                     * @param b - The second point of the triangle.
                     * @param c - The third point of the triangle.
                     * @param borderRadius - The radius of the borders of this triangle. In 3D,
                     *   this is also equal to half the thickness of the triangle.
                     */ static roundTriangle(a, b, c, borderRadius) {
                        const shape = new (0, _shape.RoundTriangle)(
                            a,
                            b,
                            c,
                            borderRadius
                        )
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Creates a new collider descriptor with a polyline shape.
                     *
                     * @param vertices - The coordinates of the polyline's vertices.
                     * @param indices - The indices of the polyline's segments. If this is `undefined` or `null`,
                     *    the vertices are assumed to describe a line strip.
                     */ static polyline(vertices, indices) {
                        const shape = new (0, _shape.Polyline)(
                            vertices,
                            indices
                        )
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Creates a new collider descriptor with a triangle mesh shape.
                     *
                     * @param vertices - The coordinates of the triangle mesh's vertices.
                     * @param indices - The indices of the triangle mesh's triangles.
                     */ static trimesh(vertices, indices, flags) {
                        const shape = new (0, _shape.TriMesh)(
                            vertices,
                            indices,
                            flags
                        )
                        return new ColliderDesc(shape)
                    }
                    // #if DIM3
                    /**
                     * Creates a new collider descriptor with a cuboid shape.
                     *
                     * @param hx - The half-width of the rectangle along its local `x` axis.
                     * @param hy - The half-width of the rectangle along its local `y` axis.
                     * @param hz - The half-width of the rectangle along its local `z` axis.
                     */ static cuboid(hx, hy, hz) {
                        const shape = new (0, _shape.Cuboid)(hx, hy, hz)
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Creates a new collider descriptor with a rectangular shape with round borders.
                     *
                     * @param hx - The half-width of the rectangle along its local `x` axis.
                     * @param hy - The half-width of the rectangle along its local `y` axis.
                     * @param hz - The half-width of the rectangle along its local `z` axis.
                     * @param borderRadius - The radius of the cuboid's borders.
                     */ static roundCuboid(hx, hy, hz, borderRadius) {
                        const shape = new (0, _shape.RoundCuboid)(
                            hx,
                            hy,
                            hz,
                            borderRadius
                        )
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Creates a new collider descriptor with a heightfield shape.
                     *
                     * @param nrows − The number of rows in the heights matrix.
                     * @param ncols - The number of columns in the heights matrix.
                     * @param heights - The heights of the heightfield along its local `y` axis,
                     *                  provided as a matrix stored in column-major order.
                     * @param scale - The scale factor applied to the heightfield.
                     */ static heightfield(
                        nrows,
                        ncols,
                        heights,
                        scale,
                        flags
                    ) {
                        const shape = new (0, _shape.Heightfield)(
                            nrows,
                            ncols,
                            heights,
                            scale,
                            flags
                        )
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Create a new collider descriptor with a cylinder shape.
                     *
                     * @param halfHeight - The half-height of the cylinder, along the `y` axis.
                     * @param radius - The radius of the cylinder basis.
                     */ static cylinder(halfHeight, radius) {
                        const shape = new (0, _shape.Cylinder)(
                            halfHeight,
                            radius
                        )
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Create a new collider descriptor with a cylinder shape with rounded corners.
                     *
                     * @param halfHeight - The half-height of the cylinder, along the `y` axis.
                     * @param radius - The radius of the cylinder basis.
                     * @param borderRadius - The radius of the cylinder's rounded edges and vertices.
                     */ static roundCylinder(halfHeight, radius, borderRadius) {
                        const shape = new (0, _shape.RoundCylinder)(
                            halfHeight,
                            radius,
                            borderRadius
                        )
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Create a new collider descriptor with a cone shape.
                     *
                     * @param halfHeight - The half-height of the cone, along the `y` axis.
                     * @param radius - The radius of the cone basis.
                     */ static cone(halfHeight, radius) {
                        const shape = new (0, _shape.Cone)(halfHeight, radius)
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Create a new collider descriptor with a cone shape with rounded corners.
                     *
                     * @param halfHeight - The half-height of the cone, along the `y` axis.
                     * @param radius - The radius of the cone basis.
                     * @param borderRadius - The radius of the cone's rounded edges and vertices.
                     */ static roundCone(halfHeight, radius, borderRadius) {
                        const shape = new (0, _shape.RoundCone)(
                            halfHeight,
                            radius,
                            borderRadius
                        )
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Computes the convex-hull of the given points and use the resulting
                     * convex polyhedron as the shape for this new collider descriptor.
                     *
                     * @param points - The point that will be used to compute the convex-hull.
                     */ static convexHull(points) {
                        const shape = new (0, _shape.ConvexPolyhedron)(
                            points,
                            null
                        )
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Creates a new collider descriptor that uses the given set of points assumed
                     * to form a convex polyline (no convex-hull computation will be done).
                     *
                     * @param vertices - The vertices of the convex polyline.
                     */ static convexMesh(vertices, indices) {
                        const shape = new (0, _shape.ConvexPolyhedron)(
                            vertices,
                            indices
                        )
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Computes the convex-hull of the given points and use the resulting
                     * convex polyhedron as the shape for this new collider descriptor. A
                     * border is added to that convex polyhedron to give it round corners.
                     *
                     * @param points - The point that will be used to compute the convex-hull.
                     * @param borderRadius - The radius of the round border added to the convex polyhedron.
                     */ static roundConvexHull(points, borderRadius) {
                        const shape = new (0, _shape.RoundConvexPolyhedron)(
                            points,
                            null,
                            borderRadius
                        )
                        return new ColliderDesc(shape)
                    }
                    /**
                     * Creates a new collider descriptor that uses the given set of points assumed
                     * to form a round convex polyline (no convex-hull computation will be done).
                     *
                     * @param vertices - The vertices of the convex polyline.
                     * @param borderRadius - The radius of the round border added to the convex polyline.
                     */ static roundConvexMesh(
                        vertices,
                        indices,
                        borderRadius
                    ) {
                        const shape = new (0, _shape.RoundConvexPolyhedron)(
                            vertices,
                            indices,
                            borderRadius
                        )
                        return new ColliderDesc(shape)
                    }
                    // #endif
                    // #if DIM3
                    /**
                     * Sets the position of the collider to be created relative to the rigid-body it is attached to.
                     */ setTranslation(x, y, z) {
                        if (
                            typeof x != 'number' ||
                            typeof y != 'number' ||
                            typeof z != 'number'
                        )
                            throw TypeError(
                                'The translation components must be numbers.'
                            )
                        this.translation = {
                            x: x,
                            y: y,
                            z: z,
                        }
                        return this
                    }
                    // #endif
                    /**
                     * Sets the rotation of the collider to be created relative to the rigid-body it is attached to.
                     *
                     * @param rot - The rotation of the collider to be created relative to the rigid-body it is attached to.
                     */ setRotation(rot) {
                        // #if DIM3
                        ;(0, _math.RotationOps).copy(this.rotation, rot)
                        // #endif
                        return this
                    }
                    /**
                     * Sets whether or not the collider being created is a sensor.
                     *
                     * A sensor collider does not take part of the physics simulation, but generates
                     * proximity events.
                     *
                     * @param sensor - Set to `true` of the collider built is to be a sensor.
                     */ setSensor(sensor) {
                        this.isSensor = sensor
                        return this
                    }
                    /**
                     * Sets whether the created collider will be enabled or disabled.
                     * @param enabled − If set to `false` the collider will be disabled at creation.
                     */ setEnabled(enabled) {
                        this.enabled = enabled
                        return this
                    }
                    /**
                     * Sets the contact skin of the collider.
                     *
                     * The contact skin acts as if the collider was enlarged with a skin of width `skin_thickness`
                     * around it, keeping objects further apart when colliding.
                     *
                     * A non-zero contact skin can increase performance, and in some cases, stability. However
                     * it creates a small gap between colliding object (equal to the sum of their skin). If the
                     * skin is sufficiently small, this might not be visually significant or can be hidden by the
                     * rendering assets.
                     */ setContactSkin(thickness) {
                        this.contactSkin = thickness
                        return this
                    }
                    /**
                     * Sets the density of the collider being built.
                     *
                     * The mass and angular inertia tensor will be computed automatically based on this density and the collider’s shape.
                     *
                     * @param density - The density to set, must be greater or equal to 0. A density of 0 means that this collider
                     *                  will not affect the mass or angular inertia of the rigid-body it is attached to.
                     */ setDensity(density) {
                        this.massPropsMode = MassPropsMode.Density
                        this.density = density
                        return this
                    }
                    /**
                     * Sets the mass of the collider being built.
                     *
                     * The angular inertia tensor will be computed automatically based on this mass and the collider’s shape.
                     *
                     * @param mass - The mass to set, must be greater or equal to 0.
                     */ setMass(mass) {
                        this.massPropsMode = MassPropsMode.Mass
                        this.mass = mass
                        return this
                    }
                    // #if DIM3
                    /**
                     * Sets the mass properties of the collider being built.
                     *
                     * This replaces the mass-properties automatically computed from the collider's density and shape.
                     * These mass-properties will be added to the mass-properties of the rigid-body this collider will be attached to.
                     *
                     * @param mass − The mass of the collider to create.
                     * @param centerOfMass − The center-of-mass of the collider to create.
                     * @param principalAngularInertia − The initial principal angular inertia of the collider to create.
                     *                                  These are the eigenvalues of the angular inertia matrix.
                     * @param angularInertiaLocalFrame − The initial local angular inertia frame of the collider to create.
                     *                                   These are the eigenvectors of the angular inertia matrix.
                     */ setMassProperties(
                        mass,
                        centerOfMass,
                        principalAngularInertia,
                        angularInertiaLocalFrame
                    ) {
                        this.massPropsMode = MassPropsMode.MassProps
                        this.mass = mass
                        ;(0, _math.VectorOps).copy(
                            this.centerOfMass,
                            centerOfMass
                        )
                        ;(0, _math.VectorOps).copy(
                            this.principalAngularInertia,
                            principalAngularInertia
                        )
                        ;(0, _math.RotationOps).copy(
                            this.angularInertiaLocalFrame,
                            angularInertiaLocalFrame
                        )
                        return this
                    }
                    // #endif
                    /**
                     * Sets the restitution coefficient of the collider to be created.
                     *
                     * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
                     *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
                     *                   constraints solver).
                     */ setRestitution(restitution) {
                        this.restitution = restitution
                        return this
                    }
                    /**
                     * Sets the friction coefficient of the collider to be created.
                     *
                     * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
                     *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
                     *                   being built.
                     */ setFriction(friction) {
                        this.friction = friction
                        return this
                    }
                    /**
                     * Sets the rule used to combine the friction coefficients of two colliders
                     * colliders involved in a contact.
                     *
                     * @param rule − The combine rule to apply.
                     */ setFrictionCombineRule(rule) {
                        this.frictionCombineRule = rule
                        return this
                    }
                    /**
                     * Sets the rule used to combine the restitution coefficients of two colliders
                     * colliders involved in a contact.
                     *
                     * @param rule − The combine rule to apply.
                     */ setRestitutionCombineRule(rule) {
                        this.restitutionCombineRule = rule
                        return this
                    }
                    /**
                     * Sets the collision groups used by this collider.
                     *
                     * Two colliders will interact iff. their collision groups are compatible.
                     * See the documentation of `InteractionGroups` for details on teh used bit pattern.
                     *
                     * @param groups - The collision groups used for the collider being built.
                     */ setCollisionGroups(groups) {
                        this.collisionGroups = groups
                        return this
                    }
                    /**
                     * Sets the solver groups used by this collider.
                     *
                     * Forces between two colliders in contact will be computed iff their solver
                     * groups are compatible.
                     * See the documentation of `InteractionGroups` for details on the used bit pattern.
                     *
                     * @param groups - The solver groups used for the collider being built.
                     */ setSolverGroups(groups) {
                        this.solverGroups = groups
                        return this
                    }
                    /**
                     * Set the physics hooks active for this collider.
                     *
                     * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
                     *
                     * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
                     */ setActiveHooks(activeHooks) {
                        this.activeHooks = activeHooks
                        return this
                    }
                    /**
                     * Set the events active for this collider.
                     *
                     * Use this to enable contact and/or intersection event reporting for this collider.
                     *
                     * @param activeEvents - The events active for contact/intersection pairs involving this collider.
                     */ setActiveEvents(activeEvents) {
                        this.activeEvents = activeEvents
                        return this
                    }
                    /**
                     * Set the collision types active for this collider.
                     *
                     * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
                     */ setActiveCollisionTypes(activeCollisionTypes) {
                        this.activeCollisionTypes = activeCollisionTypes
                        return this
                    }
                    /**
                     * Sets the total force magnitude beyond which a contact force event can be emitted.
                     *
                     * @param threshold - The force threshold to set.
                     */ setContactForceEventThreshold(threshold) {
                        this.contactForceEventThreshold = threshold
                        return this
                    }
                }
            },
            {
                '../math': 'jE0Bx',
                '../dynamics': 'gdK69',
                '../pipeline': 'f2JEw',
                './shape': 'lrt5G',
                './ray': 'aS6kI',
                './point': '1dBT4',
                './toi': 'apxEh',
                './contact': '2WaUV',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        f2JEw: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                var _world = require('./world')
                parcelHelpers.exportAll(_world, exports)
                var _physicsPipeline = require('./physics_pipeline')
                parcelHelpers.exportAll(_physicsPipeline, exports)
                var _serializationPipeline = require('./serialization_pipeline')
                parcelHelpers.exportAll(_serializationPipeline, exports)
                var _eventQueue = require('./event_queue')
                parcelHelpers.exportAll(_eventQueue, exports)
                var _physicsHooks = require('./physics_hooks')
                parcelHelpers.exportAll(_physicsHooks, exports)
                var _debugRenderPipeline = require('./debug_render_pipeline')
                parcelHelpers.exportAll(_debugRenderPipeline, exports)
                var _queryPipeline = require('./query_pipeline')
                parcelHelpers.exportAll(_queryPipeline, exports)
            },
            {
                './world': 'jLrGy',
                './physics_pipeline': '3qiq6',
                './serialization_pipeline': 'eQUVD',
                './event_queue': '4ZpZz',
                './physics_hooks': 'dHa7c',
                './debug_render_pipeline': 'kZFRQ',
                './query_pipeline': 'achMl',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        jLrGy: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                // #endif
                /**
                 * The physics world.
                 *
                 * This contains all the data-structures necessary for creating and simulating
                 * bodies with contacts, joints, and external forces.
                 */ parcelHelpers.export(exports, 'World', () => World)
                var _geometry = require('../geometry')
                var _dynamics = require('../dynamics')
                var _math = require('../math')
                var _physicsPipeline = require('./physics_pipeline')
                var _queryPipeline = require('./query_pipeline')
                var _serializationPipeline = require('./serialization_pipeline')
                var _debugRenderPipeline = require('./debug_render_pipeline')
                var _control = require('../control')
                class World {
                    constructor(
                        gravity,
                        rawIntegrationParameters,
                        rawIslands,
                        rawBroadPhase,
                        rawNarrowPhase,
                        rawBodies,
                        rawColliders,
                        rawImpulseJoints,
                        rawMultibodyJoints,
                        rawCCDSolver,
                        rawQueryPipeline,
                        rawPhysicsPipeline,
                        rawSerializationPipeline,
                        rawDebugRenderPipeline
                    ) {
                        this.gravity = gravity
                        this.integrationParameters = new (0,
                        _dynamics.IntegrationParameters)(
                            rawIntegrationParameters
                        )
                        this.islands = new (0, _dynamics.IslandManager)(
                            rawIslands
                        )
                        this.broadPhase = new (0, _geometry.BroadPhase)(
                            rawBroadPhase
                        )
                        this.narrowPhase = new (0, _geometry.NarrowPhase)(
                            rawNarrowPhase
                        )
                        this.bodies = new (0, _dynamics.RigidBodySet)(rawBodies)
                        this.colliders = new (0, _geometry.ColliderSet)(
                            rawColliders
                        )
                        this.impulseJoints = new (0, _dynamics.ImpulseJointSet)(
                            rawImpulseJoints
                        )
                        this.multibodyJoints = new (0,
                        _dynamics.MultibodyJointSet)(rawMultibodyJoints)
                        this.ccdSolver = new (0, _dynamics.CCDSolver)(
                            rawCCDSolver
                        )
                        this.queryPipeline = new (0,
                        _queryPipeline.QueryPipeline)(rawQueryPipeline)
                        this.physicsPipeline = new (0,
                        _physicsPipeline.PhysicsPipeline)(rawPhysicsPipeline)
                        this.serializationPipeline = new (0,
                        _serializationPipeline.SerializationPipeline)(
                            rawSerializationPipeline
                        )
                        this.debugRenderPipeline = new (0,
                        _debugRenderPipeline.DebugRenderPipeline)(
                            rawDebugRenderPipeline
                        )
                        this.characterControllers = new Set()
                        // #if DIM3
                        this.vehicleControllers = new Set()
                        // #endif
                        this.impulseJoints.finalizeDeserialization(this.bodies)
                        this.bodies.finalizeDeserialization(this.colliders)
                        this.colliders.finalizeDeserialization(this.bodies)
                    }
                    // #endif
                    /**
                     * Release the WASM memory occupied by this physics world.
                     *
                     * All the fields of this physics world will be freed as well,
                     * so there is no need to call their `.free()` methods individually.
                     */ free() {
                        this.integrationParameters.free()
                        this.islands.free()
                        this.broadPhase.free()
                        this.narrowPhase.free()
                        this.bodies.free()
                        this.colliders.free()
                        this.impulseJoints.free()
                        this.multibodyJoints.free()
                        this.ccdSolver.free()
                        this.queryPipeline.free()
                        this.physicsPipeline.free()
                        this.serializationPipeline.free()
                        this.debugRenderPipeline.free()
                        this.characterControllers.forEach((controller) =>
                            controller.free()
                        )
                        // #if DIM3
                        this.vehicleControllers.forEach((controller) =>
                            controller.free()
                        )
                        // #endif
                        this.integrationParameters = undefined
                        this.islands = undefined
                        this.broadPhase = undefined
                        this.narrowPhase = undefined
                        this.bodies = undefined
                        this.colliders = undefined
                        this.ccdSolver = undefined
                        this.impulseJoints = undefined
                        this.multibodyJoints = undefined
                        this.queryPipeline = undefined
                        this.physicsPipeline = undefined
                        this.serializationPipeline = undefined
                        this.debugRenderPipeline = undefined
                        this.characterControllers = undefined
                        // #if DIM3
                        this.vehicleControllers = undefined
                        // #endif
                    }
                    static fromRaw(raw) {
                        if (!raw) return null
                        return new World(
                            (0, _math.VectorOps).fromRaw(raw.takeGravity()),
                            raw.takeIntegrationParameters(),
                            raw.takeIslandManager(),
                            raw.takeBroadPhase(),
                            raw.takeNarrowPhase(),
                            raw.takeBodies(),
                            raw.takeColliders(),
                            raw.takeImpulseJoints(),
                            raw.takeMultibodyJoints()
                        )
                    }
                    /**
                     * Takes a snapshot of this world.
                     *
                     * Use `World.restoreSnapshot` to create a new physics world with a state identical to
                     * the state when `.takeSnapshot()` is called.
                     */ takeSnapshot() {
                        return this.serializationPipeline.serializeAll(
                            this.gravity,
                            this.integrationParameters,
                            this.islands,
                            this.broadPhase,
                            this.narrowPhase,
                            this.bodies,
                            this.colliders,
                            this.impulseJoints,
                            this.multibodyJoints
                        )
                    }
                    /**
                     * Creates a new physics world from a snapshot.
                     *
                     * This new physics world will be an identical copy of the snapshoted physics world.
                     */ static restoreSnapshot(data) {
                        let deser = new (0,
                        _serializationPipeline.SerializationPipeline)()
                        return deser.deserializeAll(data)
                    }
                    /**
                     * Computes all the lines (and their colors) needed to render the scene.
                     */ debugRender() {
                        this.debugRenderPipeline.render(
                            this.bodies,
                            this.colliders,
                            this.impulseJoints,
                            this.multibodyJoints,
                            this.narrowPhase
                        )
                        return new (0, _debugRenderPipeline.DebugRenderBuffers)(
                            this.debugRenderPipeline.vertices,
                            this.debugRenderPipeline.colors
                        )
                    }
                    /**
                     * Advance the simulation by one time step.
                     *
                     * All events generated by the physics engine are ignored.
                     *
                     * @param EventQueue - (optional) structure responsible for collecting
                     *   events generated by the physics engine.
                     */ step(eventQueue, hooks) {
                        this.physicsPipeline.step(
                            this.gravity,
                            this.integrationParameters,
                            this.islands,
                            this.broadPhase,
                            this.narrowPhase,
                            this.bodies,
                            this.colliders,
                            this.impulseJoints,
                            this.multibodyJoints,
                            this.ccdSolver,
                            eventQueue,
                            hooks
                        )
                        this.queryPipeline.update(this.colliders)
                    }
                    /**
                     * Update colliders positions after rigid-bodies moved.
                     *
                     * When a rigid-body moves, the positions of the colliders attached to it need to be updated. This update is
                     * generally automatically done at the beginning and the end of each simulation step with World.step.
                     * If the positions need to be updated without running a simulation step this method can be called manually.
                     */ propagateModifiedBodyPositionsToColliders() {
                        this.bodies.raw.propagateModifiedBodyPositionsToColliders(
                            this.colliders.raw
                        )
                    }
                    /**
                     * Ensure subsequent scene queries take into account the collider positions set before this method is called.
                     *
                     * This does not step the physics simulation forward.
                     */ updateSceneQueries() {
                        this.propagateModifiedBodyPositionsToColliders()
                        this.queryPipeline.update(this.colliders)
                    }
                    /**
                     * The current simulation timestep.
                     */ get timestep() {
                        return this.integrationParameters.dt
                    }
                    /**
                     * Sets the new simulation timestep.
                     *
                     * The simulation timestep governs by how much the physics state of the world will
                     * be integrated. A simulation timestep should:
                     * - be as small as possible. Typical values evolve around 0.016 (assuming the chosen unit is milliseconds,
                     * corresponds to the time between two frames of a game running at 60FPS).
                     * - not vary too much during the course of the simulation. A timestep with large variations may
                     * cause instabilities in the simulation.
                     *
                     * @param dt - The timestep length, in seconds.
                     */ set timestep(dt) {
                        this.integrationParameters.dt = dt
                    }
                    /**
                     * The approximate size of most dynamic objects in the scene.
                     *
                     * See the documentation of the `World.lengthUnit` setter for further details.
                     */ get lengthUnit() {
                        return this.integrationParameters.lengthUnit
                    }
                    /**
                     * The approximate size of most dynamic objects in the scene.
                     *
                     * This value is used internally to estimate some length-based tolerance. In particular, the
                     * values `IntegrationParameters.allowedLinearError`,
                     * `IntegrationParameters.maxPenetrationCorrection`,
                     * `IntegrationParameters.predictionDistance`, `RigidBodyActivation.linearThreshold`
                     * are scaled by this value implicitly.
                     *
                     * This value can be understood as the number of units-per-meter in your physical world compared
                     * to a human-sized world in meter. For example, in a 2d game, if your typical object size is 100
                     * pixels, set the `[`Self::length_unit`]` parameter to 100.0. The physics engine will interpret
                     * it as if 100 pixels is equivalent to 1 meter in its various internal threshold.
                     * (default `1.0`).
                     */ set lengthUnit(unitsPerMeter) {
                        this.integrationParameters.lengthUnit = unitsPerMeter
                    }
                    /**
                     * The number of solver iterations run by the constraints solver for calculating forces (default: `4`).
                     */ get numSolverIterations() {
                        return this.integrationParameters.numSolverIterations
                    }
                    /**
                     * Sets the number of solver iterations run by the constraints solver for calculating forces (default: `4`).
                     *
                     * The greater this value is, the most rigid and realistic the physics simulation will be.
                     * However a greater number of iterations is more computationally intensive.
                     *
                     * @param niter - The new number of solver iterations.
                     */ set numSolverIterations(niter) {
                        this.integrationParameters.numSolverIterations = niter
                    }
                    /**
                     * Number of addition friction resolution iteration run during the last solver sub-step (default: `4`).
                     */ get numAdditionalFrictionIterations() {
                        return this.integrationParameters
                            .numAdditionalFrictionIterations
                    }
                    /**
                     * Sets the number of addition friction resolution iteration run during the last solver sub-step (default: `4`).
                     *
                     * The greater this value is, the most realistic friction will be.
                     * However a greater number of iterations is more computationally intensive.
                     *
                     * @param niter - The new number of additional friction iterations.
                     */ set numAdditionalFrictionIterations(niter) {
                        this.integrationParameters.numAdditionalFrictionIterations =
                            niter
                    }
                    /**
                     * Number of internal Project Gauss Seidel (PGS) iterations run at each solver iteration (default: `1`).
                     */ get numInternalPgsIterations() {
                        return this.integrationParameters
                            .numInternalPgsIterations
                    }
                    /**
                     * Sets the Number of internal Project Gauss Seidel (PGS) iterations run at each solver iteration (default: `1`).
                     *
                     * Increasing this parameter will improve stability of the simulation. It will have a lesser effect than
                     * increasing `numSolverIterations` but is also less computationally expensive.
                     *
                     * @param niter - The new number of internal PGS iterations.
                     */ set numInternalPgsIterations(niter) {
                        this.integrationParameters.numInternalPgsIterations =
                            niter
                    }
                    /// Configures the integration parameters to match the old PGS solver
                    /// from Rapier JS version <= 0.11.
                    ///
                    /// This solver was slightly faster than the new one but resulted
                    /// in less stable joints and worse convergence rates.
                    ///
                    /// This should only be used for comparison purpose or if you are
                    /// experiencing problems with the new solver.
                    ///
                    /// NOTE: this does not affect any `RigidBody.additional_solver_iterations` that will
                    ///       still create solver iterations based on the new "small-steps" PGS solver.
                    switchToStandardPgsSolver() {
                        this.integrationParameters.switchToStandardPgsSolver()
                    }
                    /// Configures the integration parameters to match the new "small-steps" PGS solver
                    /// from Rapier version >= 0.12.
                    ///
                    /// The "small-steps" PGS solver is the default one when creating the physics world. So
                    /// calling this function is generally not needed unless `World.switch_to_standard_pgs_solver`
                    /// was called.
                    ///
                    /// This solver results in more stable joints and significantly better convergence
                    /// rates but is slightly slower in its default settings.
                    switchToSmallStepsPgsSolver() {
                        this.integrationParameters.switchToSmallStepsPgsSolver()
                    }
                    /// Configures the integration parameters to match the new "small-steps" PGS solver
                    /// from Rapier version >= 0.12. Warmstarting is disabled.
                    ///
                    /// The "small-steps" PGS solver is the default one when creating the physics world. So
                    /// calling this function is generally not needed unless `World.switch_to_standard_pgs_solver`
                    /// was called.
                    ///
                    /// This solver results in more stable joints and significantly better convergence
                    /// rates but is slightly slower in its default settings.
                    switchToSmallStepsPgsSolverWithoutWarmstart() {
                        this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart()
                    }
                    /**
                     * Creates a new rigid-body from the given rigid-body descriptor.
                     *
                     * @param body - The description of the rigid-body to create.
                     */ createRigidBody(body) {
                        return this.bodies.createRigidBody(this.colliders, body)
                    }
                    /**
                     * Creates a new character controller.
                     *
                     * @param offset - The artificial gap added between the character’s chape and its environment.
                     */ createCharacterController(offset) {
                        let controller = new (0,
                        _control.KinematicCharacterController)(
                            offset,
                            this.integrationParameters,
                            this.bodies,
                            this.colliders,
                            this.queryPipeline
                        )
                        this.characterControllers.add(controller)
                        return controller
                    }
                    /**
                     * Removes a character controller from this world.
                     *
                     * @param controller - The character controller to remove.
                     */ removeCharacterController(controller) {
                        this.characterControllers.delete(controller)
                        controller.free()
                    }
                    // #if DIM3
                    /**
                     * Creates a new vehicle controller.
                     *
                     * @param chassis - The rigid-body used as the chassis of the vehicle controller. When the vehicle
                     *                  controller is updated, it will change directly the rigid-body’s velocity. This
                     *                  rigid-body must be a dynamic or kinematic-velocity-based rigid-body.
                     */ createVehicleController(chassis) {
                        let controller = new (0,
                        _control.DynamicRayCastVehicleController)(
                            chassis,
                            this.bodies,
                            this.colliders,
                            this.queryPipeline
                        )
                        this.vehicleControllers.add(controller)
                        return controller
                    }
                    /**
                     * Removes a vehicle controller from this world.
                     *
                     * @param controller - The vehicle controller to remove.
                     */ removeVehicleController(controller) {
                        this.vehicleControllers.delete(controller)
                        controller.free()
                    }
                    // #endif
                    /**
                     * Creates a new collider.
                     *
                     * @param desc - The description of the collider.
                     * @param parent - The rigid-body this collider is attached to.
                     */ createCollider(desc, parent) {
                        let parentHandle = parent ? parent.handle : undefined
                        return this.colliders.createCollider(
                            this.bodies,
                            desc,
                            parentHandle
                        )
                    }
                    /**
                     * Creates a new impulse joint from the given joint descriptor.
                     *
                     * @param params - The description of the joint to create.
                     * @param parent1 - The first rigid-body attached to this joint.
                     * @param parent2 - The second rigid-body attached to this joint.
                     * @param wakeUp - Should the attached rigid-bodies be awakened?
                     */ createImpulseJoint(params, parent1, parent2, wakeUp) {
                        return this.impulseJoints.createJoint(
                            this.bodies,
                            params,
                            parent1.handle,
                            parent2.handle,
                            wakeUp
                        )
                    }
                    /**
                     * Creates a new multibody joint from the given joint descriptor.
                     *
                     * @param params - The description of the joint to create.
                     * @param parent1 - The first rigid-body attached to this joint.
                     * @param parent2 - The second rigid-body attached to this joint.
                     * @param wakeUp - Should the attached rigid-bodies be awakened?
                     */ createMultibodyJoint(params, parent1, parent2, wakeUp) {
                        return this.multibodyJoints.createJoint(
                            params,
                            parent1.handle,
                            parent2.handle,
                            wakeUp
                        )
                    }
                    /**
                     * Retrieves a rigid-body from its handle.
                     *
                     * @param handle - The integer handle of the rigid-body to retrieve.
                     */ getRigidBody(handle) {
                        return this.bodies.get(handle)
                    }
                    /**
                     * Retrieves a collider from its handle.
                     *
                     * @param handle - The integer handle of the collider to retrieve.
                     */ getCollider(handle) {
                        return this.colliders.get(handle)
                    }
                    /**
                     * Retrieves an impulse joint from its handle.
                     *
                     * @param handle - The integer handle of the impulse joint to retrieve.
                     */ getImpulseJoint(handle) {
                        return this.impulseJoints.get(handle)
                    }
                    /**
                     * Retrieves an multibody joint from its handle.
                     *
                     * @param handle - The integer handle of the multibody joint to retrieve.
                     */ getMultibodyJoint(handle) {
                        return this.multibodyJoints.get(handle)
                    }
                    /**
                     * Removes the given rigid-body from this physics world.
                     *
                     * This will remove this rigid-body as well as all its attached colliders and joints.
                     * Every other bodies touching or attached by joints to this rigid-body will be woken-up.
                     *
                     * @param body - The rigid-body to remove.
                     */ removeRigidBody(body) {
                        if (this.bodies)
                            this.bodies.remove(
                                body.handle,
                                this.islands,
                                this.colliders,
                                this.impulseJoints,
                                this.multibodyJoints
                            )
                    }
                    /**
                     * Removes the given collider from this physics world.
                     *
                     * @param collider - The collider to remove.
                     * @param wakeUp - If set to `true`, the rigid-body this collider is attached to will be awaken.
                     */ removeCollider(collider, wakeUp) {
                        if (this.colliders)
                            this.colliders.remove(
                                collider.handle,
                                this.islands,
                                this.bodies,
                                wakeUp
                            )
                    }
                    /**
                     * Removes the given impulse joint from this physics world.
                     *
                     * @param joint - The impulse joint to remove.
                     * @param wakeUp - If set to `true`, the rigid-bodies attached by this joint will be awaken.
                     */ removeImpulseJoint(joint, wakeUp) {
                        if (this.impulseJoints)
                            this.impulseJoints.remove(joint.handle, wakeUp)
                    }
                    /**
                     * Removes the given multibody joint from this physics world.
                     *
                     * @param joint - The multibody joint to remove.
                     * @param wakeUp - If set to `true`, the rigid-bodies attached by this joint will be awaken.
                     */ removeMultibodyJoint(joint, wakeUp) {
                        if (this.impulseJoints)
                            this.multibodyJoints.remove(joint.handle, wakeUp)
                    }
                    /**
                     * Applies the given closure to each collider managed by this physics world.
                     *
                     * @param f(collider) - The function to apply to each collider managed by this physics world. Called as `f(collider)`.
                     */ forEachCollider(f) {
                        this.colliders.forEach(f)
                    }
                    /**
                     * Applies the given closure to each rigid-body managed by this physics world.
                     *
                     * @param f(body) - The function to apply to each rigid-body managed by this physics world. Called as `f(collider)`.
                     */ forEachRigidBody(f) {
                        this.bodies.forEach(f)
                    }
                    /**
                     * Applies the given closure to each active rigid-body managed by this physics world.
                     *
                     * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
                     * the physics engine in order to save computational power. A sleeping rigid-body never moves
                     * unless it is moved manually by the user.
                     *
                     * @param f - The function to apply to each active rigid-body managed by this physics world. Called as `f(collider)`.
                     */ forEachActiveRigidBody(f) {
                        this.bodies.forEachActiveRigidBody(this.islands, f)
                    }
                    /**
                     * Find the closest intersection between a ray and the physics world.
                     *
                     * @param ray - The ray to cast.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
                     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
                     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
                     *   whereas `false` implies that all shapes are hollow for this ray-cast.
                     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
                     * @param filter - The callback to filter out which collider will be hit.
                     */ castRay(
                        ray,
                        maxToi,
                        solid,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        return this.queryPipeline.castRay(
                            this.bodies,
                            this.colliders,
                            ray,
                            maxToi,
                            solid,
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider
                                ? filterExcludeCollider.handle
                                : null,
                            filterExcludeRigidBody
                                ? filterExcludeRigidBody.handle
                                : null,
                            this.colliders.castClosure(filterPredicate)
                        )
                    }
                    /**
                     * Find the closest intersection between a ray and the physics world.
                     *
                     * This also computes the normal at the hit point.
                     * @param ray - The ray to cast.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
                     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
                     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
                     *   whereas `false` implies that all shapes are hollow for this ray-cast.
                     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
                     */ castRayAndGetNormal(
                        ray,
                        maxToi,
                        solid,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        return this.queryPipeline.castRayAndGetNormal(
                            this.bodies,
                            this.colliders,
                            ray,
                            maxToi,
                            solid,
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider
                                ? filterExcludeCollider.handle
                                : null,
                            filterExcludeRigidBody
                                ? filterExcludeRigidBody.handle
                                : null,
                            this.colliders.castClosure(filterPredicate)
                        )
                    }
                    /**
                     * Cast a ray and collects all the intersections between a ray and the scene.
                     *
                     * @param ray - The ray to cast.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
                     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
                     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
                     *   whereas `false` implies that all shapes are hollow for this ray-cast.
                     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
                     * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
                     *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
                     */ intersectionsWithRay(
                        ray,
                        maxToi,
                        solid,
                        callback,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        this.queryPipeline.intersectionsWithRay(
                            this.bodies,
                            this.colliders,
                            ray,
                            maxToi,
                            solid,
                            callback,
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider
                                ? filterExcludeCollider.handle
                                : null,
                            filterExcludeRigidBody
                                ? filterExcludeRigidBody.handle
                                : null,
                            this.colliders.castClosure(filterPredicate)
                        )
                    }
                    /**
                     * Gets the handle of up to one collider intersecting the given shape.
                     *
                     * @param shapePos - The position of the shape used for the intersection test.
                     * @param shapeRot - The orientation of the shape used for the intersection test.
                     * @param shape - The shape used for the intersection test.
                     * @param groups - The bit groups and filter associated to the ray, in order to only
                     *   hit the colliders with collision groups compatible with the ray's group.
                     */ intersectionWithShape(
                        shapePos,
                        shapeRot,
                        shape,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        let handle = this.queryPipeline.intersectionWithShape(
                            this.bodies,
                            this.colliders,
                            shapePos,
                            shapeRot,
                            shape,
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider
                                ? filterExcludeCollider.handle
                                : null,
                            filterExcludeRigidBody
                                ? filterExcludeRigidBody.handle
                                : null,
                            this.colliders.castClosure(filterPredicate)
                        )
                        return handle != null
                            ? this.colliders.get(handle)
                            : null
                    }
                    /**
                     * Find the projection of a point on the closest collider.
                     *
                     * @param point - The point to project.
                     * @param solid - If this is set to `true` then the collider shapes are considered to
                     *   be plain (if the point is located inside of a plain shape, its projection is the point
                     *   itself). If it is set to `false` the collider shapes are considered to be hollow
                     *   (if the point is located inside of an hollow shape, it is projected on the shape's
                     *   boundary).
                     * @param groups - The bit groups and filter associated to the point to project, in order to only
                     *   project on colliders with collision groups compatible with the ray's group.
                     */ projectPoint(
                        point,
                        solid,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        return this.queryPipeline.projectPoint(
                            this.bodies,
                            this.colliders,
                            point,
                            solid,
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider
                                ? filterExcludeCollider.handle
                                : null,
                            filterExcludeRigidBody
                                ? filterExcludeRigidBody.handle
                                : null,
                            this.colliders.castClosure(filterPredicate)
                        )
                    }
                    /**
                     * Find the projection of a point on the closest collider.
                     *
                     * @param point - The point to project.
                     * @param groups - The bit groups and filter associated to the point to project, in order to only
                     *   project on colliders with collision groups compatible with the ray's group.
                     */ projectPointAndGetFeature(
                        point,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        return this.queryPipeline.projectPointAndGetFeature(
                            this.bodies,
                            this.colliders,
                            point,
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider
                                ? filterExcludeCollider.handle
                                : null,
                            filterExcludeRigidBody
                                ? filterExcludeRigidBody.handle
                                : null,
                            this.colliders.castClosure(filterPredicate)
                        )
                    }
                    /**
                     * Find all the colliders containing the given point.
                     *
                     * @param point - The point used for the containment test.
                     * @param groups - The bit groups and filter associated to the point to test, in order to only
                     *   test on colliders with collision groups compatible with the ray's group.
                     * @param callback - A function called with the handles of each collider with a shape
                     *   containing the `point`.
                     */ intersectionsWithPoint(
                        point,
                        callback,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        this.queryPipeline.intersectionsWithPoint(
                            this.bodies,
                            this.colliders,
                            point,
                            this.colliders.castClosure(callback),
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider
                                ? filterExcludeCollider.handle
                                : null,
                            filterExcludeRigidBody
                                ? filterExcludeRigidBody.handle
                                : null,
                            this.colliders.castClosure(filterPredicate)
                        )
                    }
                    /**
                     * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
                     * This is similar to ray-casting except that we are casting a whole shape instead of
                     * just a point (the ray origin).
                     *
                     * @param shapePos - The initial position of the shape to cast.
                     * @param shapeRot - The initial rotation of the shape to cast.
                     * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
                     * @param shape - The shape to cast.
                     * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
                     *                         will be returned.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
                     * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
                     *   the shape is penetrating another shape at its starting point **and** its trajectory is such
                     *   that it’s on a path to exit that penetration state.
                     * @param groups - The bit groups and filter associated to the shape to cast, in order to only
                     *   test on colliders with collision groups compatible with this group.
                     */ castShape(
                        shapePos,
                        shapeRot,
                        shapeVel,
                        shape,
                        targetDistance,
                        maxToi,
                        stopAtPenetration,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        return this.queryPipeline.castShape(
                            this.bodies,
                            this.colliders,
                            shapePos,
                            shapeRot,
                            shapeVel,
                            shape,
                            targetDistance,
                            maxToi,
                            stopAtPenetration,
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider
                                ? filterExcludeCollider.handle
                                : null,
                            filterExcludeRigidBody
                                ? filterExcludeRigidBody.handle
                                : null,
                            this.colliders.castClosure(filterPredicate)
                        )
                    }
                    /**
                     * Retrieve all the colliders intersecting the given shape.
                     *
                     * @param shapePos - The position of the shape to test.
                     * @param shapeRot - The orientation of the shape to test.
                     * @param shape - The shape to test.
                     * @param groups - The bit groups and filter associated to the shape to test, in order to only
                     *   test on colliders with collision groups compatible with this group.
                     * @param callback - A function called with the handles of each collider intersecting the `shape`.
                     */ intersectionsWithShape(
                        shapePos,
                        shapeRot,
                        shape,
                        callback,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        this.queryPipeline.intersectionsWithShape(
                            this.bodies,
                            this.colliders,
                            shapePos,
                            shapeRot,
                            shape,
                            this.colliders.castClosure(callback),
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider
                                ? filterExcludeCollider.handle
                                : null,
                            filterExcludeRigidBody
                                ? filterExcludeRigidBody.handle
                                : null,
                            this.colliders.castClosure(filterPredicate)
                        )
                    }
                    /**
                     * Finds the handles of all the colliders with an AABB intersecting the given AABB.
                     *
                     * @param aabbCenter - The center of the AABB to test.
                     * @param aabbHalfExtents - The half-extents of the AABB to test.
                     * @param callback - The callback that will be called with the handles of all the colliders
                     *                   currently intersecting the given AABB.
                     */ collidersWithAabbIntersectingAabb(
                        aabbCenter,
                        aabbHalfExtents,
                        callback
                    ) {
                        this.queryPipeline.collidersWithAabbIntersectingAabb(
                            aabbCenter,
                            aabbHalfExtents,
                            this.colliders.castClosure(callback)
                        )
                    }
                    /**
                     * Enumerates all the colliders potentially in contact with the given collider.
                     *
                     * @param collider1 - The second collider involved in the contact.
                     * @param f - Closure that will be called on each collider that is in contact with `collider1`.
                     */ contactPairsWith(collider1, f) {
                        this.narrowPhase.contactPairsWith(
                            collider1.handle,
                            this.colliders.castClosure(f)
                        )
                    }
                    /**
                     * Enumerates all the colliders intersecting the given colliders, assuming one of them
                     * is a sensor.
                     */ intersectionPairsWith(collider1, f) {
                        this.narrowPhase.intersectionPairsWith(
                            collider1.handle,
                            this.colliders.castClosure(f)
                        )
                    }
                    /**
                     * Iterates through all the contact manifolds between the given pair of colliders.
                     *
                     * @param collider1 - The first collider involved in the contact.
                     * @param collider2 - The second collider involved in the contact.
                     * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
                     *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
                     *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
                     */ contactPair(collider1, collider2, f) {
                        this.narrowPhase.contactPair(
                            collider1.handle,
                            collider2.handle,
                            f
                        )
                    }
                    /**
                     * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
                     * @param collider1 − The first collider involved in the intersection.
                     * @param collider2 − The second collider involved in the intersection.
                     */ intersectionPair(collider1, collider2) {
                        return this.narrowPhase.intersectionPair(
                            collider1.handle,
                            collider2.handle
                        )
                    }
                }
            },
            {
                '../geometry': 'emjBd',
                '../dynamics': 'gdK69',
                '../math': 'jE0Bx',
                './physics_pipeline': '3qiq6',
                './query_pipeline': 'achMl',
                './serialization_pipeline': 'eQUVD',
                './debug_render_pipeline': 'kZFRQ',
                '../control': '1ULl9',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '3qiq6': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(
                    exports,
                    'PhysicsPipeline',
                    () => PhysicsPipeline
                )
                var _raw = require('../raw')
                var _math = require('../math')
                class PhysicsPipeline {
                    constructor(raw) {
                        this.raw = raw || new (0, _raw.RawPhysicsPipeline)()
                    }
                    free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                    step(
                        gravity,
                        integrationParameters,
                        islands,
                        broadPhase,
                        narrowPhase,
                        bodies,
                        colliders,
                        impulseJoints,
                        multibodyJoints,
                        ccdSolver,
                        eventQueue,
                        hooks
                    ) {
                        let rawG = (0, _math.VectorOps).intoRaw(gravity)
                        if (!!eventQueue)
                            this.raw.stepWithEvents(
                                rawG,
                                integrationParameters.raw,
                                islands.raw,
                                broadPhase.raw,
                                narrowPhase.raw,
                                bodies.raw,
                                colliders.raw,
                                impulseJoints.raw,
                                multibodyJoints.raw,
                                ccdSolver.raw,
                                eventQueue.raw,
                                hooks,
                                !!hooks ? hooks.filterContactPair : null,
                                !!hooks ? hooks.filterIntersectionPair : null
                            )
                        else
                            this.raw.step(
                                rawG,
                                integrationParameters.raw,
                                islands.raw,
                                broadPhase.raw,
                                narrowPhase.raw,
                                bodies.raw,
                                colliders.raw,
                                impulseJoints.raw,
                                multibodyJoints.raw,
                                ccdSolver.raw
                            )
                        rawG.free()
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '../math': 'jE0Bx',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        achMl: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(
                    exports,
                    'QueryFilterFlags',
                    () => QueryFilterFlags
                )
                /**
                 * A pipeline for performing queries on all the colliders of a scene.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `queryPipeline.free()`
                 * once you are done using it (and all the rigid-bodies it created).
                 */ parcelHelpers.export(
                    exports,
                    'QueryPipeline',
                    () => QueryPipeline
                )
                var _raw = require('../raw')
                var _geometry = require('../geometry')
                var _math = require('../math')
                var QueryFilterFlags
                ;(function (QueryFilterFlags) {
                    /**
                     * Exclude from the query any collider attached to a fixed rigid-body and colliders with no rigid-body attached.
                     */ QueryFilterFlags[
                        (QueryFilterFlags['EXCLUDE_FIXED'] = 1)
                    ] = 'EXCLUDE_FIXED'
                    /**
                     * Exclude from the query any collider attached to a dynamic rigid-body.
                     */ QueryFilterFlags[
                        (QueryFilterFlags['EXCLUDE_KINEMATIC'] = 2)
                    ] = 'EXCLUDE_KINEMATIC'
                    /**
                     * Exclude from the query any collider attached to a kinematic rigid-body.
                     */ QueryFilterFlags[
                        (QueryFilterFlags['EXCLUDE_DYNAMIC'] = 4)
                    ] = 'EXCLUDE_DYNAMIC'
                    /**
                     * Exclude from the query any collider that is a sensor.
                     */ QueryFilterFlags[
                        (QueryFilterFlags['EXCLUDE_SENSORS'] = 8)
                    ] = 'EXCLUDE_SENSORS'
                    /**
                     * Exclude from the query any collider that is not a sensor.
                     */ QueryFilterFlags[
                        (QueryFilterFlags['EXCLUDE_SOLIDS'] = 16)
                    ] = 'EXCLUDE_SOLIDS'
                    /**
                     * Excludes all colliders not attached to a dynamic rigid-body.
                     */ QueryFilterFlags[
                        (QueryFilterFlags['ONLY_DYNAMIC'] = 3)
                    ] = 'ONLY_DYNAMIC'
                    /**
                     * Excludes all colliders not attached to a kinematic rigid-body.
                     */ QueryFilterFlags[
                        (QueryFilterFlags['ONLY_KINEMATIC'] = 5)
                    ] = 'ONLY_KINEMATIC'
                    /**
                     * Exclude all colliders attached to a non-fixed rigid-body
                     * (this will not exclude colliders not attached to any rigid-body).
                     */ QueryFilterFlags[(QueryFilterFlags['ONLY_FIXED'] = 6)] =
                        'ONLY_FIXED'
                })(QueryFilterFlags || (QueryFilterFlags = {}))
                class QueryPipeline {
                    constructor(raw) {
                        this.raw = raw || new (0, _raw.RawQueryPipeline)()
                    }
                    /**
                     * Release the WASM memory occupied by this query pipeline.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                    /**
                     * Updates the acceleration structure of the query pipeline.
                     * @param colliders - The set of colliders taking part in this pipeline.
                     */ update(colliders) {
                        this.raw.update(colliders.raw)
                    }
                    /**
                     * Find the closest intersection between a ray and a set of collider.
                     *
                     * @param colliders - The set of colliders taking part in this pipeline.
                     * @param ray - The ray to cast.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
                     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
                     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
                     *   whereas `false` implies that all shapes are hollow for this ray-cast.
                     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
                     * @param filter - The callback to filter out which collider will be hit.
                     */ castRay(
                        bodies,
                        colliders,
                        ray,
                        maxToi,
                        solid,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        let rawOrig = (0, _math.VectorOps).intoRaw(ray.origin)
                        let rawDir = (0, _math.VectorOps).intoRaw(ray.dir)
                        let result = (0, _geometry.RayColliderHit).fromRaw(
                            colliders,
                            this.raw.castRay(
                                bodies.raw,
                                colliders.raw,
                                rawOrig,
                                rawDir,
                                maxToi,
                                solid,
                                filterFlags,
                                filterGroups,
                                filterExcludeCollider,
                                filterExcludeRigidBody,
                                filterPredicate
                            )
                        )
                        rawOrig.free()
                        rawDir.free()
                        return result
                    }
                    /**
                     * Find the closest intersection between a ray and a set of collider.
                     *
                     * This also computes the normal at the hit point.
                     * @param colliders - The set of colliders taking part in this pipeline.
                     * @param ray - The ray to cast.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
                     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
                     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
                     *   whereas `false` implies that all shapes are hollow for this ray-cast.
                     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
                     */ castRayAndGetNormal(
                        bodies,
                        colliders,
                        ray,
                        maxToi,
                        solid,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        let rawOrig = (0, _math.VectorOps).intoRaw(ray.origin)
                        let rawDir = (0, _math.VectorOps).intoRaw(ray.dir)
                        let result = (0,
                        _geometry.RayColliderIntersection).fromRaw(
                            colliders,
                            this.raw.castRayAndGetNormal(
                                bodies.raw,
                                colliders.raw,
                                rawOrig,
                                rawDir,
                                maxToi,
                                solid,
                                filterFlags,
                                filterGroups,
                                filterExcludeCollider,
                                filterExcludeRigidBody,
                                filterPredicate
                            )
                        )
                        rawOrig.free()
                        rawDir.free()
                        return result
                    }
                    /**
                     * Cast a ray and collects all the intersections between a ray and the scene.
                     *
                     * @param colliders - The set of colliders taking part in this pipeline.
                     * @param ray - The ray to cast.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
                     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
                     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
                     *   whereas `false` implies that all shapes are hollow for this ray-cast.
                     * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
                     * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
                     *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
                     */ intersectionsWithRay(
                        bodies,
                        colliders,
                        ray,
                        maxToi,
                        solid,
                        callback,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        let rawOrig = (0, _math.VectorOps).intoRaw(ray.origin)
                        let rawDir = (0, _math.VectorOps).intoRaw(ray.dir)
                        let rawCallback = (rawInter) => {
                            return callback(
                                (0, _geometry.RayColliderIntersection).fromRaw(
                                    colliders,
                                    rawInter
                                )
                            )
                        }
                        this.raw.intersectionsWithRay(
                            bodies.raw,
                            colliders.raw,
                            rawOrig,
                            rawDir,
                            maxToi,
                            solid,
                            rawCallback,
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider,
                            filterExcludeRigidBody,
                            filterPredicate
                        )
                        rawOrig.free()
                        rawDir.free()
                    }
                    /**
                     * Gets the handle of up to one collider intersecting the given shape.
                     *
                     * @param colliders - The set of colliders taking part in this pipeline.
                     * @param shapePos - The position of the shape used for the intersection test.
                     * @param shapeRot - The orientation of the shape used for the intersection test.
                     * @param shape - The shape used for the intersection test.
                     * @param groups - The bit groups and filter associated to the ray, in order to only
                     *   hit the colliders with collision groups compatible with the ray's group.
                     */ intersectionWithShape(
                        bodies,
                        colliders,
                        shapePos,
                        shapeRot,
                        shape,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        let rawPos = (0, _math.VectorOps).intoRaw(shapePos)
                        let rawRot = (0, _math.RotationOps).intoRaw(shapeRot)
                        let rawShape = shape.intoRaw()
                        let result = this.raw.intersectionWithShape(
                            bodies.raw,
                            colliders.raw,
                            rawPos,
                            rawRot,
                            rawShape,
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider,
                            filterExcludeRigidBody,
                            filterPredicate
                        )
                        rawPos.free()
                        rawRot.free()
                        rawShape.free()
                        return result
                    }
                    /**
                     * Find the projection of a point on the closest collider.
                     *
                     * @param colliders - The set of colliders taking part in this pipeline.
                     * @param point - The point to project.
                     * @param solid - If this is set to `true` then the collider shapes are considered to
                     *   be plain (if the point is located inside of a plain shape, its projection is the point
                     *   itself). If it is set to `false` the collider shapes are considered to be hollow
                     *   (if the point is located inside of an hollow shape, it is projected on the shape's
                     *   boundary).
                     * @param groups - The bit groups and filter associated to the point to project, in order to only
                     *   project on colliders with collision groups compatible with the ray's group.
                     */ projectPoint(
                        bodies,
                        colliders,
                        point,
                        solid,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        let rawPoint = (0, _math.VectorOps).intoRaw(point)
                        let result = (0,
                        _geometry.PointColliderProjection).fromRaw(
                            colliders,
                            this.raw.projectPoint(
                                bodies.raw,
                                colliders.raw,
                                rawPoint,
                                solid,
                                filterFlags,
                                filterGroups,
                                filterExcludeCollider,
                                filterExcludeRigidBody,
                                filterPredicate
                            )
                        )
                        rawPoint.free()
                        return result
                    }
                    /**
                     * Find the projection of a point on the closest collider.
                     *
                     * @param colliders - The set of colliders taking part in this pipeline.
                     * @param point - The point to project.
                     * @param groups - The bit groups and filter associated to the point to project, in order to only
                     *   project on colliders with collision groups compatible with the ray's group.
                     */ projectPointAndGetFeature(
                        bodies,
                        colliders,
                        point,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        let rawPoint = (0, _math.VectorOps).intoRaw(point)
                        let result = (0,
                        _geometry.PointColliderProjection).fromRaw(
                            colliders,
                            this.raw.projectPointAndGetFeature(
                                bodies.raw,
                                colliders.raw,
                                rawPoint,
                                filterFlags,
                                filterGroups,
                                filterExcludeCollider,
                                filterExcludeRigidBody,
                                filterPredicate
                            )
                        )
                        rawPoint.free()
                        return result
                    }
                    /**
                     * Find all the colliders containing the given point.
                     *
                     * @param colliders - The set of colliders taking part in this pipeline.
                     * @param point - The point used for the containment test.
                     * @param groups - The bit groups and filter associated to the point to test, in order to only
                     *   test on colliders with collision groups compatible with the ray's group.
                     * @param callback - A function called with the handles of each collider with a shape
                     *   containing the `point`.
                     */ intersectionsWithPoint(
                        bodies,
                        colliders,
                        point,
                        callback,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        let rawPoint = (0, _math.VectorOps).intoRaw(point)
                        this.raw.intersectionsWithPoint(
                            bodies.raw,
                            colliders.raw,
                            rawPoint,
                            callback,
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider,
                            filterExcludeRigidBody,
                            filterPredicate
                        )
                        rawPoint.free()
                    }
                    /**
                     * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
                     * This is similar to ray-casting except that we are casting a whole shape instead of
                     * just a point (the ray origin).
                     *
                     * @param colliders - The set of colliders taking part in this pipeline.
                     * @param shapePos - The initial position of the shape to cast.
                     * @param shapeRot - The initial rotation of the shape to cast.
                     * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
                     * @param shape - The shape to cast.
                     * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
                     *                       will be returned.
                     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
                     *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
                     * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
                     *   the shape is penetrating another shape at its starting point **and** its trajectory is such
                     *   that it’s on a path to exit that penetration state.
                     * @param groups - The bit groups and filter associated to the shape to cast, in order to only
                     *   test on colliders with collision groups compatible with this group.
                     */ castShape(
                        bodies,
                        colliders,
                        shapePos,
                        shapeRot,
                        shapeVel,
                        shape,
                        targetDistance,
                        maxToi,
                        stopAtPenetration,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        let rawPos = (0, _math.VectorOps).intoRaw(shapePos)
                        let rawRot = (0, _math.RotationOps).intoRaw(shapeRot)
                        let rawVel = (0, _math.VectorOps).intoRaw(shapeVel)
                        let rawShape = shape.intoRaw()
                        let result = (0,
                        _geometry.ColliderShapeCastHit).fromRaw(
                            colliders,
                            this.raw.castShape(
                                bodies.raw,
                                colliders.raw,
                                rawPos,
                                rawRot,
                                rawVel,
                                rawShape,
                                targetDistance,
                                maxToi,
                                stopAtPenetration,
                                filterFlags,
                                filterGroups,
                                filterExcludeCollider,
                                filterExcludeRigidBody,
                                filterPredicate
                            )
                        )
                        rawPos.free()
                        rawRot.free()
                        rawVel.free()
                        rawShape.free()
                        return result
                    }
                    /**
                     * Retrieve all the colliders intersecting the given shape.
                     *
                     * @param colliders - The set of colliders taking part in this pipeline.
                     * @param shapePos - The position of the shape to test.
                     * @param shapeRot - The orientation of the shape to test.
                     * @param shape - The shape to test.
                     * @param groups - The bit groups and filter associated to the shape to test, in order to only
                     *   test on colliders with collision groups compatible with this group.
                     * @param callback - A function called with the handles of each collider intersecting the `shape`.
                     */ intersectionsWithShape(
                        bodies,
                        colliders,
                        shapePos,
                        shapeRot,
                        shape,
                        callback,
                        filterFlags,
                        filterGroups,
                        filterExcludeCollider,
                        filterExcludeRigidBody,
                        filterPredicate
                    ) {
                        let rawPos = (0, _math.VectorOps).intoRaw(shapePos)
                        let rawRot = (0, _math.RotationOps).intoRaw(shapeRot)
                        let rawShape = shape.intoRaw()
                        this.raw.intersectionsWithShape(
                            bodies.raw,
                            colliders.raw,
                            rawPos,
                            rawRot,
                            rawShape,
                            callback,
                            filterFlags,
                            filterGroups,
                            filterExcludeCollider,
                            filterExcludeRigidBody,
                            filterPredicate
                        )
                        rawPos.free()
                        rawRot.free()
                        rawShape.free()
                    }
                    /**
                     * Finds the handles of all the colliders with an AABB intersecting the given AABB.
                     *
                     * @param aabbCenter - The center of the AABB to test.
                     * @param aabbHalfExtents - The half-extents of the AABB to test.
                     * @param callback - The callback that will be called with the handles of all the colliders
                     *                   currently intersecting the given AABB.
                     */ collidersWithAabbIntersectingAabb(
                        aabbCenter,
                        aabbHalfExtents,
                        callback
                    ) {
                        let rawCenter = (0, _math.VectorOps).intoRaw(aabbCenter)
                        let rawHalfExtents = (0, _math.VectorOps).intoRaw(
                            aabbHalfExtents
                        )
                        this.raw.collidersWithAabbIntersectingAabb(
                            rawCenter,
                            rawHalfExtents,
                            callback
                        )
                        rawCenter.free()
                        rawHalfExtents.free()
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '../geometry': 'emjBd',
                '../math': 'jE0Bx',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        eQUVD: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * A pipeline for serializing the physics scene.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `queryPipeline.free()`
                 * once you are done using it (and all the rigid-bodies it created).
                 */ parcelHelpers.export(
                    exports,
                    'SerializationPipeline',
                    () => SerializationPipeline
                )
                var _raw = require('../raw')
                var _math = require('../math')
                var _world = require('./world')
                class SerializationPipeline {
                    constructor(raw) {
                        this.raw =
                            raw || new (0, _raw.RawSerializationPipeline)()
                    }
                    /**
                     * Release the WASM memory occupied by this serialization pipeline.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                    /**
                     * Serialize a complete physics state into a single byte array.
                     * @param gravity - The current gravity affecting the simulation.
                     * @param integrationParameters - The integration parameters of the simulation.
                     * @param broadPhase - The broad-phase of the simulation.
                     * @param narrowPhase - The narrow-phase of the simulation.
                     * @param bodies - The rigid-bodies taking part into the simulation.
                     * @param colliders - The colliders taking part into the simulation.
                     * @param impulseJoints - The impulse joints taking part into the simulation.
                     * @param multibodyJoints - The multibody joints taking part into the simulation.
                     */ serializeAll(
                        gravity,
                        integrationParameters,
                        islands,
                        broadPhase,
                        narrowPhase,
                        bodies,
                        colliders,
                        impulseJoints,
                        multibodyJoints
                    ) {
                        let rawGra = (0, _math.VectorOps).intoRaw(gravity)
                        const res = this.raw.serializeAll(
                            rawGra,
                            integrationParameters.raw,
                            islands.raw,
                            broadPhase.raw,
                            narrowPhase.raw,
                            bodies.raw,
                            colliders.raw,
                            impulseJoints.raw,
                            multibodyJoints.raw
                        )
                        rawGra.free()
                        return res
                    }
                    /**
                     * Deserialize the complete physics state from a single byte array.
                     *
                     * @param data - The byte array to deserialize.
                     */ deserializeAll(data) {
                        return (0, _world.World).fromRaw(
                            this.raw.deserializeAll(data)
                        )
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '../math': 'jE0Bx',
                './world': 'jLrGy',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        kZFRQ: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * The vertex and color buffers for debug-redering the physics scene.
                 */ parcelHelpers.export(
                    exports,
                    'DebugRenderBuffers',
                    () => DebugRenderBuffers
                )
                /**
                 * A pipeline for rendering the physics scene.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `debugRenderPipeline.free()`
                 * once you are done using it (and all the rigid-bodies it created).
                 */ parcelHelpers.export(
                    exports,
                    'DebugRenderPipeline',
                    () => DebugRenderPipeline
                )
                var _raw = require('../raw')
                class DebugRenderBuffers {
                    constructor(vertices, colors) {
                        this.vertices = vertices
                        this.colors = colors
                    }
                }
                class DebugRenderPipeline {
                    constructor(raw) {
                        this.raw = raw || new (0, _raw.RawDebugRenderPipeline)()
                    }
                    /**
                     * Release the WASM memory occupied by this serialization pipeline.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                        this.vertices = undefined
                        this.colors = undefined
                    }
                    render(
                        bodies,
                        colliders,
                        impulse_joints,
                        multibody_joints,
                        narrow_phase
                    ) {
                        this.raw.render(
                            bodies.raw,
                            colliders.raw,
                            impulse_joints.raw,
                            multibody_joints.raw,
                            narrow_phase.raw
                        )
                        this.vertices = this.raw.vertices()
                        this.colors = this.raw.colors()
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '1ULl9': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                var _characterController = require('./character_controller')
                parcelHelpers.exportAll(_characterController, exports)
                // #if DIM3
                var _rayCastVehicleController = require('./ray_cast_vehicle_controller') // #endif
                parcelHelpers.exportAll(_rayCastVehicleController, exports)
            },
            {
                './character_controller': 'bwhlN',
                './ray_cast_vehicle_controller': '1xlnM',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        bwhlN: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * A collision between the character and an obstacle hit on its path.
                 */ parcelHelpers.export(
                    exports,
                    'CharacterCollision',
                    () => CharacterCollision
                )
                /**
                 * A character controller for controlling kinematic bodies and parentless colliders by hitting
                 * and sliding against obstacles.
                 */ parcelHelpers.export(
                    exports,
                    'KinematicCharacterController',
                    () => KinematicCharacterController
                )
                var _raw = require('../raw')
                var _math = require('../math')
                class CharacterCollision {}
                class KinematicCharacterController {
                    constructor(offset, params, bodies, colliders, queries) {
                        this.params = params
                        this.bodies = bodies
                        this.colliders = colliders
                        this.queries = queries
                        this.raw = new (0,
                        _raw.RawKinematicCharacterController)(offset)
                        this.rawCharacterCollision = new (0,
                        _raw.RawCharacterCollision)()
                        this._applyImpulsesToDynamicBodies = false
                        this._characterMass = null
                    }
                    /** @internal */ free() {
                        if (!!this.raw) {
                            this.raw.free()
                            this.rawCharacterCollision.free()
                        }
                        this.raw = undefined
                        this.rawCharacterCollision = undefined
                    }
                    /**
                     * The direction that goes "up". Used to determine where the floor is, and the floor’s angle.
                     */ up() {
                        return this.raw.up()
                    }
                    /**
                     * Sets the direction that goes "up". Used to determine where the floor is, and the floor’s angle.
                     */ setUp(vector) {
                        let rawVect = (0, _math.VectorOps).intoRaw(vector)
                        return this.raw.setUp(rawVect)
                    }
                    applyImpulsesToDynamicBodies() {
                        return this._applyImpulsesToDynamicBodies
                    }
                    setApplyImpulsesToDynamicBodies(enabled) {
                        this._applyImpulsesToDynamicBodies = enabled
                    }
                    /**
                     * Returns the custom value of the character mass, if it was set by `this.setCharacterMass`.
                     */ characterMass() {
                        return this._characterMass
                    }
                    /**
                     * Set the mass of the character to be used for impulse resolution if `self.applyImpulsesToDynamicBodies`
                     * is set to `true`.
                     *
                     * If no character mass is set explicitly (or if it is set to `null`) it is automatically assumed to be equal
                     * to the mass of the rigid-body the character collider is attached to; or equal to 0 if the character collider
                     * isn’t attached to any rigid-body.
                     *
                     * @param mass - The mass to set.
                     */ setCharacterMass(mass) {
                        this._characterMass = mass
                    }
                    /**
                     * A small gap to preserve between the character and its surroundings.
                     *
                     * This value should not be too large to avoid visual artifacts, but shouldn’t be too small
                     * (must not be zero) to improve numerical stability of the character controller.
                     */ offset() {
                        return this.raw.offset()
                    }
                    /**
                     * Sets a small gap to preserve between the character and its surroundings.
                     *
                     * This value should not be too large to avoid visual artifacts, but shouldn’t be too small
                     * (must not be zero) to improve numerical stability of the character controller.
                     */ setOffset(value) {
                        this.raw.setOffset(value)
                    }
                    /// Increase this number if your character appears to get stuck when sliding against surfaces.
                    ///
                    /// This is a small distance applied to the movement toward the contact normals of shapes hit
                    /// by the character controller. This helps shape-casting not getting stuck in an always-penetrating
                    /// state during the sliding calculation.
                    ///
                    /// This value should remain fairly small since it can introduce artificial "bumps" when sliding
                    /// along a flat surface.
                    normalNudgeFactor() {
                        return this.raw.normalNudgeFactor()
                    }
                    /// Increase this number if your character appears to get stuck when sliding against surfaces.
                    ///
                    /// This is a small distance applied to the movement toward the contact normals of shapes hit
                    /// by the character controller. This helps shape-casting not getting stuck in an always-penetrating
                    /// state during the sliding calculation.
                    ///
                    /// This value should remain fairly small since it can introduce artificial "bumps" when sliding
                    /// along a flat surface.
                    setNormalNudgeFactor(value) {
                        this.raw.setNormalNudgeFactor(value)
                    }
                    /**
                     * Is sliding against obstacles enabled?
                     */ slideEnabled() {
                        return this.raw.slideEnabled()
                    }
                    /**
                     * Enable or disable sliding against obstacles.
                     */ setSlideEnabled(enabled) {
                        this.raw.setSlideEnabled(enabled)
                    }
                    /**
                     * The maximum step height a character can automatically step over.
                     */ autostepMaxHeight() {
                        return this.raw.autostepMaxHeight()
                    }
                    /**
                     * The minimum width of free space that must be available after stepping on a stair.
                     */ autostepMinWidth() {
                        return this.raw.autostepMinWidth()
                    }
                    /**
                     * Can the character automatically step over dynamic bodies too?
                     */ autostepIncludesDynamicBodies() {
                        return this.raw.autostepIncludesDynamicBodies()
                    }
                    /**
                     * Is automatically stepping over small objects enabled?
                     */ autostepEnabled() {
                        return this.raw.autostepEnabled()
                    }
                    /**
                     * Enabled automatically stepping over small objects.
                     *
                     * @param maxHeight - The maximum step height a character can automatically step over.
                     * @param minWidth - The minimum width of free space that must be available after stepping on a stair.
                     * @param includeDynamicBodies - Can the character automatically step over dynamic bodies too?
                     */ enableAutostep(
                        maxHeight,
                        minWidth,
                        includeDynamicBodies
                    ) {
                        this.raw.enableAutostep(
                            maxHeight,
                            minWidth,
                            includeDynamicBodies
                        )
                    }
                    /**
                     * Disable automatically stepping over small objects.
                     */ disableAutostep() {
                        return this.raw.disableAutostep()
                    }
                    /**
                     * The maximum angle (radians) between the floor’s normal and the `up` vector that the
                     * character is able to climb.
                     */ maxSlopeClimbAngle() {
                        return this.raw.maxSlopeClimbAngle()
                    }
                    /**
                     * Sets the maximum angle (radians) between the floor’s normal and the `up` vector that the
                     * character is able to climb.
                     */ setMaxSlopeClimbAngle(angle) {
                        this.raw.setMaxSlopeClimbAngle(angle)
                    }
                    /**
                     * The minimum angle (radians) between the floor’s normal and the `up` vector before the
                     * character starts to slide down automatically.
                     */ minSlopeSlideAngle() {
                        return this.raw.minSlopeSlideAngle()
                    }
                    /**
                     * Sets the minimum angle (radians) between the floor’s normal and the `up` vector before the
                     * character starts to slide down automatically.
                     */ setMinSlopeSlideAngle(angle) {
                        this.raw.setMinSlopeSlideAngle(angle)
                    }
                    /**
                     * If snap-to-ground is enabled, should the character be automatically snapped to the ground if
                     * the distance between the ground and its feet are smaller than the specified threshold?
                     */ snapToGroundDistance() {
                        return this.raw.snapToGroundDistance()
                    }
                    /**
                     * Enables automatically snapping the character to the ground if the distance between
                     * the ground and its feet are smaller than the specified threshold.
                     */ enableSnapToGround(distance) {
                        this.raw.enableSnapToGround(distance)
                    }
                    /**
                     * Disables automatically snapping the character to the ground.
                     */ disableSnapToGround() {
                        this.raw.disableSnapToGround()
                    }
                    /**
                     * Is automatically snapping the character to the ground enabled?
                     */ snapToGroundEnabled() {
                        return this.raw.snapToGroundEnabled()
                    }
                    /**
                     * Computes the movement the given collider is able to execute after hitting and sliding on obstacles.
                     *
                     * @param collider - The collider to move.
                     * @param desiredTranslationDelta - The desired collider movement.
                     * @param filterFlags - Flags for excluding whole subsets of colliders from the obstacles taken into account.
                     * @param filterGroups - Groups for excluding colliders with incompatible collision groups from the obstacles
                     *                       taken into account.
                     * @param filterPredicate - Any collider for which this closure returns `false` will be excluded from the
                     *                          obstacles taken into account.
                     */ computeColliderMovement(
                        collider,
                        desiredTranslationDelta,
                        filterFlags,
                        filterGroups,
                        filterPredicate
                    ) {
                        let rawTranslationDelta = (0, _math.VectorOps).intoRaw(
                            desiredTranslationDelta
                        )
                        this.raw.computeColliderMovement(
                            this.params.dt,
                            this.bodies.raw,
                            this.colliders.raw,
                            this.queries.raw,
                            collider.handle,
                            rawTranslationDelta,
                            this._applyImpulsesToDynamicBodies,
                            this._characterMass,
                            filterFlags,
                            filterGroups,
                            this.colliders.castClosure(filterPredicate)
                        )
                        rawTranslationDelta.free()
                    }
                    /**
                     * The movement computed by the last call to `this.computeColliderMovement`.
                     */ computedMovement() {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.computedMovement()
                        )
                    }
                    /**
                     * The result of ground detection computed by the last call to `this.computeColliderMovement`.
                     */ computedGrounded() {
                        return this.raw.computedGrounded()
                    }
                    /**
                     * The number of collisions against obstacles detected along the path of the last call
                     * to `this.computeColliderMovement`.
                     */ numComputedCollisions() {
                        return this.raw.numComputedCollisions()
                    }
                    /**
                     * Returns the collision against one of the obstacles detected along the path of the last
                     * call to `this.computeColliderMovement`.
                     *
                     * @param i - The i-th collision will be returned.
                     * @param out - If this argument is set, it will be filled with the collision information.
                     */ computedCollision(i, out) {
                        if (
                            !this.raw.computedCollision(
                                i,
                                this.rawCharacterCollision
                            )
                        )
                            return null
                        else {
                            let c = this.rawCharacterCollision
                            out =
                                out !== null && out !== void 0
                                    ? out
                                    : new CharacterCollision()
                            out.translationDeltaApplied = (0,
                            _math.VectorOps).fromRaw(
                                c.translationDeltaApplied()
                            )
                            out.translationDeltaRemaining = (0,
                            _math.VectorOps).fromRaw(
                                c.translationDeltaRemaining()
                            )
                            out.toi = c.toi()
                            out.witness1 = (0, _math.VectorOps).fromRaw(
                                c.worldWitness1()
                            )
                            out.witness2 = (0, _math.VectorOps).fromRaw(
                                c.worldWitness2()
                            )
                            out.normal1 = (0, _math.VectorOps).fromRaw(
                                c.worldNormal1()
                            )
                            out.normal2 = (0, _math.VectorOps).fromRaw(
                                c.worldNormal2()
                            )
                            out.collider = this.colliders.get(c.handle())
                            return out
                        }
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '../math': 'jE0Bx',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '1xlnM': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * A character controller to simulate vehicles using ray-casting for the wheels.
                 */ parcelHelpers.export(
                    exports,
                    'DynamicRayCastVehicleController',
                    () => DynamicRayCastVehicleController
                )
                var _raw = require('../raw')
                var _math = require('../math')
                class DynamicRayCastVehicleController {
                    constructor(chassis, bodies, colliders, queries) {
                        this.raw = new (0,
                        _raw.RawDynamicRayCastVehicleController)(chassis.handle)
                        this.bodies = bodies
                        this.colliders = colliders
                        this.queries = queries
                        this._chassis = chassis
                    }
                    /** @internal */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                    /**
                     * Updates the vehicle’s velocity based on its suspension, engine force, and brake.
                     *
                     * This directly updates the velocity of its chassis rigid-body.
                     *
                     * @param dt - Time increment used to integrate forces.
                     * @param filterFlags - Flag to exclude categories of objects from the wheels’ ray-cast.
                     * @param filterGroups - Only colliders compatible with these groups will be hit by the wheels’ ray-casts.
                     * @param filterPredicate - Callback to filter out which collider will be hit by the wheels’ ray-casts.
                     */ updateVehicle(
                        dt,
                        filterFlags,
                        filterGroups,
                        filterPredicate
                    ) {
                        this.raw.update_vehicle(
                            dt,
                            this.bodies.raw,
                            this.colliders.raw,
                            this.queries.raw,
                            filterFlags,
                            filterGroups,
                            this.colliders.castClosure(filterPredicate)
                        )
                    }
                    /**
                     * The current forward speed of the vehicle.
                     */ currentVehicleSpeed() {
                        return this.raw.current_vehicle_speed()
                    }
                    /**
                     * The rigid-body used as the chassis.
                     */ chassis() {
                        return this._chassis
                    }
                    /**
                     * The chassis’ local _up_ direction (`0 = x, 1 = y, 2 = z`).
                     */ get indexUpAxis() {
                        return this.raw.index_up_axis()
                    }
                    /**
                     * Sets the chassis’ local _up_ direction (`0 = x, 1 = y, 2 = z`).
                     */ set indexUpAxis(axis) {
                        this.raw.set_index_up_axis(axis)
                    }
                    /**
                     * The chassis’ local _forward_ direction (`0 = x, 1 = y, 2 = z`).
                     */ get indexForwardAxis() {
                        return this.raw.index_forward_axis()
                    }
                    /**
                     * Sets the chassis’ local _forward_ direction (`0 = x, 1 = y, 2 = z`).
                     */ set setIndexForwardAxis(axis) {
                        this.raw.set_index_forward_axis(axis)
                    }
                    /**
                     * Adds a new wheel attached to this vehicle.
                     * @param chassisConnectionCs  - The position of the wheel relative to the chassis.
                     * @param directionCs - The direction of the wheel’s suspension, relative to the chassis. The ray-casting will
                     *                      happen following this direction to detect the ground.
                     * @param axleCs - The wheel’s axle axis, relative to the chassis.
                     * @param suspensionRestLength - The rest length of the wheel’s suspension spring.
                     * @param radius - The wheel’s radius.
                     */ addWheel(
                        chassisConnectionCs,
                        directionCs,
                        axleCs,
                        suspensionRestLength,
                        radius
                    ) {
                        let rawChassisConnectionCs = (0,
                        _math.VectorOps).intoRaw(chassisConnectionCs)
                        let rawDirectionCs = (0, _math.VectorOps).intoRaw(
                            directionCs
                        )
                        let rawAxleCs = (0, _math.VectorOps).intoRaw(axleCs)
                        this.raw.add_wheel(
                            rawChassisConnectionCs,
                            rawDirectionCs,
                            rawAxleCs,
                            suspensionRestLength,
                            radius
                        )
                        rawChassisConnectionCs.free()
                        rawDirectionCs.free()
                        rawAxleCs.free()
                    }
                    /**
                     * The number of wheels attached to this vehicle.
                     */ numWheels() {
                        return this.raw.num_wheels()
                    }
                    /*
                     *
                     * Access to wheel properties.
                     *
                     */ /*
                     * Getters + setters
                     */ /**
                     * The position of the i-th wheel, relative to the chassis.
                     */ wheelChassisConnectionPointCs(i) {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.wheel_chassis_connection_point_cs(i)
                        )
                    }
                    /**
                     * Sets the position of the i-th wheel, relative to the chassis.
                     */ setWheelChassisConnectionPointCs(i, value) {
                        let rawValue = (0, _math.VectorOps).intoRaw(value)
                        this.raw.set_wheel_chassis_connection_point_cs(
                            i,
                            rawValue
                        )
                        rawValue.free()
                    }
                    /**
                     * The rest length of the i-th wheel’s suspension spring.
                     */ wheelSuspensionRestLength(i) {
                        return this.raw.wheel_suspension_rest_length(i)
                    }
                    /**
                     * Sets the rest length of the i-th wheel’s suspension spring.
                     */ setWheelSuspensionRestLength(i, value) {
                        this.raw.set_wheel_suspension_rest_length(i, value)
                    }
                    /**
                     * The maximum distance the i-th wheel suspension can travel before and after its resting length.
                     */ wheelMaxSuspensionTravel(i) {
                        return this.raw.wheel_max_suspension_travel(i)
                    }
                    /**
                     * Sets the maximum distance the i-th wheel suspension can travel before and after its resting length.
                     */ setWheelMaxSuspensionTravel(i, value) {
                        this.raw.set_wheel_max_suspension_travel(i, value)
                    }
                    /**
                     * The i-th wheel’s radius.
                     */ wheelRadius(i) {
                        return this.raw.wheel_radius(i)
                    }
                    /**
                     * Sets the i-th wheel’s radius.
                     */ setWheelRadius(i, value) {
                        this.raw.set_wheel_radius(i, value)
                    }
                    /**
                     * The i-th wheel’s suspension stiffness.
                     *
                     * Increase this value if the suspension appears to not push the vehicle strong enough.
                     */ wheelSuspensionStiffness(i) {
                        return this.raw.wheel_suspension_stiffness(i)
                    }
                    /**
                     * Sets the i-th wheel’s suspension stiffness.
                     *
                     * Increase this value if the suspension appears to not push the vehicle strong enough.
                     */ setWheelSuspensionStiffness(i, value) {
                        this.raw.set_wheel_suspension_stiffness(i, value)
                    }
                    /**
                     * The i-th wheel’s suspension’s damping when it is being compressed.
                     */ wheelSuspensionCompression(i) {
                        return this.raw.wheel_suspension_compression(i)
                    }
                    /**
                     * The i-th wheel’s suspension’s damping when it is being compressed.
                     */ setWheelSuspensionCompression(i, value) {
                        this.raw.set_wheel_suspension_compression(i, value)
                    }
                    /**
                     * The i-th wheel’s suspension’s damping when it is being released.
                     *
                     * Increase this value if the suspension appears to overshoot.
                     */ wheelSuspensionRelaxation(i) {
                        return this.raw.wheel_suspension_relaxation(i)
                    }
                    /**
                     * Sets the i-th wheel’s suspension’s damping when it is being released.
                     *
                     * Increase this value if the suspension appears to overshoot.
                     */ setWheelSuspensionRelaxation(i, value) {
                        this.raw.set_wheel_suspension_relaxation(i, value)
                    }
                    /**
                     * The maximum force applied by the i-th wheel’s suspension.
                     */ wheelMaxSuspensionForce(i) {
                        return this.raw.wheel_max_suspension_force(i)
                    }
                    /**
                     * Sets the maximum force applied by the i-th wheel’s suspension.
                     */ setWheelMaxSuspensionForce(i, value) {
                        this.raw.set_wheel_max_suspension_force(i, value)
                    }
                    /**
                     * The maximum amount of braking impulse applied on the i-th wheel to slow down the vehicle.
                     */ wheelBrake(i) {
                        return this.raw.wheel_brake(i)
                    }
                    /**
                     * Set the maximum amount of braking impulse applied on the i-th wheel to slow down the vehicle.
                     */ setWheelBrake(i, value) {
                        this.raw.set_wheel_brake(i, value)
                    }
                    /**
                     * The steering angle (radians) for the i-th wheel.
                     */ wheelSteering(i) {
                        return this.raw.wheel_steering(i)
                    }
                    /**
                     * Sets the steering angle (radians) for the i-th wheel.
                     */ setWheelSteering(i, value) {
                        this.raw.set_wheel_steering(i, value)
                    }
                    /**
                     * The forward force applied by the i-th wheel on the chassis.
                     */ wheelEngineForce(i) {
                        return this.raw.wheel_engine_force(i)
                    }
                    /**
                     * Sets the forward force applied by the i-th wheel on the chassis.
                     */ setWheelEngineForce(i, value) {
                        this.raw.set_wheel_engine_force(i, value)
                    }
                    /**
                     * The direction of the i-th wheel’s suspension, relative to the chassis.
                     *
                     * The ray-casting will happen following this direction to detect the ground.
                     */ wheelDirectionCs(i) {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.wheel_direction_cs(i)
                        )
                    }
                    /**
                     * Sets the direction of the i-th wheel’s suspension, relative to the chassis.
                     *
                     * The ray-casting will happen following this direction to detect the ground.
                     */ setWheelDirectionCs(i, value) {
                        let rawValue = (0, _math.VectorOps).intoRaw(value)
                        this.raw.set_wheel_direction_cs(i, rawValue)
                        rawValue.free()
                    }
                    /**
                     * The i-th wheel’s axle axis, relative to the chassis.
                     *
                     * The axis index defined as 0 = X, 1 = Y, 2 = Z.
                     */ wheelAxleCs(i) {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.wheel_axle_cs(i)
                        )
                    }
                    /**
                     * Sets the i-th wheel’s axle axis, relative to the chassis.
                     *
                     * The axis index defined as 0 = X, 1 = Y, 2 = Z.
                     */ setWheelAxleCs(i, value) {
                        let rawValue = (0, _math.VectorOps).intoRaw(value)
                        this.raw.set_wheel_axle_cs(i, rawValue)
                        rawValue.free()
                    }
                    /**
                     * Parameter controlling how much traction the tire has.
                     *
                     * The larger the value, the more instantaneous braking will happen (with the risk of
                     * causing the vehicle to flip if it’s too strong).
                     */ wheelFrictionSlip(i) {
                        return this.raw.wheel_friction_slip(i)
                    }
                    /**
                     * Sets the parameter controlling how much traction the tire has.
                     *
                     * The larger the value, the more instantaneous braking will happen (with the risk of
                     * causing the vehicle to flip if it’s too strong).
                     */ setWheelFrictionSlip(i, value) {
                        this.raw.set_wheel_friction_slip(i, value)
                    }
                    /**
                     * The multiplier of friction between a tire and the collider it’s on top of.
                     *
                     * The larger the value, the stronger side friction will be.
                     */ wheelSideFrictionStiffness(i) {
                        return this.raw.wheel_side_friction_stiffness(i)
                    }
                    /**
                     * The multiplier of friction between a tire and the collider it’s on top of.
                     *
                     * The larger the value, the stronger side friction will be.
                     */ setWheelSideFrictionStiffness(i, value) {
                        this.raw.set_wheel_side_friction_stiffness(i, value)
                    }
                    /*
                     * Getters only.
                     */ /**
                     *  The i-th wheel’s current rotation angle (radians) on its axle.
                     */ wheelRotation(i) {
                        return this.raw.wheel_rotation(i)
                    }
                    /**
                     *  The forward impulses applied by the i-th wheel on the chassis.
                     */ wheelForwardImpulse(i) {
                        return this.raw.wheel_forward_impulse(i)
                    }
                    /**
                     *  The side impulses applied by the i-th wheel on the chassis.
                     */ wheelSideImpulse(i) {
                        return this.raw.wheel_side_impulse(i)
                    }
                    /**
                     *  The force applied by the i-th wheel suspension.
                     */ wheelSuspensionForce(i) {
                        return this.raw.wheel_suspension_force(i)
                    }
                    /**
                     *  The (world-space) contact normal between the i-th wheel and the floor.
                     */ wheelContactNormal(i) {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.wheel_contact_normal_ws(i)
                        )
                    }
                    /**
                     *  The (world-space) point hit by the wheel’s ray-cast for the i-th wheel.
                     */ wheelContactPoint(i) {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.wheel_contact_point_ws(i)
                        )
                    }
                    /**
                     *  The suspension length for the i-th wheel.
                     */ wheelSuspensionLength(i) {
                        return this.raw.wheel_suspension_length(i)
                    }
                    /**
                     *  The (world-space) starting point of the ray-cast for the i-th wheel.
                     */ wheelHardPoint(i) {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.wheel_hard_point_ws(i)
                        )
                    }
                    /**
                     *  Is the i-th wheel in contact with the ground?
                     */ wheelIsInContact(i) {
                        return this.raw.wheel_is_in_contact(i)
                    }
                    /**
                     *  The collider hit by the ray-cast for the i-th wheel.
                     */ wheelGroundObject(i) {
                        return this.colliders.get(
                            this.raw.wheel_ground_object(i)
                        )
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '../math': 'jE0Bx',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        '4ZpZz': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(
                    exports,
                    'ActiveEvents',
                    () => ActiveEvents
                )
                /**
                 * Event occurring when the sum of the magnitudes of the
                 * contact forces between two colliders exceed a threshold.
                 *
                 * This object should **not** be stored anywhere. Its properties can only be
                 * read from within the closure given to `EventHandler.drainContactForceEvents`.
                 */ parcelHelpers.export(
                    exports,
                    'TempContactForceEvent',
                    () => TempContactForceEvent
                )
                /**
                 * A structure responsible for collecting events generated
                 * by the physics engine.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `eventQueue.free()`
                 * once you are done using it.
                 */ parcelHelpers.export(
                    exports,
                    'EventQueue',
                    () => EventQueue
                )
                var _raw = require('../raw')
                var _math = require('../math')
                var ActiveEvents
                ;(function (ActiveEvents) {
                    ActiveEvents[(ActiveEvents['NONE'] = 0)] = 'NONE'
                    /**
                     * Enable collision events.
                     */ ActiveEvents[(ActiveEvents['COLLISION_EVENTS'] = 1)] =
                        'COLLISION_EVENTS'
                    /**
                     * Enable contact force events.
                     */ ActiveEvents[
                        (ActiveEvents['CONTACT_FORCE_EVENTS'] = 2)
                    ] = 'CONTACT_FORCE_EVENTS'
                })(ActiveEvents || (ActiveEvents = {}))
                class TempContactForceEvent {
                    free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                    /**
                     * The first collider involved in the contact.
                     */ collider1() {
                        return this.raw.collider1()
                    }
                    /**
                     * The second collider involved in the contact.
                     */ collider2() {
                        return this.raw.collider2()
                    }
                    /**
                     * The sum of all the forces between the two colliders.
                     */ totalForce() {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.total_force()
                        )
                    }
                    /**
                     * The sum of the magnitudes of each force between the two colliders.
                     *
                     * Note that this is **not** the same as the magnitude of `self.total_force`.
                     * Here we are summing the magnitude of all the forces, instead of taking
                     * the magnitude of their sum.
                     */ totalForceMagnitude() {
                        return this.raw.total_force_magnitude()
                    }
                    /**
                     * The world-space (unit) direction of the force with strongest magnitude.
                     */ maxForceDirection() {
                        return (0, _math.VectorOps).fromRaw(
                            this.raw.max_force_direction()
                        )
                    }
                    /**
                     * The magnitude of the largest force at a contact point of this contact pair.
                     */ maxForceMagnitude() {
                        return this.raw.max_force_magnitude()
                    }
                }
                class EventQueue {
                    /**
                     * Creates a new event collector.
                     *
                     * @param autoDrain -setting this to `true` is strongly recommended. If true, the collector will
                     * be automatically drained before each `world.step(collector)`. If false, the collector will
                     * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
                     * RAM if no drain is performed.
                     */ constructor(autoDrain, raw) {
                        this.raw = raw || new (0, _raw.RawEventQueue)(autoDrain)
                    }
                    /**
                     * Release the WASM memory occupied by this event-queue.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                    }
                    /**
                     * Applies the given javascript closure on each collision event of this collector, then clear
                     * the internal collision event buffer.
                     *
                     * @param f - JavaScript closure applied to each collision event. The
                     * closure must take three arguments: two integers representing the handles of the colliders
                     * involved in the collision, and a boolean indicating if the collision started (true) or stopped
                     * (false).
                     */ drainCollisionEvents(f) {
                        this.raw.drainCollisionEvents(f)
                    }
                    /**
                     * Applies the given javascript closure on each contact force event of this collector, then clear
                     * the internal collision event buffer.
                     *
                     * @param f - JavaScript closure applied to each collision event. The
                     *            closure must take one `TempContactForceEvent` argument.
                     */ drainContactForceEvents(f) {
                        let event = new TempContactForceEvent()
                        this.raw.drainContactForceEvents((raw) => {
                            event.raw = raw
                            f(event)
                            event.free()
                        })
                    }
                    /**
                     * Removes all events contained by this collector
                     */ clear() {
                        this.raw.clear()
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '../math': 'jE0Bx',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        dHa7c: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                parcelHelpers.export(exports, 'ActiveHooks', () => ActiveHooks)
                parcelHelpers.export(exports, 'SolverFlags', () => SolverFlags)
                var ActiveHooks
                ;(function (ActiveHooks) {
                    ActiveHooks[(ActiveHooks['NONE'] = 0)] = 'NONE'
                    ActiveHooks[(ActiveHooks['FILTER_CONTACT_PAIRS'] = 1)] =
                        'FILTER_CONTACT_PAIRS'
                    ActiveHooks[
                        (ActiveHooks['FILTER_INTERSECTION_PAIRS'] = 2)
                    ] = 'FILTER_INTERSECTION_PAIRS'
                    // MODIFY_SOLVER_CONTACTS = 0b0100, /* Not supported yet in JS. */
                })(ActiveHooks || (ActiveHooks = {}))
                var SolverFlags
                ;(function (SolverFlags) {
                    SolverFlags[(SolverFlags['EMPTY'] = 0)] = 'EMPTY'
                    SolverFlags[(SolverFlags['COMPUTE_IMPULSE'] = 1)] =
                        'COMPUTE_IMPULSE'
                })(SolverFlags || (SolverFlags = {}))
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
        ],
        jlsZM: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
                /**
                 * A set of rigid bodies that can be handled by a physics pipeline.
                 *
                 * To avoid leaking WASM resources, this MUST be freed manually with `colliderSet.free()`
                 * once you are done using it (and all the rigid-bodies it created).
                 */ parcelHelpers.export(
                    exports,
                    'ColliderSet',
                    () => ColliderSet
                )
                var _raw = require('../raw')
                var _coarena = require('../coarena')
                var _math = require('../math')
                var _collider = require('./collider')
                class ColliderSet {
                    constructor(raw) {
                        this.raw = raw || new (0, _raw.RawColliderSet)()
                        this.map = new (0, _coarena.Coarena)()
                        // Initialize the map with the existing elements, if any.
                        if (raw)
                            raw.forEachColliderHandle((handle) => {
                                this.map.set(
                                    handle,
                                    new (0, _collider.Collider)(
                                        this,
                                        handle,
                                        null
                                    )
                                )
                            })
                    }
                    /**
                     * Release the WASM memory occupied by this collider set.
                     */ free() {
                        if (!!this.raw) this.raw.free()
                        this.raw = undefined
                        if (!!this.map) this.map.clear()
                        this.map = undefined
                    }
                    /** @internal */ castClosure(f) {
                        return (handle) => {
                            if (!!f) return f(this.get(handle))
                            else return undefined
                        }
                    }
                    /** @internal */ finalizeDeserialization(bodies) {
                        this.map.forEach((collider) =>
                            collider.finalizeDeserialization(bodies)
                        )
                    }
                    /**
                     * Creates a new collider and return its integer handle.
                     *
                     * @param bodies - The set of bodies where the collider's parent can be found.
                     * @param desc - The collider's description.
                     * @param parentHandle - The integer handle of the rigid-body this collider is attached to.
                     */ createCollider(bodies, desc, parentHandle) {
                        let hasParent =
                            parentHandle != undefined && parentHandle != null
                        if (hasParent && isNaN(parentHandle))
                            throw Error(
                                'Cannot create a collider with a parent rigid-body handle that is not a number.'
                            )
                        let rawShape = desc.shape.intoRaw()
                        let rawTra = (0, _math.VectorOps).intoRaw(
                            desc.translation
                        )
                        let rawRot = (0, _math.RotationOps).intoRaw(
                            desc.rotation
                        )
                        let rawCom = (0, _math.VectorOps).intoRaw(
                            desc.centerOfMass
                        )
                        // #if DIM3
                        let rawPrincipalInertia = (0, _math.VectorOps).intoRaw(
                            desc.principalAngularInertia
                        )
                        let rawInertiaFrame = (0, _math.RotationOps).intoRaw(
                            desc.angularInertiaLocalFrame
                        )
                        // #endif
                        let handle = this.raw.createCollider(
                            desc.enabled,
                            rawShape,
                            rawTra,
                            rawRot,
                            desc.massPropsMode,
                            desc.mass,
                            rawCom, // #if DIM3
                            rawPrincipalInertia,
                            rawInertiaFrame, // #endif
                            desc.density,
                            desc.friction,
                            desc.restitution,
                            desc.frictionCombineRule,
                            desc.restitutionCombineRule,
                            desc.isSensor,
                            desc.collisionGroups,
                            desc.solverGroups,
                            desc.activeCollisionTypes,
                            desc.activeHooks,
                            desc.activeEvents,
                            desc.contactForceEventThreshold,
                            desc.contactSkin,
                            hasParent,
                            hasParent ? parentHandle : 0,
                            bodies.raw
                        )
                        rawShape.free()
                        rawTra.free()
                        rawRot.free()
                        rawCom.free()
                        // #if DIM3
                        rawPrincipalInertia.free()
                        rawInertiaFrame.free()
                        // #endif
                        let parent = hasParent ? bodies.get(parentHandle) : null
                        let collider = new (0, _collider.Collider)(
                            this,
                            handle,
                            parent,
                            desc.shape
                        )
                        this.map.set(handle, collider)
                        return collider
                    }
                    /**
                     * Remove a collider from this set.
                     *
                     * @param handle - The integer handle of the collider to remove.
                     * @param bodies - The set of rigid-body containing the rigid-body the collider is attached to.
                     * @param wakeUp - If `true`, the rigid-body the removed collider is attached to will be woken-up automatically.
                     */ remove(handle, islands, bodies, wakeUp) {
                        this.raw.remove(handle, islands.raw, bodies.raw, wakeUp)
                        this.unmap(handle)
                    }
                    /**
                     * Internal function, do not call directly.
                     * @param handle
                     */ unmap(handle) {
                        this.map.delete(handle)
                    }
                    /**
                     * Gets the rigid-body with the given handle.
                     *
                     * @param handle - The handle of the rigid-body to retrieve.
                     */ get(handle) {
                        return this.map.get(handle)
                    }
                    /**
                     * The number of colliders on this set.
                     */ len() {
                        return this.map.len()
                    }
                    /**
                     * Does this set contain a collider with the given handle?
                     *
                     * @param handle - The collider handle to check.
                     */ contains(handle) {
                        return this.get(handle) != null
                    }
                    /**
                     * Applies the given closure to each collider contained by this set.
                     *
                     * @param f - The closure to apply.
                     */ forEach(f) {
                        this.map.forEach(f)
                    }
                    /**
                     * Gets all colliders in the list.
                     *
                     * @returns collider list.
                     */ getAll() {
                        return this.map.getAll()
                    }
                }
            },
            {
                '../raw': '7Eciy',
                '../coarena': 'eaS82',
                '../math': 'jE0Bx',
                './collider': '5bsoq',
                '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
            },
        ],
        fH1HE: [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
        ],
        '9JgNA': [
            function (require, module, exports, __globalThis) {
                var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js')
                parcelHelpers.defineInteropFlag(exports)
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
        ],
    },
    ['cKO3M'],
    null,
    'parcelRequire94c2'
)

//# sourceMappingURL=rapier.17787fcb.js.map
