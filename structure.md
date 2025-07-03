# 📁 Project Structure

```bash
.
├── bun.lock
├── modules
│   ├── defaultRemapped.js
│   └── github.js
├── package.json
├── structure.md
└── surfingkeys.js

2 directories, 6 files

```

> If it returns "function" → you're good ✅
> If undefined, the userscript might not be active on that page (check the @match rule or reload the page).

> Next: Add to Surfingkeys Config

Add this to your Surfingkeys config:

mapkey('md', '📝 Copy selection as Markdown (via Tampermonkey)', () => {
window.testMarkdownSelection();
});

Now:

    Select some text on any page

    Press md

    ✅ It will convert to Markdown blockquote and copy to clipboard

give me routine in a table for a muslim developer

give me routine in a table for a muslim developer

Name

Name

Last commit message

Last commit date

## Latest commit

[![Evilur](https://avatars.githubusercontent.com/u/82677442?v=4&size=40)](/Evilur)[Evilur](/brookhong/Surfingkeys/commits?author=Evilur)

[Fix: Overflow hints behaviour (](/brookhong/Surfingkeys/commit/9f63c953be363f28e797354b9d04efb5cc225eda)[#2304](https://github.com/brookhong/Surfingkeys/issues/2304)[) (](/brookhong/Surfingkeys/commit/9f63c953be363f28e797354b9d04efb5cc225eda)[#2305](https://github.com/brookhong/Surfingkeys/pull/2305)[)](/brookhong/Surfingkeys/commit/9f63c953be363f28e797354b9d04efb5cc225eda)

Open commit detailsfailure

Jun 15, 2025

[9f63c95](/brookhong/Surfingkeys/commit/9f63c953be363f28e797354b9d04efb5cc225eda) · Jun 15, 2025

## History

[927 Commits](/brookhong/Surfingkeys/commits/master/)

Open commit details

[](/brookhong/Surfingkeys/commits/master/)

[.github](/brookhong/Surfingkeys/tree/master/.github ".github")

[.github](/brookhong/Surfingkeys/tree/master/.github ".github")

[Fixed](/brookhong/Surfingkeys/commit/965301c079852f9d310145d823628d107e940588 "Fixed #2107 extract a common function to locate focus node for modes insert and visual
Create FUNDING.yml
Auto enter insert mode only when the real target is drawn.") [#2107](https://github.com/brookhong/Surfingkeys/issues/2107) [extract a common function to locate focus node for modes …](/brookhong/Surfingkeys/commit/965301c079852f9d310145d823628d107e940588 "Fixed #2107 extract a common function to locate focus node for modes insert and visual
Create FUNDING.yml
Auto enter insert mode only when the real target is drawn.")

Jul 15, 2024

[config](/brookhong/Surfingkeys/tree/master/config "config")

[config](/brookhong/Surfingkeys/tree/master/config "config")

[1.17.8](/brookhong/Surfingkeys/commit/395f32b25b910c2519652e5f8a0b3de943ab8ff0 "1.17.8
LLM support: ollama, bedrock, gemini and deepseek")

May 4, 2025

[docs](/brookhong/Surfingkeys/tree/master/docs "docs")

[docs](/brookhong/Surfingkeys/tree/master/docs "docs")

[docs: correct misleading](/brookhong/Surfingkeys/commit/5dba97350437ed6a6b0f563f21b06cfcecda9256 "docs: correct misleading `tabOpenLink` example (#2280)") ``[tabOpenLink](/brookhong/Surfingkeys/commit/5dba97350437ed6a6b0f563f21b06cfcecda9256 "docs: correct misleading `tabOpenLink` example (#2280)")`` [example (](/brookhong/Surfingkeys/commit/5dba97350437ed6a6b0f563f21b06cfcecda9256 "docs: correct misleading `tabOpenLink` example (#2280)")[#2280](https://github.com/brookhong/Surfingkeys/pull/2280)[)](/brookhong/Surfingkeys/commit/5dba97350437ed6a6b0f563f21b06cfcecda9256 "docs: correct misleading `tabOpenLink` example (#2280)")

May 4, 2025

[src](/brookhong/Surfingkeys/tree/master/src "src")

[src](/brookhong/Surfingkeys/tree/master/src "src")

[Fix: Overflow hints behaviour (](/brookhong/Surfingkeys/commit/9f63c953be363f28e797354b9d04efb5cc225eda "Fix: Overflow hints behaviour (#2304) (#2305)

- Fix: overflow-x hints behaviour (#2304)
  Closes #2304

* Now the hints host get the height and the width of the visible
  user's viewport (instead of the only height before that)
* Width and height are now taken without considering the scrollbar
  and without floating point values.
  Isues: #2304, #2294

- Test: add 'Overflow-Y' example (#2294)")[#2304](https://github.com/brookhong/Surfingkeys/issues/2304)[) (](/brookhong/Surfingkeys/commit/9f63c953be363f28e797354b9d04efb5cc225eda "Fix: Overflow hints behaviour (#2304) (#2305)
- Fix: overflow-x hints behaviour (#2304)
  Closes #2304

* Now the hints host get the height and the width of the visible
  user's viewport (instead of the only height before that)
* Width and height are now taken without considering the scrollbar
  and without floating point values.
  Isues: #2304, #2294

- Test: add 'Overflow-Y' example (#2294)")[#2305](https://github.com/brookhong/Surfingkeys/pull/2305)[)](/brookhong/Surfingkeys/commit/9f63c953be363f28e797354b9d04efb5cc225eda "Fix: Overflow hints behaviour (#2304) (#2305)
- Fix: overflow-x hints behaviour (#2304)
  Closes #2304

* Now the hints host get the height and the width of the visible
  user's viewport (instead of the only height before that)
* Width and height are now taken without considering the scrollbar
  and without floating point values.
  Isues: #2304, #2294

- Test: add 'Overflow-Y' example (#2294)")

Jun 15, 2025

[tests](/brookhong/Surfingkeys/tree/master/tests "tests")

[tests](/brookhong/Surfingkeys/tree/master/tests "tests")

[Fix: Overflow hints behaviour (](/brookhong/Surfingkeys/commit/9f63c953be363f28e797354b9d04efb5cc225eda "Fix: Overflow hints behaviour (#2304) (#2305)

- Fix: overflow-x hints behaviour (#2304)
  Closes #2304

* Now the hints host get the height and the width of the visible
  user's viewport (instead of the only height before that)
* Width and height are now taken without considering the scrollbar
  and without floating point values.
  Isues: #2304, #2294

- Test: add 'Overflow-Y' example (#2294)")[#2304](https://github.com/brookhong/Surfingkeys/issues/2304)[) (](/brookhong/Surfingkeys/commit/9f63c953be363f28e797354b9d04efb5cc225eda "Fix: Overflow hints behaviour (#2304) (#2305)
- Fix: overflow-x hints behaviour (#2304)
  Closes #2304

* Now the hints host get the height and the width of the visible
  user's viewport (instead of the only height before that)
* Width and height are now taken without considering the scrollbar
  and without floating point values.
  Isues: #2304, #2294

- Test: add 'Overflow-Y' example (#2294)")[#2305](https://github.com/brookhong/Surfingkeys/pull/2305)[)](/brookhong/Surfingkeys/commit/9f63c953be363f28e797354b9d04efb5cc225eda "Fix: Overflow hints behaviour (#2304) (#2305)
- Fix: overflow-x hints behaviour (#2304)
  Closes #2304

* Now the hints host get the height and the width of the visible
  user's viewport (instead of the only height before that)
* Width and height are now taken without considering the scrollbar
  and without floating point values.
  Isues: #2304, #2294

- Test: add 'Overflow-Y' example (#2294)")

Jun 15, 2025

[.eslintrc](/brookhong/Surfingkeys/blob/master/.eslintrc ".eslintrc")

[.eslintrc](/brookhong/Surfingkeys/blob/master/.eslintrc ".eslintrc")

[Feature: add linting to build process (](/brookhong/Surfingkeys/commit/e14bc69dacdb74380f781976c5545d09557f41ff "Feature: add linting to build process (#527)

- add build task 'lint'
- add semi colons across project
- add eslint to the 'lint' pipeline
- add eslint fule no-tabs")[#527](https://github.com/brookhong/Surfingkeys/pull/527)[)](/brookhong/Surfingkeys/commit/e14bc69dacdb74380f781976c5545d09557f41ff "Feature: add linting to build process (#527)
- add build task 'lint'
- add semi colons across project
- add eslint to the 'lint' pipeline
- add eslint fule no-tabs")

Oct 13, 2017

[.gitattributes](/brookhong/Surfingkeys/blob/master/.gitattributes ".gitattributes")

[.gitattributes](/brookhong/Surfingkeys/blob/master/.gitattributes ".gitattributes")

[add .gitattributes to exclude files not for Firefox from archive](/brookhong/Surfingkeys/commit/c2513b2e1dee27a5a7a1c8ac76dd8bea7b32743a "add .gitattributes to exclude files not for Firefox from archive")

Apr 24, 2020

[.gitignore](/brookhong/Surfingkeys/blob/master/.gitignore ".gitignore")

[.gitignore](/brookhong/Surfingkeys/blob/master/.gitignore ".gitignore")

[CodeMirror vim editor support (](/brookhong/Surfingkeys/commit/d514896141b5aece9513c381325540caee545ed6 "CodeMirror vim editor support (#1921)

- Fix invalid version number format and add @pixi/extensions since it's a missing dependency.
- Add support for editing CodeMirror elements through the vim editor. Addresses issue #140.
- Fix issue that caused CodeMirror line numbers to be pulled into the vim editor
- Correct 'Cusor' to 'Cursor' for 'moveCursorEOL'.
- Fix cursor not moving to EOL for CodeMirror elements.
- Refine setEndOfContenteditable by removing IE control flow and its logic.
- Remove the red dot (char code 8226) that CodeMirror uses to visualize the zero-width space.")[#1921](https://github.com/brookhong/Surfingkeys/pull/1921)[)](/brookhong/Surfingkeys/commit/d514896141b5aece9513c381325540caee545ed6 "CodeMirror vim editor support (#1921)
- Fix invalid version number format and add @pixi/extensions since it's a missing dependency.
- Add support for editing CodeMirror elements through the vim editor. Addresses issue #140.
- Fix issue that caused CodeMirror line numbers to be pulled into the vim editor
- Correct 'Cusor' to 'Cursor' for 'moveCursorEOL'.
- Fix cursor not moving to EOL for CodeMirror elements.
- Refine setEndOfContenteditable by removing IE control flow and its logic.
- Remove the red dot (char code 8226) that CodeMirror uses to visualize the zero-width space.")

Dec 20, 2022

[CONTRIBUTING.md](/brookhong/Surfingkeys/blob/master/CONTRIBUTING.md "CONTRIBUTING.md")

[CONTRIBUTING.md](/brookhong/Surfingkeys/blob/master/CONTRIBUTING.md "CONTRIBUTING.md")

[Augment CONTRIBUTING.md with steps on how to load the extension. Cred…](/brookhong/Surfingkeys/commit/c5344c7fcfaec93aaf2ae0cef68ae241ad377df3 "Augment CONTRIBUTING.md with steps on how to load the extension. Credit to iSeeU816 for the loading process, which can be found on issue #1625. (#1919)")

Oct 10, 2024

[LICENSE](/brookhong/Surfingkeys/blob/master/LICENSE "LICENSE")

[LICENSE](/brookhong/Surfingkeys/blob/master/LICENSE "LICENSE")

[Add the LICENSE file (](/brookhong/Surfingkeys/commit/b2dd4e0f4a7b0c585014e4b74b332a2d337e5264 "Add the LICENSE file (#1020)
Create an additional LICENSE file so that the license information appears in the repository metadata.
https://github.blog/2016-09-21-license-now-displayed-on-repository-overview/")[#1020](https://github.com/brookhong/Surfingkeys/pull/1020)[)](/brookhong/Surfingkeys/commit/b2dd4e0f4a7b0c585014e4b74b332a2d337e5264 "Add the LICENSE file (#1020)
Create an additional LICENSE file so that the license information appears in the repository metadata.
https://github.blog/2016-09-21-license-now-displayed-on-repository-overview/")

Sep 5, 2019

[README.md](/brookhong/Surfingkeys/blob/master/README.md "README.md")

[README.md](/brookhong/Surfingkeys/blob/master/README.md "README.md")

[Update doc for LLM chat](/brookhong/Surfingkeys/commit/0354c2a5c2b6e4edfa810cd8a150cece254104c2 "Update doc for LLM chat")

Jun 14, 2025

[README_CN.md](/brookhong/Surfingkeys/blob/master/README_CN.md "README_CN.md")

[README_CN.md](/brookhong/Surfingkeys/blob/master/README_CN.md "README_CN.md")

[Update doc for LLM chat](/brookhong/Surfingkeys/commit/0354c2a5c2b6e4edfa810cd8a150cece254104c2 "Update doc for LLM chat")

Jun 14, 2025

[babel.config.json](/brookhong/Surfingkeys/blob/master/babel.config.json "babel.config.json")

[babel.config.json](/brookhong/Surfingkeys/blob/master/babel.config.json "babel.config.json")

[Refactoring for 1.0](/brookhong/Surfingkeys/commit/4619ee232680a0c88b5239e2c5f7e5cedf985b14 "Refactoring for 1.0 #1542

- integrate with neovim with native messaging.
- settle down the public APIs for setting snippets and document them.
- improve the build process with webpack.
- add unit tests.
- remove the Mermaid diagram generator, which is unnecessary for the extension.") [#1542](https://github.com/brookhong/Surfingkeys/issues/1542)

Nov 28, 2021

[firefox_pac.js](/brookhong/Surfingkeys/blob/master/firefox_pac.js "firefox_pac.js")

[firefox_pac.js](/brookhong/Surfingkeys/blob/master/firefox_pac.js "firefox_pac.js")

[0.9.38](/brookhong/Surfingkeys/commit/5b39696a90ecbb7b8b1497516e846eeb67d135db "0.9.38

- Remove pdf viewer from Firefox version
- use markedjs 0.3.19
- use shadydom.min.js 1.1.2
- Multiple proxies support in byhost mode
- Remove mermaid from Firefox version")

Aug 27, 2018

[jest.config.js](/brookhong/Surfingkeys/blob/master/jest.config.js "jest.config.js")

[jest.config.js](/brookhong/Surfingkeys/blob/master/jest.config.js "jest.config.js")

[Refactoring for 1.0](/brookhong/Surfingkeys/commit/4619ee232680a0c88b5239e2c5f7e5cedf985b14 "Refactoring for 1.0 #1542

- integrate with neovim with native messaging.
- settle down the public APIs for setting snippets and document them.
- improve the build process with webpack.
- add unit tests.
- remove the Mermaid diagram generator, which is unnecessary for the extension.") [#1542](https://github.com/brookhong/Surfingkeys/issues/1542)

Nov 28, 2021

[package.json](/brookhong/Surfingkeys/blob/master/package.json "package.json")

[package.json](/brookhong/Surfingkeys/blob/master/package.json "package.json")

[1.17.9](/brookhong/Surfingkeys/commit/fe19dd5f63507f0e5213af2fd0d048912110b1f4 "1.17.9
Fixed #2271 Configuration option to set separator of tab indices")

Jun 2, 2025

[sk.svg](/brookhong/Surfingkeys/blob/master/sk.svg "sk.svg")

[sk.svg](/brookhong/Surfingkeys/blob/master/sk.svg "sk.svg")

[Fix build issues](/brookhong/Surfingkeys/commit/74f406e5dbf133be97efa55faa009a3a2eed70bc "Fix build issues")

Dec 13, 2021

[sk.xcf](/brookhong/Surfingkeys/blob/master/sk.xcf "sk.xcf")

[sk.xcf](/brookhong/Surfingkeys/blob/master/sk.xcf "sk.xcf")

[Fix build issues](/brookhong/Surfingkeys/commit/74f406e5dbf133be97efa55faa009a3a2eed70bc "Fix build issues")

Dec 13, 2021

[tsconfig.json](/brookhong/Surfingkeys/blob/master/tsconfig.json "tsconfig.json")

[tsconfig.json](/brookhong/Surfingkeys/blob/master/tsconfig.json "tsconfig.json")

[Refactoring for 1.0](/brookhong/Surfingkeys/commit/4619ee232680a0c88b5239e2c5f7e5cedf985b14 "Refactoring for 1.0 #1542

- integrate with neovim with native messaging.
- settle down the public APIs for setting snippets and document them.
- improve the build process with webpack.
- add unit tests.
- remove the Mermaid diagram generator, which is unnecessary for the extension.") [#1542](https://github.com/brookhong/Surfingkeys/issues/1542)

Nov 28, 2021

View all files

## Repository files navigation

- [README](#)
- [MIT license](#)

Edit file

# Surfingkeys - Expand your browser with javascript and keyboard.

[](#surfingkeys---expand-your-browser-with-javascript-and-keyboard)

[![Node CI](https://github.com/brookhong/Surfingkeys/workflows/Node%20CI/badge.svg?branch=master)](https://github.com/brookhong/Surfingkeys/actions?query=workflow%3A%22Node+CI%22+branch%3Amaster)

Surfingkeys is another web browser(including Google Chrome, Chromium based browsers, Firefox, Safari) extension that provides keyboard-based navigation and control of the web in the spirit of the VIM editor. But it's not for VIM users only, it's for anyone who just needs some more shortcuts to his/her own functions.

Surfingkeys is created with all settings described in Javascript, so it's easy for anyone to map any keystrokes to his/her own defined Javascript function. For example,

    api.mapkey('<Ctrl-y>', 'Show me the money', function() {
        api.Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
    });

Surfingkeys is doing its best to make full use of keyboard for web browsing, but there are some limitations from Google Chrome itself, please see [Brook Build of Chromium](https://brookhong.github.io/2021/04/18/brook-build-of-chromium.html) for a more thorough experience.

## Installation
