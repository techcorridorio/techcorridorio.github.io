function userTemplate(user) {
  var buffer = [
    '<div class="media">',
    '  <div class="media-left">',
    '    <a href="' + user.html_url + '">',
    '      <img class="media-object" src="' + user.avatar_url + '" width="64" height="64">',
    '    </a>',
    '  </div>',
    '  <div class="media-body">',
    '    <h4 class="media-heading">' + (user.name || user.login) + '</h4>',
    user.company,
    user.bio,
    '  </div>',
    '</div>'
  ];
  
  return buffer.join('');
}

// var user = {
//   "login": "octocat",
//   "id": 1,
//   "avatar_url": "https://www.gravatar.com/avatar/8e55e89dc040dcf614e56175a8d44531.jpg",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/octocat",
//   "html_url": "https://github.com/octocat",
//   "followers_url": "https://api.github.com/users/octocat/followers",
//   "following_url": "https://api.github.com/users/octocat/following{/other_user}",
//   "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
//   "organizations_url": "https://api.github.com/users/octocat/orgs",
//   "repos_url": "https://api.github.com/users/octocat/repos",
//   "events_url": "https://api.github.com/users/octocat/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/octocat/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "monalisa octocat",
//   "company": "GitHub",
//   "blog": "https://github.com/blog",
//   "location": "San Francisco",
//   "email": "octocat@github.com",
//   "hireable": false,
//   "bio": "There once was...",
//   "public_repos": 2,
//   "public_gists": 1,
//   "followers": 20,
//   "following": 0,
//   "created_at": "2008-01-14T04:33:35Z",
//   "updated_at": "2008-01-14T04:33:35Z"
// };
// 
// $(function () {
//   var html = userTemplate(user);
//   $('#people').append(html);
//   $('#people').append(html);
//   $('#people').append(html);
//   $('#people').append(html);
//   $('#people').append(html);
//   $('#people').append(html);
// });

$(function () {
  $.getJSON('https://api.github.com/orgs/techcorridorio/public_members?callback=?', function (organizationResponse) {
    organizationResponse.data.forEach(function (organizationUser) {
      console.log(organizationUser.login);

      $.getJSON('https://api.github.com/users/' + organizationUser.login + '?callback=?', function (userResponse) {
        var user = userResponse.data,
          html = userTemplate(user);
        console.log(user);
        console.log(html);
        $('#people').append(html);
      });
    });
  });
});
