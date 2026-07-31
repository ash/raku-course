---
title: Izvades pārtveršana
translations_gpt:
---

{% include menu.html %}

Lai nolasītu to, ko ārēja programma izdrukā, nevis ļautu tam aiziet uz ekrānu, palaižot padodiet `:out`. Atgrieztajam `Proc` tad ir turis `.out`, no kura var lasīt:

```raku
my $proc = run 'echo', 'hello', :out;
my $output = $proc.out.slurp(:close);
say $output.chomp; # hello
```

`:out` novirza programmas standarta izvadi `Proc` iekšienē. Turis `.out` darbojas kā failu turi no iepriekšējās sadaļas, un `.slurp` no tā uzreiz nolasa visu. Apstākļvārds `:close` ir ērts saīsinājums: pēc nolasīšanas tas aizver turi jūsu vietā — tā pati sakopšana, ko skaidri veicāt ar `.close` uz faila tura —, tāpēc nekas nepaliek atvērts. Visbeidzot `.chomp` noņem beigu jauno rindu, ko `echo` pievieno.

Tas pats darbojas ar `shell`, kas noder cauruļvada rezultāta noķeršanai:

```raku
my $proc = shell 'echo hello | tr a-z A-Z', :out;
say $proc.out.slurp(:close).chomp; # HELLO
```

Noķert var arī kļūdu plūsmu — ar `:err` un atbilstošo turi `.err`. Padodot gan `:out`, gan `:err`, abas plūsmas paliek nošķirtas, katra savā turī, tāpēc tās var lasīt atsevišķi:

```raku
my $proc = run 'sh', '-c', 'echo out-line; echo err-line >&2', :out, :err;

say 'stdout: ', $proc.out.slurp(:close).chomp; # stdout: out-line
say 'stderr: ', $proc.err.slurp(:close).chomp; # stderr: err-line
```

Šeit čaulas komanda izdrukā vienu rindu standarta izvadē un vienu standarta kļūdu plūsmā (`>&2` uz to novirza). Tā kā prasījām abas plūsmas, `.out` un `.err` tās satur neatkarīgi — programmas parastā izvade nekad nesajaucas ar tās diagnostiku.

Izvades noķeršana ir veids, kā ārēju programmu izmantot par būvbloku: palaidiet to, nolasiet tās rezultātu un turpiniet ar šiem datiem savā programmā.

{% include nav.html %}
