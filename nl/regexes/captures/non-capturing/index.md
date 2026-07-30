---
title: Niet-capturende groepen
translations_gpt:
---

{% include menu.html %}

Ronde haken `( )` doen twee dingen tegelijk: ze _groeperen_ een deel van het patroon en ze _capturen_ het in `$0`, `$1`, enzovoort. Soms wil je alleen het eerste — meerdere atomen als één eenheid behandelen — zonder er een capturenummer aan te besteden. Gebruik daarvoor vierkante haken `[ ]`, die groeperen **zonder** te capturen.

Groeperen doet ertoe zodra je er een kwantor aan hangt. Een kwantor bindt alleen aan het atoom er direct voor, dus het onderstaande patroon herhaalt slechts de laatste letter:

```raku
say 'abccc' ~~ / abc ** 3 /; # ｢abccc｣
```

Alleen de `c` werd drie keer herhaald. Wikkel het hele stuk in `[ ]` om het geheel te herhalen:

```raku
say 'abcabcabc' ~~ / [ abc ] ** 3 /; # ｢abcabcabc｣
```

Nu is `[ abc ]` één eenheid, en `** 3` hoort bij de groep.

Omdat `[ ]` geen captureplek inneemt, blijven de nummers gereserveerd voor de delen waar het je werkelijk om gaat. Vergelijk een gewone match van sleutel en waarde:

```raku
if 'foo=42' ~~ / (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

Stel dat de sleutel voorafgegaan kan worden door een woord dat je wilt overslaan. Groepeer dat voorvoegsel met `[ ]` zodat het de nummering niet verstoort:

```raku
if 'the foo=42' ~~ / [ \w+ \s ]? (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

De optionele `[ \w+ \s ]?` matchte `the ` maar eiste geen capture op, dus is `$0` nog steeds de sleutel en `$1` nog steeds de waarde. Had je dat voorvoegsel met `( )` geschreven, dan zou alles opgeschoven zijn: het voorvoegsel zou `$0` worden, de sleutel `$1` en de waarde `$2`.

De regel is kort: gebruik `( )` wanneer je de gematchte tekst wilt bewaren, en `[ ]` wanneer je alleen wilt groeperen. Beide soorten accepteren kwantoren en alternatieven, en daarom gebruikte de eerdere alternatie `[ cat | dog ] house` vierkante haken — die had de groepering nodig maar geen extra capture.

{% include nav.html %}
