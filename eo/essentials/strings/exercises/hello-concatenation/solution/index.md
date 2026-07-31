---
title: 'Solvo: Saluton, Concatenado!'
---

{% include menu.html %}

## Kodo

Jen ebla solvo al ĉi tiu problemo:

```raku
my $name = prompt 'Kio estas via nomo? ';
say 'Saluton, ' ~ $name ~ '!';
```

🦋 Vi povas trovi la fontkodon en la dosiero [hello-concatenation.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/hello-concatenation.raku).

## Eligo

Rulu la programon, kaj ĝi eniros reĝimon kiam ĝi atendas vian enigon. Post kiam vi tajpas la nomon kaj premas Enen, la programo daŭrigas kaj presas la saluton:

```console
$ raku exercises/strings/hello-concatenation.raku
Kio estas via nomo? Johano
Saluton, Johano!
```

## Komentoj

Komparu la programon kun [la antaŭa varianto](../../../../scalar-variables/exercises/greet-a-person/solution) kie ni pasis tri ĉenojn al la rutino `say`:

```raku
say 'Saluton, ', $name, '!';
```

Ĉi-foje, la tri partoj estas unue kunigitaj kaj poste pasitaj al `say` kiel unu sola ĉeno.

{% include nav.html %}