---
title: Confini di parola
translations_gpt:
---

{% include menu.html %}

Riconoscere `cat` riesce dentro `category`, perché le tre lettere ci sono davvero. Spesso non è quello che vuoi: intendi la parola intera `cat`. Un'ancora di _confine di parola_ risolve la cosa.

* `<<` corrisponde al margine **sinistro** di una parola (l'inizio di una parola)
* `>>` corrisponde al margine **destro** di una parola (la fine di una parola)

Avvolgi una parola in queste ancore per riconoscerla solo come parola completa:

```raku
say 'the cat sat' ~~ /<< cat >>/;    # ｢cat｣
say so 'category'  ~~ /<< cat >>/;   # False
```

In `category` non c'è alcun confine di parola subito dopo `cat`, quindi lo schema ancorato fallisce — esattamente il comportamento che volevamo.

Un confine di parola sta fra un carattere di parola (`\w`) e un carattere non di parola, quindi non consuma nulla di suo; come `^` e `$`, asserisce soltanto una posizione.

Le due ancore si possono anche scrivere con i caporali `«` e `»`, se li preferisci. Si comportano esattamente come `<<` e `>>`:

```raku
say 'the cat sat' ~~ /« cat »/;  # ｢cat｣
say so 'category'  ~~ /« cat »/;  # False
```

{% include nav.html %}
