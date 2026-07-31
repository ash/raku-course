---
title: 'Solvo: Malfrua konektiĝo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $supplier = Supplier.new;

my @got;
$supplier.emit(1);
$supplier.Supply.tap(-> $v { @got.push($v) });
$supplier.emit(2);
$supplier.emit(3);

say @got;
```

🦋 Vi povas trovi la fontkodon en la dosiero [a-live-feed.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/a-live-feed.raku).

## Eligo

```
[2 3]
```

## Komentoj

1. La `Supplier` estas la sendflanko; ĝia `.Supply` estas tio, al kio vi konektiĝas. Viva supply elsendas nur al la konektoj aŭskultantaj **en la momento** de ĉiu eligo.

1. La `emit(1)` okazas antaŭ ol ekzistas ajna konekto, do ĝi perdiĝas — kiel agordiĝi al radiostacio post kiam kanto jam ludiĝis. Nur `2` kaj `3`, eligitaj post la konekto, estas kaptitaj, donante `[2 3]`.

{% include nav.html %}
