---
title: Gelöbnisse
translations_gpt:
---

{% include menu.html %}

Wenn Sie selbst `$p.keep(...)` aufrufen, könnte jeder, der `$p` besitzt, es erledigen.
Manchmal wollen Sie das Gegenteil: Nur der Code, der das Ergebnis *erzeugt*, soll
das Promise erledigen dürfen, während alle anderen bloß darauf warten dürfen.
Diese Trennung ist ein **Gelöbnis** (Vow).

`Promise.new` gibt Ihnen ein Promise; darauf `.vow` aufzurufen überreicht ein `Vow` — das alleinige
Recht, dieses Promise zu erfüllen oder zu brechen. Von da an ist das Promise als
nur lesbar gedacht: Es wird über das Gelöbnis erledigt. Die übliche Form ist ein Erzeuger, der das
Gelöbnis für sich behält und nur das Promise zurückgibt:

```raku
sub after($seconds) {
    my $p = Promise.new;
    my $v = $p.vow;                       # take the settle-right
    start {
        sleep $seconds;
        $v.keep("done after $seconds s"); # settle it through the vow
    }
    return $p;                            # callers get only the read side
}

my $job = after(0.2);
say $job.status;   # Planned
say await $job;    # done after 0.2 s
```

Das Gelöbnis zu nehmen macht das Promise wirklich nur lesbar: Von diesem Augenblick an werden `$p.keep` und
`$p.break` abgelehnt, denn das Gelöbnis besitzt nun das alleinige Recht, es zu erledigen.

```raku
my $p = Promise.new;
my $v = $p.vow;

$p.keep(1); # dies: Access denied to keep/break this Promise; already vowed
```

Der Aufrufer kann das Promise also `await`-en, `.then` daran hängen oder seinen `.status` prüfen,
aber er kann es nicht erledigen — das kann nur der Inhaber des Gelöbnisses. So machen Bibliotheken
aus auf Rückrufen und Ereignissen gestützten Schnittstellen gewöhnliche Promises: ein Promise erzeugen, sein
Gelöbnis halten und es aus dem Rückruf heraus erfüllen, wenn das Ereignis endlich eintritt.

Genau das tut auch `start` hinter den Kulissen für Sie — es erzeugt ein
Promise, behält das Gelöbnis für sich und erledigt das Promise mit dem Wert des Blocks (oder
bricht es, wenn der Block stirbt). Das Promise und sein Gelöbnis von Hand zu erzeugen erlaubt Ihnen schlicht,
dasselbe zu tun, wenn das Ergebnis nicht aus einem einzelnen Codeblock kommt.

{% include nav.html %}
