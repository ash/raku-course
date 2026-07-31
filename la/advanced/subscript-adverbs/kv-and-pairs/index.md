---
title: Claves, valores, et paria
---

{% include menu.html %}

Alia adverbia mutant **quid** subscriptum reddat. Per defaltam, subscriptum valorem reddit; haec plus reddunt:

* `:v` — valorem (per defaltam)
* `:k` — clavem (vel indicem)
* `:kv` — et clavem et valorem
* `:p` — `Pair` clavis et valoris

In ordine, "clavis" est index:

```raku
my @a = 10, 20, 30;

say @a[1]:kv; # (1 20)
say @a[1]:p;  # 1 => 20
```

`@a[1]:kv` indicem et valorem simul ut listam reddit, et `@a[1]:p` ea ut par reddit.

Idem in tabulis operatur, et praecipue utile est per segmentum plurium clavium simul:

```raku
my %h = a => 1, b => 2, c => 3;

say %h<a c>:kv; # (a 1 c 3)
```

Hic segmentum duarum clavium claves et valores alternantes reddit. Haec adverbia sunt quibus `map`, `for`, et similia saepe utuntur cum claves et valores pariter tractare vis, sine operibus separatis.

{% include nav.html %}
