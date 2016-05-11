$ (document).ready(function() {
  deleteIdea();
});

function deleteIdea() {
  $ ('.ideas').delegate('.delete_idea', 'click', function() {

    var deletedIdea = $(this).closest('.idea');

    $.ajax ({
      type: 'DELETE',
      url: '/api/v1/ideas/' + deletedIdea.attr("data-id"),

      success: function() {
        deletedIdea.remove();
      },
      error: function(error) {
        console.log(error.responseText);
      }
    });
  });
}
