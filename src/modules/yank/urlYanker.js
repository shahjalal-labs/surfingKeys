const { mapkey, Clipboard } = api;

function copyUrlParts(n) {
  const { origin, pathname } = window.location;
  const parts = pathname.split("/").filter(Boolean); // ['dashboard', 'manage-profile']

  let toCopy = "";

  if (n === 0) {
    toCopy = origin; // Only the root URL
  } else if (parts.length === 0) {
    return;
  } else {
    // Only join the last `n` parts of the path
    const sliced = parts.slice(-n);
    toCopy = sliced.join("/"); // Don't include origin
  }

  Clipboard.write(toCopy);
}

// ag0 => Copy root domain only
mapkey("ag0", "Copy root URL", () => copyUrlParts(0));

// ag1 ~ ag4 => Copy last n parts of path (without origin)
mapkey("ag1", "Copy last 1 path segment", () => copyUrlParts(1));
mapkey("ag2", "Copy last 2 path segments", () => copyUrlParts(2));
mapkey("ag3", "Copy last 3 path segments", () => copyUrlParts(3));
mapkey("ag4", "Copy last 4 path segments", () => copyUrlParts(4));

// ag, => Open root in new tab
mapkey("ag,", "Open root URL in new tab", () => {
  const root = window.location.origin;
  window.open(root, "_blank");
});

// src/modules/urlManipulator.js
function appendClipboardToPath(n = 0) {
  try {
    const { origin, pathname } = window.location;

    // Extract and clean path segments
    const segments = pathname.split("/").filter(Boolean);
    const base = n > 0 ? segments.slice(0, n).join("/") : "";

    Clipboard.read((clip) => {
      // Robust type handling
      let clipContent = "";
      if (typeof clip === "string") {
        clipContent = clip;
      } else if (clip?.data) {
        clipContent = String(clip.data);
      } else {
        throw new Error("Clipboard content is not a string");
      }

      // Extract path from clipboard if it contains a full URL
      let clipPath = clipContent;
      try {
        if (clipContent.includes("://")) {
          const url = new URL(clipContent);
          clipPath = url.pathname + url.search + url.hash;
        }
      } catch (e) {
        // Not a valid URL, use as-is
      }

      // Normalize all paths
      const normalize = (path) =>
        path
          .replace(/^\/+|\/+$/g, "") // Trim slashes
          .replace(/\/{2,}/g, "/"); // Remove duplicate slashes

      const cleanBase = normalize(base);
      const cleanClip = normalize(clipPath);

      // Construct final path
      const newPath = [cleanBase, cleanClip]
        .filter((p) => p.length > 0)
        .join("/");

      // Build final URL without double origin
      const finalUrl = new URL(newPath, origin).href;

      // Navigate
      api.Front.showBanner(`↗️ Redirecting to: ${finalUrl}`);
      window.location.href = finalUrl;
    });
  } catch (error) {
    console.error("URL Manipulation Error:", error);
    api.Front.showBanner(`❌ Error: ${error.message}`);
  }
}

// Create mappings ap, to ap9
api.mapkey("ap,", "Append clipboard to root path", () =>
  appendClipboardToPath(0),
);

for (let i = 1; i <= 3; i++) {
  api.mapkey(`ap${i}`, `Append clipboard to first ${i} path segments`, () =>
    appendClipboardToPath(i),
  );
}

// Add help documentation
api.mapkey("aph", "Show URL manipulator help", () => {
  api.Front.showPopup(`
    <div style="padding:15px;font-family:system-ui;max-width:500px">
      <h3>URL Path Manipulator Help</h3>
      <p><strong>ap,</strong>: Append clipboard to domain root</p>
      <p><strong>ap1-ap9</strong>: Append after N path segments</p>
      <p><strong>Examples</strong>:</p>
      <ul>
        <li>URL: <code>http://localhost:5173/dashboard/tourist</code></li>
        <li>Clipboard: <code>manage-profile</code></li>
        <li><code>ap,</code> → <code>http://localhost:5173/manage-profile</code></li>
        <li><code>ap1</code> → <code>http://localhost:5173/dashboard/manage-profile</code></li>
        <li><code>ap2</code> → <code>http://localhost:5173/dashboard/tourist/manage-profile</code></li>
      </ul>
      <p>Handles URLs in clipboard, relative paths, and special characters</p>
    </div>
  `);
});

// Replace current URL with clipboard content
api.mapkey("ar", "🔄 Replace current URL with clipboard content", function () {
  api.Clipboard.read((clipContent) => {
    try {
      // Handle different clipboard content types
      let url = "";
      if (typeof clipContent === "string") {
        url = clipContent;
      } else if (clipContent?.data) {
        url = String(clipContent.data);
      } else {
        throw new Error("Clipboard content is not a valid string");
      }

      // Clean and validate the URL
      url = url.trim();

      if (!url) {
        throw new Error("Clipboard is empty");
      }

      // Add protocol if missing (assume https for non-localhost)
      if (!url.match(/^https?:\/\//)) {
        if (url.includes("localhost") || url.match(/^\d+\.\d+\.\d+\.\d+/)) {
          url = `http://${url}`;
        } else {
          url = `https://${url}`;
        }
      }

      // Validate URL format
      new URL(url); // This will throw if invalid

      // Show banner and navigate
      // api.Front.showBanner(`🔄 Replacing URL with: ${url}`);
      window.location.href = url;
    } catch (error) {
      console.error("URL Replace Error:", error);
      // api.Front.showBanner(`❌ Error: ${error.message}`);
    }
  });
});

// checking feature

// 🚀 ULTIMATE SPEED BOOST FEATURES FOR SURFINGKEYS

// ===== 1. INSTANT FORM FILLER =====
// Auto-fill forms with predefined data
const formData = {
  email: "your@email.com",
  name: "Your Name",
  phone: "123-456-7890",
  github: "https://github.com/shahjalal-labs",
  linkedin: "https://linkedin.com/in/shahjalal-labs",
};

api.mapkey("zf", "⚡ Auto-fill form fields", function () {
  const inputs = document.querySelectorAll("input, textarea, select");
  let filled = 0;

  inputs.forEach((input) => {
    const type = input.type?.toLowerCase();
    const name = input.name?.toLowerCase();
    const id = input.id?.toLowerCase();
    const placeholder = input.placeholder?.toLowerCase();

    // Smart field detection
    if (type === "email" || name?.includes("email") || id?.includes("email")) {
      input.value = formData.email;
      filled++;
    } else if (
      name?.includes("name") ||
      id?.includes("name") ||
      placeholder?.includes("name")
    ) {
      input.value = formData.name;
      filled++;
    } else if (
      type === "tel" ||
      name?.includes("phone") ||
      id?.includes("phone")
    ) {
      input.value = formData.phone;
      filled++;
    }

    // Trigger change events
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });

  api.Front.showBanner(`⚡ Auto-filled ${filled} fields`);
});

// ===== 2. LIGHTNING FAST TAB SWITCHER WITH FUZZY SEARCH =====
api.mapkey("zt", "⚡ Fuzzy tab switcher", function () {
  api.RUNTIME("getTabs", {}, (response) => {
    const tabs = response.tabs;

    const container = document.createElement("div");
    container.id = "tab-switcher";
    Object.assign(container.style, {
      position: "fixed",
      top: "10%",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#0f172a",
      color: "#e2e8f0",
      borderRadius: "12px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
      zIndex: "10000",
      width: "700px",
      maxHeight: "70vh",
      padding: "20px",
      overflow: "hidden",
      fontFamily: "JetBrains Mono, monospace",
      border: "1px solid #334155",
    });

    const input = document.createElement("input");
    Object.assign(input.style, {
      width: "100%",
      padding: "12px 16px",
      marginBottom: "16px",
      borderRadius: "8px",
      backgroundColor: "#1e293b",
      color: "#e2e8f0",
      border: "1px solid #475569",
      outline: "none",
      fontSize: "16px",
      boxSizing: "border-box",
      fontFamily: "JetBrains Mono, monospace",
    });
    input.placeholder = "🔍 Search tabs...";

    const resultsList = document.createElement("div");
    Object.assign(resultsList.style, {
      overflowY: "auto",
      maxHeight: "50vh",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    });

    let selectedIndex = 0;

    const renderTabs = (searchTabs) => {
      resultsList.innerHTML = "";
      searchTabs.slice(0, 15).forEach((tab, idx) => {
        const div = document.createElement("div");
        Object.assign(div.style, {
          padding: "12px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          backgroundColor: idx === selectedIndex ? "#3b82f6" : "#334155",
          color: idx === selectedIndex ? "#ffffff" : "#e2e8f0",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "14px",
          transition: "all 0.15s ease",
        });

        const favicon = document.createElement("img");
        favicon.src =
          tab.favIconUrl ||
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3C/svg%3E";
        favicon.style.width = "16px";
        favicon.style.height = "16px";

        const title = document.createElement("span");
        title.style.fontWeight = "500";
        title.textContent = tab.title.substring(0, 60);

        const url = document.createElement("span");
        url.style.opacity = "0.7";
        url.style.fontSize = "12px";
        url.textContent = tab.url.substring(0, 80);

        div.appendChild(favicon);
        div.appendChild(title);
        div.appendChild(url);

        div.onclick = () => {
          api.RUNTIME("focusTab", { tabId: tab.id });
          container.remove();
        };

        resultsList.appendChild(div);
      });
    };

    const filterTabs = (query) => {
      if (!query) return tabs;
      return tabs.filter(
        (tab) =>
          tab.title.toLowerCase().includes(query.toLowerCase()) ||
          tab.url.toLowerCase().includes(query.toLowerCase()),
      );
    };

    input.oninput = (e) => {
      const filtered = filterTabs(e.target.value);
      selectedIndex = 0;
      renderTabs(filtered);
    };

    input.onkeydown = (e) => {
      const filtered = filterTabs(input.value);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = Math.min(
          selectedIndex + 1,
          Math.min(filtered.length - 1, 14),
        );
        renderTabs(filtered);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        renderTabs(filtered);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          api.RUNTIME("focusTab", { tabId: filtered[selectedIndex].id });
          container.remove();
        }
      } else if (e.key === "Escape") {
        container.remove();
      }
    };

    container.appendChild(input);
    container.appendChild(resultsList);
    document.body.appendChild(container);
    input.focus();
    renderTabs(tabs);
  });
});
