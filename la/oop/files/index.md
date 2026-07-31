---
title: Cum plicis laborare
translations_gpt:
---

{% include menu.html %}

Simplicissimus modus cum archivo laborandi est illud totum simul legere vel scribere.

Procedura `spurt` chordam in archivum scribit, archivum creans (vel contenta eius substituens si iam exsistit):

```raku
spurt 'greeting.txt', "Hello, file!\n";
```

Procedura `slurp` totum contentum archivi retro in chordam legit:

```raku
my $text = slurp 'greeting.txt';
print $text; # Hello, file!
```

Simul `spurt` et `slurp` tibi permittunt data servare et iterum onerare duabus brevibus vocationibus. (`print` hic loco `say` adhibetur, quia textus iam nova linea desinit.)

Hae operationes totius archivi optimae sunt cum archivum satis parvum est ut commode in memoria teneatur. Pro maioribus archivis, vel cum archivum linea post lineam tractare vis, [tractabulo archivi](/la/oop/file-handles) uteris, quod in fine huius sectionis tractatur. Argumentum sequens ostendit quomodo archivo addas loco eius quod illud substituas.

{% include nav.html %}
