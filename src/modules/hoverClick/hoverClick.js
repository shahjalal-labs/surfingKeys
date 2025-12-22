//t: 🔁 Persistent smart click loop that detects and clicks both semantic and styled custom clickable elements across page navigations.
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
//  insert name


