---
title: 'Risinājums: Pārbaudiet identifikatorus'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
for <count total2 2fast my-var _hidden> -> $name {
    my $ok = $name ~~ / ^ <[A..Za..z_]> <[A..Za..z0..9_]>* $ /;

    say "$name: { $ok ?? 'valid' !! 'invalid' }";
}
```

🦋 Atrodiet programmu failā [validate-identifier.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/validate-identifier.raku).

## Izvade

```
count: valid
total2: valid
2fast: invalid
my-var: invalid
_hidden: valid
```

## Komentāri

1. Enkuri `^` un `$` liek paraugam nosegt *visu* virkni, tāpēc viena vienīga
svešzīme, piemēram, defise vārdā `my-var`, padara to nederīgu.

1. Pirmā rakstzīmju klase pieļauj burtu vai pasvītrojumu; otrā, atkārtota ar `*`,
papildus pieļauj ciparus, — tieši klasiskais identifikatora likums.

1. Otro klasi var uzrakstīt arī kā `\w`, iebūvēto saīsinājumu vārda rakstzīmei
(burtam, ciparam vai pasvītrojumam):

    ```raku
    my $ok = $name ~~ / ^ <[A..Za..z_]> \w* $ /;
    ```

    Viena atšķirība, ko vērts zināt: `\w` Raku valodā prot Unikodu, tāpēc tādu
vārdu kā `café` arī izlaiž cauri — un tas gadās sakrist ar pašu Raku, kur
`my $café = 1;` ir pilnīgi likumīgi. Izrakstītā klase
`<[A..Za..z0..9_]>` pārbaudi patur stingri ASCII robežās.

1. Ir gan viens āķis: pašā Raku `my-var` ir *derīgs* identifikators!
Raku vārda iekšienē pieļauj defisi (vai apostrofu, kā vārdā `isn't`), ja vien tai
seko burts, — un tieši tāpēc apakšprogrammas, piemēram, `is-prime`, lasās tik
dabiski. Lai pārbaudītu *Raku* identifikatorus, pieļaujiet šādas grupas pēc
klasiskās daļas:

    ```raku
    for <count total2 2fast my-var _hidden> -> $name {
        my $ok = $name ~~ / ^ <[A..Za..z_]> \w* [ '-' <[A..Za..z]> \w* ]* $ /;

        say "$name: { $ok ?? 'valid' !! 'invalid' }";
    }
    ```

    Katra iekavotā grupa `[ '-' <[A..Za..z]> \w* ]` defisi pieņem tikai tad, kad
tai seko burts, tāpēc `my-var` tagad tiek paziņots kā derīgs, bet `2fast` — un
tādas virknes kā `a-` vai `a-1` — joprojām nē.

{% include nav.html %}
