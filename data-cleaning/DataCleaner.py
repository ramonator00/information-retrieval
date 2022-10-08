from datetime import datetime
import numpy as np
import pandas as pd
import sqlite3

# This script is used to harmonize the data into a sqlite database
# -----------------------------------------------------------------

sqlite_database = '../corpus/data.db'

en_recipes = '../corpus/recipes_en.csv'
de_recipes = '../corpus/recipes_de.json'

year = datetime.today().year

con = sqlite3.connect(sqlite_database)
cur = con.cursor()

de_df = pd.read_json(de_recipes)
new_de_df = pd.DataFrame()

new_de_df['ID'] = de_df.index + 500000
new_de_df['TITLE'] = de_df['Name']
new_de_df['INGREDIENTS'] = str(de_df['Ingredients'])
new_de_df['INSTRUCTIONS'] = de_df['Instructions']
new_de_df['R_DATE'] = np.random.choice(pd.date_range('1980-01-01', '2000-01-01'), len(new_de_df))
new_de_df['LANGUAGE'] = 0  # German

# write new df to sql
new_de_df.head(5000).to_sql(name='RECIPES', if_exists='replace', index=False, con=con)

en_df = pd.read_csv(en_recipes, nrows=5000)
new_en_df = pd.DataFrame()

new_en_df['ID'] = en_df.index + 10000
new_en_df['TITLE'] = en_df['Title']
new_en_df['INGREDIENTS'] = en_df['Ingredients']
new_en_df['INSTRUCTIONS'] = en_df['Instructions']
new_en_df['R_DATE'] = np.random.choice(pd.date_range('1980-01-01', '2000-01-01'), len(new_en_df))
new_en_df['LANGUAGE'] = 1  # English

# write new df to sql
new_en_df.to_sql(name='RECIPES', if_exists='append', index=False, con=con)

con.close()
