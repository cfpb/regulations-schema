var $ = dominus;
var $toggle = $('.toggle');

// jekyll won't let us add our own markup when using Pygments
// find code blocks near schema links and hide them
var $allSchema = $toggle.parent().next('.highlight');
$allSchema.removeClass('visible').addClass('hidden');

var toggleDemo = function() {
  // do some more gnarly dom traversal to find the closes `.highlight`
  var $code = $(this).parent().next('.highlight');

  if ($code.hasClass('toggled')) {
    $code.removeClass('toggled').addClass('hidden');
    return;
  }

  $code.addClass('toggled').removeClass('hidden');
};

$toggle.on('click', toggleDemo);
