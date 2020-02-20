const s = prompt('');
a = s.split(' '),
l = a.length,
i = 0,
n = "";

for (; i < l; ++i)
{
n += a[i].charAt(0);
}

console.log(n);