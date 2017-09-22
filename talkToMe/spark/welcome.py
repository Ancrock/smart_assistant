# try:
# 	from pyspark import SparkContext
# 	from pyspark import SparkConf
# 	print ("Pyspark sucess")
# except ImportError as e: print ("Error importing Spark Module", e)

# try:
# 	conf = SparkConf()
# 	conf.setMaster("spark://54.244.100.147:8080")
# 	conf.setAppName("bdaas")
# 	sc= SparkContext(conf=conf)
# 	print("Connection succeded with Master", conf)
# except:
# 	print("Unable to connect to a remote server")

# import paramiko
# import socket
# k = paramiko.RSAKey.from_private_key_file("../../Downloads/BD_demotenant.pem")
# client = paramiko.SSHClient()
# client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
# print "connecting"
# client.connect( hostname = "54.244.100.147", username = "bluedata", pkey = k )
# print "connected"
# stdin, stdout, stderr = client.exec_command('hdfs dfs -cat /bdaas/src/zomato/classifier_output/2017-09-1516-41-37.540489.txt/*')
# for line in stdout:
# 	print(line)
# remote_file = 'hdfs:54.244.100.147:8020/bdaas/src/zomato/classifier_output/*/*'
# try:
# except:
# 	print("There is no file on the path ...check how to see hdfs")
# print(stdout.channel.recv_exit_status())
# if(stdout.channel.recv_exit_status() == 0):
# 	print("The reports are generated successfully")
# else:
# 	print('Ooops...Something went wrong in the system. Please contact customer care...')
# client.close();



from pywebhdfs.webhdfs import PyWebHdfsClient
# import pyarrow as pa
# from webhdfs.webhdfs import WebHDFS
hdfs = PyWebHdfsClient(host='54.244.100.147', port='50070', user_name='bluedata')
my_file = 'bdaas/src/zomato/zomato_data.txt'
my_data = '01010220330444050Hello'
print(hdfs.read_file(my_file))
# fs = pa.hdfs.connect('54.244.100.147', 50070, user='bluedata')
# with fs.open('/bdaas/src/zomato/classifier_output/new_dir/hello.txt', 'rb') as f:
# 	print(f.read());

# webhdfs = WebHDFS("54.244.100.147", 50070, 'bluedata')
# webhdfs.copyToLocal("/bdaas/src/zomato/classifier_output/new_dir/hello.txt", "/hithere.txt")

# from pyspark import SparkConf, SparkContext
# conf = SparkConf().setAppName('bluedata').setMaster('spark://54.244.100.147:50070').setSparkHome('/bdaas/')
# sc = SparkContext(conf=conf)
