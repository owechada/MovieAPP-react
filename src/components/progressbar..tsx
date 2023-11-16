import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progressbar_(props:any) {


  return <ProgressBar  animated={true} now={props.now_} />
}

export default Progressbar_;