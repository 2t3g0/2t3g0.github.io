from flask import Flask, render_template, request, redirect, url_for
from googleapiclient.discovery import build
import os

app = Flask(__name__)
address = 'https://port-0-flask-lye4q12qce605d4f.sel5.cloudtype.app/'
# YouTube API 설정
API_KEY = 'AIzaSyBe_1c33bbj5XtAxOt5zJDdORrhMsxcVCg'  # Google Cloud에서 생성한 API 키를 여기에 넣습니다.
youtube = build('youtube', 'v3', developerKey=API_KEY)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        video_url = request.form['video_url']
        video_id = video_url.split('v=')[-1]  # 영상 URL에서 video ID 추출
        return redirect(url_for('comments', video_id=video_id))
    return render_template(f'{address}index.html')

@app.route(f'{address}comments/<string:video_id>')
def comments(video_id):
    comments = []
    response = youtube.commentThreads().list(
        part='snippet',
        videoId=video_id,
        textFormat='plainText'
    ).execute()

    while response:
    
        for item in response['items']:
            # print(item['snippet']['topLevelComment']['snippet']['textDisplay'])
            comment = item['snippet']['topLevelComment']['snippet']['textDisplay']
            comments.append(comment)
        if 'nextPageToken' in response:
            response = youtube.commentThreads().list(
                part='snippet',
                videoId=video_id,
                pageToken=response['nextPageToken'],
                textFormat='plainText'
            ).execute()
        else:
            break
    # print(comments)
    return render_template(f'{address}comments.html', comments=comments)


app.run(debug=True)
