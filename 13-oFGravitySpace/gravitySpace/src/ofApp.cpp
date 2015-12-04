#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    for (int i = 0; i < 500; i++){
        points.push_back(ofPoint(ofRandomWidth(), ofRandomHeight()));
        speed.push_back(ofRandom(-5, 0));
        angles.push_back(ofRandom(-1,1));
    }

    gravThresh = 1000;

    manualPoint = ofPoint(ofGetWidth()/2, ofGetHeight()/2);
    }

//--------------------------------------------------------------
void ofApp::update(){

    for (int i=0; i < points.size(); i++){
        ofPoint neighborAverage = ofPoint(0,0);
        int neighborCount = 0;

        for (int j = 0; j < points.size(); j++){
            if ( points[i].distance(points[j]) < gravThresh){
                //we know j is a neighbor of i
                neighborAverage += points[j];
                neighborCount++;
            }
        }

        neighborAverage /= neighborCount;

        points[i].interpolate(neighborAverage, 0.005);
    }
/*
    for (int i = 0; i < points.size(); i++){
        if (points[i].distance(manualPoint) < gravThresh){
            points[i].interpolate(manualPoint, 0.1);
        }
    }
*/
    for (int i = 0; i<points.size(); i++){
        points[i].x += cos(angles[i]) * speed[i];
        points[i].y += sin(angles[i]) * speed[i];

    }
}

//--------------------------------------------------------------
void ofApp::draw(){
    ofBackground(0);

        ofSetColor(255);
    for (int i = 0; i < 500; i++){
        ofCircle(points[i], 2);

        //ofSetColor(255,0,0,5);
       // ofCircle(points[i], gravThresh);
    }
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){
    manualPoint = ofPoint(x, y);
}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){

}
