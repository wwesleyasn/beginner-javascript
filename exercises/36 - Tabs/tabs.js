const tabs = document.querySelector(`.tabs`);
const tabButtons = tabs.querySelectorAll(`[role="tab"]`);
const tabPanels = Array.from(tabs.querySelectorAll(`[role="tabpanel"]`));

function handleTabClick(e) {
  // Hide all other tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // Mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute(`ariaSelected`, false);
  });
  // Mark the clicked tab as selected
  e.currentTarget.setAttribute(`aria-selected`, true);
  // Find the associated tabPanel and show it
  const { id } = e.currentTarget;

  // Method 1
  // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  // tabPanel.hidden = false;

  // Method 2 -  Find in the Array of tab panels
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute(`aria-labelledby`) === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener(`click`, handleTabClick)
);
