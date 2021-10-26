# self made package in order to run website
from website import create_app

app = create_app()

# only running the __main__ file will run the server
if __name__ == '__main__':
    app.run(debug=True)
