# -*- coding: utf-8 -*-
from mods import GEN

print('What is your name?(日本語も書けます)')
Name = str(input())
print('What is your "Role"?')
Role = str(input())

GEN(ID=Name, Name=Name, Role=Role)