import React from 'react'
import './Codepage.css'


function Codepage() {
  return (
    <div className='code-training'>
        <h1>Coding Training Price Category</h1>
        <hr/>
      <div className="code">        
        <div className="basic-computer">        
            <h2>Basic Computer Training</h2>
            <p>&#8358;80000</p>
        </div>
        <div className="html-training">
        <h2>HTML Training</h2>
        <p>&#8358;100000</p>
        </div>
        <div className="javascript">
        <h2>Javascript Training</h2>
        <p>&#8358;120000</p>
        </div>
        <div className="css">
        <h2>CSS Training</h2>
        <p>&#8358;100000</p>
        </div>
      </div>
      
    </div>
  )
}

export default Codepage;
