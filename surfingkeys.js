import "./src/modules/defaultRemapped.js";
// import "./src/modules/github.js";
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
import "./src/modules/opener/PH/PhHelp/phHelp.js";
import "./src/modules/opener/PH/PhWeb/phWeb.js";
import "./src/modules/tab.js";
import "./src/modules/github/github.js";
import "./src/modules/opener/smtFigma/smtFigma.js";
// import "./src/modules/github/githubNavigator.js";
import "./src/modules/style/chatgpt.js";
// import "./src/modules/style/google.js";
//
// import "./src/modules/style/deepseek.js";

//
settings.defaultLLMProvider = "deepseek";

settings.llm = {
  deepseek: {
    apiBaseUrl: "https://api.deepseek.com",
    apiKey: "check the env with name DEEPSEEK",
    model: "deepseek-chat",
  },
};

api.mapkey("A", "#8Open DeepSeek Chat with role", function () {
  api.Front.openOmnibar({
    type: "LLMChat",
    extra: {
      system:
        "You are a Linux and browser automation assistant. Reply clearly and concisely, assuming user uses Arch, CLI, and Neovim.",
    },
  });
});
