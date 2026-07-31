---
title: Darbs ar direktorijām
translations_gpt:
---

{% include menu.html %}

Lai strādātu ar pašu failu sistēmu — pārbaudītu, kas eksistē, un veidotu direktorijas —, Raku izmanto _ceļa objektus_. Jebkuru virkni par tādu var pārvērst ar metodi `.IO`, un ceļa objekts tad atbild uz jautājumiem par šo ceļu.

Biežākie jautājumi ir, vai ceļš eksistē un kāda veida lieta tā ir:

```raku
spurt 'greeting.txt', 'hi';

say 'greeting.txt'.IO.e; # True  — does it exist?
say 'greeting.txt'.IO.f; # True  — is it a file?
say 'greeting.txt'.IO.d; # False — is it a directory?
```

`.e` pārbauda esamību, `.f` pārbauda, vai tas ir parasts fails, un `.d` pārbauda, vai tā ir direktorija.

Lai izveidotu jaunu direktoriju, izmantojiet `mkdir`:

```raku
mkdir 'reports';
say 'reports'.IO.d; # True
```

Nākamais temats parāda, kā uzskaitīt to, kas direktorijā ir.

{% include nav.html %}
