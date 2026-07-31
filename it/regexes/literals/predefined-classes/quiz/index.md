---
title: Quiz — Classi di caratteri
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
say 'a_1 b' ~~ /\W/;
```

{:.quiz}
0 | ｢a｣
0 | ｢_｣
0 | ｢1｣
1 | ｢ ｣

{% include quiz.html %}

<div class="extended-explanation">

La classe `\W` riconosce il primo carattere che **non** sia una lettera, una cifra o un trattino basso. I caratteri `a`, `_` e `1` sono tutti caratteri di parola, quindi il primo carattere non di parola è lo spazio.

</div>

{% include nav.html %}
