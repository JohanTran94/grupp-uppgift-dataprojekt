import json
import csv


with open(r'databases\json_mapp\Utbildningsniva_Kommun_Kon_Antalperson.json', encoding='utf-8') as f:
    data = json.load(f)


with open('utbildningsniva.csv', mode='w', newline='', encoding='utf-8') as f_out:
    writer = csv.writer(f_out)
    writer.writerow(['kommunKod', 'utbildningsNiva', 'kon', 'ar', 'antal'])  # header

    for row in data['data']:
        kommunKod, utbildningsNiva, kon, ar = row['key']
        antal = row['values'][0]
        writer.writerow([kommunKod, utbildningsNiva, kon, ar, antal])


with open(r'databases\json_mapp\Kommun_Alder_Kon.json', encoding='utf-8') as f:
    data = json.load(f)


with open('kommun_alder_kon.csv', mode='w', newline='', encoding='utf-8') as f_out:
    writer = csv.writer(f_out)
    writer.writerow(['kommunKod', 'alder', 'kon', 'manad', 'folkmangdePerManad, antal'])
    
    for row in data['data']:
        region, alder, kon, tid = row['key']
        folkmangd = row['values'][0]
        writer.writerow([region, alder, kon, tid, folkmangd])




with open(r'databases\json_mapp\Forkmangde_Per_Kommun.json', encoding='utf-8') as f:
    data = json.load(f)


with open('folkmangde_per_kommun.csv', mode='w', newline='', encoding='utf-8') as f_out:
    writer = csv.writer(f_out)
    writer.writerow(['kommunKod', 'forandringar', 'period', 'kon', 'tid', 'befolkningsstatistik_antal_personer'])
    
    for row in data['data']:
        region, forandringar, period, kon, tid = row['key']
        befolkningsstatistik = row['values'][0]
        writer.writerow([region, forandringar, period, kon, tid, befolkningsstatistik])



