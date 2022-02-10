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
})({"ddCAb":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    bundle.hotData = {
    };
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

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// Import model
var _modelJs = require("./model.js");
// Import views
var _sideMenu = require("./views/sideMenu");
var _sideMenuDefault = parcelHelpers.interopDefault(_sideMenu);
var _nav = require("./views/nav");
var _navDefault = parcelHelpers.interopDefault(_nav);
var _taskList = require("./views/taskList");
var _taskListDefault = parcelHelpers.interopDefault(_taskList);
var _task = require("./views/task");
var _taskDefault = parcelHelpers.interopDefault(_task);
/**
 * Init function
 */ const init = function() {
    removeEmptyTasks();
    resizable();
    _modelJs.openTask(_modelJs.state.tasks.at(-1)?.id);
    _taskListDefault.default.render(_modelJs.state);
    _taskDefault.default.render(_modelJs.state.task);
    _navDefault.default.render(_modelJs.state);
    _taskListDefault.default.addHandlerClick(controlOpenTask);
    _taskListDefault.default.addHandlerSolve(controlSolveTask);
    _taskListDefault.default.addHandlerSearch(controlSearchTask);
    _taskDefault.default.addHandlerSolved(controlSolveTask);
    _taskDefault.default.addHandlerCreateTask(controlCreateTask);
    _taskDefault.default.addHandlerEdit();
    _taskDefault.default.addHandlerSave(controlSaveTask);
};
/**
 * Handler for an empty creating a task
 */ const controlCreateTask = function() {
    _modelJs.createTask('');
    // Render task
    _taskDefault.default.render(_modelJs.state.task);
    // Render tasks
    _taskListDefault.default.render(_modelJs.state);
};
/**
 * Handler for saving a task
 *
 * @param {string} text
 * @param {number} id
 */ const controlSaveTask = function(text, id) {
    // If its existing task
    if (id) {
        if (text.length > 0) _modelJs.updateTask(id, text);
        else _modelJs.solveTask(id); // Otherwise delete (solve) the task
    } else // If not create a task
    _modelJs.createTask(text);
    _modelJs.state.task = Object.keys(_modelJs.state.task).length === 0 ? _modelJs.state.tasks[0] : _modelJs.state.task;
    // Render task
    _taskDefault.default.render(_modelJs.state.task);
    _navDefault.default.render(_modelJs.state);
    // Render tasks
    _taskListDefault.default.render(_modelJs.state);
};
/**
 * Solving (removing) all empty tasks
 */ const removeEmptyTasks = function() {
    _modelJs.state.tasks.filter((task)=>task.task.length <= 0
    ).forEach((task)=>_modelJs.solveTask(task.id)
    );
};
/**
 * Handler for opening a task
 *
 * @param {number} id
 */ const controlOpenTask = function(id) {
    removeEmptyTasks();
    // Opening a task
    _modelJs.openTask(id);
    _taskDefault.default.render(_modelJs.state.task);
    _taskListDefault.default.render(_modelJs.state);
    _navDefault.default.render(_modelJs.state);
};
/**
 * Handler for saving a task
 */ const controlSolveTask = function() {
    // Solving a task
    _modelJs.solveTask();
    // Opening the newest task
    _modelJs.openTask(_modelJs.state.tasks.at(-1)?.id);
    // Render tasks
    _taskListDefault.default.render(_modelJs.state);
    // Rerender task window
    _taskDefault.default.render(_modelJs.state.task);
    _navDefault.default.render(_modelJs.state);
};
/**
 * Handler for searching between tasks
 *
 * @param {string} text
 */ const controlSearchTask = function(text) {
    // Saving query into as tate
    _modelJs.state.query = text;
    // Rendering tasks that match the search
    _taskListDefault.default.render(_modelJs.state);
};
/**
 * Managing height on mobile devices
 */ const resizable = function() {
    const myResizeFunction = function() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
    };
    if (window.attachEvent) window.attachEvent('onresize', function() {
        myResizeFunction();
    });
    else if (window.addEventListener) window.addEventListener('resize', function() {
        myResizeFunction();
    }, true);
    if (typeof Event === 'function') window.dispatchEvent(new Event('resize'));
    else {
        const evt = window.document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
    }
};
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./model.js":"Y4A21","./views/taskList":"7eJE3","./views/task":"7gmkt","./views/sideMenu":"eAOFF","./views/nav":"5REnh"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "createTask", ()=>createTask
);
parcelHelpers.export(exports, "updateTask", ()=>updateTask
);
parcelHelpers.export(exports, "solveTask", ()=>solveTask
);
parcelHelpers.export(exports, "openTask", ()=>openTask
);
const state = {
    task: {
    },
    tasks: [],
    query: ''
};
/**
 * Initialization function
 */ const init = function() {
    const storage = localStorage.getItem('tasks');
    if (storage) state.tasks = JSON.parse(storage);
};
/**
 * Saving tasks into local storage
 */ const persistTasks = function() {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
};
const createTask = function(newTask) {
    // Task object creation
    const task = {
        id: Number(Date.now().toString().slice(-9)),
        task: newTask.trim()
    };
    // Changing state
    state.task = task;
    state.tasks.push(task);
    // Update local storage
    persistTasks();
};
const updateTask = function(id, task) {
    // Update task
    const index = state.tasks.findIndex((el)=>el.id === id
    );
    state.tasks[index].task = task.trim();
    // Update local storage
    persistTasks();
};
const solveTask = function(id = state.task.id) {
    // Delete task
    const index = state.tasks.findIndex((el)=>el.id === id
    );
    state.tasks.splice(index, 1);
    state.task = state.task.id === id ? {
    } : state.task;
    // Update local storage
    persistTasks();
};
const openTask = function(id) {
    state.task = state.tasks.find((task)=>task.id === id
    );
};
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7eJE3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
/**
 * Class for managing view of the task list
 */ class TaskListView extends _viewJsDefault.default {
    // Sidemenu leements
    _sidemenu = document.querySelector('.sidemenu');
    _overlay = document.querySelector('.overlay');
    // View elements
    _parentElement = document.querySelector('.tasks');
    _parentElements = [
        ...document.querySelectorAll('.tasks')
    ];
    _searches = document.querySelectorAll('.search__field');
    _errorMessage = 'Nemáte žádné úkoly. Svůj první úkol můžete založit zde.';
    _message = '';
    /**
	 * Overwriten render function
	 *
	 * @param {json} data
	 * @param {boolean} render
	 */ render(data, render = true) {
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElements.forEach((el)=>el.insertAdjacentHTML('afterbegin', markup)
        );
    }
    _clear() {
        this._parentElements.forEach((el)=>el.innerHTML = ''
        );
    }
    addHandlerClick(handler) {
        const self = this;
        this._parentElements.forEach((el)=>el.addEventListener('click', function(e) {
                e.preventDefault();
                const task = e.target.closest('.preview');
                if (!task) return;
                self._sidemenu.classList.add('sidemenu__hidden');
                self._overlay.classList.add('overlay__hidden');
                handler(Number(task.dataset.id));
            })
        );
    }
    addHandlerSolve(handler) {
        this._parentElements.forEach((el)=>el.addEventListener('click', function(e) {
                e.preventDefault();
                const btn = e.target.closest('.preview_btn--solved');
                if (!btn) return;
                handler();
            })
        );
    }
    addHandlerSearch(handler) {
        const self = this;
        this._searches.forEach((el)=>el.addEventListener('input', function(e) {
                const { value  } = e.target;
                self._searches.forEach((search)=>{
                    search.value = value;
                });
                handler(value);
            })
        );
    }
    _generateMarkup() {
        const tasks = [
            ...this._data.tasks
        ];
        return tasks.reverse().filter((task)=>task.task.toLowerCase().includes(this._data.query.toLowerCase()) && task.task.length > 0
        ).map((result)=>`
          <li class="preview" data-id="${result.id}">
            <a class="preview__link ${result.id === this._data.task.id ? 'preview__link--active' : ''}" href="">
						<button class="btn preview_btn--solved">
								<i class="fa-solid fa-check"></i>
							</button>
              <div class="preview__content">
                <p class="preview__text">${result.task}</p>
              </div>
            </a>
          </li>
      `
        ).join('');
    }
}
exports.default = new TaskListView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    render(data, render = true) {
        if (!data || Object.keys(data).length === 0 || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <div>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `
      <div class="message">
        <div>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7gmkt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
/**
 * Class for managing view of the task
 */ class TaskView extends _viewJsDefault.default {
    // Sidemenu leements
    _sidemenu = document.querySelector('.sidemenu');
    _overlay = document.querySelector('.overlay');
    // View elements
    _parentElement = document.querySelector('.task');
    _btnsCreateTask = document.querySelectorAll('.btn--create');
    _btnSaveTask = document.querySelector('.btn--save');
    _btnSolveTask = document.querySelector('.btn--solved');
    _errorMessage = 'Nemáš žádné úkoly. 😊';
    _message = '';
    constructor(){
        super();
        this._addHandlerTaskChanged();
    }
    /**
	 * Listening if a task is solved
	 *
	 * @param {function} handler
	 */ addHandlerSolved(handler) {
        this._btnSolveTask.addEventListener('click', function(e) {
            handler();
        });
    }
    /**
	 * Listening if a task is going to be edited
	 */ addHandlerEdit() {
        const self = this;
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.task__text');
            if (!btn) return;
            self._addHandlerTaskChanged();
        });
    }
    /**
	 * Listening if a task is going to be saved
	 */ addHandlerSave(handler) {
        const self = this;
        this._btnSaveTask.addEventListener('click', function(e) {
            handler(document.querySelector('.task__text--area').value, self._data.id);
        });
    }
    /**
	 * Listening if something in task changed
	 * if yes, that allow saving
	 */ _addHandlerTaskChanged() {
        const self = this;
        document.querySelector('.task__text--area')?.addEventListener('input', function(e) {
            this.dataset.changed = e.target.value.length > 0;
            if (this.dataset.changed) {
                self._btnSaveTask.closest('.nav__item').classList.remove('d-none');
                self._btnSolveTask.closest('.nav__item').classList.add('d-none');
            }
        });
    }
    /**
	 * Listening if taks is going to be saved;
	 *
	 * @param {function} handler
	 */ addHandlerCreateTask(handler) {
        const self = this;
        this._btnsCreateTask.forEach((btn)=>btn.addEventListener('click', function() {
                handler();
                document.querySelector('.task__text--area').focus();
                self._btnSaveTask.closest('.nav__item').classList.remove('d-none');
                self._btnSolveTask.closest('.nav__item').classList.add('d-none');
                self._sidemenu.classList.add('sidemenu__hidden');
                self._overlay.classList.add('overlay__hidden');
            })
        );
    }
    /**
	 * Generating markup for task
	 *
	 * @returns {string} markup
	 */ _generateMarkup() {
        this._btnSaveTask.closest('.nav__item').classList.add('d-none');
        this._btnSolveTask.closest('.nav__item').classList.remove('d-none');
        return `
        <div class="task__text">
          <textarea spellcheck="false" class="task__text--area" data-changed="false" placeholder="Zde můžete začít psát váš úkol...">${this._data.task}</textarea>
        </div>
    `;
    }
}
exports.default = new TaskView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eAOFF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Class that manages the side menu
 */ class SideMenuView {
    _sidemenu = document.querySelector('.sidemenu');
    _overlay = document.querySelector('.overlay');
    _listeners = [
        ...document.querySelectorAll('.header__menu'),
        this._overlay
    ];
    constructor(){
        this._addHandlerClick();
    }
    _addHandlerClick() {
        const self = this;
        this._listeners.forEach((el)=>el.addEventListener('click', function() {
                self._sidemenu.classList.toggle('sidemenu__hidden');
                self._overlay.classList.toggle('overlay__hidden');
            })
        );
    }
}
exports.default = new SideMenuView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5REnh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Class that manages the state of nav buttons
 */ class NavView {
    _btnsCreateTask = document.querySelectorAll('.btn--create');
    _btnSaveTask = document.querySelector('.btn--save');
    _btnSolveTask = document.querySelector('.btn--solved');
    render(data) {
        this._data = data;
        if (this._data.tasks.length > 0) return;
        this._btnSaveTask.closest('.nav__item').classList.add('d-none');
        this._btnSolveTask.closest('.nav__item').classList.add('d-none');
    }
}
exports.default = new NavView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ddCAb","aenu9"], "aenu9", "parcelRequirec404")

//# sourceMappingURL=index.e37f48ea.js.map
