---
title: Quiz — Ignorecase
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente? Lo schema è maiuscolo e il testo è misto.

```raku
say 'Hello' ~~ /:i HELLO/;
```

{:.quiz}
1 | ｢Hello｣
0 | ｢HELLO｣
0 | True
0 | False

{% include quiz.html %}

<div class="extended-explanation">

L'avverbio `:i` spegne la distinzione fra maiuscole e minuscole, e funziona in entrambe le direzioni — qui lo schema maiuscolo `HELLO` riconosce il testo in forma mista. Il risultato è il testo corrispondente così come compare nella stringa, `｢Hello｣`.

</div>

{% include nav.html %}
