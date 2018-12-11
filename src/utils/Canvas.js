import React, { Component } from 'react'
import paper from 'paper'
import { Point } from 'paper'
import { PointText } from 'paper'
import { Path } from 'paper'
import './style.scss'

class Canvas extends Component {
  state = {
    path: null,
    textItem: null,
    onMouseDown: false
  }

  resize = () => {
    let myCanvas = document.getElementById('myCanvas');
    let pageHeight = document.getElementById('root').scrollHeight
        myCanvas.style.height = pageHeight+'px'
    console.log(pageHeight)
  }

  onMouseDown = (e) => {
    e.persist()
    // If we produced a path before, deselect it:
    if (this.state.path) {
      // console.log(this.state.path.selected)
      let path = this.state.path
    	path.selected = false;
      this.setState({
        path: path
      })
    }
    let myPoint = new Point(e.clientX, e.clientY);

    // Create a new path and set its stroke color to black:
    let path = new Path({
    	segments: [myPoint],
    	strokeColor: 'black',
  		// Select the path, so we can see its segment points:
  		fullySelected: true
  	});
    // console.log(e)


    this.setState({
      path :path,
      onMouseDown: true
    })
  }

  // While the user drags the mouse, points are added to the path
  // at the position of the mouse:
  onMouseDrag = (e) => {
    e.persist()
    console.log(e)
    let path = this.state.path
    let textItem = this.state.textItem

    let myPoint = new Point(e.clientX, e.clientY);
    path.add(myPoint);

    // Update the content of the text item to show how many
  	// segments it has:
  	textItem.content = 'Segment count: ' + path.segments.length;

    this.setState({
      path: path,
      textItem: textItem
    })
    console.log(this.state.path)
  }

  // When the mouse is released, we simplify the path:
  onMouseUp = (e) => {
    let path = this.state.path
    let textItem = this.state.textItem

  	var segmentCount = path.segments.length;

    // When the mouse is released, simplify it:
  	path.simplify(10);

  	// Select the path, so we can see its segments:

  	path.fullySelected = true;

    var newSegmentCount = path.segments.length;
  	var difference = segmentCount - newSegmentCount;
  	var percentage = 100 - Math.round(newSegmentCount / segmentCount * 100);
    textItem.content = difference + ' of the ' + segmentCount + ' segments were removed. Saving ' + percentage + '%';

    this.setState({
      path: path,
      textItem: textItem,
      onMouseDown: false
    })
    console.log(this.state.path)
  }

  render() {
    window.onresize = this.resize
    return (
      <canvas id="myCanvas" data-paper-resize = 'true'
        onMouseDown = { this.onMouseDown }
        onMouseMove = { this.state.onMouseDown ? this.onMouseDrag : console.log(this.state.onMouseDown) }
        onMouseUp = { this.onMouseUp }
      ></canvas>
    )

  }

  componentDidMount() {
    let myCanvas = document.getElementById('myCanvas');
    paper.setup(myCanvas);

    let pageHeight = document.getElementById('root').scrollHeight
    myCanvas.style.height = pageHeight+'px'

    // var width = paper.view.size.width;
    // var height = paper.view.size.height;
    // var circle = new paper.Shape.Circle({
    //     center: [width / 2, height / 2],
    //     fillColor: 'grey',
    //     radius: 10
    // });

    // render
    // paper.view.draw();

    let textItem = new PointText({
    	content: 'Click and drag to draw a line.',
    	point: new Point(20, 30),
    	fillColor: 'black',
    });

    this.setState({
      textItem: textItem
    })

    console.log(paper)
  }
}

export default Canvas
