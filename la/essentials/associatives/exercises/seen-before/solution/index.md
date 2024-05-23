---
title: 'Solutio: Visum ante?'
---

{% include menu.html %}

Hoc munus est classicum exemplum utendi tabula ad res notandas. Ante circulum, tabula `%seen` creatur. Intra circulum, ingressum `$word` servit ut clavis tabulae.

## Codex

Hic est solutio:

```raku
my %seen;
loop {
    my $word = prompt 'Verbum: ';
    if %seen{$word} {
        say %seen{$word} == 1 ?? 'Visum!' !! say "Visum %seen{$word} vicibus!";
    }
    %seen{$word}++;
}
```

🦋 Inveni programma in archivo [seen-before.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/seen-before.raku).

## Output

```console
$ raku exercises/associatives/seen-before.raku
Verbum: Ego
Verbum: numquam
Verbum: vidi
Verbum: a
Verbum: vidi
Visum!
Verbum: quod
Verbum: vidi
Visum 2 vicibus!
Verum
Verbum: ut
Verbum: quod
Visum!
Verbum: vidi
Visum 3 vicibus!
Verum
Verbum: serravit
Verbum: ^C
```

## Commentarium

Constructum `%seen{$word}++` non solum incrementat valorem sed etiam creat si nondum exstiterit. Processus creationis vocatur _autovivificatio_. Nota quod non fit cum tantum _legis_ valorem sicut in condicione: `si %seen{$word}`.

{% include nav.html %}