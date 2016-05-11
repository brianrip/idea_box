$ (document).ready(function() {
  displayIdeas()

  $ ('#create_idea').on('click', function() {
    createIdea($('#title').val(), $('#body').val());
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
    console.log("hello");
    appendIdea(idea);
  });
};

var appendIdea = function(idea) {
  $('.ideas').prepend(ideaObject(idea));
};

var ideaObject = function(idea) {
  // console.log('print object');
  return "<div class='idea' id='idea_" + idea.id + "'>" +
         "<h4 class='inline-title'>" + idea.title + "</h4>" +
         "<p class='idea-body'>" + idea.body + "</p>" + "</div>" +
         "<p class='inline-right' 'quality'>" + idea.quality + "</p>" + "<hr>";
}
