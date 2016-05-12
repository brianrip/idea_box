$ (document).ready(function() {
  upvoteIdea();
  downvoteIdea();
});

function upvoteIdea() {
  $('.ideas').delegate('.upvote', 'click', function () {

    var idea = $(this).closest('.idea-content');
    var ideaId = idea.attr('data-id');
    var currentQuality = idea.find('.quality').text();
    var newQuality = upVotedQuality(currentQuality);
    updateQuality(ideaId, currentQuality, newQuality, idea);
    // console.log(currentQuality);

  });
}

function downvoteIdea() {
  $('.ideas').delegate('.downvote', 'click', function () {

    var idea = $(this).closest('.idea-content');
    var ideaId = idea.attr('data-id');
    var currentQuality = idea.find('.quality').text();
    var newQuality = downVotedQuality(currentQuality);
    updateQuality(ideaId, currentQuality, newQuality, idea);
  });
}

function upVotedQuality(currentQuality) {
  if (currentQuality === "potential") {
    return "tangible";
  } else if (currentQuality === "tangible") {
    return "executable";
  } else if (currentQuality === "executable") {
    return "executable";
  }
}

function downVotedQuality(currentQuality) {
  if (currentQuality === "potential") {
    return "potential";
  } else if (currentQuality === "tangible") {
    return "potential";
  } else if (currentQuality === "executable") {
    return "tangible";
  }
}

function updateQuality(id, currentQuality, newQuality, idea){
  $.ajax({
    type: "PATCH",
    url: "/api/v1/ideas/" + id,
    data: { quality: newQuality
    },
    success: function() {
      idea.find('.quality').text(newQuality);
    },
    error: function(error) {
      console.log(error.responseText);
    }
  });
}
