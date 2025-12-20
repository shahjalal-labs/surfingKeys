//t: 🔁 Persistent smart click loop that detects and clicks both semantic and styled custom clickable elements across page navigations.
api.mapkey("cb", "🔁 Persistent click hints", function repeatClickHints() {
  api.Hints.create(
    "a, button, select, input, textarea, summary, *[onclick], *[contenteditable=true], *.jfk-button, *.goog-flat-menu-button, *[role=button], *[role=link], *[role=menuitem], *[role=option], *[role=switch], *[role=tab], *[role=checkbox], *[role=combobox], *[role=menuitemcheckbox], *[role=menuitemradio]",
    // { tabbed: true },
    function (el) {
      el.click();

      // Wait a short moment, then re-show hints
      setTimeout(() => {
        repeatClickHints(); // Call itself again
      }, 200); // Delay to allow DOM to update
    },
  );
});

//t: 🖱️ Smart hover using hints
api.mapkey("ch", "🖱️ Smart hover using hints", function () {
  api.Hints.create("*", function (el) {
    ["mouseover", "mouseenter", "focus"].forEach((type) => {
      el.dispatchEvent(
        new MouseEvent(type, { bubbles: true, cancelable: true, view: window }),
      );
    });

    // api.Front.showPopup("🟡 Hovered or focused: " + (el.alt || el.innerText || el.tagName));
  });
});

// t: 🔍 Reveal hidden elements using hints
api.mapkey("ca", "🔍 Reveal hidden elements using hints", function () {
  api.Hints.create("*", function (el) {
    el.style.display = "block";
    el.style.visibility = "visible";
    el.style.opacity = "1";
    el.hidden = false;
    api.Front.showPopup("✅ Revealed element: " + el.tagName);
  });
});

api.mapkey("of", "#8Open URL in incognito window", function () {
  api.Hints.create("*[href]", function (element) {
    api?.RUNTIME("openIncognito", {
      url: element.href,
    });
  });
});

// postman click

// 🎯 Postman-specific hints for custom clickable divs
api.mapkey(
  "tp",
  "🎯 Postman key/value hints",
  function () {
    // Target Postman's custom clickable divs
    api.Hints.create(
      'div.key-value-cell__placeholder[tabindex="-1"], div[class*="key-value"][tabindex], .auto-suggest-group .key-value-cell__placeholder',
      function (element) {
        element.click();
        element.focus();

        // Try to simulate a click event more thoroughly
        const clickEvent = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        element.dispatchEvent(clickEvent);

        // Also try focus
        element.dispatchEvent(new FocusEvent("focus"));
      },
      { multipleHits: true }, // Allows multiple selections
    );
  },
  // { domain: /\.postman\.(co|com)$/i }, // work only domain where postman .com exists this type something
); // Only works on Postman

// tg for hints any clickable hints

api.mapkey("tg", "🎯 Universal custom element hints", function () {
  // Find all potentially interactive elements
  const allElements = document.querySelectorAll("*");
  const interactiveElements = [];

  allElements.forEach((el) => {
    // Check if element looks interactive
    const isInteractive =
      (el.hasAttribute("tabindex") && el.getAttribute("tabindex") !== "-2") ||
      el.hasAttribute("onclick") ||
      el.style.cursor === "pointer" ||
      el.style.cursor === "text" ||
      el.contentEditable === "true" ||
      (el.className &&
        (el.className.includes("click") ||
          el.className.includes("input") ||
          el.className.includes("edit") ||
          el.className.includes("focus") ||
          el.className.includes("select") ||
          el.className.includes("button")));

    // Also check computed styles
    const computedStyle = window.getComputedStyle(el);
    const looksClickable =
      computedStyle.cursor === "pointer" || computedStyle.cursor === "text";

    if (isInteractive || looksClickable) {
      interactiveElements.push(el);
    }
  });

  if (interactiveElements.length > 0) {
    api.Hints.create(
      interactiveElements,
      function (element) {
        // Try multiple ways to activate
        if (element.click) element.click();
        if (element.focus) element.focus();

        // Trigger events
        ["click", "mousedown", "mouseup", "focus"].forEach((eventType) => {
          element.dispatchEvent(new Event(eventType, { bubbles: true }));
        });
      },
      { multipleHits: true },
    );
  } else {
    api.Front.showBanner("No interactive elements found");
  }
});
