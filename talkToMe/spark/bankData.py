# from pywebhdfs.webhdfs import PyWebHdfsClient
import os;
def getData():
	result = []
	# hdfs = PyWebHdfsClient(host='54.244.100.147', port='50070', user_name='bluedata')
	module_dir = os.path.dirname(__file__)
	file_path = os.path.join(module_dir, "BankData.txt");
	my_file = open(file_path, 'r');

	# result_file = hdfs.read_file(my_file)
	result_file = my_file.read();
	rows = result_file.splitlines()
	# print(rows[1]);
	column_list = ["Num","Acct","Acct1","Type","Date","Number","Name","Memo","Split","Debit","Credit"];
	print len(column_list);
	for data in rows:
		row_data = data.split(",")
		# print(row_data)
		row_dict = {}
		count=0
		while (count<len(column_list)):
			row_dict[column_list[count]] = row_data[count]
			count += 1
		result.append(row_dict);
	print(result)
	return(result)