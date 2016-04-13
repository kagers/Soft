'''
dynamic optimization

solving a complex problem by solving subproblems and storing the result

memoization

technique of storing solutions to subproblems to avoid recomputation

'''

def fib(n):
    if n == 0:
        return 0
    c = [0,1]
    for x in range(1,n):
        c.append(c[-2]+c[-1])
    print c
    return c[-1]

print fib(0)
print
print fib(5)
print
print fib(50)
print

def memoize(f):
    memo = {}
    def inner(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return inner

def fibb(n):
    if n==0:
        return 0
    if n==1:
        return 1
    else:
        return fibb(n-1)+fibb(n-2)

fibb = memoize(fibb)

print fibb(5)
