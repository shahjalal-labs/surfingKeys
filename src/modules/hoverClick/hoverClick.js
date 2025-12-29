//t: 🔁 Persistent smart click loop that detects and clicks both semantic and styled custom clickable elements across page navigations.

// const { mapkey } = require("../../utils/utils");

//w: (start)╭──────────── Persistent smart click ────────────╮
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
//w: (end)  ╰──────────── Persistent smart click ────────────╯

//t: 🖱️ Smart hover using hints
//w: (start)╭──────────── Smart hover using hints ────────────╮
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
//w: (end)  ╰──────────── Smart hover using hints ────────────╯

// t: 🔍 Reveal hidden elements using hints
//w: (start)╭──────────── Reveal hidden elements ────────────╮
api.mapkey("ca", "🔍 Reveal hidden elements using hints", function () {
  api.Hints.create("*", function (el) {
    el.style.display = "block";
    el.style.visibility = "visible";
    el.style.opacity = "1";
    el.hidden = false;
    api.Front.showPopup("✅ Revealed element: " + el.tagName);
  });
});
//w: (end)  ╰──────────── Reveal hidden elements ────────────╯

//w: (start)╭──────────── Open URL in incognito ────────────╮
api.mapkey("of", "Open URL in incognito window", function () {
  api.Hints.create("*[href]", function (element) {
    api?.RUNTIME("openIncognito", {
      url: element.href,
    });
  });
});
//w: (end)  ╰──────────── Open URL in incognito ────────────╯

// postman click
//w: (start)╭──────────── postman click ────────────╮
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
);
//w: (end)  ╰──────────── postman click ────────────╯

//w: (start)╭──────────── prisma studio click ────────────╮
mapkey("ti", "🎯 Prisma Studio input/value hints", function () {
  api.Hints.create(
    'input, textarea, td, [contenteditable], [role="textbox"], [class*="editable"], [class*="cell"], .ag-cell',
    function (element) {
      // Simulate double-click to enter edit mode (since Prisma Studio uses double-click for inline editing)
      const dblClickEvent = new MouseEvent("dblclick", {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      element.dispatchEvent(dblClickEvent);

      // Add a small delay to allow the editor component to render
      setTimeout(() => {
        // Find the inner editable element (input, textarea, etc.) that appears after double-click
        const innerEditable = element.querySelector(
          'input, textarea, [contenteditable], [role="textbox"]',
        );
        if (innerEditable) {
          innerEditable.focus();
          // Optionally select all text for easier editing
          if (innerEditable.select) {
            innerEditable.select();
          } else if (innerEditable.setSelectionRange) {
            innerEditable.setSelectionRange(0, innerEditable.value.length);
          }
        } else {
          // Fallback to focusing the cell itself
          element.focus();
        }
        // Scroll into view
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100); // Adjust delay if needed (100ms should be sufficient for React to render the editor)
    },
    { multipleHits: false }, // Hide hints after selection
  );
});
//w: (end)  ╰──────────── prisma studio click ────────────╯
