---
title: Letterali e classi di caratteri
translations_gpt:
---

{% include menu.html %}

Un _regex_ (abbreviazione di _regular expression_, espressione regolare) è uno schema che descrive un pezzo di testo. Con un regex puoi porre domande come «questa stringa contiene un numero?» o «questa parola comincia con una maiuscola?», e puoi estrarre pezzi da una stringa o cambiarli.

Raku ha regex particolarmente potenti e leggibili, incorporati direttamente nel linguaggio. Il modo più semplice di scriverne uno è fra due barre:

```raku
/cat/
```

Questo schema riconosce le tre lettere `c`, `a`, `t` di fila. Per mettere alla prova una stringa contro uno schema, usa l'operatore smartmatch `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Quando lo schema viene trovato, Raku riferisce la parte di stringa che ha corrisposto, mostrata fra le parentesi angolari `｢ ｣`. Guarderai questo risultato più da vicino nella sezione successiva.

In questa prima sezione imparerai come riconoscere testo esatto (_letterale_) e come riconoscere un carattere che può essere uno fra tanti — una _classe di caratteri_. Le sezioni seguenti aggiungono poi i [quantificatori](/it/regexes/quantifiers), le [catture](/it/regexes/captures) e tutto il resto che rende i regex così utili.

{% include nav.html %}
