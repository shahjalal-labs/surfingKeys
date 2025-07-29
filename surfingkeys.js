import "./src/modules/defaultRemapped.js";
import "./src/modules/github.js";
import "./src/settings/theme.js";
import "./src/settings/settings.js";
import "./src/modules/opener/opener.js";
import "./src/modules/opener/aiOpener.js";
import "./src/modules/opener/mernOpener.js";
import "./src/modules/opener/webDevOpener.js";
import "./src/modules/opener/socialOpener.js";
import "./src/modules/opener/phOpener.js";
import "./src/modules/opener/islamicOpener.js";
import "./src/modules/yank/imgYank.js";
import "./src/modules/markdown/markdown.js";
import "./src/modules/hoverClick/hoverClick.js";
import "./src/modules/testDate.js";
import "./src/modules/fzfFinder.js";
import "./src/modules/opener/resourceOpener.js";
import "./src/modules/yank/urlYanker.js";

// sk-56bf47a563244841b72f29af22044533
//
settings.defaultLLMProvider = "deepseek";

settings.llm = {
  deepseek: {
    apiBaseUrl: "https://api.deepseek.com",
    apiKey: "sk-56bf47a563244841b72f29af22044533",
    model: "deepseek-chat",
  },
};
