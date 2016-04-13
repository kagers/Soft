# Katherine Gershfeld

def union(l1,l2):
    return [x for x in l1 if not x in l2] + l2

def intersection(l1,l2):
    return [x for x in l1 if x in l2]

def setDif(l1,l2):
    return [x for x in l1 if not x in l2]

def symDif(l1,l2):
    return setDif(union(l1,l2),intersection(l1,l2))

def cartProd(l1,l2):
    return [(x,y) for x in l1 for y in l2]

print union([1,2,3],[2,3,4])
print "[1, 2, 3, 4]"
print

print intersection([1,2,3],[2,3,4])
print "[2, 3]"
print

print setDif([1,2,3],[2,3,4])
print "[1]"
print setDif([2,3,4],[1,2,3])
print "[4]"
print

print symDif([1,2,3],[2,3,4])
print "[1, 4]"
print

print cartProd([1,2],['red','white'])
print "[(1, 'red'), (1, 'white'), (2, 'red'), (2, 'white')]"
print
