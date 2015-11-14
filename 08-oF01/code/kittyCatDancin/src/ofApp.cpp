#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    newFrom.set(ofGetWidth()/2, ofGetHeight()/2);
}

//--------------------------------------------------------------
void ofApp::update(){
    from.set(mouseX, mouseY);
    currentPercent = ofMap(   sin(ofGetElapsedTimef()),    -1, 1, 0, 1);

    circleCenter = from.getInterpolated(to, currentPercent);
    newCircleCenter = newFrom.getInterpolated(newTo, currentPercent);
    newTo.set(circleCenter);
}

//--------------------------------------------------------------
void ofApp::draw(){


    //ofCircle(circleCenter, 100 * currentPercent);
   // ofLine(from, to);
    //ofCircle(newCircleCenter, 10);
   // ofLine(newFrom, newTo);
   /*
    float temp = 255 * ofNoise(ofGetElapsedTimef());
    cout << temp << endl;
    ofBackground(temp);
    */
    for (int i = 0; i < ofGetWidth(); i+=2){
        for (int j = 0; j < ofGetHeight(); j+=2){
            ofColor temp = 255 * ofNoise(i,j, 1000 *(ofGetElapsedTimef()/mouseX));
            //cout << ofGetFrameRate() << endl;
            ofSetColor(temp);
            ofRect(i, j, 2, 2);
        }
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

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
    to.set(x,y);
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
