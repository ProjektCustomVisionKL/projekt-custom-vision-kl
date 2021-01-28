import os
import cv2
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from imageai.Detection.Custom import CustomObjectDetection
app = Flask(__name__)

detector = CustomObjectDetection()
detector.setModelTypeAsYOLOv3()
detector.setModelPath('model.h5')
detector.setJsonPath('detection_config.json')
detector.loadModel()

@app.route('/health', methods=['GET'])
def health():
  return 'OK'


@app.route('/', methods=['POST'])
def analyze_file():
  f = request.files['file']
  filename = 'uploads/' + secure_filename(f.filename)
  output_filename = 'outputs/' + secure_filename(f.filename)
  f.save(filename)
  img = cv2.imread(filename)
  height, width, _ = img.shape

  detections = detector.detectObjectsFromImage(input_image=filename, output_image_path=output_filename)
  os.remove(filename)
  os.remove(output_filename)

  for d in detections:
  	d['box_points'] = { 'left': d['box_points'][0] / width, 'width': (d['box_points'][2] -  d['box_points'][0]) / width, 'top': d['box_points'][1] / height, 'height': (d['box_points'][3] -  d['box_points'][1]) / height }

  response = jsonify(detections)
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response


app.run(debug=True, host='0.0.0.0', port=80)