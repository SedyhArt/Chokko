const findBlockByAlias = alias => {
  return $('.reviews__display-inner').filter((ndx, item) => {
    return $(item).attr('data-linked-with') === alias;
  })
}


$(".interective-avatar-link").click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlockByAlias(target)
  const curItem = $this.closest('.reviews__switcher-item');

  itemToShow.addClass('active').siblings().removeClass('active');
  curItem.addClass('interective-avatar--active').siblings().removeClass('interective-avatar--active');
})