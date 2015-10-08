#pragma once

#include "ofMain.h"

//when using an add-on you have to include the header file over here.
#include "ofxOpenCv.h"

class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();

		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y );
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);
    
    //note at the top of this code, that when we use an add-on, we have to add the header file to the code manually, even after adding it using project generator.
    
    //Also, this add-on requires you put the haarcascade_frontalface_default.xml file in the bin/data folder of your OF sketch. This file can be downloaded from here: https://github.com/Itseez/opencv/blob/master/data/haarcascades/haarcascade_frontalface_default.xml
    
    //start by declaring a video grabber, to use the image from your camera
    ofVideoGrabber vidGrabber;
    
    //declare a haar finder, the method we'll use for face tracking
    ofxCvHaarFinder finder;
		
};
