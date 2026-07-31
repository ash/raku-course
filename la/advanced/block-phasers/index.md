---
title: Phaseres blocorum
translations_gpt:
---

{% include menu.html %}

Praeter phaseres qui totum programma spectant, Raku habet phaseres qui ad vitam singulae copiae vel ansae pertinent.

## Intrare et relinquere copiam

Phaser `ENTER` currit quotiens exsecutio copiam intrat, et phaser `LEAVE` currit quotiens eam relinquit — in quacumque linea scripti sunt:

```raku
say 'before block';
{
    LEAVE say 'leaving';
    ENTER say 'entering';
    say 'inside';
}
say 'after block';
```

Output ostendit quod `ENTER` primus currit et `LEAVE` ultimus, circa corpus copiae:

```
before block
entering
inside
leaving
after block
```

`LEAVE` praecipue utilis est quia currit etiam si copia mature relinquitur, quod eum locum fidum facit ad liberandas res.

Phaser potest plenam copiam `{ }` accipere loco singulae sententiae, et plures eorum constituere potes. Cum copia plus quam unum `LEAVE` habet, ordine inverso accenduntur — ultimus registratus primus currit, ita copia se resolvit sicut cumulus:

```raku
say 'open A';
{
    LEAVE {
        say 'close A';
    }
    say 'open B';
    LEAVE {
        say 'close B';
    }
    say 'work';
}
say 'done';
```

Res `A` prima aperitur et ultima clauditur:

```
open A
open B
work
close B
close A
done
```

Hic ordo ultimo-intrans-primo-exiens est exacte quod vis pro purgatione: quidquid recentissime constitutum est, primum dissolvitur. Phaser `END` pro toto programmate eodem modo se gerit — plures copiae `END` etiam in ordine inverso scripturae currunt.

## Phaseres ansarum

Intra ansas, tres plures phaseres stadia iterationis signant: `FIRST` semel currit ante primam iterationem, `LAST` semel currit post ultimam, et `NEXT` currit in fine cuiusque iterationis:

```raku
for 1..3 {
    FIRST say '-- first';
    LAST  say '-- last';
    NEXT  say "-- next (was $_)";
    say "body $_";
}
```

Ansa producit:

```
-- first
body 1
-- next (was 1)
body 2
-- next (was 2)
body 3
-- next (was 3)
-- last
```

Sicut cum aliis phaseribus, positio `FIRST`, `NEXT`, et `LAST` in fonte non refert — quisque in suo momento currit.

{% include nav.html %}
