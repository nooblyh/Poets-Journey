import json
for i in range(1,28):
    file = open('./coords/WangWeiCoords/coord'+str(i)+'.json', mode='r')
    data = json.load(file)
    
    for item in data:
        if len(item["results"][0]["name"])>2:
            item["results"][0]["name"] = item["results"][0]["name"][:-1]
    tofile = open('./coords/WangWeiCoords/coord'+str(i)+'.json', mode='w+', encoding='utf-8-sig')
    json.dump(data, tofile, ensure_ascii=False)
    tofile.close()
