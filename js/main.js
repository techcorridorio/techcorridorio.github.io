function userTemplate(user) {
  var buffer = [];
  buffer.push('<a href="' + user.html_url + '">');
  buffer.push('<h1>' + user.login + '</h1></a>');
  buffer.push('<img src="' + user.avatar_url + '" width=150 height=150/>');
  buffer.push('<hr>');
  return buffer.join('');
}

$(function () {
  $.getJSON('https://api.github.com/orgs/techcorridorio/public_members?callback=?', function (response) {
    var html = response.data.map(userTemplate).join('');
    $('#people').html(html);
  });
});
