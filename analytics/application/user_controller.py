from hire_elastic import ElasticConnect
from hire_mongo import HireMongo
import simplejson as json
from flask import session


class UserController:
    def __init__(self):

        mongoobj = HireMongo()
        self.db = mongoobj.connectMongo('analytics_users')
        self.collection = self.db.users

    def Dologin(self, request):
        data = json.loads(request.data)

        result = self.collection.find_one({"username": data['username'], "password": data['password']})
        if result:
            self.logged_in = True
            self.username = data['username']
            # self.user_details = user_details
            session['logged_in'] = True
            session['username'] = self.username

            return {'status': 'success', 'message': 'successfully logged in', 'result': result}
        else:
            return {'status': 'failed', 'message': 'invalid credentials'}

    def changePass(self, request):
        data = json.loads(request.data)

        result = self.collection.find_one({"username": data['username'], "password": data['old_password']})
        if result:
            # change password with new password

            update_res = self.collection.update(
                {'_id': data['username']},
                {
                    '$set': {
                        "password": data['new_password']
                    }
                }
            )
            import apostle
            import arrow

            date_post = str(arrow.now('Asia/Kolkata').format('DD MMM YYYY hh:mm:ss A'))
            if update_res:
                # Set up Apostle
                apostle.domain_key = "e1ca755b9116d4178f03abc788fd7f3d95e9934c"

                # Minimal delivery
                apostle.deliver("password-changed", {"email": data['email'], 'name': data['name'], 'Dts': date_post})
            else:
                return {'status': 'failed', 'message': 'error while updating password'}
            print 'update_res', update_res

            return {'status': 'success', 'message': 'successfully password changed.'}
        else:
            return {'status': 'failed', 'message': 'invalid credentials'}

    def forgot_password(self, request):
        data = json.loads(request.data)

        result = self.collection.find_one({"username": data['username']})
        if result:

            import password_generator
            import apostle
            import arrow

            stringfile = password_generator.generate(length=16)
            # change password with new password

            update_res = self.collection.update(
                {'_id': data['username']},
                {
                    '$set': {
                        "password": stringfile
                    }
                }
            )

            if update_res:

                date_post = str(arrow.now('Asia/Kolkata').format('DD MMM YYYY hh:mm:ss A'))
                # Set up Apostle
                apostle.domain_key = "e1ca755b9116d4178f03abc788fd7f3d95e9934c"

                apostle.deliver("password-generated",
                                {"email": result['email'], 'name': result['name'], 'Dts': date_post,
                                 'password': stringfile})

                return {'status': 'success', 'message': 'successfully password changed.'}
            else:
                return {'status': 'failed', 'message': 'Error while updating password.'}
        else:
            return {'status': 'failed', 'message': 'invalid credentials'}

    def checkSession(self):
        print 'session.keys()', session.keys()
        if 'logged_in' in session.keys() and 'username' in session.keys():

            self.logged_in = True

        else:
            self.logged_in = False
        return self.logged_in