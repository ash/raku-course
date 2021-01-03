multi sub f($x) {say "$x is not the answer"}
multi sub f(42) {say 'This is the answer'}
f(10); 
f(42);