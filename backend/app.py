from flask import Flask
from routes.users import user_routes
from routes.what_if import what_if_routes
from routes.transactions import transactions_routes
from routes.goals import goals_routes

app = Flask(__name__)

# Register blueprints (routes)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(what_if_routes, url_prefix='/api')
app.register_blueprint(transactions_routes, url_prefix='/api/transactions')
app.register_blueprint(goals_routes, url_prefix='/api/goals')

if __name__ == "__main__":
    app.run(debug=True)
