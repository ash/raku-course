---
title: Aaneenrijgen en combineren
translations_gpt:
---

{% include menu.html %}

Promises worden nog krachtiger wanneer je ze combineert. De gebruikelijkste behoefte is op **meerdere** tegelijk wachten. `await` accepteert een lijst promises en geeft hun resultaten op volgorde terug:

```raku
my @jobs = (start { 1 }), (start { 2 }), (start { 3 });
say await @jobs;     # (1 2 3)
say [+] await @jobs; # 6
```

De drie taken lopen gelijktijdig; `await @jobs` wacht op alle drie en geeft `(1, 2, 3)` terug. Omdat de resultaten in dezelfde volgorde terugkomen als de promises, kun je ze zoals gewoonlijk reduceren.

Je kunt met `.then` ook werk aan een promise rijgen, dat een vervolgblok draait zodra de promise klaar is. Binnen dat blok is `.result` de waarde van de oorspronkelijke promise:

```raku
my $p = start { 10 };
my $q = $p.then({ .result * 2 });
say await $q; # 20
```

`$q` is een nieuwe promise die het resultaat van `$p` verdubbelt. Haar afwachten geeft `20`.

Het blok heeft geen expliciete parameter, dus het ontvangt de voltooide promise als de onderwerpsvariabele `$_` — en daarom werkt een kale `.result`: het is eigenlijk `$_.result`. Als je die promise liever een naam geeft, gebruik dan een pointy block:

```raku
my $q = $p.then(-> $prev { $prev.result * 2 });
```

Dit gedraagt zich precies hetzelfde; `$prev` is de oorspronkelijke promise `$p`, en `$prev.result` is haar waarde.

Met `start`, `await` en `.then` kun je hele pijplijnen van gelijktijdig werk beschrijven: veel taken starten, hun resultaten combineren, en nieuwe taken uit oude bouwen — allemaal zonder ooit een thread aan te raken.

{% include nav.html %}
