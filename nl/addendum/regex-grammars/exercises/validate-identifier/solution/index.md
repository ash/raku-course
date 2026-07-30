---
title: 'Oplossing: Valideer identifiers'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
for <count total2 2fast my-var _hidden> -> $name {
    my $ok = $name ~~ / ^ <[A..Za..z_]> <[A..Za..z0..9_]>* $ /;

    say "$name: { $ok ?? 'valid' !! 'invalid' }";
}
```

🦋 Je kunt de broncode vinden in het bestand [validate-identifier.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/validate-identifier.raku).

## Uitvoer

```
count: valid
total2: valid
2fast: invalid
my-var: invalid
_hidden: valid
```

## Opmerkingen

1. De ankers `^` en `$` dwingen het patroon de *hele* string te bestrijken, dus maakt een
enkel afdwalend teken als het koppelteken in `my-var` hem ongeldig.

1. De eerste tekenklasse staat een letter of underscore toe; de tweede, herhaald
met `*`, staat daarnaast cijfers toe — precies de klassieke identifierregel.

1. De tweede klasse kun je ook als `\w` schrijven, de ingebouwde afkorting voor een
woordteken (een letter, een cijfer of een underscore):

    ```raku
    my $ok = $name ~~ / ^ <[A..Za..z_]> \w* $ /;
    ```

    Eén verschil om op te letten: `\w` is in Raku Unicode-bewust, dus een naam als
`café` slaagt ook — wat toevallig overeenkomt met Raku zelf, waar
`my $café = 1;` volkomen geldig is. De uitgeschreven klasse
`<[A..Za..z0..9_]>` houdt de controle strikt ASCII.

1. Er zit echter een addertje onder het gras: in Raku zelf is `my-var` een *geldige* identifier!
Raku staat een koppelteken (of een apostrof, zoals in `isn't`) binnen een naam toe, zolang
er een letter op volgt — en daarom lezen subroutines als `is-prime` zo
natuurlijk. Om *Raku*-identifiers te valideren, sta je zulke groepen achter het klassieke
deel toe:

    ```raku
    for <count total2 2fast my-var _hidden> -> $name {
        my $ok = $name ~~ / ^ <[A..Za..z_]> \w* [ '-' <[A..Za..z]> \w* ]* $ /;

        say "$name: { $ok ?? 'valid' !! 'invalid' }";
    }
    ```

    Elke groep tussen haken `[ '-' <[A..Za..z]> \w* ]` aanvaardt een koppelteken alleen wanneer er een
letter op volgt, dus wordt `my-var` nu als geldig gemeld, terwijl `2fast` — en
strings als `a-` of `a-1` — dat nog steeds niet zijn.

{% include nav.html %}
