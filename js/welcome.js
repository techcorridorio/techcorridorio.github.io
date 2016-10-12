function assert(boolean) {
  if (!boolean) { throw "assertion failed!"; }
}

function welcome(usernames) {
  var mentions, last, formattedUsernames;

  mentions = usernames.map(function (username) {
    var parts, namePart;

    if (username.match(/^@/)) {
      return username;
    } else if (username.match(/\//)) {
      parts = username.split('/');
      namePart = parts[parts.length - 1]
      return '@' + namePart;
    } else {
      return '@' + username;
    }
  });

  if (mentions.length > 1) {
    last = mentions.pop();
    mentions.push('and ' + last);
  }

  if (mentions.length > 2) {
    formattedUsernames = mentions.join(', ');
  } else {
    formattedUsernames = mentions.join(' ');
  }

  return 'Welcome ' + formattedUsernames + '!  Would you like to give a short introduction to the group?  For example, what tech you enjoy, where you work, etc.';
}

function test() {
  assert(welcome(['foo']).match('Welcome @foo!'));
  assert(welcome(['foo', 'bar']).match('Welcome @foo and @bar!'));
  assert(welcome(['foo', 'bar', 'baz']).match('Welcome @foo, @bar, and @baz!'));
  assert(welcome(['https://techcorridorio.slack.com/team/foo', 'https://techcorridorio.slack.com/team/bar']).match('Welcome @foo and @bar!'));
}

function browserWelcome() {
  var raw, names;

  raw = prompt('Names?  (separate with whitespace)');
  names = raw.split(/\s+/);

  prompt('Copy', welcome(names));
}

var top = (function () { return this; })();

if (top.process !== 'undefined') { // node.js
  var names = process.argv.slice(2, process.argv.length); // first one is the filename :S

  if (names.length == 0) {
    test();
    console.log('Tests pass');
  } else {
    console.log(welcome(names));
  }
}
