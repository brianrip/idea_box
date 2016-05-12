$ (document).ready(function(){
  editTitle();
  editBody();
});

function editTitle() {
  $ ('.ideas').delegate('.idea-title', 'click', function() {
    var id = $(this).closest('.idea-content').attr('data-id');
    $(this).attr('contentEditable', 'true');
    $(this).keypress(function(e) {
      if (e.which === 13) {
        changeContent(this, {title: $(this).closest('.idea-title').text()}, id);
        e.preventDefault();
      }
    });
  });
}

function editBody() {
  $ ('.ideas').delegate('.idea-body', 'click', function() {
    var id = $(this).closest('.idea-content').attr('data-id');
    $(this).attr('contentEditable', 'true');
    $(this).keypress(function(e) {
      if (e.which === 13) {
        changeContent(this, {body: $(this).closest('.idea-body').text()}, id);
        e.preventDefault();
      }
    });
  });
}

function changeContent(titleOrBody, updatedInfo, id) {
  $.ajax({
    type: "PATCH",
    url: "/api/v1/ideas/" + id,
    data: {
      idea: {
        title: updatedInfo.title,
        body: updatedInfo.body
      }
    },
    success: function() {
      console.log('edited');
    }
  });
}
