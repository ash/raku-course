---
title: Una promise tutta vostra 🆕
translations_gpt:
---

{% include menu.html %}

Ogni promise vista finora veniva da `start`. Ma puoi anche crearne una direttamente con
`Promise.new` — una promise non ancora conclusa — e concluderla tu quando il risultato
(o la notizia) è pronto. `.keep` la soddisfa con un valore:

```raku
my $p = Promise.new;   # a fresh, unsettled promise

$p.keep(42);           # fulfil it with a value
say await $p;          # 42
```

`.break` è il caso di fallimento. Attendere una promise rotta rilancia l'errore, proprio
come fa per un blocco `start` che è [morto](/it/paradigms/await/awaiting-promises) — e
se nulla la intercetta, quell'eccezione ferma il programma:

```raku
my $p = Promise.new;
$p.break('disk full');

say await $p;             # dies here with 'disk full'
say 'never reached';      # this line does not run
```

Per proseguire, intercetta il fallimento con `try`, esattamente come faresti attorno a
qualunque codice che potrebbe morire:

```raku
my $p = Promise.new;
$p.break('disk full');

my $result = try await $p;
say $result // "the job failed: $!"; # the job failed: disk full
```

Se l'esito è già noto, due scorciatoie creano una promise che nasce già conclusa:
`Promise.kept($value)` e `Promise.broken($error)`.

```raku
say await Promise.kept(7); # 7
```

Perché costruire una promise a mano? Perché non ogni risultato viene da un blocco `start`.
Un evento che scatta più tardi, un messaggio che arriva, una callback da un'altra libreria
— `Promise.new` ti permette di trasformare ognuna di queste cose in una promise che il
resto del programma può attendere e combinare come qualunque altra.

{% include nav.html %}
