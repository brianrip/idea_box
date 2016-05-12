$ (document).ready(function() {
  displayIdeas()

  $ ('#create_idea').on('click', function() {
    createIdea($('#title').val(), $('#body').val());
    ($('#title').val(''), $('#body').val(''));

    displayIdeas();
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
    console.log(error.responseText);
    }
  });
};

var displayIdeas = function() {
  $.ajax ({
    type: 'GET',
    url: '/api/v1/ideas',
    success: function(ideas) {
      getIdeas(ideas);
    }
  });
};

var getIdeas = function(ideas) {
  $.each(ideas, function(index, idea) {
      // console.log("hello");
    prependIdea(idea);
  });
};

var prependIdea = function(idea) {
  $('.ideas').prepend(ideaObject(idea));
};

var ideaObject = function(idea) {
  // console.log('print object');
  return "<div class='idea' data-id=" + idea.id + ">" +
         "<h4 class='idea-title'>" + idea.title + "</h4>" +
         "<div class='delete_idea btn btn-danger'>X</div>" +
         "<p class='idea-body'>" + idea.body.substring(0, 100) + "</p>"  +
         "<div class='upvote btn btn-default'>Upvote</div>" +
         "<p class='quality'>" + idea.quality + "</p>" +
         "<div class='downvote btn btn-default'>Downvote</div>" + "</div>"
         + "<hr>";
}
