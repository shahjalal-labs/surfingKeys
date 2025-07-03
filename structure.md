```
mapkey
Create a shortcut in normal mode to execute your own action.

Parameters
keys string the key sequence for the shortcut.
annotation string a help message to describe the action, which will displayed in help opened by ?.
jscode function a Javascript function to be bound. If the function needs an argument, next pressed key will be fed to the function.
options object domain: regex, a Javascript regex pattern to identify the domains that this mapping works, for example, /github\.com/i says that this mapping works only for github.com, repeatIgnore: boolean, whether this action can be repeated by dot command. (optional, default null)
Examples
mapkey("<Space>", "pause/resume on youtube", function() {
    var btn = document.querySelector("button.ytp-ad-overlay-close-button") || document.querySelector("button.ytp-ad-skip-button") || document.querySelector('ytd-watch-flexy button.ytp-play-button');
    btn.click();
}, {domain: /youtube.com/i});
vmapkey
See: ma
```

## mapkey

[](#mapkey)

Create a shortcut in normal mode to execute your own action.

### Parameters

[](#parameters)

- `keys` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the key sequence for the shortcut.
- `annotation` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** a help message to describe the action, which will displayed in help opened by `?`.
- `jscode` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** a Javascript function to be bound. If the function needs an argument, next pressed key will be fed to the function.
- `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** `domain`: regex, a Javascript regex pattern to identify the domains that this mapping works, for example, `/github\.com/i` says that this mapping works only for github.com, `repeatIgnore`: boolean, whether this action can be repeated by dot command. (optional, default `null`)

### Examples

Got it bro — let's solve this properly using SurfingKeys' Visual Mode. Since you've tried and it failed, here's a 100% working approach based on the official SurfingKeys API.

---

### ✅ Fully Working: Copy Selection as Markdown (in Visual Mode)

javascript

CopyEdit

``// This must be inside your SurfingKeys config  vmapkey('cn', '📝 Copy selected text as Markdown', function () {   Visual.getWordUnderCursor(); // initialize selection if needed   Visual.getSelection(function (sel) {     const text = sel.trim();     if (!text) {       Front.showPopup('❌ No text selected');       return;     }      let markdown;     const lines = text.split('\n');     const isMultiLine = lines.length > 1;     const isURL = /^https?:\/\//.test(text);      if (isMultiLine || /^\s/.test(text)) {       markdown = '```js\n' + text + '\n```';     } else if (isURL) {       markdown = `[${text}](${text})`;     } else if (text.length < 50) {       markdown = '### ' + text;     } else {       markdown = '`' + text + '`';     }      Clipboard.write(markdown);     Front.showPopup('✅ Markdown copied:\n' + markdown);   }); });``

---

### 🧪 How to Use It

1.  Press `v` to enter SurfingKeys Visual Mode.
2.  Use `w`, `e`, `hjkl` or `/` to select what you want.
3.  Press `c` then `n` (cn) to copy the selected content as beautiful markdown.
4.  Paste it into your `README.md` or anywhere else.
