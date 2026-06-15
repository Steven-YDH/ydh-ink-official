import xlrd
import os

files = [
    "/Users/steven/廣東易鼎鴻資料/供應商報價/水性丝印油墨报价单-202507.xls",
    "/Users/steven/廣東易鼎鴻資料/供應商報價/溶剂型丝印油墨报价单-202511.xls",
    "/Users/steven/廣東易鼎鴻資料/供應商報價/UV丝印油墨报价单-202504.xls"
]

for file_path in files:
    print(f"\n--- Processing: {os.path.basename(file_path)} ---")
    try:
        workbook = xlrd.open_workbook(file_path)
        for sheet in workbook.sheets():
            print(f"Sheet: {sheet.name}")
            # Print first 20 rows to understand structure
            for rx in range(min(20, sheet.nrows)):
                print(sheet.row_values(rx))
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
