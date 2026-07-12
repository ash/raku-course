my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
