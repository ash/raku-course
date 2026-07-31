---
title: Quiz — Classi personalizzate
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente? La classe è **negata**.

```raku
say 'abc123' ~~ / <-[a..z]> /;
```

{:.quiz}
1 | ｢1｣
0 | ｢a｣
0 | ｢abc｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

La classe `<-[a..z]>` riconosce un singolo carattere che **non** sia una lettera minuscola. Percorrendo `abc123` da sinistra, i primi tre caratteri sono lettere minuscole e vengono saltati; il primo carattere che non è una lettera minuscola è la cifra `1`, quindi la corrispondenza è `｢1｣`.

</div>

{% include nav.html %}
