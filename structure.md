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
