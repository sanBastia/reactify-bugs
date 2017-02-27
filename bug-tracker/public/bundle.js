/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global chance */

var saveBug = function saveBug(e) {
  var bug = {
    id: chance.guid(),
    description: document.getElementById('description').value,
    severity: document.getElementById('severity').value,
    assignedTo: document.getElementById('assignedTo').value,
    status: 'Open'
  };

  var bugs = [];
  if (localStorage.getItem('bugs') !== null) {
    bugs = JSON.parse(localStorage.getItem('bugs'));
  }
  bugs.push(bug);
  localStorage.setItem('bugs', JSON.stringify(bugs));

  document.getElementById('bugInputForm').reset();

  fetchBugs();

  e.preventDefault();
};

document.getElementById('bugInputForm').addEventListener('submit', saveBug);
var fetchBugs = function fetchBugs() {
  var bugs = JSON.parse(localStorage.getItem('bugs')) || [];
  var listBugsElement = document.getElementById('listBugs');

  listBugsElement.innerHTML = '';

  for (var i = 0; i < bugs.length; i++) {
    var id = bugs[i].id;
    var desc = bugs[i].description;
    var severity = bugs[i].severity;
    var assignedTo = bugs[i].assignedTo;
    var status = bugs[i].status;

    listBugsElement.innerHTML += '<div class="card">\n      <header class="card-header">\n        <p class="card-header-title">\n        BugIdwww: ' + id + '\n        </p>\n      </header>\n      <div class="card-content">\n        <div class="content">\n          ' + desc + '\n          <span class="tag is-info">' + severity + '</span>\n          <p>Assigned To: ' + assignedTo + '</p>\n        </div>\n        <br>\n        <small class="tag is-primary">' + status + '</small>\n      </div>\n      <footer class="card-footer">\n        <a onclick="setStatusClosed(\'' + id + '\')" class="is-warning card-footer-item">Close</a>\n        <a class="card-footer-item" onclick="deleteBug(\'' + id + '\')">Delete</a>\n      </footer>\n    </div>\n      <br>';
  }
};

var setStatusClosed = function setStatusClosed(id) {
  var bugs = JSON.parse(localStorage.getItem('bugs'));

  var updatedBugs = bugs.map(function (item) {
    if (item.id === id) item.status = 'Close';
    return item;
  });

  localStorage.setItem('bugs', JSON.stringify(updatedBugs));
  fetchBugs();
};

function deleteBug(id) {
  console.log('hapuzz');
}

var deleteBugOld = function deleteBugOld(id) {
  var bugs = JSON.parse(localStorage.getItem('bugs'));

  var remainingBugs = bugs.filter(function (item) {
    return item.id !== id;
  });
  localStorage.setItem('bugs', JSON.stringify(remainingBugs));

  fetchBugs();
};

/***/ })
/******/ ]);