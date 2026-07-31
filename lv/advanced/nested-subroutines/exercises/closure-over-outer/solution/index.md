---
title: 'Risinājums: Noslēgt ārējo'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub greet($name) {
    sub message {
        "Hello, $name!";
    }

    say message;
}

greet('Anna');
```

🦋 Atrodiet programmu failā [closure-over-outer.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/closure-over-outer.raku).

## Izvade

```
Hello, Anna!
```

## Komentāri

1. `message` neņem nevienu argumentu, tomēr tā var izmantot `$name`. Ligzdota apakšprogramma noslēdzas pār tās apakšprogrammas leksiskajiem mainīgajiem, kas to satur, tāpēc ārējais `$name` ir redzams.

1. Kad izpildās `greet('Anna')`, `$name` ir `'Anna'`, tāpēc `message` atgriež `Hello, Anna!`. Tieši šī apņemošā redzamības apgabala kopīgošana padara ligzdotus palīgus par kaut ko vairāk nekā tikai paslēptām funkcijām.

{% include nav.html %}
