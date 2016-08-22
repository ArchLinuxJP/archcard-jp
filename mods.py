# -*- coding: utf-8 -*-
from base64 import b64encode
import xml.etree.ElementTree as ET

'''This file contain some modules.
    The modules are imported by other scripts.'''


def GEN(ID='sample', Name='sample', Role='User'):
    '''This is the card GENerator'''
    with open('./output/' + ID + '.svg', mode='w', encoding='utf-8') as card:
        with open('template.svg', mode='r', encoding='utf-8') as template:
            card.write(template.read())

    ET.register_namespace('xlink', 'http://www.w3.org/1999/xlink')
    ET.register_namespace('', 'http://www.w3.org/2000/svg')
    tree = ET.parse('./output/' + ID + '.svg')
    root = tree.getroot()
    root.find('{http://www.w3.org/2000/svg}g[@id="Edit"]/{http://www.w3.org/2000/svg}text[@id="Name"]/{http://www.w3.org/2000/svg}tspan').text = Name
    root.find('{http://www.w3.org/2000/svg}g[@id="Edit"]/{http://www.w3.org/2000/svg}text[@id="Role"]/{http://www.w3.org/2000/svg}tspan').text = Role
    with open('./pics/' + ID + '.png', mode='r+b') as Pic:
        root.find('{http://www.w3.org/2000/svg}g[@id="Edit"]/{http://www.w3.org/2000/svg}image[@id="Pic"]').set(
            '{http://www.w3.org/1999/xlink}href',
            'data:image/png;base64,' + b64encode(Pic.read()).decode('utf-8'))
    tree.write('./output/' + ID + '.svg', 'utf-8', True)


pass
