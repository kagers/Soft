import math

def pt(n):
    ret = []
    for a in range(1,n):
        for b in range(a,n):
            for c in range(b,n):
                if a*a+b*b == c*c:
                    ret.append([a,b,c])
    return ret

print pt(20)

def pt2(n):
    return [(a,b,c)
            for a in range(1,n)
            for b in range(a,n)
            for c in range(b,n)
            if a*a+b*b == c*c]

print pt2(20)

'''
1. pivot
2. two lists depending on the pivot
3. sort smaller lists and combine them
'''


