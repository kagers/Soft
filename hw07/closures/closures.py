# Katherine Gershfeld

def repeat(phrase):
    return lambda r: phrase * r

r1 = repeat('hello')
r2 = repeat('goodbye')
