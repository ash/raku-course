---
title: 'Kapti esceptojn per `try`'
translations_gpt:
---

{% include menu.html %}

Kiam io misiras en Raku-programo — mankanta dosiero, eksplicita `die` — _escepto_ estas ĵetata. Defaŭlte, netraktita escepto haltigas la programon. La bloko `try` permesas al vi ruli kodon, kiu povus malsukcesi, sen kolapsi.

Vi envolvas la riskan kodon en blokon `try`. Se escepto estas ĵetata ene de ĝi, la bloko haltas tie, sed la programo daŭras:

```raku
my $result = try {
    die 'Boom!';
};

say "Still works";
```

La `die` estas kaptita de la `try`, do la programo ne kolapsas — ĝi pluiras rekte al la sekva instrukcio kaj presas:

```
Still works
```

Kiam la bloko malsukcesas tiel, ĝi taksiĝas al nedifinita valoro, do `$result` estas nedifinita:

```raku
say $result.defined; # False
```

La escepto, kiu estis kaptita, estas konservita en la speciala variablo `$!`. Vi povas legi ĝian mesaĝon el tie:

```raku
say $!.message; # Boom!
```

Do `try` transformas fatalan eraron en ion, kion via programo povas inspekti kaj al kio ĝi povas reagi. Se la bloko ruliĝas sen ia ajn escepto, `$result` tenas ĝian valoron, kaj `$!` estas nedifinita.

{% include nav.html %}
