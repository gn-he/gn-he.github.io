from flask import Flask, redirect, url_for, request, render_template, session, escape,  Response
from datetime import timedelta
import os

app = Flask(__name__,static_folder='static',static_url_path='/static')

@app.route('/homepage/en/',methods=['POST','GET'])
def homepage_en():
	return render_template('index_en.html')

@app.route('/homepage/zh/',methods=['POST','GET'])
def homepage_zh():
	return render_template('index_zh.html')

@app.route('/activity/en/',methods=['POST','GET'])
def activity_en():
	return render_template('activity_en.html')

@app.route('/activity/zh/',methods=['POST','GET'])
def activity_zh():
	return render_template('activity_zh.html')

@app.route('/group/en/',methods=['POST','GET'])
def group_en():
	return render_template('group_en.html')

@app.route('/group/zh/',methods=['POST','GET'])
def group_zh():
	return render_template('group_zh.html')

@app.route('/news/en/',methods=['POST','GET'])
def news_en():
	return render_template('news_en.html')

@app.route('/news/zh/',methods=['POST','GET'])
def news_zh():
	return render_template('news_zh.html')

@app.route('/project/en/',methods=['POST','GET'])
def project_en():
	return render_template('project_en.html')

@app.route('/project/zh/',methods=['POST','GET'])
def project_zh():
	return render_template('project_zh.html')

@app.route('/publication/en/',methods=['POST','GET'])
def publication_en():
	return render_template('publication_en.html')

@app.route('/publication/zh/',methods=['POST','GET'])
def publication_zh():
	return render_template('publication_zh.html')

@app.route('/research/en/',methods=['POST','GET'])
def research_en():
	return render_template('research_en.html')

@app.route('/research/zh/',methods=['POST','GET'])
def research_zh():
	return render_template('research_zh.html')

@app.route('/research/1/en/',methods=['POST','GET'])
def research1_en():
	return render_template('research_en.html')

@app.route('/research/1/zh/',methods=['POST','GET'])
def research1_zh():
	return render_template('research_zh.html')

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8000, ssl_context='adhoc')
