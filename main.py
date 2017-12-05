# *** Marcy Held  contribution – SI 539*/

#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import os
import jinja2

JINJA_ENVIRONMENT = jinja2.Environment (loader = jinja2.FileSystemLoader(os.path.dirname(__file__) + "/templates"))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('index.html')
        self.response.out.write(template.render())

class BlogHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('blog.html')
        self.response.out.write(template.render())

class RecipeHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('recipe.html')
        self.response.out.write(template.render())

class ArizonaInfoHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('arizona_recipe.html')
        self.response.out.write(template.render())

class ColoradoInfoHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('colorado_recipe.html')
        self.response.out.write(template.render())

class MichiganInfoHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('michigan_recipe.html')
        self.response.out.write(template.render())

class NewJerseyInfoHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('newjersey_recipe.html')
        self.response.out.write(template.render())

class NewYorkInfoHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('newyork_recipe.html')
        self.response.out.write(template.render())

class PennsylvaniaInfoHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('pennsylvania_recipe.html')
        self.response.out.write(template.render())

class ErrorHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('not_found.html')
        self.response.out.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/index.html', MainHandler),
    ('/blog.html', BlogHandler),
    ('/recipe.html', RecipeHandler),
    ('/arizona_recipe.html', ArizonaInfoHandler),
    ('/colorado_recipe.html', ColoradoInfoHandler),
    ('/michigan_recipe.html', MichiganInfoHandler),
    ('/newjersey_recipe.html', NewJerseyInfoHandler),
    ('/newyork_recipe.html', NewYorkInfoHandler),
    ('/pennsylvania_recipe.html', PennsylvaniaInfoHandler),
    ('/*', ErrorHandler)
], debug=True)
