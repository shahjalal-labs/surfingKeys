import "./src/modules/defaultRemapped";
import "./src/modules/github";
import "./src/settings/theme";
import "./src/settings/settings";
import "./src/modules/opener/opener";
import "./src/modules/opener/aiOpener";
import "./src/modules/opener/mernOpener";
import "./src/modules/opener/socialOpener";
import "./src/modules/opener/phOpener";
import "./src/modules/opener/islamicOpener";
import "./src/modules/yank/imgYank";
import "./src/modules/markdown/markdown";
import "./src/modules/hoverClick/hoverClick";
import "./src/modules/testDate";
import "./src/modules/fzfFinder";

export function injectTailwind(callback) {
  if (window.tailwindInjected) return callback();

  const twScript = document.createElement("script");
  twScript.src = "https://cdn.tailwindcss.com";
  twScript.onload = () => {
    window.tailwindInjected = true;
    callback();
  };
  document.head.appendChild(twScript);
}
