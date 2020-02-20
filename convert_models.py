#!/usr/bin/env python
import os
#path = input("Directory path to process renaming: ")
path = ''
models = []
for foldername in os.listdir(path):
    foldername = os.path.splitext(foldername)[0]
    modelname = foldername.split(' - ')[1]
    models.append(modelname)
models.sort()
print(models)
