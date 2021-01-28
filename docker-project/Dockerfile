FROM python:3.8-buster
RUN apt update
RUN apt install ffmpeg libsm6 libxext6 -y
RUN pip install flask imageai tensorflow werkzeug opencv-python
RUN mkdir /app
RUN mkdir /app/uploads
RUN mkdir /app/outputs
COPY app.py /app/app.py
COPY model.h5 /app/model.h5
COPY detection_config.json /app/detection_config.json
WORKDIR /app

ENTRYPOINT [ "python" ]
CMD [ "app.py" ]
