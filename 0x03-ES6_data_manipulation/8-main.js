import cleanSet from './8-clean_set';

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
console.log(cleanSet(new Set(['xoxobonjovi', 'bonaparte', 'bonappetit', 'banana']), 'xo'));
