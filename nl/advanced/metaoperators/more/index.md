---
title: Cross, hyper en genegeerd
translations_gpt: Cross-, hyper- en genegeerde meta-operatoren
---

{% include menu.html %}

Naast reductie en zip heeft Raku nog verschillende andere meta-operatoren. Drie ervan zijn hier het vermelden waard.

## Cross — `X`

De cross-meta-operator `X` koppelt **elk** element van de ene lijst aan **elk** element van de andere — het cartesisch product:

```raku
say <a b> X <1 2>; # ((a 1) (a 2) (b 1) (b 2))
```

Net als zip kan hij een operator omhullen om op elk paar te werken. `X~` voegt elk paar samen tot een tekenreeks, en `X*` vermenigvuldigt:

```raku
say <a b> X~ <1 2>;         # (a1 a2 b1 b2)
say (1, 2, 3) X* (10, 100); # (10 100 20 200 30 300)
```

Waar zip twee lijsten gelijktijdig doorloopt, combineert cross ze op elke mogelijke manier.

## Hyper — `>>...<<`

Een hyper-meta-operator past een operator toe op **elk element** van een lijst. De operator wordt omhuld door de puntige `>>...<<` (of de ASCII-variant `>>...<<`). Met twee lijsten werkt hij element voor element, net als zip; met een enkele waarde aan een kant wordt die waarde over de hele lijst uitgestrekt:

```raku
say (1, 2, 3) »+» (10, 20, 30); # (11 22 33)
say (1, 2, 3) »*» 2;            # (2 4 6)
```

De twee pijlen hoeven niet dezelfde kant op te wijzen, en hun richting bepaalt wat er gebeurt wanneer de lijsten in lengte verschillen — een punt die **naar** een lijst wijst, laat die lijst herhaald worden om bij de andere te passen. In de ASCII-notatie `<<`/`>>` zijn de vier combinaties:

* `>>op<<` — geen van beide kanten wordt uitgestrekt; de lijsten moeten al dezelfde lengte hebben, anders is het een fout;
* `>>op>>` — de **rechter** lijst wordt herhaald om bij de linker te passen;
* `<<op<<` — de **linker** lijst wordt herhaald om bij de rechter te passen;
* `<<op>>` — de **kortere** lijst wordt herhaald om bij de langere te passen.

```raku
say (1, 2, 3, 4) <<+>> (10, 20); # (11 22 13 24)  — 10, 20 herhaalt tot 10, 20, 10, 20
```

Er is ook een unaire vorm, die een methode op elk element aanroept. `>>.uc` maakt elke tekenreeks in hoofdletters:

```raku
say <raku perl>>>.uc; # (RAKU PERL)
```

Hyper-operaties geven ook aan dat het werk *parallel uitgevoerd mag worden* — je zult de verwante `.hyper`-methode later tegenkomen, in [het gedeelte over gelijktijdig programmeren](/nl/paradigms/hyper-race).

## Genegeerd — `!`

Het plaatsen van `!` voor een vergelijkingsoperator negeert het resultaat. Het bekende `!=` (niet gelijk) is precies deze meta-operator toegepast op `==`, en hetzelfde werkt voor andere Booleaanse operatoren zoals `eq` en `%%`:

```raku
say 3 != 4;      # True
say 'a' !eq 'b'; # True  — niet gelijk als tekenreeksen
say 5 !%% 2;     # True  — 5 is niet deelbaar door 2
```

Kort gezegd is `$a !op $b` gewoon een nettere manier om `!($a op $b)` te schrijven.

Dit is opzettelijk zo. In tegenstelling tot een bewust minimalistische taal zoals Esperanto, die streeft naar een regelmatige manier om elk ding uit te drukken, geeft Raku je graag meerdere mogelijkheden — dus het genegeerde `!eq` bestaat naast de speciale `ne`-operator, en beide betekenen precies hetzelfde:

```raku
say 'a' ne 'b'; # True — dezelfde test als 'a' !eq 'b'
```

{% include nav.html %}
