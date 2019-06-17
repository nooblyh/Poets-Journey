import json
for i in range(1,28):
    file = open('./coords/LiBaiCoords/coord'+str(i)+'.json', mode='r', encoding='utf-8')
    data = json.load(file)
    
    for item in data:
        if len(item["results"][0]["name"])>2:
            item["results"][0]["name"] = item["results"][0]["name"][:-1]
    tofile = open('./coords/LiBaiCoords/coord'+str(i)+'.json', mode='w+', encoding='utf-8')
    json.dump(data, tofile, ensure_ascii=False)
    tofile.close()
