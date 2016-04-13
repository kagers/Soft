# Katherine Gershfeld

def qsort(l):
    if(l==[]):
        return []

    p = l[0]
    lef = [x for x in l if x<p]
    rig = [x for x in l if x>p]
    
    return qsort(lef) + [p]*l.count(p) + qsort(rig)

L = [9,9,8,8,8,7,7,7,7,5,5,5,5,6,6,6,5,5,4]

print L
print qsort(L)
