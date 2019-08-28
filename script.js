$(document).ready(function() {
  const discountParams = ['Пункт 1', 'Пункт 3.3', 'Пункт 4.2', 'Пункт 5'];
  const menuLinkLevel1 = $('.menu__list-item-link.level-1');

  menuLinkLevel1.on('click', function(e) {
    const triggerParent                 = $(this).parent();
    const triggerParentSubmenu          = triggerParent.children('.menu__list.level-2');
    const triggerParentSiblings         = triggerParent.siblings();
    const triggerParentSiblingsChildren = triggerParentSiblings.children();

    triggerParentSiblings.removeClass('is_active');
    triggerParentSiblingsChildren.removeClass('is_active');
    triggerParent.toggleClass('is_active');
    $(this).toggleClass('is_active');

    if(triggerParentSubmenu.length) {
      triggerParentSubmenu.toggleClass('is_active');
    }
  });

  $('.menu__list-item-link').each(function() {
    const appendsElement = $('<div class="discount"></div>');
    let currentMenuItem = $(this);

    $.each(discountParams, function(index, value) {
      if(currentMenuItem.text() === value) {
        appendsElement.appendTo( currentMenuItem.parent() );
      }
    });
  });
});