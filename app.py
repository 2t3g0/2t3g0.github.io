from flask import Flask, render_template, request, redirect, url_for, Response
from googleapiclient.discovery import build
import csv
import io

app = Flask(__name__)

# YouTube API 설정
API_KEY = 'AIzaSyBe_1c33bbj5XtAxOt5zJDdORrhMsxcVCg'  # Google Cloud에서 생성한 API 키를 여기에 넣습니다.
youtube = build('youtube', 'v3', developerKey=API_KEY)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        video_url = request.form['video_url']
        video_id = video_url.split('v=')[-1]  # 영상 URL에서 video ID 추출
        return redirect(url_for('comments', video_id=video_id))
    return render_template('index.html')

@app.route('/comments/<string:video_id>')
def comments(video_id):
    count = 0
    comments = []
    response = youtube.commentThreads().list(
        part='snippet',
        videoId=video_id,
        textFormat='plainText'
    ).execute()

    while response and count < 20:
        for item in response['items']:
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
        count=count+1
    return render_template('comments.html', comments=comments)

@app.route('/download', methods=['POST'])
def download():
    video_id = request.form['video_id']
    comments_str = request.form['comments']
    comments = comments_str.split('|')

    # Create a CSV file in memory
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(['Comment'])
    for comment in comments:
        writer.writerow([comment])

    bom = '\ufeff'
    csv_content = bom + output.getvalue()
    
    # Generate a response with the CSV file
    response = Response(csv_content, mimetype='text/csv')
    response.headers['Content-Disposition'] = f'attachment; filename=comments_{video_id}.csv'
    return response


if __name__ == '__main__':
    app.run(debug=True)
