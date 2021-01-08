multi sub f(42) {say 'This is the answer'}
multi sub f($x) {say "$x is not the answer"}

f(42);
f('42');