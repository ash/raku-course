---
title: Ansae plicarum
translations_gpt:
---

{% include menu.html %}

Totum archivum simul legere vel scribere commodum est, sed interdum vis per archivum una linea eundem, vel archivum apertum servare dum in illud iterum atque iterum scribis. Ad hoc _tractabulo archivi_ uteris.

Simplicissimus modus archivum linea post lineam legendi tractabulo expresso ne eget quidem: methodus `lines` in obiecto semitae lineas unam post alteram dat, ad anulum `for` paratas:

```raku
spurt 'words.txt', "one\ntwo\nthree\n";

for 'words.txt'.IO.lines -> $line {
    say $line.uc;
}
```

Unaquaeque `$line` est una linea, sine nova linea sequente. Programma imprimit:

```
ONE
TWO
THREE
```

Ut in archivum per tractabulum scribas, illud per `open` cum vexillo `:w` (scribendi) aperi, methodis `say` vel `print` tractabuli utere, et illud per `close` claude cum peractum est:

```raku
my $fh = open 'out.txt', :w;
$fh.say('first line');
$fh.say('second line');
$fh.close;
```

Tractabulum claudere curat ut omnia quae scripsisti in discum exhauriantur. Linea post lineam legere, ut supra, est modus solitus archiva tractandi quae nimis magna sunt ut simul in memoriam sorbeantur.

{% include nav.html %}
