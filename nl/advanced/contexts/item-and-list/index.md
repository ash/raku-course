---
title: Item- en lijstcontext
translations_gpt: Item and list context
---

{% include menu.html %}

Twee verdere contexten bepalen of iets wordt behandeld als een **lijst** van meerdere waarden of als een enkel **item**. Dit is het verschil achter de `@`- en `$`-sigils.

In _lijstcontext_ wordt een array uitgespreid tot zijn elementen. Een `for`-lus plaatst zijn argument in lijstcontext, zodat het over elk element itereert:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for @a;
say $count; # 3
```

In _itemcontext_ wordt dezelfde array behandeld als één enkele waarde. De `$( … )`-contextomzetter dwingt itemcontext af, zodat de lus nu slechts één ding ziet en één keer wordt uitgevoerd:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for $(@a);
say $count; # 1
```

Dit is de reden waarom het toewijzen van een array aan een scalar deze als een enkel item verpakt in plaats van de elementen te kopiëren: `my $x = @a` plaatst `@a` in itemcontext. Merk op dat dat enkele element een andere container kan zijn met veel items erin:

```raku
my @a = 1, 2, 3;

my $var = @a;
say $var;      # [1 2 3]
say $var.WHAT; # (Array)
```

De variabele `$var` bevat nu een enkel (want het is een scalaire container) object, dat een `Array` is. Je kunt dit eenvoudig bewijzen door `$x` te behandelen als een soort array-referentie (zoals je het in andere talen zou noemen):

```raku
say $var[1]; # 2
```

De bijbehorende `@( … )`-contextomzetter doet het tegenovergestelde en dwingt lijstcontext af.

Er is ook _sink-context_ — de context van een statement waarvan de waarde wordt weggegooid, zoals een regel die alleen bestaat vanwege zijn neveneffect. Wanneer een waarde in sink-context terechtkomt zonder iets nuttigs te doen, kan Raku waarschuwen voor een "useless use", wat een handige hint is dat je vergeten bent een resultaat te gebruiken.

De sigil die je kiest (`$` versus `@`) is eigenlijk een keuze van context, en de contextomzetters `$( )` en `@( )` laten je deze waar nodig overschrijven.

{% include nav.html %}
