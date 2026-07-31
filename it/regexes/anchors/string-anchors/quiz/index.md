---
title: Quiz — Ancore di stringa
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente? Nota il `$` alla fine dello schema.

```raku
say so 'hello world' ~~ / world $/;
```

{:.quiz}
1 | True
0 | False
0 | ｢world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

L'ancora `$` richiede che la corrispondenza finisca proprio alla fine della stringa. La stringa `hello world` finisce davvero con `world`, quindi lo schema ancorato riesce e `so` restituisce `True`.

</div>

{% include nav.html %}
