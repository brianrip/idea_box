$ (document).ready(function() {
  deleteIdea();
});

function deleteIdea() {
  $ ('.delete_idea').on('click', function() {
    console.log('delete');
    var deletedIdea = $(this).closest('.idea');
    var deletedIdeaId = deletedIdea.attr('data-id');
    // displayIdeas();
    deleteIdea(deleteIdea, deletedIdeaId);
    });

  var deleteIdea = function (idea, id) {
    $.ajax ({
      type: 'DELETE',
      url: '/api/v1/ideas/' + id,

      success: function(idea) {
        console.log('ajax hit');
        idea.remove()
      },
      error: function(error) {
      console.log(error.responseText);
      }
    });
  };
}
