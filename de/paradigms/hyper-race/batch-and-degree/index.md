---
title: Feinabstimmung mit :batch und :degree
translations_gpt:
---

{% include menu.html %}

Sowohl `.hyper` als auch `.race` nimmt zwei Adverbien auf, die steuern, *wie* die Arbeit über Threads verteilt wird: `:degree` und `:batch`. Sie brauchen sie selten, aber zu ihnen greifen Sie, wenn Sie auf Geschwindigkeit abstimmen.

## `:degree` — wie viele Arbeiter

`:degree` legt fest, wie viele Arbeits-Threads zugleich laufen:

```raku
say (1..5).hyper(:degree(2)).map(*²); # (1 4 9 16 25)
```

Standardmäßig liegt der Grad nahe an der Zahl der CPU-Kerne der Maschine — auf einer Maschine mit acht Kernen ist er `7` und lässt einen Kern für das Hauptprogramm. Ihn deutlich über die Kernzahl zu heben hilft selten, denn es gibt keine weiteren Kerne, auf denen gelaufen werden könnte, und die zusätzliche Koordination kann sogar bremsen.

## `:batch` — wie viele Elemente auf einmal

`:batch` legt fest, wie viele Elemente jeder Arbeiter auf einmal nimmt, bevor er um mehr zurückkommt:

```raku
say (1..6).hyper(:batch(2)).map(*²); # (1 4 9 16 25 36)
```

Die Standardgröße ist `64`, und die Größe ist eine Abwägung:

* Eine **große** Portion bedeutet weniger Hin und Her zwischen Arbeitern und Ablaufsteuerung — weniger Aufwand, was gut ist, wenn jedes Element ungefähr gleich viel kostet.
* Eine **kleine** Portion verteilt die Arbeit gleichmäßiger, wenn manche Elemente weit teurer sind als andere, sodass kein einzelner Arbeiter mit allen langsamen sitzen bleibt — zum Preis von mehr Koordination.

Sie können beide zugleich setzen, bei `.race` genauso wie bei `.hyper`:

```raku
say (1..6).race(:degree(2), :batch(3)).map(*²).sum; # 91
```

<div style="font-size: 85%; opacity: .8;">

Wenn Sie neugierig sind, wie die Standardwerte tatsächlich lauten, können Sie über Rakudos Innenleben nachsehen. Beachten Sie, dass dies ein *privates* Attribut liest — es ist keine feste Schnittstelle, und die Zahlen hängen von Ihrer Maschine ab:

```raku
my $h := (1..10).hyper;
say $h.^attributes.first(*.name.contains('config')).get_value($h).raku;
# HyperConfiguration.new(batch => 64, degree => 7)
```

Hier ist `batch` der feste Standardwert `64`, während `degree` `7` ist — einer weniger als die acht Kerne dieser Maschine.

</div>

## Es bleiben nur Hinweise

Wie `.hyper` und `.race` selbst **bitten** diese Adverbien um eine bestimmte Aufteilung, statt sie zuzusichern. Ein Compiler darf sie beachten, anpassen oder ganz übergehen — behandeln Sie `:batch` und `:degree` also als Stellschrauben zum Ausprobieren, nicht als Versprechen darüber, wie die Arbeit genau ablaufen wird.

{% include nav.html %}
