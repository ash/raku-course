---
title: Accipere post finem
translations_gpt:
---

{% include menu.html %}

Quid fit si `.receive` saepius vocas quam valores sunt qui capiantur? Responsum pendet ex eo utrum canalis **clausus** sit.

Sume exemplum productoris et consumptoris ex superioribus: negotium in fundo tres valores mittit canalemque claudit. Quid si consumptor quartum poscit?

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}

say $c.receive; # 1
say $c.receive; # 2
say $c.receive; # 3
say $c.receive; # unum receive nimium
```

## In canali clauso, receive superfluum iacit

Claudere valores iam in ordine positos non abicit — tres vocationes `.receive` supra adhuc `1`, `2` et `3` reddunt. Sed simul atque canalis clausus **et** vacuus est, nulli valores umquam amplius advenire possunt, itaque potius quam te in aeternum exspectare sinat, Raku exceptionem excitat:

```
Cannot receive a message on a closed channel
```

Exceptio est `X::Channel::ReceiveOnClosed`. Hoc utile est potius quam molestum: consumptori sine ambiguitate dicit eum canalem exhausisse. In usu numquam in eam incurris si per `.list` consumis (quod ad clausuram munde consistit) vel si tam diu tantum iteras quam valores manent — utrumque in pagina priore ostensum.

## In canali aperto, receive superfluum moratur

Si productor canalem numquam claudit, `.receive` scire non potest utrum alius valor adhuc veniat, itaque simpliciter **exspectat**:

```raku
my $c = Channel.new;
$c.send(1);
say $c.receive; # 1
say $c.receive; # hic exspectat — canalis apertus sed vacuus est
```

Programma ad secundum `.receive` pendet, quia valor *fortasse* adhuc mittetur. Hoc est periculum de quo pagina prior monuit: oblivisce `.close`, et normale «exspecta valorem sequentem» fit exspectatio quae numquam finit.

Itaque duo exitus contrarii sunt, modo utili. Canalis **clausus** cito deficit cum vacuus est — exceptionem accipis quam videre et capere potes. Canalis **apertus** exspectare pergit — quod prorsus rectum est dum productor adhuc laborat, sed pendulum tacitum si productor silenter sine claudendo cessavit. Canalem claudere est exacte id quod illud pendulum tacitum in signum clarum vertit fluxum finitum esse.

{% include nav.html %}
