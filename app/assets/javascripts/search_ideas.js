$ (document).ajaxSuccess(function() {
  var $ideas = $('.idea');
  $('#find-ideas').on('keyup', function() {
    var currentText = this.value.toLowerCase();

    $ideas.each(function (index, idea) {
      var $idea = $(idea);
      var $ideaObject = $idea.find('.idea-content').text().toLowerCase();
      if ($ideaObject.indexOf(currentText) >= 0) {
        $idea.show();
      } else {
        $idea.hide();
      }
    });
  });
});
