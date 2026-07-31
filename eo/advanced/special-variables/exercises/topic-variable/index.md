---
title: La temvariablo
translations_gpt:
---

{% include menu.html %}

## Problemo

`$_` estas la *tema* variablo. Buklo `for` agordas ĝin al ĉiu ero laŭvice, kaj metoda voko skribita kun gvida punkto kaj sen invokanto — kiel `.chars` — agas sur ĝi, do `.chars` signifas `$_.chars`.

Buklu tra la tri ĉenoj `'apple'`, `'fig'`, kaj `'cherry'`. Por ĉiu el ili, presu linion de la formo `<vorto> has <n> letters`, uzante la teman `$_` por la vorto kaj gvidpunktan vokon `.chars` por ĝia longo. Observu kiel `$_` iĝas ĉiu ĉeno laŭvice.

## Ekzemplo

La programo presas:

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
