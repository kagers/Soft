# Katherine Gershfeld

UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC = UC.lower()
AN = ".?!&#,;:-_*"

def passStrengthB(pword):
    r = [1 if x in UC else 2 if x in N else 0 for x in pword]
    print r
    return True

def passStrengthI(pword):
    return 0
    
passStrengthB("Hhhhhh")
