---
title: Attributa privata
translations_gpt:
---

{% include menu.html %}

In [sectione de attributis](/la/oop/attributes) unumquodque attributum per `$.` declaratum est, quod accessorem publicum creat. Attributum per `$!` declaratum contra _privatum_ est: accessorem non habet et ab exteriore obiecti videri non potest. Solum intra proprias classis methodos attingi potest, ubi ad illud ut `$!name` spectas.

```raku
class Safe {
    has $!code = 4321;

    method unlocks($attempt) {
        return $attempt == $!code;
    }
}

my $safe = Safe.new;
say $safe.unlocks(4321); # True
say $safe.unlocks(1111); # False
```

Secretum `$!code` intra obiectum servatur sed numquam patefit: nullus accessor `.code` est, itaque unicus modus cum eo agendi est methodus `unlocks` quam classis praebere elegit. Conatus `$safe.code` vel `$safe!code` legendi simpliciter deficit.

Attributa privata utilia sunt pro particulis internis quas cetera programmatis pars directe tangere non debet.

{% include nav.html %}
