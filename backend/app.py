from flask import Flask, render_template, Response
import cv2
from yoga import detectPose, classifyPose  # Import your pose detection and classification functions
import mediapipe as mp

app = Flask(__name__)

# Initialize mediapipe pose class and drawing utils
mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils

# Initialize pose detection model
pose = mp_pose.Pose(static_image_mode=False, min_detection_confidence=0.5, model_complexity=1)

def generate_frames():
    video = cv2.VideoCapture(0)  # Open webcam
    while True:
        success, frame = video.read()
        if not success:
            break
        else:
            frame, landmarks = detectPose(frame, pose)  # Call your pose detection function
            if landmarks:
                # Call classifyPose function with both landmarks and frame
                label = classifyPose(landmarks, frame)  
                # Draw label on frame
                cv2.putText(frame, label, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                    b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    app.run(debug=True)
