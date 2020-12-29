---
title: Conventional file extensions in Raku
---

{% include menu.html %}

These are the [recommended](https://github.com/Raku/problem-solving/blob/master/solutions/language/Path-to-Raku.md#extensions) file extensions for the Raku files:

* `.raku` for program files
* `.rakumod` for modules
* `.rakutest` and `.t` for tests
* `.rakudoc` for documentation in the POD6 format

## A note on GitHub

As of today, GitHub does not fully support syntax highlighting for the sources in Raku. It does it only if the source file has a shebang with `raku` mentioned in it, for example:

```raku
#!/usr/bin/env raku
```

GitHub [needs more repositories](https://github.com/github/linguist/pull/5104#pullrequestreview-545723766) with the above-mentioned file extensions to activate full language recognition for Raku. Please upload your files to fulfil this requirement.

{% include nav.html %}
