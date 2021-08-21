/**
 *
 * @param {String} tabSelector css selector for tab
 * @param {String} tabActiveClass name of css class for active tab
 * @param {String} contentSelector css selector for content
 * @param {String} contentActiveClass name of class for active content
 */
function tabInit(tabSelector, tabActiveClass, contentSelector, contentActiveClass) {

  try {

    const tabs = document.querySelectorAll(tabSelector),
          tabsContent = document.querySelectorAll(contentSelector),
          tabContainer = document.querySelector(tabSelector).parentElement;

    function hideTabs() {

      tabs.forEach(tab => {
        tab.classList.remove(tabActiveClass);
      });
      tabsContent.forEach(item => {
        item.classList.remove(contentActiveClass);
      });
    }

    function showOneTab(i = 0) {
      tabs[i].classList.add(tabActiveClass);
      tabsContent[i].classList.add(contentActiveClass);
    }

    tabContainer.addEventListener('click', (e) => {
      tabs.forEach((tab, index) => {
        if (tab == e.target) {
          hideTabs();
          showOneTab(index);
        }
      });
    });

    hideTabs();
    showOneTab();

  } catch (err) {

    console.log('check passed parameters');
  }

}

export default tabInit;