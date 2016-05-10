$ (document).ready(function() {
  $ ('#create_idea').on('click', function() {
    createIdea($('#title').val(), $('#body').val());
  });
});

var createIdea = function (title, body) {
  $.ajax ({
    type: 'POST',
    url: '/api/v1/ideas',
    data: {
      idea: {
        title: title,
        body: body
      }
    },
    success: function(idea) {
      console.log('ajax hit');
    },
    error: function(error) {
    console.log(error.responseText)
    }

  });
}
