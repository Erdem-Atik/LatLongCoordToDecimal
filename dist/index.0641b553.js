// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7Aums":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
"use strict";
var utm = require("9fb2114475f06efe");
const inpValue = document.getElementById("inputCoord");
const inpbtn = document.getElementById("inputBtn");
let coordValue;
const inpCoord = inpbtn.addEventListener("click", function(event) {
    event.preventDefault();
    coordValue = inpValue.value;
    console.log(parseLatLong(coordValue));
});
function parseLatLong(input) {
    if (!(input.toUpperCase() != input.toLowerCase())) return `${input}:the coordinate already seems as decimal`;
    const parts = input.split(/[°'"]+/).join(" ").split(/[^\w\S]+/); // thanks to Shannon Antonio Black(StackoverFlow user) for regEx patterns 
    const replacedComa = parts.map((el)=>el.replace(",", ".")) // in case the given numbers include comma as decimal separator
    ;
    const geoLetters = replacedComa.filter((el)=>!+el);
    geoLetters.filter((el)=>{
        return el !== "";
    });
    const coordNumber = replacedComa.filter((n)=>+n).map((nr)=>+nr);
    const latNumber = coordNumber.slice(0, coordNumber.length / 2);
    const longNumber = coordNumber.slice(coordNumber.length / 2);
    const reducer = function(acc, coord, curInd) {
        return acc + coord / Math.pow(60, curInd++);
    };
    let latDec = latNumber.reduce(reducer);
    let longDec = longNumber.reduce(reducer);
    if (geoLetters[0].toUpperCase() === "S" || geoLetters[0].toUpperCase() === "G") latDec = -latDec // G is abr. of güney(it means South in Turkish)
    ;
    if (geoLetters[1].toUpperCase() === "W" || geoLetters[1].toUpperCase() === "B") longDec = -longDec // B is abr. of batı (it means west in Turkish)
    ;
    const dec = [
        {
            ltCoord: latDec,
            geoLet: geoLetters[0]
        },
        {
            longCoord: longDec,
            geoLet: geoLetters[1]
        }
    ];
    return [
        latDec,
        geoLetters[0],
        longDec,
        geoLetters[1]
    ];
}

},{"9fb2114475f06efe":"iL8JN"}],"iL8JN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toLatLon", ()=>toLatLon);
parcelHelpers.export(exports, "fromLatLon", ()=>fromLatLon);
"use strict";
var K0 = 0.9996;
var E = 0.00669438;
var E2 = Math.pow(E, 2);
var E3 = Math.pow(E, 3);
var E_P2 = E / (1 - E);
var SQRT_E = Math.sqrt(1 - E);
var _E = (1 - SQRT_E) / (1 + SQRT_E);
var _E2 = Math.pow(_E, 2);
var _E3 = Math.pow(_E, 3);
var _E4 = Math.pow(_E, 4);
var _E5 = Math.pow(_E, 5);
var M1 = 1 - E / 4 - 3 * E2 / 64 - 5 * E3 / 256;
var M2 = 3 * E / 8 + 3 * E2 / 32 + 45 * E3 / 1024;
var M3 = 15 * E2 / 256 + 45 * E3 / 1024;
var M4 = 35 * E3 / 3072;
var P2 = 1.5 * _E - 27 / 32 * _E3 + 269 / 512 * _E5;
var P3 = 21 / 16 * _E2 - 55 / 32 * _E4;
var P4 = 151 / 96 * _E3 - 417 / 128 * _E5;
var P5 = 1097 / 512 * _E4;
var R = 6378137;
var ZONE_LETTERS = "CDEFGHJKLMNPQRSTUVWXX";
function toLatLon(easting, northing, zoneNum, zoneLetter, northern, strict) {
    strict = strict !== undefined ? strict : true;
    if (!zoneLetter && northern === undefined) throw new Error("either zoneLetter or northern needs to be set");
    else if (zoneLetter && northern !== undefined) throw new Error("set either zoneLetter or northern, but not both");
    if (strict) {
        if (easting < 100000 || 1000000 <= easting) throw new RangeError("easting out of range (must be between 100 000 m and 999 999 m)");
        if (northing < 0 || northing > 10000000) throw new RangeError("northing out of range (must be between 0 m and 10 000 000 m)");
    }
    if (zoneNum < 1 || zoneNum > 60) throw new RangeError("zone number out of range (must be between 1 and 60)");
    if (zoneLetter) {
        zoneLetter = zoneLetter.toUpperCase();
        if (zoneLetter.length !== 1 || ZONE_LETTERS.indexOf(zoneLetter) === -1) throw new RangeError("zone letter out of range (must be between C and X)");
        northern = zoneLetter >= "N";
    }
    var x = easting - 500000;
    var y = northing;
    if (!northern) y -= 1e7;
    var m = y / K0;
    var mu = m / (R * M1);
    var pRad = mu + P2 * Math.sin(2 * mu) + P3 * Math.sin(4 * mu) + P4 * Math.sin(6 * mu) + P5 * Math.sin(8 * mu);
    var pSin = Math.sin(pRad);
    var pSin2 = Math.pow(pSin, 2);
    var pCos = Math.cos(pRad);
    var pTan = Math.tan(pRad);
    var pTan2 = Math.pow(pTan, 2);
    var pTan4 = Math.pow(pTan, 4);
    var epSin = 1 - E * pSin2;
    var epSinSqrt = Math.sqrt(epSin);
    var n = R / epSinSqrt;
    var r = (1 - E) / epSin;
    var c = _E * pCos * pCos;
    var c2 = c * c;
    var d = x / (n * K0);
    var d2 = Math.pow(d, 2);
    var d3 = Math.pow(d, 3);
    var d4 = Math.pow(d, 4);
    var d5 = Math.pow(d, 5);
    var d6 = Math.pow(d, 6);
    var latitude = pRad - pTan / r * (d2 / 2 - d4 / 24 * (5 + 3 * pTan2 + 10 * c - 4 * c2 - 9 * E_P2)) + d6 / 720 * (61 + 90 * pTan2 + 298 * c + 45 * pTan4 - 252 * E_P2 - 3 * c2);
    var longitude = (d - d3 / 6 * (1 + 2 * pTan2 + c) + d5 / 120 * (5 - 2 * c + 28 * pTan2 - 3 * c2 + 8 * E_P2 + 24 * pTan4)) / pCos;
    return {
        latitude: toDegrees(latitude),
        longitude: toDegrees(longitude) + zoneNumberToCentralLongitude(zoneNum)
    };
}
function fromLatLon(latitude, longitude, forceZoneNum) {
    if (latitude > 84 || latitude < -80) throw new RangeError("latitude out of range (must be between 80 deg S and 84 deg N)");
    if (longitude > 180 || longitude < -180) throw new RangeError("longitude out of range (must be between 180 deg W and 180 deg E)");
    var latRad = toRadians(latitude);
    var latSin = Math.sin(latRad);
    var latCos = Math.cos(latRad);
    var latTan = Math.tan(latRad);
    var latTan2 = Math.pow(latTan, 2);
    var latTan4 = Math.pow(latTan, 4);
    var zoneNum;
    if (forceZoneNum === undefined) zoneNum = latLonToZoneNumber(latitude, longitude);
    else zoneNum = forceZoneNum;
    var zoneLetter = latitudeToZoneLetter(latitude);
    var lonRad = toRadians(longitude);
    var centralLon = zoneNumberToCentralLongitude(zoneNum);
    var centralLonRad = toRadians(centralLon);
    var n = R / Math.sqrt(1 - E * latSin * latSin);
    var c = E_P2 * latCos * latCos;
    var a = latCos * (lonRad - centralLonRad);
    var a2 = Math.pow(a, 2);
    var a3 = Math.pow(a, 3);
    var a4 = Math.pow(a, 4);
    var a5 = Math.pow(a, 5);
    var a6 = Math.pow(a, 6);
    var m = R * (M1 * latRad - M2 * Math.sin(2 * latRad) + M3 * Math.sin(4 * latRad) - M4 * Math.sin(6 * latRad));
    var easting = K0 * n * (a + a3 / 6 * (1 - latTan2 + c) + a5 / 120 * (5 - 18 * latTan2 + latTan4 + 72 * c - 58 * E_P2)) + 500000;
    var northing = K0 * (m + n * latTan * (a2 / 2 + a4 / 24 * (5 - latTan2 + 9 * c + 4 * c * c) + a6 / 720 * (61 - 58 * latTan2 + latTan4 + 600 * c - 330 * E_P2)));
    if (latitude < 0) northing += 1e7;
    return {
        easting: easting,
        northing: northing,
        zoneNum: zoneNum,
        zoneLetter: zoneLetter
    };
}
function latitudeToZoneLetter(latitude) {
    if (-80 <= latitude && latitude <= 84) return ZONE_LETTERS[Math.floor((latitude + 80) / 8)];
    else return null;
}
function latLonToZoneNumber(latitude, longitude) {
    if (56 <= latitude && latitude < 64 && 3 <= longitude && longitude < 12) return 32;
    if (72 <= latitude && latitude <= 84 && longitude >= 0) {
        if (longitude < 9) return 31;
        if (longitude < 21) return 33;
        if (longitude < 33) return 35;
        if (longitude < 42) return 37;
    }
    return Math.floor((longitude + 180) / 6) + 1;
}
function zoneNumberToCentralLongitude(zoneNum) {
    return (zoneNum - 1) * 6 - 180 + 3;
}
function toDegrees(rad) {
    return rad / Math.PI * 180;
}
function toRadians(deg) {
    return deg * Math.PI / 180;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["7Aums","bNKaB"], "bNKaB", "parcelRequire94c2")

//# sourceMappingURL=index.0641b553.js.map
