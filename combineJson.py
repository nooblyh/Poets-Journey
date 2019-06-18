import json
list=[]
for i in range(1,9):
    file = open('./coords/WangWeiCoords/coord'+str(i)+'.json', mode='r',encoding='UTF-8-sig')
    list+=json.load(file)
print(list)

with open('./coords/WangWeiCoords/coord.json','w+',encoding='UTF-8-sig') as coord:
        json.dump(list, coord, ensure_ascii=False)