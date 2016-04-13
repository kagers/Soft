# Katherine Gershfeld

import time


def timer(fn):
    def inner(*args):
        start = time.time()
        ret = fn(*args)
        end = time.time()
        return "time:  " + str(end-start)
    return inner

def name(fn):
    def inner(*args):
        return fn.func_name + str(args) + ": " + str(fn(*args))
    return inner

