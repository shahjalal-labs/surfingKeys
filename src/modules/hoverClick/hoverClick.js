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
    try {
      // SAFELY get class name as string
      const className =
        typeof el.className === "string"
          ? el.className
          : el.className?.baseVal || // For SVG elements
            el.getAttribute?.("class") || // Fallback to attribute
            "";

      // SAFELY get style properties
      const styleCursor = el.style?.cursor || "";
      const computedStyle = window.getComputedStyle(el);
      const computedCursor = computedStyle?.cursor || "";

      // Check if element looks interactive
      const isInteractive =
        (el.hasAttribute("tabindex") && el.getAttribute("tabindex") !== "-2") ||
        el.hasAttribute("onclick") ||
        styleCursor === "pointer" ||
        styleCursor === "text" ||
        el.contentEditable === "true" ||
        (className &&
          (className.toString().includes("click") ||
            className.toString().includes("input") ||
            className.toString().includes("edit") ||
            className.toString().includes("focus") ||
            className.toString().includes("select") ||
            className.toString().includes("button")));

      // Also check computed styles
      const looksClickable =
        computedCursor === "pointer" || computedCursor === "text";

      if (isInteractive || looksClickable) {
        interactiveElements.push(el);
      }
    } catch (e) {
      // Silently skip problematic elements
      console.debug("Skipping element in hint detection:", e);
    }
  });

  if (interactiveElements.length > 0) {
    api.Hints.create(
      interactiveElements,
      function (element) {
        // Try multiple ways to activate
        try {
          if (element.click) element.click();
          if (element.focus) element.focus();

          // Trigger events
          ["click", "mousedown", "mouseup", "focus"].forEach((eventType) => {
            element.dispatchEvent(new Event(eventType, { bubbles: true }));
          });
        } catch (e) {
          console.debug("Error activating element:", e);
        }
      },
      { multipleHits: true },
    );
  } else {
    api.Front.showBanner("No interactive elements found");
  }
});
