---
title: Introspectio receptaculorum
translations_gpt: Introspectio receptaculorum
---

{% include menu.html %}

_Introspectio_ significat valorem vel receptaculum de se ipso interrogare — de typo suo, de receptaculo subiacente, et de mechanismo post id. Iam uno instrumento introspectionis usus es, `.^name`, ad typum valoris imprimendum.

Raku parvam familiam talium instrumentorum offert, litteris maiusculis scriptorum: `WHAT`, `VAR`, `WHO`, et `HOW`. Interdum _pseudo-methodi_ vocantur, quia compilator eis significationem specialem dat potius quam eas ut methodos ordinarias tractet. Haec sectio unumquodque eorum inspicit.

Ut recordatio, hic est `.^name` referens quomodo typus receptaculi sine typo definito mutatur dum diversos valores in eo condis:

```raku
my $value;
say $value.^name; # Any

$value = 42;
say $value.^name; # Int

$value = 'forty-two';
say $value.^name; # Str
```

Receptaculum incipit ut `Any` et deinde typum cuiuscumque valoris quem nunc continet refert.

{% include nav.html %}
