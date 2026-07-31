---
title: Iteratorem scribere
translations_gpt:
---

{% include menu.html %}

Iterator simpliciter obiectum est quod partem inbuiltam `Iterator` facit et methodum `pull-one` praebet. Illa methodus valorem sequentem reddit, vel `IterationEnd` cum nihil superest. Ecce iterator numerationis inversae qui numerum reddit et ad nihil gradum facit:

```raku
class Countdown does Iterator {
    has Int $.n is rw;

    method pull-one {
        return IterationEnd if $!n <= 0;
        return $!n--;
    }
}
```

Unaquaeque vocatio `pull-one` primum inspicit utrum numeratio defecerit; si non, numerum currentem reddit eumque minuit. Postminutio `$!n--` valorem *ante* subtractionem reddit, itaque numeri `3, 2, 1` exeunt. Illum manu agens, ut quilibet alius iterator apparet:

```raku
my $c = Countdown.new(n => 3);
say $c.pull-one; # 3
say $c.pull-one; # 2
say $c.pull-one; # 1
say $c.pull-one =:= IterationEnd; # True
```

Iterator per se non est quod anulus `for` directe accipere potest — anulus rem *iterabilem* exspectat. Involve iteratorem in `Seq` et percurribilis fit:

```raku
for Seq.new(Countdown.new(n => 3)) -> $x {
    say $x;
}
```

Illud `3`, `2`, `1` imprimit. In codice cotidiano `gather` / `take` loco eius peteres — forma [generatoris](/la/paradigms/generators) pro eodem effectu multo brevior est. Partem `Iterator` directe scribere tamen semel videre operae pretium est, quia nudum ostendit id super quod `gather`, `map` et omnis anulus `for` aedificantur: obiectum quod uni quaestioni respondet — «quis est valor sequens?»

{% include nav.html %}
