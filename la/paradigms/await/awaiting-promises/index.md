---
title: Promissum exspectare
translations_gpt:
---

{% include menu.html %}

`await` promissum accipit, illud perficere exspectat, et effectum eius reddit:

```raku
my $p = start { 7 * 6 };
say await $p; # 42
```

Programma ad `await` tantum quantum opus est consistit, deinde cum valore quem promissum produxit pergit.

Datis pluribus promissis, `await` **omnia** exspectat et effectus eorum eodem ordine ac promissa in indice reddit:

```raku
my @jobs = (start { 5 }), (start { 10 }), (start { 15 });
say await @jobs;     # (5 10 15)
say [+] await @jobs; # 30
```

Negotia simul currunt, sed `await @jobs` non redit donec unumquodque perfectum sit. Unusquisque effectus deinde eodem loco sedet quo promissum eius in `@jobs` — quodcumque negotium forte primum finivit.

Si promissum exspectatum **fractum** erat — blocus eius exceptionem iecit — `await` illam exceptionem in loco ipsius `await` rursus iacit. Hoc significat errores in opere fundi ibi emergere ubi illud exspectas, ita ut eos per usitata `try` / `CATCH` ex parte de exceptionibus tractare possis:

```raku
my $p = start { die 'no such file' };

my $result = try await $p;
say $result // "the job failed: $!";
```

Hoc imprimit:

```
the job failed: no such file
```

`die` in filo fundi accidit, sed exceptio cum promisso iter facit et ad `await` emergit. `try` illam ibi capit, `$result` indefinitum et errorem in `$!` relinquens — itaque defectus in opere simultaneo prorsus ut quaelibet alia exceptio tractatur. Exspectare igitur non solum de valore accipiendo est; est momentum quo opus simultaneum ad fluxum principalem redit, cum effectibus et erroribus pariter.

{% include nav.html %}
