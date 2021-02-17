document.addEventListener("DOMContentLoaded", function () {
  let grid = null,
    wrapper = document.querySelector(".grid-wrapper"),
    searchField = wrapper.querySelector(".search-field"),
    filterFields = wrapper.querySelectorAll(".filter-field"),
    sortField = wrapper.querySelector(".sort-field"),
    gridElem = wrapper.querySelector(".grid"),
    searchAttr = "data-title",
    filterAttr = "data-tag",
    searchFieldValue,
    sortFieldValue,
    dragOrder = [];

  // Init the grid layout
  grid = new Muuri(gridElem);

  // Set search
  searchFieldValue = searchField.value.toLowerCase();
  searchField.addEventListener("keyup", function () {
    let newSearch = searchField.value.toLowerCase();
    if (searchFieldValue !== newSearch) {
      searchFieldValue = newSearch;
      filter();
    }
  });

  // Set filter
  for (let i = 0; i < filterFields.length; i++) {
    filterFields[i].addEventListener("change", filter);
  }

  // Set sort
  sortFieldValue = sortField.value;
  sortField.addEventListener("change", sort);

  // Filtering
  function filter() {
    grid.filter(function (item) {
      let element = item.getElement(),
        isSearchMatch = !searchFieldValue
          ? true
          : (element.getAttribute(searchAttr) || "")
              .toLowerCase()
              .indexOf(searchFieldValue) > -1;
      return isSearchMatch && isFilterMatch((element.getAttribute(filterAttr) || ""), filterFields)
    });
  }
  function isFilterMatch(tags, filterFields) {
    for (let i = 0; i < filterFields.length; i++) {
      if (filterFields[i] && tags.indexOf(filterFields[i].value) === -1) {
        return false;
      }
    }
    return true;
  }

  // Sorting
  function sort() {
    // Do nothing if sort value did not change.
    let currentSort = sortField.value;
    if (sortFieldValue === currentSort) {
      return;
    }

    // If we are changing from "order" sorting to something else
    // let's store the drag order.
    if (sortFieldValue === "order") {
      dragOrder = grid.getItems();
    }

    // Sort the items.
    grid.sort(
      currentSort === "title"
        ? compareItemTitle
        : currentSort === "color"
        ? compareItemColor
        : dragOrder
    );
    sortFieldValue = currentSort;
  }

  // Compare data-title
  function compareItemTitle(a, b) {
    let aVal = a.getElement().getAttribute(searchAttr) || "";
    let bVal = b.getElement().getAttribute(searchAttr) || "";
    return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
  }

  // Compare data-color
  function compareItemColor(a, b) {
    let aVal = a.getElement().getAttribute(filterAttr) || "";
    let bVal = b.getElement().getAttribute(filterAttr) || "";
    return aVal < bVal ? -1 : aVal > bVal ? 1 : compareItemTitle(a, b);
  }
});
