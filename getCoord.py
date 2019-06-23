#coding=utf-8
import requests
import json
import time
import os
import sys
if not os.path.exists('./coords/'+sys.argv[1]+'Coords'):
    os.makedirs('./coords/'+sys.argv[1]+'Coords')
file = open('./locations/'+sys.argv[1]+'.txt', mode='r', encoding='UTF-8-sig')
citys = file.readlines()
i = 0
ii = 1
for line in citys:
    
    if i%3!=0 and (not line[0]=="\n"):
        line = line.strip()
        line = line.split(' → ')
        print(line)
        list = []
        #爬取坐标
        for city in line:
            print(city)
            newurl = 'http://api.map.baidu.com/place/v2/search?query='+city+'&region=Asian&output=json&ak=VEbNXPaYgMqt19eieq6hWKf4jqwZIuUs'
            print(newurl)
            req = requests.post(newurl)
            time.sleep(1)
            req.encoding = 'utf-8'
            list.append(json.loads(req.text))
            print(json.loads(req.text))
        with open('./coords/'+sys.argv[1]+'Coords/coord'+str(ii)+'.json','w+') as coord:
                json.dump(list, coord, ensure_ascii=False)
        file = open('./coords/'+sys.argv[1]+'Coords/coord'+str(ii)+'.json', mode='r')
        data = json.load(file)
        #改成古名
        for item in data:
            if len(item["results"][0]["name"])>2:
                item["results"][0]["name"] = item["results"][0]["name"][:-1]
        tofile = open('./coords/'+sys.argv[1]+'Coords/coord'+str(ii)+'.json', mode='w+', encoding='utf-8-sig')
        json.dump(data, tofile, ensure_ascii=False)
        tofile.close()
        ii+=1
    i += 1

#合并路径
list=[]
for i in range(1,ii-1):
    file = open('./coords/'+sys.argv[1]+'Coords/coord'+str(i)+'.json', mode='r',encoding='UTF-8-sig')
    list+=json.load(file)
print(list)

with open('./coords/'+sys.argv[1]+'Coords/coord.json','w+',encoding='UTF-8-sig') as coord:
        json.dump(list, coord, ensure_ascii=False)

#提取年龄段
stages=[]
file = open('./locations/'+sys.argv[1]+'.txt', mode='r',encoding='UTF-8-sig')
lines = file.readlines()
i = 0
for line in lines:
    line.strip()
    if i % 3 == 0:
        line = line[:-1]
        stages.append(line)
    i+=1
tofile = open('./stages/'+sys.argv[1]+'Stage.txt', mode='w',encoding='UTF-8-sig')
tofile.write(str(stages))
tofile.close()

#新建html文件
src = open("./maps/LiBai.html", "r",encoding="UTF-8-sig")
dst = open("./maps/"+sys.argv[1]+".html", "w",encoding="UTF-8-sig")

dst.write(src.read())

src.close()
dst.close()

src = open("./maps/LiBai.segment.html", "r",encoding="UTF-8-sig")
dst = open("./maps/"+sys.argv[1]+".segment.html", "w",encoding="UTF-8-sig")

dst.write(src.read())

src.close()
dst.close()