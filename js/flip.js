function flipCard(btn) {
    var $card = $(btn).closest('.bl-card-space');
    console.log($card);
    if ($card.hasClass('hover')) {
        $card.removeClass('hover');
    } else {
        $card.addClass('hover');
    }
}