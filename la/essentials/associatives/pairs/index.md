---
title: Pairs
---

{% include menu.html %}

Par est structura datae quae nomen et valorem continet. Formant solidum obiectum quod in variabili scalari condi potest. Hic est exemplum quomodo par creas:

```raku
my $pair = name => 'Anna';
```

Typus variabilis `$pair` est `Pair`:

```raku
say $pair.WHAT; # (Pair)
```

Possibile est nomen et valorem seorsum accedere per methodos correspondentes `key` et `value`:

```raku
say $pair.key; # name
say $pair.value; # Anna
```

Res magni momenti de paribus est quod sunt obiecta immutabilia. Significat te non posse novum valorem assignare vel novum nomen dare par existente. Sed potes omnino novum par eidem variabili assignare, scilicet:

```raku
my $pair = name => 'Anna';
$pair = name => 'John';
say $pair.value; # John
```

## Subscripting

Est alia methodus legendi valorem paris. Potes illud subscriptum cum nomine clavis suae inter angulares brackets. Hoc modo id facis:

```raku
say $pair<name>;
```

Nota quod non opus est nominare clavem si nullos spatia continet. Si continet, res paulo strictiores fiunt:

```raku
my $pair = 'employee name' => 'Julie Madelon';
say $pair{'employee name'};
```

Ne omittas quod hoc tempore braces curvatae adhibentur.

{% include nav.html %}