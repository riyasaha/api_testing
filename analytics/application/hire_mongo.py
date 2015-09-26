import pymongo


class HireMongo:
    def __init__(self):
        print "__pymongo init__"
        self.client = pymongo.MongoClient()

    def connectMongo(self, DB):
        self.db = self.client[DB]
        print "__mongo connect__"
        return self.db

