# Katherine Gershfeld

UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC = UC.lower()
AN = ".?!&#,;:-_*"
NUM = "1234567890"

def passValid(pword):
    r = [1 if x in UC else 2 if x in NUM else 3 if x in LC else 0 for x in pword]
    return 1 in r and 2 in r and 3 in r

def passStrength(pword):
    ret = 0
    r = [1 if x in UC else 2 if x in NUM else 3 if x in AN else 0 for x in pword]
    if len(pword):
        ret += 1
    if passValid(pword):
        ret += 3
    ret += r.count(1)+0.0/len(r)*2
    ret += r.count(2)+0.0/len(r)+r.count(3)+0.0/len(r)*4
    return int(ret)
    
print passValid("Hhhhhh")
print passValid("C0ll3g3's")

print passStrength("Hhhhhh")
print passStrength("C01l3g3'ss")
