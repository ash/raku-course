---
title: Classi di caratteri predefinite
translations_gpt:
---

{% include menu.html %}

Alcune classi di caratteri sono così comuni che Raku dà loro nomi brevi. Le scrivi con una barra rovesciata:

* `\d` — una cifra
* `\w` — un carattere di «parola»: una lettera, una cifra o un trattino basso
* `\s` — un carattere di spaziatura (spazio, tabulazione, ritorno a capo)

```raku
say 'order 66' ~~ /\d/; # ｢6｣
say 'a_b'      ~~ /\w/; # ｢a｣
say '  hi'     ~~ /\s/; # ｢ ｣
```

Ciascuna di queste ha una compagna maiuscola che riconosce l'insieme **opposto**:

* `\D` — qualunque cosa non sia una cifra
* `\W` — qualunque cosa non sia un carattere di parola
* `\S` — qualunque cosa non sia spaziatura

```raku
say '  hi' ~~ /\S/; # ｢h｣
```

Infine, un punto singolo `.` riconosce **qualunque** carattere:

```raku
say 'abc' ~~ /./; # ｢a｣
```

Queste classi predefinite fanno risparmiare molta scrittura, e le userai di continuo nel resto di questa parte.

{% include nav.html %}
