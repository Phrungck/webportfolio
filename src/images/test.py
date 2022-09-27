import cv2
import numpy as np
import os

pth = os.path.join(os.getcwd(), 'src', 'images')

window_titles = ['first', 'second']

# cap = [cv2.VideoCapture(os.path.join(pth, i)) for i in names]
cap = cv2.VideoCapture(os.path.join(pth, 'p44_actual.mp4'))
cap1 = cv2.VideoCapture(os.path.join(pth, 'p44_seg.mp4'))

cap2 = cv2.VideoCapture(os.path.join(pth, 'p45_actual.mp4'))
cap21 = cv2.VideoCapture(os.path.join(pth, 'p45_seg.mp4'))

cap3 = cv2.VideoCapture(os.path.join(pth, 'p46_actual.mp4'))
cap31 = cv2.VideoCapture(os.path.join(pth, 'p46_seg.mp4'))

out = cv2.VideoWriter(os.path.join(pth, "echo.mp4"),
                      cv2.VideoWriter_fourcc(*'mp4v'), 10, (768, 512))

while (cap.isOpened()):

    ret, frame = cap.read()
    ret1, frame1 = cap1.read()

    ret2, frame2 = cap2.read()
    ret21, frame21 = cap21.read()

    ret3, frame3 = cap3.read()
    ret31, frame31 = cap31.read()

    if ret == True:

        try:
            both1 = np.vstack((frame, frame1))
            both2 = np.vstack((frame2, frame21))
            both3 = np.vstack((frame3, frame31))

            print(both1.shape, both2.shape, both3.shape)
            both = np.hstack((both1, both2, both3))

            cv2.imshow('Frame', both)
            out.write(both)

            if cv2.waitKey(100) & 0xFF == ord('q'):
                break

        except:
            break

    else:
        break

cap.release()
out.release()

cv2.waitKey(0)
cv2.destroyAllWindows()
