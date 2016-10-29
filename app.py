from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/kutya')
def kutya():
    return render_template('kutya.html')


@app.route('/flask', methods=['POST', 'GET'])
def coloring():
    input_str = request.form['string']
    input_int = int(request.form['no'])
    colored = []
    for i in range(len(input_str)):
        if (i + 1) % input_int != 0:
            colored.append(input_str[i])
        else:
            colored.append('<span>' + input_str[i] + '</span>')
    result = ''.join(colored)

    input_str = request.form['string']
    input_int = int(request.form['no'])
    letters = ''
    blocks = []
    for i in range(len(input_str)):
        letters += (input_str[i])
        if (i + 1) % input_int == 0 or i == len(input_str) - 1:
            blocks.append(letters)
            letters = ''
    return render_template('flask.html', chop=blocks, colored=result)


if __name__ == '__main__':
    app.run(debug=True)
