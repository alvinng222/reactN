Differences between Class Components and  Functional  Components in React
---

https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/

### syntax:
``` js
// Class Component
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

// Functional Component
const Car=()=> {
	return <h2>Hi, I am also a Car!</h2>;
```
### Example
#### Class Component
``` js

import React from "react";
 
class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1});
   }
 
    render(){
        return (
            <div style={{margin:'50px'}}>
               <h1>Welcome to Geeks for Geeks </h1>
               <h3>Counter App using Class Componenet : </h3>
               <h2> {this.state.count}</h2> 
               <button onClick={this.increase}> Add</button>
            </div>
        )
    }
}
 
export default ClassComponent;
```
#### Functional Components
``` js
import React ,{useState} from "react";
 
const FunctionalComponent=()=>{
    const[count , setCount]=useState(0);
 
    const increase=()=>{
        setCount(count+1);
    }
 
    return (
        <div style={{margin:'50px'}}>
            <h1>Welcome to Geeks for Geeks </h1>
            <h3>Counter App using Functional Component : </h3>
            <h2>{count}</h2>
            <button onClick={increase}>Add</button>
        </div>
    )
}
 
export default FunctionalComponent;
```

---

### mobile Functional Component, revised from above
``` js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function EventScreen() {
  const [count, setCount] = useState(0);

  const increase = () => {
  setCount (count +1);
  };
  return (
    <View style={{ margin: 50 }}>
      <Text style={styles.h1}>Welcome to Geeks for Geeks</Text>
      <Text style={styles.h3}>Counter App using Functional Component : </Text> 
      <Text style={styles.h2}> {count} </Text>
      <Button title="Add" onPress={increase} />
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
fontSize: 20,
  },
  h2: {
fontSize: 18,
  },
  h3: {
fontSize: 14
  }
})
```


### similar
``` js
const EventScreen=()=> {
...
export default EventScreen;  
```
same as
``` js
function EventScreen() {
...
export default EventScreen;  
```
same as
``` js
export default function EventScreen() {
...
```
---
### this.props, this.state

findJobs > HoimeScreen.js
``` js
import AllJobs from './AllJobs';
...
                  <AllJobs
                    jobs={jobs}
                    editFilter={this.editFilter}
                    jobType={this.state.jobType}
                    changeJobType={this.changeJobType}
                    getJobs={this.loadData}
                    loading={this.state.loading}
                    WSGJobs={this.state.WSGJobs}
                    navigation={this.props.navigation}
                    zoomed={this.state.zoomed}
                    userID={this.state.userID}
                    advertisements={this.state.advertisements}
                  />
                </View>
```
findJobs > AllJobs.js
``` js
class AllJobs extends Component {
  constructor(props) {
    super(props);
    this._button = null;
    this._buttonFrame = null;
    this.position = { start: null, end: null };
    this.video = {};
    this.state = {
      jobs: [],
      loading: true,
      initialLoading: true,
      zoomed: false,
      jobType: 'all',
      select: false,
      WSGJobs: [],
      advertisements: [],
      videos: [],
    };
  }
```
``` js
  render() {
    const { jobs } = this.props;
    ...
        {this.props.loading == false && jobs.length == 0 && (
	...
        {jobs.length != 0 && (
	...
              data={jobs}
```
``` js
            <Button
              onPress={() => {
                this.props.editFilter();
              }}
```
``` js
        {this.props.jobType != 'all' && (
	...
                    {this.props.jobType == 'FT' ? 'Full Time' : 'Part Time'}
		    ...
                      jobType={this.props.jobType}
```
``` js
            <TouchableOpacity
              onPress={() => {
                this.props.changeJobType('all');
              }}
```
``` js
              onRefresh={() => {
                // console.log('pull to refresh !');
                this.props.getJobs();
              }}
```
``` js
        {this.props.loading && (
	...
        {this.props.loading == false && jobs.length == 0 && (
	...
              refreshing={this.props.loading}
```
``` js
                  {this.props.WSGJobs?.length > 0 && index == 15 && (
```
``` js
                    navigation={this.props.navigation}
		    ...
                  <TopBanner navigation={this.props.navigation} />
		  ...
```
``` js
                  {this.props.zoomed == false && (
		  ...
                  {this.props.zoomed == true && (
```
``` js
                    userID={this.props.userID}
```
``` js
                  {this.state.advertisements.length > 0 && index % 20 == 0 && index > 9 && (
		  ...
                      ads={this.state.advertisements}
```
---
