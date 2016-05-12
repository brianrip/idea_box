$ (document).ready(function() {
  upvoteIdea();
  downvoteIdea();
});

function upvoteIdea() {
  $('.ideas').delegate('.upvote', 'click', function () {

    var idea = $(this).closest('.idea');
    var ideaId = idea.attr('data-id')
    var currentQuality = idea.find('.quality').text()
    var newQuality = upVotedQuality(currentQuality)
    updateQuality(ideaId, currentQuality, newQuality)
    // console.log(currentQuality);

  });
}

function downvoteIdea() {
  $('.ideas').delegate('.downvote', 'click', function () {

    var idea = $(this).closest('.idea');
    var ideaId = idea.attr('data-id')
    var currentQuality = idea.find('.quality').text()
    var newQuality = downVotedQuality(currentQuality)
    updateQuality(ideaId, currentQuality, newQuality)
    // console.log(currentQuality);

  });
}

function upVotedQuality(currentQuality) {
  if (currentQuality === "potential") {
    return "tangible"
  } else if (currentQuality === "tangible") {
    return "executable"
  } else if (currentQuality === "executable") {
    return "executable"
  }
}

function downVotedQuality(currentQuality) {
  if (currentQuality === "potential") {
    return "potential"
  } else if (currentQuality === "tangible") {
    return "potential"
  } else if (currentQuality === "executable") {
    return "tangible"
  }
}

function updateQuality(id, currentQuality, newQuality){
  console.log(newQuality);
  $.ajax({
    type: "PATCH",
    url: "/api/v1/ideas/" + id,
    data: { quality: newQuality
    },
    dataType: "json",
    success: function(data) {
      console.log('success');
      $(".idea[data-id='2']").find('.quality').text().replace(currentQuality, newQuality)
    },
    error: function(error) {
      console.log(error.responseText);
    }
  });
}
