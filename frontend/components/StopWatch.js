import React, {Fragment, useState} from "react";
import { store } from '../components/store';
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      secondsElapsed:0
    }
    
    this.activityState = "activity"
    this.text = "work out time, lets do this"
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.cluster= 0;
  }

  getSeconds() {
    return ('0' + this.state.secondsElapsed  % 60).slice(-2)
  }
  getMinutes() {
    return Math.floor(this.state.secondsElapsed / 60)
  }
  times = x => f => {
    if (x > 0) {
      f()
      times (x - 1) (f)
    }
  }
  start() {
    const that = this;
    this.incrementer = setInterval(function() {
      if(that.getSeconds() >= 40){
        that.activityState = "notActive"
        that.text = "rest for 20 seconds"

      }
      if(that.getSeconds() < 40){
        that.activityState = "activity"   
        that.text = "work out time, lets do this"
   
      }
      if(that.getMinutes() === 9){
        that.cluster = that.state.secondsElapsed + 1
      }
      if(that.getMinutes() === 18){
        that.cluster = that.state.secondsElapsed + 1
      }
      if(that.getMinutes() === 27){
        that.cluster = that.state.secondsElapsed + 1
      }
      if(that.getMinutes() === 36){
        that.cluster = that.state.secondsElapsed + 1
      }

        that.setState({secondsElapsed:(that.state.secondsElapsed + 1)})
        
      },1000)
  }

  stop() {
    clearInterval(this.incrementer)
  }

render(){ 
  return (
    <Fragment>
      
      <section className="timer container">
        <h1>cluster: <span>{this.cluster}</span></h1>
        <h1>workout timer</h1>
        <div>
          <h1 className={this.activityState + ' big'}>{this.getMinutes()}:{this.getSeconds()}</h1>
        </div>
        
        <h2>{this.text}</h2>
        <button onClick={this.start}>Start Workout</button>
        <button onClick={this.stop}>Stop Workout</button>
      </section>
      
      <style jsx>
                        {`
                        h1{
                          font-family: 'EB Garamond', serif;
                        }
                        .big{ font-size:100px;}
                        body{
                          font-family: 'EB Garamond', serif;
                        }
                        .timer.container {
                          text-align: center;
                        }
                        .notActive{
                          color: red;
                        }
                        .activity{
                          color: green;
                        }
                        `}
                      </style>
    </Fragment>
    
  )
}
 
}
export default Stopwatch;