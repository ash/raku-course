---
title: Viktorīna — Vienības apjoma definīcijas izmantošana
---

{% include menu.html %}

## 1

Izvēlieties vienu no deklaratoriem, lai programma būtu pareiza.

{:.quiz-select}
unit | (: my, multi, unit :) `sub MAIN(Str $name);`
. | `say "Sveiki, $name!";`

## 2

Norādiet, vai programma ir pareiza.

```raku
unit sub MAIN(Str $name) {
    say "Sveiki, $name!";
}
```

{:.quiz-select}
valid | Šī programma ir&nbsp; (: valid, invalid :) | Neskatoties uz `unit` klātbūtni, jūs joprojām varat pievienot iekavas, bet tas ir lieki.

## 3

Vai šī programma ir pareiza?

```raku
unit multi sub MAIN() {
    say 'Sveiki, visi!';
}

unit multi sub MAIN($name) {
    say "Sveiki, $name!";
}
```

{:.quiz-select}
invalid | Šī programma ir&nbsp; (: valid, invalid :) | Kļūda: `Nevar izmantot 'unit' ar atsevišķiem multi kandidātiem.`

{% include quiz.html %}

{% include nav.html %}