# def getPerson(data):
# 	result = {}
# 	if(data["username"] == "ancrock"):
# 		result["Name"] = "Amit"
# 		result["Age"] = 23
# 		result["Gender"] = "Male"
# 		result["Position"] = "Lead Developer"
# 	return result
from pywebhdfs.webhdfs import PyWebHdfsClient
def getData():
	result = []
	hdfs = PyWebHdfsClient(host='54.244.100.147', port='50070', user_name='bluedata')
	my_file = 'bdaas/src/zomato/zomato_data.txt'
	result_file = hdfs.read_file(my_file)
	rows = result_file.splitlines()
	column_list = ["comment_count","foodie_color","likes", "profile_image","profile_url","rating","rating_color","rating_text","rating_time_friendly","restaurant_id","retrieved_time","review_id","review_text","time_stamp","user_foodie_level","user_level_num","user_name","user_zomatohandle","class_name","confidence","score"]
	for data in rows:
		row_data = data.split("|")
		print(row_data)
		row_dict = {}
		count=0
		while (count<len(column_list)):
			row_dict[column_list[count]] = row_data[count]
			count += 1
		result.append(row_dict);
	print(result)
	return(result)