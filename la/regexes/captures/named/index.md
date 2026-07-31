---
title: Capturae nominatae
translations_gpt:
---

{% include menu.html %}

Captura numerati commodi sunt, sed cum exemplar crescit, nomina clariora sunt quam numeri. Ut captui nomen des, scribe `$<nomen>=( … )`:

```raku
if 'Anna:30' ~~ / $<name>=(\w+) ':' $<age>=(\d+) / {
    say $<name>; # ｢Anna｣
    say $<age>;  # ｢30｣
}
```

Partes captae nunc nomine per `$<name>` et `$<age>` loco `$0` et `$1` attinguntur. Idem est ac scribere `$/<name>`, quia nomina intra variabilem congruentiae `$/` habitant.

Captura nominati exemplar fere ut descriptionem datorum legendum reddunt:

```raku
if 'x=5' ~~ / $<key>=(\w+) '=' $<value>=(\w+) / {
    say "key is $<key>, value is $<value>"; # key is x, value is 5
}
```

Sicut captura positionales, unaquaeque captura nominata obiectum congruentiae est, itaque `$<age>.Str` textum simplicem dat et `$<age>.from` locum eius.

{% include nav.html %}
