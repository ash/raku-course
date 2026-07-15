---
title: Using online services to run Raku
---

{% include menu.html %}

Online services do not require many explanations. Paste the text of the program into an online editor and press the `Run` button. You will see program’s output in a separate area. If there are some errors, you will see them too. 

Such services can often send data to your program’s input stream STDIN from a separate textarea. Sometimes, the output is also shown split into `STDOUT` and `STDERR`.

## The built-in Raku Playground

This course comes with its own <a href="/playground" target="_blank" rel="noopener noreferrer"><strong>Raku Playground</strong></a> — Raku running right in your browser, with nothing to install and nothing to sign up for. Type a program, press run, and see the output straight away. It is the quickest way to try the course’s examples and your own experiments as you read.

Keep in mind that the playground has some limitations, by its very nature. It runs a young, still-developing compiler entirely inside your browser, with no server behind it. Because of that, a few language features may not be supported yet, and anything that reaches out to the outside world — reading or writing files, network access, running external programs, or installing modules — will not work there. For those, use a locally installed compiler or one of the services below.

## External links

Here is a list of some other services that support Raku:

* [glot.io](https://glot.io/new/raku)
* [TIO](https://tio.run/#perl6)
* [Repl.it](https://repl.it/new/raku) (requires logging-in first)
* [RakuPlay](https://rakudist.raku.org/play/) (uses a queue)

You may also check [the discussion on Reddit](https://www.reddit.com/r/rakulang/comments/kj63dq/glotio_now_supports_raku/ggxow6n/) for more links and comments about different online services.

{% include nav.html %}
