// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  // cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  overview = require('bespoke-simple-overview'),
  // search = require('bespoke-search'),
  hash = require('bespoke-hash'),
  state = require('bespoke-state');
  beachday = require('bespoke-theme-beachday');

// Bespoke.js
bespoke.from('article', [
  beachday({ insertFonts: false }),
  keys(),
  touch(),
  state(),
  // scale('transform'),
  progress(),
  hash(),
  overview({ insertStyles: false }),
  bullets('.bullet'),
  progress(),
  function(deck) {
    // as we're using bespoke-scale with 'transform', it creates a
    // .bespoke-parent and wraps everything inside it, including the
    // bespoke-progress bar
    // to prevent it from being scaled up/down, we need to unwrap it
    // var bar = deck.querySelector('bespoke-progress-parent');
    // deck.parent.appendChild(bar);
  },
  function(deck) {
    // makes the content visible to avoid FoUC
    deck.parent.style.visibility = 'visible';
  }
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

