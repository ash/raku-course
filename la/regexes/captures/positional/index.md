---
title: Capturae positionales
translations_gpt:
---

{% include menu.html %}

Pone partem exemplaris in uncos rotundos `( )` ut eam _capias_. Post congruentiam felicem unaquaeque pars capta ut `$0`, `$1` et cetera praesto est, a nulla eo ordine numerata quo unci aperiuntur:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $0; # ｢2025｣
    say $1; # ｢06｣
}
```

Primum uncorum par annum in `$0` cepit, secundum mensem in `$1`. Textus inter eos — litterale `-` — congruitur sed non capitur.

Unaquaeque captura ipsa parvum obiectum congruentiae est, itaque ab ea `.Str`, locum eius et cetera petere potes. In catena duplicibus virgulis clausa captura ut textus congruens interpolatur:

```raku
if 'hello world' ~~ / (\w+) ' ' (\w+) / {
    say "$1 $0"; # world hello
}
```

Hic duo verba capta ordine contrario imprimuntur, quod ea permutat.

Capturae etiam in variabili congruentiae `$/` servantur, et `$0` revera modus brevis est scribendi `$/[0]`. Per `$/` directe laborare potes:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $/[0];    # ｢2025｣
    say $/[1];    # ｢06｣
    say $/.elems; # 2
}
```

`$/` totum obiectum congruentiae est, illud indicans capturas positionales attingis, et `.elems` tibi indicat quot sint.

{% include nav.html %}
