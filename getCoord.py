#coding=utf-8
import requests
import json
import time

file = open('city.txt', mode='r', encoding='UTF-8-sig')
citys = file.readlines()
i = 0
for line in citys:
    i+=1
    line = line.strip()
    line = line.split(' → ')
    print(line)
    list = []
#list = ['江油','平武','剑阁','三台','江油']
    for city in line:
        print(city)
        newurl = 'http://api.map.baidu.com/place/v2/search?query='+city+'&region=Asian&output=json&ak=VEbNXPaYgMqt19eieq6hWKf4jqwZIuUs'
        print(newurl)
        req = requests.post(newurl)
        time.sleep(10)
        req.encoding = 'utf-8'
        list.append(json.loads(req.text))
    with open('/coords/coord'+str(i)+'.txt','w+') as coord:
            json.dump(list,coord)