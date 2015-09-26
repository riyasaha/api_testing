from elasticsearch import Elasticsearch


class ElasticConnect:
    # def __init__(self):
    #     # print "__Elasticsearch init__"
    #     # # self.es = Elasticsearch([{'host': '128.199.192.155', 'port': 9200}])
    #     # self.es = Elasticsearch([{'host': 'localhost', 'port': 9200}])

    def connectelastic(self):
        # self.es.indices.create(ESINDEX, ignore=400)
        # print '__es returned__'
        # return self.es
        # es = Elasticsearch([{'host': 'localhost', 'port': 9200}])
        es = Elasticsearch([{'host': '128.199.192.155', 'port': 9200}])
        print '__es returned__'
        return es

