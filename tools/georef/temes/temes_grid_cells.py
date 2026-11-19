"""Sheet name -> (column, row) of the First Military Survey of the Banat of Temesvár (1769-1772, 208 sheets + 5 1/2),
read from the overview sheet Temes-attekinto (numbers written in the top-left corner of each cell, row by row)."""
ROWS = {  # row: (first sheet number, first column, number of sheets)
    0: (1, 2, 2), 1: (3, 1, 3), 2: (6, 1, 5), 3: (11, 1, 7), 4: (18, 1, 8), 5: (26, 1, 10), 6: (36, 0, 12), 7: (48, 0, 13),
    8: (61, 0, 13), 9: (74, 1, 12), 10: (86, 1, 12), 11: (98, 0, 13), 12: (111, 0, 13), 13: (124, 0, 13), 14: (137, 0, 13),
    15: (150, 0, 13), 16: (163, 1, 12), 17: (175, 1, 11), 18: (186, 5, 7), 19: (193, 6, 5), 20: (198, 6, 5), 21: (203, 7, 4),
    22: (207, 7, 2)}
CELL = {}
for r, (n0, c0, k) in ROWS.items():
    for i in range(k):
        CELL[f'{n0 + i:03d}'] = (c0 + i, r)
CELL['005-1_2'] = (4, 1)          # the extra half sheet "5 1/2" east of sheet 5
assert len(CELL) == 209 and CELL['208'] == (8, 22) and CELL['060'] == (12, 7) and CELL['185'] == (11, 17)
