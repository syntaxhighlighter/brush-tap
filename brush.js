var BrushBase = require('@alexgorbatchev/brush-base');
var regexLib = require('@alexgorbatchev/regex-lib');

function Brush() {
  // Contributed by Chad Granum
  this.regexList = [
    {
      regex: new RegExp('^1..\\d+', 'gm'),
      css: 'plain bold italic'
    },
    {
      regex: new RegExp('^ok( \\d+)?', 'gm'),
      css: 'keyword'
    },
    {
      regex: new RegExp('^not ok( \\d+)?', 'gm'),
      css: 'color3 bold'
    },
    {
      regex: new RegExp('(?!^\\s*)#.*$', 'gm'),
      css: 'variable bold'
    },
    {
      regex: new RegExp('^#.*$', 'gm'),
      css: 'comments bold'
    },
    {
      regex: new RegExp('^(?!(not )?ok)[^1].*$', 'gm'),
      css: 'comments'
    },
    {
      regex: regexLib.doubleQuotedString,
      css: 'string'
    },
    {
      regex: regexLib.singleQuotedString,
      css: 'string'
    },
  ];
}

Brush.prototype = new BrushBase();
Brush.aliases = ['tap', 'Tap', 'TAP'];
module.exports = Brush;