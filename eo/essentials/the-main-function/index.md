---
title: La ĉefa funkcio
---

{% include menu.html %}

Raku-programo ne bezonas iun ajn ŝablonan riton, do vi povas tuj komenci skribi utilajn instrukciojn. Ĉi tiu parto de la programo, kiu troviĝas sur la nivelo super ajna [koda bloko](/eo/essentials/code-blocks) (inkluzive de [funkcioj](/eo/essentials/functions), ekzemple), nomiĝas _ĉeflinio_.

Se la programo enhavas funkcion kun la speciala nomo `MAIN`, Raku ekzekutas ĉi tiun funkcion post kiam ĝi kompilas ĉion kaj post kiam la ĉeflinia kodo estis ekzekutita.

```raku
say '1. Ĉeflinia kodo';

sub MAIN {
    say '3. MAIN vokita';
}

say '2. Ankaŭ ĉeflinio';
```

Ĉi tiu programo unue ekzekutas la supra-nivelajn `say`-ojn, kaj poste vokas `MAIN`:

```console
$ raku t.raku
1. Ĉeflinia kodo
2. Ankaŭ ĉeflinio
3. MAIN vokita
```

Kompreneble, eblas ankaŭ havi programon kun la `MAIN` funkcio kaj neniu alia ĉeflinia kodo.

{% include nav.html %}